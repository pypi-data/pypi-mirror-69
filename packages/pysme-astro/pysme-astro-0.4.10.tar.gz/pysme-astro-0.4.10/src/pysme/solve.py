"""
Calculates the spectrum, based on a set of stellar parameters
And also determines the best fit parameters
"""

import logging
import warnings
from os.path import splitext
import contextlib
import sys
import builtins

import numpy as np
from tqdm import tqdm
from scipy.constants import speed_of_light
from scipy.optimize import OptimizeWarning, least_squares
from scipy.optimize._numdiff import approx_derivative

from . import __file_ending__, broadening
from .abund import Abund
from .atmosphere.atmosphere import AtmosphereError
from .atmosphere.savfile import SavFile
from .atmosphere.krzfile import KrzFile
from .atmosphere.interpolation import interp_atmo_grid
from .config import Config
from .continuum_and_radial_velocity import match_rv_continuum
from .integrate_flux import integrate_flux
from .large_file_storage import setup_lfs
from .iliffe_vector import Iliffe_vector
from .nlte import update_nlte_coefficients
from .sme_synth import SME_DLL
from .uncertainties import uncertainties
from .util import safe_interpolation, print_to_log
from .synthesize import Synthesizer

logger = logging.getLogger(__name__)

clight = speed_of_light * 1e-3  # km/s
warnings.filterwarnings("ignore", category=OptimizeWarning)


class SME_Solver:
    def __init__(self, filename=None):
        self.dll = SME_DLL()
        self.config, self.lfs_atmo, self.lfs_nlte = setup_lfs()
        self.synthesizer = Synthesizer(
            config=self.config,
            lfs_atmo=self.lfs_atmo,
            lfs_nlte=self.lfs_nlte,
            dll=self.dll,
        )

        # Various parameters to keep track of during solving
        self.filename = filename
        self.iteration = 0
        self.parameter_names = []
        self.update_linelist = False
        self._latest_residual = None

        # For displaying the progressbars
        self.fig = None
        self.progressbar = None
        self.progressbar_jacobian = None

    @property
    def nparam(self):
        return len(self.parameter_names)

    def __residuals(
        self, param, sme, spec, uncs, mask, segments="all", isJacobian=False, **_
    ):
        """
        Calculates the synthetic spectrum with sme_func and
        returns the residuals between observation and synthetic spectrum

        residual = (obs - synth) / uncs

        Parameters
        ----------
        param : list(float) of size (n,)
            parameter values to use for synthetic spectrum, order is the same as names
        names : list(str) of size (n,)
            names of the parameters to set, as defined by SME_Struct
        sme : SME_Struct
            sme structure holding all relevant information for the synthetic spectrum generation
        spec : array(float) of size (m,)
            observed spectrum
        uncs : array(float) of size (m,)
            uncertainties of the observed spectrum
        mask : array(bool) of size (k,)
            mask to apply to the synthetic spectrum to select the same points as spec
            The size of the synthetic spectrum is given by sme.wave
            then mask must have the same size, with m True values
        isJacobian : bool, optional
            Flag to use when within the calculation of the Jacobian (default: False)
        fname : str, optional
            filename of the intermediary product (default: "sme.npy")
        fig : Figure, optional
            plotting interface, fig.add(x, y, title) will be called each non jacobian iteration

        Returns
        -------
        resid : array(float) of size (m,)
            residuals of the synthetic spectrum
        """
        update = not isJacobian
        save = not isJacobian
        reuse_wavelength_grid = isJacobian
        radial_velocity_mode = "robust" if not isJacobian else "fast"

        # change parameters
        for name, value in zip(self.parameter_names, param):
            sme[name] = value
        # run spectral synthesis
        try:
            result = self.synthesizer.synthesize_spectrum(
                sme,
                updateStructure=update,
                reuse_wavelength_grid=reuse_wavelength_grid,
                segments=segments,
                passLineList=False,
                updateLineList=self.update_linelist,
                radial_velocity_mode=radial_velocity_mode,
            )
        except AtmosphereError as ae:
            # Something went wrong (left the grid? Don't go there)
            # If returned value is not finite, the fit algorithm will not go there
            logger.debug(ae)
            return np.inf

        # Also save intermediary results, because we can
        if save and self.filename is not None:
            if self.filename.endswith(__file_ending__):
                fname = self.filename[:-4]
            else:
                fname = self.filename
            fname = f"{fname}_tmp{__file_ending__}"
            sme.save(fname)

        segments = Synthesizer.check_segments(sme, segments)

        # Get the correct results for the comparison
        synth = sme.synth if update else result[1]
        synth = synth[segments]
        synth = synth[mask] if mask is not None else synth

        # TODO: update based on lineranges
        uncs_linelist = 0

        resid = (synth - spec) / (uncs + uncs_linelist)
        resid = resid.ravel()
        resid = np.nan_to_num(resid, copy=False)

        # Update progress bars
        if isJacobian:
            self.progressbar_jacobian.update(1)
        else:
            self.progressbar.total += 1
            self.progressbar.update(1)

        if not isJacobian:
            # Save result for jacobian
            self._latest_residual = resid
            self.iteration += 1
            logger.debug("%s", {n: v for n, v in zip(self.parameter_names, param)})
            # Plot
            # if fig is not None:
            #     wave = sme2.wave
            #     try:
            #         fig.add(wave, synth, f"Iteration {self.iteration}")
            #     except AttributeError:
            #         warnings.warn(f"Figure {repr(fig)} doesn't have a 'add' method")
            #     except Exception as e:
            #         warnings.warn(f"Error during Plotting: {e.message}")

        return resid

    def __jacobian(self, param, *args, bounds=None, segments="all", **_):
        """
        Approximate the jacobian numerically
        The calculation is the same as "3-point"
        but we can tell residuals that we are within a jacobian
        """
        self.progressbar_jacobian.reset()
        g = approx_derivative(
            self.__residuals,
            param,
            method="3-point",
            # This feels pretty bad, passing the latest synthetic spectrum
            # by reference as a parameter of the residuals function object
            f0=self._latest_residual,
            bounds=bounds,
            args=args,
            kwargs={"isJacobian": True, "segments": segments},
        )

        if not np.all(np.isfinite(g)):
            g[~np.isfinite(g)] = 0
            logger.warning(
                "Some derivatives are non-finite, setting them to zero. "
                "Final uncertainties will be inaccurate. "
                "You might be running into the boundary of the grid"
            )

        self._last_jac = np.copy(g)

        return g

    def __get_bounds(self, atmo_file):
        """
        Create Bounds based on atmosphere grid and general rules

        Note that bounds define by definition a cube in the parameter space,
        but the grid might not be a cube. I.e. Not all combinations of teff, logg, monh are valid
        This method will choose the outerbounds of that space as the boundary, which means that
        we can still run into problems when interpolating the atmospheres

        Parameters
        ----------
        param_names : array(str)
            names of the parameters to vary
        atmo_file : str
            filename of the atmosphere grid

        Raises
        ------
        IOError
            If the atmosphere file can't be read, allowed types are IDL savefiles (.sav), and .krz files

        Returns
        -------
        bounds : dict
            Bounds for the given parameters
        """

        bounds = {}

        # Create bounds based on atmosphere grid
        if (
            "teff" in self.parameter_names
            or "logg" in self.parameter_names
            or "monh" in self.parameter_names
        ):
            _, ext = splitext(atmo_file)
            atmo_file = self.lfs_atmo.get(atmo_file)

            if ext == ".sav":
                atmo_grid = SavFile(atmo_file)

                teff = np.unique(atmo_grid.teff)
                teff = np.min(teff), np.max(teff)
                bounds["teff"] = teff

                logg = np.unique(atmo_grid.logg)
                logg = np.min(logg), np.max(logg) + 1
                bounds["logg"] = logg

                monh = np.unique(atmo_grid.monh)
                monh = np.min(monh), np.max(monh)
                bounds["monh"] = monh
            elif ext == ".krz":
                # krz atmospheres are fixed to one parameter set
                # allow just "small" area around that
                atmo = KrzFile(atmo_file)
                bounds["teff"] = atmo.teff - 500, atmo.teff + 500
                bounds["logg"] = atmo.logg - 1, atmo.logg + 1
                bounds["monh"] = atmo.monh - 1, atmo.monh + 1
            else:
                raise IOError(f"File extension {ext} not recognized")

        # Add generic bounds
        bounds.update({"vmic": [0, clight], "vmac": [0, clight], "vsini": [0, clight]})
        # bounds.update({"abund %s" % el: [-10, 11] for el in abund_elem})

        result = np.array([[-np.inf, np.inf]] * self.nparam)

        for i, name in enumerate(self.parameter_names):
            if name[:5].lower() == "abund":
                result[i] = [-10, 11]
            elif name[:8].lower() == "linelist":
                pass
            else:
                result[i] = bounds[name]

        result = result.T

        if len(result) > 0:
            return result
        else:
            return [-np.inf, np.inf]

    def __get_scale(self):
        """
        Returns scales for each parameter so that values are on order ~1

        Parameters
        ----------
        param_names : list(str)
            names of the parameters

        Returns
        -------
        scales : list(float)
            scales of the parameters in the same order as input array
        """

        # The only parameter we want to scale right now is temperature,
        # as it is orders of magnitude larger than all others
        scales = {"teff": 1000}
        scales = [
            scales[name] if name in scales.keys() else 1
            for name in self.parameter_names
        ]
        return scales

    def __get_default_values(self, sme):
        """ Default parameter values for each name """
        d = {"teff": 5778, "logg": 4.4, "monh": 0, "vmac": 1, "vmic": 1}
        d.update({f"{el} abund": v for el, v in Abund.solar()().items()})

        def default(name):
            logger.info("No value for %s set, using default value %s", name, d[name])
            return d[name]

        return [
            sme[s] if sme[s] is not None else default(s) for s in self.parameter_names
        ]

    def __update_fitresults(self, sme, result):
        # Update SME structure
        popt = result.x
        sme.pfree = np.atleast_2d(popt)  # 2d for compatibility
        sme.fitparameters = self.parameter_names

        for i, name in enumerate(self.parameter_names):
            sme[name] = popt[i]

        # Determine the covariance
        # hessian == fisher information matrix
        fisher = result.jac.T.dot(result.jac)
        covar = np.linalg.pinv(fisher)
        sig = np.sqrt(covar.diagonal())

        # Update fitresults
        sme.fitresults.clear()
        sme.fitresults.covar = covar
        sme.fitresults.grad = result.grad
        sme.fitresults.pder = result.jac
        sme.fitresults.resid = result.fun
        sme.fitresults.chisq = (
            result.cost * 2 / (sme.spec.size - len(self.parameter_names))
        )

        sme.fitresults.punc = {}
        sme.fitresults.punc2 = {}
        for i in range(len(self.parameter_names)):
            # Errors based on covariance matrix
            sme.fitresults.punc[self.parameter_names[i]] = sig[i]
            # Errors based on ad-hoc metric
            tmp = np.abs(result.fun) / np.clip(
                np.median(np.abs(result.jac[:, i])), 1e-5, None
            )
            sme.fitresults.punc2[self.parameter_names[i]] = np.median(tmp)

        # punc3 = uncertainties(res.jac, res.fun, uncs, param_names, plot=False)
        return sme

    def sanitize_parameter_names(self, sme, param_names):
        # Sanitize parameter names
        param_names = [p.casefold() for p in param_names]
        param_names = [p.capitalize() if p[:5] == "abund" else p for p in param_names]

        param_names = [p if p != "grav" else "logg" for p in param_names]
        param_names = [p if p != "feh" else "monh" for p in param_names]

        # Parameters are unique
        # But keep the order the same
        param_names, index = np.unique(param_names, return_index=True)
        param_names = param_names[np.argsort(index)]
        param_names = list(param_names)

        if "vrad" in param_names:
            param_names.remove("vrad")
            if sme.vrad_flag in ["fix", "none"]:
                sme.vrad_flag = "whole"
                logger.info(
                    "Removed fit parameter 'vrad', instead set radial velocity flag to %s",
                    sme.vrad_flag,
                )

        if "cont" in param_names:
            param_names.remove("cont")
            if sme.cscale_flag in ["fix", "none"]:
                sme.cscale_flag = "linear"
                logger.info(
                    "Removed fit parameter 'cont', instead set continuum flag to %s",
                    sme.cscale_flag,
                )
        return param_names

    def solve(self, sme, param_names=None, segments="all"):
        """
        Find the least squares fit parameters to an observed spectrum

        NOTE: intermediary results will be saved in filename ("sme.npy")

        Parameters
        ----------
        sme : SME_Struct
            sme struct containing all input (and output) parameters
        param_names : list, optional
            the names of the parameters to fit (default: ["teff", "logg", "monh"])
        filename : str, optional
            the sme structure will be saved to this file, use None to suppress this behaviour (default: "sme.npy")

        Returns
        -------
        sme : SME_Struct
            same sme structure with fit results in sme.fitresults, and best fit spectrum in sme.smod
        """
        assert "wave" in sme, "SME Structure has no wavelength"
        assert "spec" in sme, "SME Structure has no observation"

        if "uncs" not in sme:
            sme.uncs = np.ones(sme.spec.size)
            logger.warning("SME Structure has no uncertainties, using all ones instead")
        if "mask" not in sme:
            sme.mask = np.full(sme.wave.size, sme.mask_values["line"])

        segments = Synthesizer.check_segments(sme, segments)

        # Clean parameter values
        if param_names is None:
            param_names = sme.fitparameters
        self.parameter_names = self.sanitize_parameter_names(sme, param_names)

        self.update_linelist = False
        for name in self.parameter_names:
            if name[:8] == "linelist":
                self.update_linelist = True
                break

        # Create appropiate bounds
        bounds = self.__get_bounds(sme.atmo.source)
        scales = self.__get_scale()
        # Starting values
        p0 = self.__get_default_values(sme)

        # Get constant data from sme structure
        sme.mask[segments][sme.uncs[segments] == 0] = 0
        mask = sme.mask_good[segments]
        spec = sme.spec[segments][mask]
        uncs = sme.uncs[segments][mask]

        # Divide the uncertainties by the spectrum, to improve the fit in the continuum
        # Just as in IDL SME, this increases the relative error for points inside lines
        uncs /= spec

        logger.info("Fitting Spectrum with Parameters: %s", ",".join(param_names))

        if (
            sme.wran.min() * (1 - 100 / 3e5) > sme.linelist.wlcent.min()
            or sme.wran.max() * (1 + 100 / 3e5) < sme.linelist.wlcent.max()
        ):
            logger.warning(
                "The linelist extends far beyond the requested wavelength range."
                " This will slow down the calculation, consider using only relevant lines"
            )
            logger.warning(
                f"Wavelength range: {sme.wran.min()} - {sme.wran.max()} Å"
                f" ; Linelist range: {sme.linelist.wlcent.min()} - {sme.linelist.wlcent.max()} Å"
            )

        # Setup LineList only once
        self.dll.SetLibraryPath()
        self.dll.InputLineList(sme.linelist)

        # Do the heavy lifting
        if self.nparam > 0:
            self.progressbar = tqdm(desc="Iteration", total=0)
            self.progressbar_jacobian = tqdm(desc="Jacobian", total=len(p0) * 2)
            with print_to_log():
                res = least_squares(
                    self.__residuals,
                    x0=p0,
                    jac=self.__jacobian,
                    bounds=bounds,
                    x_scale="jac",
                    loss="soft_l1",
                    method="trf",
                    verbose=2,
                    args=(sme, spec, uncs, mask),
                    kwargs={"bounds": bounds, "segments": segments},
                )
            self.progressbar.close()
            self.progressbar_jacobian.close()
            # The returned jacobian is "scaled for robust loss function"
            res.jac = self._last_jac
            sme = self.__update_fitresults(sme, res)
            logger.debug("Reduced chi square: %.3f", sme.fitresults.chisq)
            for name, value, unc in zip(
                self.parameter_names, res.x, sme.fitresults.punc.values()
            ):
                logger.info("%s\t%.5f +- %.5g", name.ljust(10), value, unc)
            logger.info("%s\t%s +- %s", "v_rad".ljust(10), sme.vrad, sme.vrad_unc)

        elif len(param_names) > 0:
            # This happens when vrad and/or cscale are given as parameters but nothing else
            # We could try to reuse the already calculated synthetic spectrum (if it already exists)
            # However it is much lower resolution then the newly synthethized one (usually)
            # Therefore the radial velocity wont be as good as when redoing the whole thing
            sme = self.synthesizer.synthesize_spectrum(sme, segments)
        else:
            raise ValueError("No fit parameters given")

        if self.filename is not None:
            sme.save(self.filename)

        return sme


def solve(sme, param_names=("teff", "logg", "monh"), segments="all", filename=None):
    solver = SME_Solver(filename=filename)
    return solver.solve(sme, param_names, segments)
