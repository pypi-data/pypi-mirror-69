import logging
import os.path
import platform
import sys
from copy import copy
from datetime import datetime as dt

import numpy as np
from scipy.io import readsav

from . import __file_ending__, __version__, echelle, persistence
from .abund import Abund, elements as abund_elem
from .atmosphere.atmosphere import Atmosphere
from .iliffe_vector import Iliffe_vector
from .linelist.linelist import LineList

from .data_structure import *

logger = logging.getLogger(__name__)


@CollectionFactory
class Parameters(Collection):
    # fmt: off
    _fields = Collection._fields + [
        ("teff", 5770, asfloat, this, "float: effective temperature in Kelvin"),
        ("logg", 4.0, asfloat, this, "float: surface gravity in log10(cgs)"),
        ("abund", Abund.solar(), this, this, "Abund: elemental abundances"),
        ("vmic", 0, absolute, this, "float: micro turbulence in km/s"),
        ("vmac", 0, absolute, this, "float: macro turbulence in km/s"),
        ("vsini", 0, absolute, this, "float: projected rotational velocity in km/s"),
    ]
    # fmt: on

    def __init__(self, **kwargs):
        monh = kwargs.pop("monh", kwargs.pop("feh", 0))
        abund = kwargs.pop("abund", "empty")
        super().__init__(**kwargs)
        self.abund = Abund(monh=monh, pattern=abund, type="sme")

    @property
    def _abund(self):
        return self.__abund

    @_abund.setter
    def _abund(self, value):
        if isinstance(value, Abund):
            self.__abund = value
        else:
            logger.warning(
                "Abundance set using just a pattern, assuming that"
                f"it has format {self.__abund.type}."
                "If that is incorrect, try changing the format first."
            )
            self.__abund = Abund(monh=self.monh, pattern=value, type=self.__abund.type)

    @property
    def monh(self):
        """float: metallicity in log scale relative to the base abundances"""
        return self.abund.monh

    @monh.setter
    def monh(self, value):
        self.abund.monh = value

    def citation(self, format="string"):
        return self.abund.citation()


@CollectionFactory
class NLTE(Collection):
    # fmt: off
    _fields = Collection._fields + [
        ("elements", [], astype(list), this,
            "list: elements for which nlte calculations will be performed"),
        ("grids", {}, astype(dict), this,
            "dict: nlte grid datafiles for each element"),
        ("subgrid_size", [2, 2, 2, 2], array(4, int), this,
            "array of shape (4,): defines size of nlte grid cache."
            "Each entry is for one parameter abund, teff, logg, monh"),
        ("flags", None, array(None, np.bool_), this,
            "array: contains a flag for each line, whether it was calculated in NLTE (True) or not (False)")
    ]
    # fmt: on

    _default_grids = {
        "Al": "marcs2012_Al2017.grd",
        "Fe": "marcs2012_Fe2016.grd",
        "Li": "marcs2012_Li.grd",
        "Mg": "marcs2012_Mg2016.grd",
        "Na": "marcs2012p_t1.0_Na.grd",
        "O": "marcs2012_O2015.grd",
        "Ba": "marcs2012p_t1.0_Ba.grd",
        "Ca": "marcs2012p_t1.0_Ca.grd",
        "Si": "marcs2012_SI2016.grd",
        "Ti": "marcs2012s_t2.0_Ti.grd",
    }

    def __init__(self, **kwargs):
        super().__init__()

        # Convert IDL keywords to Python
        if "nlte_elem_flags" in kwargs.keys():
            elements = kwargs["nlte_elem_flags"]
            self.elements = [abund_elem[i] for i, j in enumerate(elements) if j == 1]

        if "nlte_subgrid_size" in kwargs.keys():
            self.subgrid_size = kwargs["nlte_subgrid_size"]

        if "nlte_grids" in kwargs:
            grids = kwargs["nlte_grids"]
            if isinstance(grids, (list, np.ndarray)):
                grids = {
                    abund_elem[i]: name.decode()
                    for i, name in enumerate(grids)
                    if name != ""
                }
            self.grids = grids

    def set_nlte(self, element, grid=None):
        """
        Add an element to the NLTE calculations

        Parameters
        ----------
        element : str
            The abbreviation of the element to add to the NLTE calculations
        grid : str, optional
            Filename of the NLTE data grid to use for this element
            the file must be in nlte_grids directory
            Defaults to a set of "known" files for some elements
        """
        if element in self.elements:
            # Element already in NLTE
            # Change grid if given
            if grid is not None:
                self.grids[element] = grid
            return

        if grid is None:
            # Use default grid
            if element not in NLTE._default_grids.keys():
                raise ValueError(f"No default grid known for element {element}")
            grid = NLTE._default_grids[element]
            logger.info("Using default grid %s for element %s", grid, element)

        if element not in self.elements:
            self.elements += [element]
        self.grids[element] = grid

    def remove_nlte(self, element):
        """
        Remove an element from the NLTE calculations

        Parameters
        ----------
        element : str
            Abbreviation of the element to remove from NLTE
        """
        if element not in self.elements:
            # Element not included in NLTE anyways
            return

        self.elements.remove(element)
        self.grids.pop(element)

    def citation(self, output="string"):
        # TODO
        citations = [self.grids[el] for el in self.elements]
        return citations


@CollectionFactory
class Version(Collection):
    # fmt: off
    _fields = Collection._fields + [
        ("arch", "", asstr, this, "str: system architecture"),
        ("os", "", asstr, this, "str: operating system"),
        ("os_family", "", asstr, this, "str: operating system family"),
        ("os_name", "", asstr, this, "str: os name"),
        ("release", "", asstr, this, "str: python version"),
        ("build_date", "", asstr, this, "str: build date of the Python version used"),
        ("memory_bits", 64, astype(int), this, "int: Platform architecture bit size (usually 32 or 64)"),
        ("host", "", asstr, this, "str: name of the machine that created the SME Structure")
    ]
    # fmt: on

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def update(self):
        """ Update version info with current machine data """
        self.arch = platform.machine()
        self.os = sys.platform
        self.os_family = platform.system()
        self.os_name = platform.version()
        self.release = platform.python_version()
        self.build_date = platform.python_build()[1]
        self.memory_bits = int(platform.architecture()[0][:2])
        self.host = platform.node()


@CollectionFactory
class Fitresults(Collection):
    # fmt: off
    _fields = Collection._fields + [
        ("maxiter", 100, astype(int), this, "int: maximum number of iterations in the solver"),
        ("chisq", 0, asfloat, this, "float: reduced chi-square of the solution"),
        ("uncertainties", None, array(None, float), this, "array of size(nfree,): uncertainties of the free parameters"),
        ("covariance", None, array(None, float), this, "array of size (nfree, nfree): covariance matrix"),
        ("gradient", None, array(None, float), this, "array of size (nfree,): final gradients of the free parameters on the cost function"),
        ("derivative", None, array(None, float), this, "array of size (npoints, nfree): final Jacobian of each point and each parameter"),
        ("residuals", None, array(None, float), this, "array of size (npoints,): final residuals of the fit"),
        ("punc2", None, this, this, "array: old school uncertainties")
    ]
    # fmt: on

    def clear(self):
        """ Reset all values to None """
        self.maxiter = 100
        self.chisq = 0
        self.punc = None
        self.covar = None
        self.grad = None
        self.pder = None
        self.resid = None


@CollectionFactory
class SME_Structure(Parameters):
    # fmt: off
    _fields = Parameters._fields + [
        ("id", dt.now(), asstr, this, "str: DateTime when this structure was created"),
        ("object", "", asstr, this, "str: Name of the observed/simulated object"),
        ("version", __version__, this, this, "str: PySME version used to create this structure"),
        ("vrad", 0, array(None, float), this, "array of size (nseg,): radial velocity of each segment in km/s"),
        ("vrad_flag", "none", lowercase(oneof(-2, -1, 0, "none", "each", "whole", "fix")), this,
            """str: flag that determines how the radial velocity is determined

            allowed values are:
               * "none": No radial velocity correction
               * "each": Determine radial velocity for each segment individually
               * "whole": Determine one radial velocity for the whole spectrum
            """),
        ("cscale", 1, array(None, float), this,
            """array of size (nseg, ndegree): Continumm polynomial coefficients for each wavelength segment
            The x coordinates of each polynomial are chosen so that x = 0, at the first wavelength point,
            i.e. x is shifted by wave[segment][0]
            """),
        ("cscale_flag", "none", lowercase(oneof(-3, -2, -1, 0, 1, 2, "none", "fix", "constant", "linear", "quadratic")), this,
            """str: Flag that describes how to correct for the continuum

            allowed values are:
                * "none": No continuum correction
                * "fix": Use whatever continuum scale has been set, but don't change it
                * "constant": Zeroth order polynomial, i.e. scale everything by a factor
                * "linear": First order polynomial, i.e. approximate continuum by a straight line
                * "quadratic": Second order polynomial, i.e. approximate continuum by a quadratic polynomial
            """),
        ("cscale_type", "whole", lowercase(oneof("whole", "mask")), this,
            """str: Flag that determines the algorithm to determine the continuum

            This is used in combination with cscale_flag, which determines the degree of the fit, if any.

            allowed values are:
              * "whole": Fit the whole synthetic spectrum to the observation to determine the best fit
              * "mask": Fit a polynomial to the pixels marked as continuum in the mask
            """),
        ("normalize_by_continuum", True, asbool, this,
            "bool: Whether to normalize the synthetic spectrum by the synthetic continuum spectrum or not"),
        ("specific_intensities_only", False, asbool, this,
            "bool: Whether to keep the specific intensities or integrate them together"),
        ("gam6", 1, asfloat, this, "float: van der Waals scaling factor"),
        ("h2broad", True, asbool, this, "bool: Whether to use H2 broadening or not"),
        ("accwi", 0.003, asfloat, this,
            "float: minimum accuracy for linear spectrum interpolation vs. wavelength. Values below 1e-4 are not meaningful."),
        ("accrt", 0.001, asfloat, this,
            "float: minimum accuracy for synthethized spectrum at wavelength grid points in sme.wint. Values below 1e-4 are not meaningful."),
        ("iptype", None, lowercase(oneof(None, "gauss", "sinc", "table")), this, "str: instrumental broadening type"),
        ("ipres", 0, asfloat, this, "float: Instrumental resolution for instrumental broadening"),
        ("ip_x", None, this, this, "array: Instrumental broadening table in x direction"),
        ("ip_y", None, this, this, "array: Instrumental broadening table in y direction"),
        ("mu", np.geomspace(0.01, 1, 7), array(None, float), this,
            """array of size (nmu,): Mu values to calculate radiative transfer at
            mu values describe the distance from the center of the stellar disk to the edge
            with mu = cos(theta), where theta is the angle of the observation,
            i.e. mu = 1 at the center of the disk and 0 at the edge
            """),
        ("wran", None, this, this,
            "array of size (nseg, 2): beginning and end wavelength points of each segment"),
        ("wave", None, vector, this,
            "Iliffe_vector of shape (nseg, ...): wavelength"),
        ("spec", None, vector, this,
            "Iliffe_vector of shape (nseg, ...): observed spectrum"),
        ("uncs", None, vector, this,
            "Iliffe_vector of shape (nseg, ...): uncertainties of the observed spectrum"),
        ("mask", None, vector, this,
            "Iliffe_vector of shape (nseg, ...): mask defining good and bad points for the fit"),
        ("synth", None, vector, this,
            "Iliffe_vector of shape (nseg, ...): synthetic spectrum"),
        ("cont", None, vector, this,
            "Iliffe_vector of shape (nseg, ...): continuum intensities"),
        ("linelist", LineList(), astype(LineList), this, "LineList: spectral line information"),
        ("fitparameters", [], astype(list), this, "list: parameters to fit"),
        ("atmo", Atmosphere(), astype(Atmosphere), this, "Atmosphere: model atmosphere data"),
        ("nlte", NLTE(), astype(NLTE), this, "NLTE: nlte calculation data"),
        ("system_info", Version(), astype(Version), this,
            "Version: information about the host system running the calculation for debugging"),
        ("citation_info", r"""
            @ARTICLE{2017A&A...597A..16P,
                author = {{Piskunov}, Nikolai and {Valenti}, Jeff A.},
                title = "{Spectroscopy Made Easy: Evolution}",
                journal = {\aap},
                keywords = {stars: abundances, radiative transfer, stars: fundamental parameters, stars: atmospheres, techniques: spectroscopic, Astrophysics - Instrumentation and Methods for Astrophysics, Astrophysics - Solar and Stellar Astrophysics},
                year = "2017",
                month = "Jan",
                volume = {597},
                eid = {A16},
                pages = {A16},
                doi = {10.1051/0004-6361/201629124},
                archivePrefix = {arXiv},
                eprint = {1606.06073},
                primaryClass = {astro-ph.IM},
                adsurl = {https://ui.adsabs.harvard.edu/abs/2017A&A...597A..16P},
                adsnote = {Provided by the SAO/NASA Astrophysics Data System}
            }
            @ARTICLE{1996A&AS..118..595V,
                author = {{Valenti}, J.~A. and {Piskunov}, N.},
                title = "{Spectroscopy made easy: A new tool for fitting observations with synthetic spectra.}",
                journal = {\aaps},
                keywords = {RADIATIVE TRANSFER, METHODS: NUMERICAL, TECHNIQUES: SPECTROSCOPIC, STARS: FUNDAMENTAL PARAMETERS, SUN: FUNDAMENTAL PARAMETERS, ATOMIC DATA},
                year = "1996",
                month = "Sep",
                volume = {118},
                pages = {595-603},
                adsurl = {https://ui.adsabs.harvard.edu/abs/1996A&AS..118..595V},
                adsnote = {Provided by the SAO/NASA Astrophysics Data System}
            }
            """, asstr, this, "str: BibTex entry for SME")
    ]
    # fmt: on

    #:dict(str, int): Mask value specifier used in mob
    mask_values = {"bad": 0, "line": 1, "continuum": 2}

    def __init__(self, **kwargs):
        wind = kwargs.get("wind", None)

        atmo = kwargs.pop("atmo", {})
        nlte = kwargs.pop("nlte", {})
        idlver = kwargs.pop("idlver", {})
        super().__init__(**kwargs)

        if wind is not None and self.wave is not None:
            wind = np.array([0, *(wind + 1)])
            self.wave = Iliffe_vector(values=self.wave.ravel(), index=wind)

        self.spec = kwargs.get("sob", None)
        self.uncs = kwargs.get("uob", None)
        self.mask = kwargs.get("mob", None)
        self.synth = kwargs.get("smod", None)

        self.object = kwargs.get("obs_name", "")
        try:
            self.linelist = LineList(**kwargs)
        except (KeyError, AttributeError):
            # TODO ignore the warning during loading of data
            logger.warning("No or incomplete linelist data present")

        # Parse free parameters into one list
        pname = kwargs.get("pname", [])
        glob_free = kwargs.get("glob_free", [])
        ab_free = kwargs.get("ab_free", [])
        if len(ab_free) != 0:
            ab_free = [f"abund {el}" for i, el in zip(ab_free, abund_elem) if i == 1]
        fitparameters = np.concatenate((pname, glob_free, ab_free)).astype("U")
        #:array of size (nfree): Names of the free parameters
        self.fitparameters = np.unique(fitparameters)

        self.fitresults = Fitresults(
            maxiter=kwargs.get("maxiter", 0),
            chisq=kwargs.get("chisq", 0),
            uncertainties=kwargs.get("punc", None),
            covar=kwargs.get("covar", None),
        )

        self.normalize_by_continuum = kwargs.get("cscale_flag", "") != "fix"

        self.system_info = Version(**idlver)
        self.atmo = Atmosphere(
            **atmo,
            abund=kwargs.get("abund", "empty"),
            monh=kwargs.get("monh", kwargs.get("feh", 0)),
        )
        self.nlte = NLTE(**nlte)

        # Apply final conversions from IDL to Python version
        if "wave" in self:
            self.__convert_cscale__()

    def __getitem__(self, key):
        assert isinstance(key, str), "Key must be of type string"
        key = key.casefold()

        if key.startswith("abund "):
            element = key[5:].strip()
            element = element.capitalize()
            return self.abund[element]
        if key.startswith("linelist "):
            _, idx, field = key[8:].split(" ", 2)
            idx = int(idx)
            return self.linelist[field][idx]
        return super().__getitem__(key)

    def __setitem__(self, key, value):
        assert isinstance(key, str), "Key must be of type string"
        key = key.casefold()

        if key.startswith("abund "):
            element = key[5:].strip()
            element = element.capitalize()
            self.abund[element] = value
        elif key.startswith("linelist "):
            _, idx, field = key[8:].split(" ", 2)
            idx = int(idx)
            self.linelist[field][idx] = value
        else:
            super().__setitem__(key, value)

    # Additional constraints on fields
    @property
    def _wran(self):
        if self.wave is not None:
            nseg = self.wave.shape[0]
            values = np.zeros((nseg, 2))
            for i in range(nseg):
                if self.wave[i] is not None and len(self.wave[i]) >= 2:
                    values[i] = [self.wave[i][0], self.wave[i][-1]]
                else:
                    values[i] = self.__wran[i]
            return values
        return self.__wran

    @_wran.setter
    def _wran(self, value):
        try:
            if self.wave is not None:
                logger.warning(
                    "The wavelength range is overriden by the existing wavelength grid"
                )
        except:
            pass
        self.__wran = np.atleast_2d(value) if value is not None else None

    @property
    def _vrad(self):
        """array of size (nseg,): Radial velocity in km/s for each wavelength region"""
        nseg = self.nseg if self.nseg is not None else 1

        if self.__vrad is None:
            return np.zeros(nseg)

        if self.vrad_flag == "none":
            return np.zeros(nseg)
        else:
            nseg = self.__vrad.shape[0]
            if nseg == self.nseg:
                return self.__vrad

            rv = np.zeros(self.nseg)
            rv[:nseg] = self.__vrad[:nseg]
            rv[nseg:] = self.__vrad[-1]
            return rv

        return self.__vrad

    @_vrad.setter
    def _vrad(self, value):
        self.__vrad = np.atleast_1d(value) if value is not None else None

    @property
    def _vrad_flag(self):
        return self.__vrad_flag

    @_vrad_flag.setter
    def _vrad_flag(self, value):
        if isinstance(value, (int, np.integer)):
            value = {-2: "none", -1: "whole", 0: "each"}[value]
        self.__vrad_flag = value

    @property
    def _cscale(self):
        """array of size (nseg, ndegree): Continumm polynomial coefficients for each wavelength segment
        The x coordinates of each polynomial are chosen so that x = 0, at the first wavelength point,
        i.e. x is shifted by wave[segment][0]
        """
        nseg = self.nseg if self.nseg is not None else 1

        if self.__cscale is None:
            cs = np.zeros((nseg, self.cscale_degree + 1))
            cs[:, -1] = 1
            return cs

        if self.cscale_flag == "none":
            return np.ones((nseg, 1))

        ndeg = self.cscale_degree + 1
        ns, nd = self.__cscale.shape

        if nd == ndeg and ns == nseg:
            return self.__cscale

        cs = np.zeros((nseg, ndeg))
        cs[:, -1] = 1
        if nd > ndeg:
            cs[:ns, :] = self.__cscale[:ns, -ndeg:]
        elif nd < ndeg:
            cs[:ns, -nd:] = self.__cscale[:ns, :]
        else:
            cs[:ns, :] = self.__cscale[:ns, :]

        cs[ns:, -1] = self.__cscale[-1, -1]

        return cs

    @_cscale.setter
    def _cscale(self, value):
        self.__cscale = np.atleast_2d(value) if value is not None else None

    @property
    def _cscale_flag(self):
        return self.__cscale_flag

    @_cscale_flag.setter
    def _cscale_flag(self, value):
        if isinstance(value, (int, np.integer)):
            value = {
                -3: "none",
                -2: "fix",
                -1: "fix",
                0: "constant",
                1: "linear",
                2: "quadratic",
            }[value]
        if value == "quadratic":
            logger.warning("Quadratic continuum scale is experimental")

        self.__cscale_flag = value

    @property
    def _mu(self):
        return self.__mu

    @_mu.setter
    def _mu(self, value):
        if np.any(value < 0):
            raise ValueError("All values must be positive")
        if np.any(value > 1):
            raise ValueError("All values must be smaller or equal to 1")
        self.__mu = value

    # Additional properties
    @property
    def nseg(self):
        """int: Number of wavelength segments """
        if self.wran is None:
            return 0
        else:
            return len(self.wran)

    @property
    def nmu(self):
        return self.mu.size

    @property
    def mask_good(self):
        if self.mask is None:
            return None
        return self.mask != self.mask_values["bad"]

    @property
    def mask_bad(self):
        if self.mask is None:
            return None
        return self.mask == self.mask_values["bad"]

    @property
    def mask_line(self):
        if self.mask is None:
            return None
        return self.mask == self.mask_values["line"]

    @property
    def mask_cont(self):
        if self.mask is None:
            return None
        return self.mask == self.mask_values["continuum"]

    @property
    def cscale_degree(self):
        """int: Polynomial degree of the continuum as determined by cscale_flag """
        if self.cscale_flag == "constant":
            return 0
        if self.cscale_flag == "linear":
            return 1
        if self.cscale_flag == "quadratic":
            return 2
        if self.cscale_flag == "fix":
            # Use the underying element to avoid a loop
            if self.__cscale is not None:
                return self.__cscale.shape[1] - 1
            else:
                return 0
        if self.cscale_flag == "none":
            return 0
        raise ValueError("This should never happen")

    @property
    def atomic(self):
        """array of size (nlines, 8): Atomic linelist data, usually passed to the C library
        Use sme.linelist instead for other purposes """
        if self.linelist is None:
            return None
        return self.linelist.atomic

    @property
    def species(self):
        """array of size (nlines,): Names of the species of each spectral line """
        if self.linelist is None:
            return None
        return self.linelist.species

    def __convert_cscale__(self):
        """
        Convert IDL SME continuum scale to regular polynomial coefficients
        Uses Taylor series approximation, as IDL version used the inverse of the continuum
        """
        wave = self.wave
        self.cscale = np.require(self.cscale, requirements="W")

        if self.cscale_flag == "linear":
            for i in range(len(self.cscale)):
                c, d = self.cscale[i]
                a, b = max(wave[i]), min(wave[i])
                c0 = (a - b) * (c - d) / (a * c - b * d) ** 2
                c1 = (a - b) / (a * c - b * d)

                # Shift zero point to first wavelength of the segment
                c1 += c0 * self.spec[i][0]

                self.cscale[i] = [c0, c1]
        elif self.cscale_flag == "fix":
            self.cscale = self.cscale / np.sqrt(2)
        elif self.cscale_flag == "constant":
            self.cscale = np.sqrt(1 / self.cscale)

    def import_mask(self, other):
        """
        Import the mask of another sme structure and apply it to this one
        Conversion is based on the wavelength

        Parameters
        ----------
        other : SME_Structure
            the sme structure to import the mask from
        
        Returns
        -------
        self : SME_Structure
            this sme structure
        """
        wave = other.wave.ravel()
        line_mask = other.mask_line.ravel()
        cont_mask = other.mask_cont.ravel()

        for seg in range(self.nseg):
            # We simply interpolate between the masks, if most if the new pixel was
            # continuum / line mask then it will become that, otherwise bad
            w = self.wave[seg]
            cm = np.interp(w, wave, cont_mask) > 0.5
            lm = np.interp(w, wave, line_mask) > 0.5
            self.mask[seg][cm] = self.mask_values["continuum"]
            self.mask[seg][lm] = self.mask_values["line"]
            self.mask[seg][~(cm | lm)] = self.mask_values["bad"]
        return self

    def citation(self, output="string"):
        """Create a citation string for use in papers, or
        other places. The citations are from all components that
        contribute to the SME structure. SME and PySME, the linelist,
        the abundance, the atmosphere, and the NLTE grids.
        The default output is plaintext, but
        it is also possible to get bibtex format.

        Parameters
        ----------
        output : str, optional
            the output format, options are: ["string", "bibtex", "html", "markdown"], by default "string"

        Returns
        -------
        citation : str
            citation string in the desired output format
        """
        citation = [self.citation_info]
        citation += [self.atmo.citation_info]
        citation += [self.abund.citation_info]
        citation += [self.linelist.citation_info]
        citation += [self.nlte.citation_info]
        citation = "\n".join(citation)

        return self.create_citation(citation, output=output)

    def save(self, filename, compressed=False):
        """Save the whole SME structure to disk.

        The file format is zip file, with one info.json
        file for simple values, and numpy save files for
        large arrays. Substructures (linelist, abundance, etc.)
        have their own folder within the zip file.

        Parameters
        ----------
        filename : str
            filename to save the structure at
        compressed : bool, optional
            whether to compress the output, by default False
        """
        if not filename.endswith(__file_ending__):
            filename = filename + __file_ending__
        persistence.save(filename, self, compressed=compressed)

    @staticmethod
    def load(filename):
        """
        Load SME data from disk

        Currently supported file formats:
            * ".npy": Numpy save file of an SME_Struct
            * ".sav", ".inp", ".out": IDL save file with an sme structure
            * ".ech": Echelle file from (Py)REDUCE

        Parameters
        ----------
        filename : str, optional
            name of the file to load (default: 'sme.npy')

        Returns
        -------
        sme : SME_Struct
            Loaded SME structure

        Raises
        ------
        ValueError
            If the file format extension is not recognized
        """
        logger.info("Loading SME file %s", filename)
        ext = os.path.splitext(filename)[1]
        if ext == ".sme":
            s = SME_Structure()
            return persistence.load(filename, s)
        elif ext == ".npy":
            # Numpy Save file
            s = np.load(filename, allow_pickle=True)
            return np.atleast_1d(s)[0]
        elif ext == ".npz":
            s = np.load(filename, allow_pickle=True)
            return s["sme"][()]
        elif ext in [".sav", ".out", ".inp"]:
            # IDL save file (from SME)
            s = readsav(filename)["sme"]

            def unfold(obj):
                if isinstance(obj, bytes):
                    return obj.decode()
                elif isinstance(obj, np.recarray):
                    return {
                        name.casefold(): unfold(obj[name][0])
                        for name in obj.dtype.names
                    }
                return obj

            s = unfold(s)
            return SME_Structure(**s)
        elif ext == ".ech":
            # Echelle file (from REDUCE)
            ech = echelle.read(filename)
            s = SME_Structure()
            s.wave = [np.ma.compressed(w) for w in ech.wave]
            s.spec = [np.ma.compressed(s) for s in ech.spec]
            s.uncs = [np.ma.compressed(s) for s in ech.sig]

            for i, w in enumerate(s.wave):
                sort = np.argsort(w)
                s.wave[i] = w[sort]
                s.spec[i] = s.spec[i][sort]
                s.uncs[i] = s.uncs[i][sort]

            s.mask = [np.full(i.size, 1) for i in s.spec]
            s.mask[s.spec == 0] = SME_Structure.mask_values["bad"]
            s.wran = [[w[0], w[-1]] for w in s.wave]
            s.abund = Abund.solar()
            try:
                s.object = ech.head["OBJECT"]
            except KeyError:
                pass
            return s
        else:
            options = [".npy", ".sav", ".out", ".inp", ".ech"]
            raise ValueError(
                f"File format not recognised, expected one of {options} but got {ext}"
            )
