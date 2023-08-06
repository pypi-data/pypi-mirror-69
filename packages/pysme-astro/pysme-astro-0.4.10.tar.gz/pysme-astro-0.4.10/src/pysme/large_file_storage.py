"""
System to store large data files on a server
Load them whem required by the user
Update the pointer file on github when new datafiles become available

Pro: Versioning is effectively done by Git
Con: Need to run server
"""

import hashlib
import logging
import os
import shutil
from pathlib import Path

import wget
import requests
import json

from .config import Config

logger = logging.getLogger(__name__)

# We are lazy and want a simple check if a file is in the Path
Path.__contains__ = lambda self, key: (self / key).exists()


class LargeFileStorage:
    """
    Download large data files from data server when needed
    New versions of the datafiles are indicated in a 'pointer' file
    that includes the hash of the newest version of the files

    Raises
    ------
    FileNotFoundError
        If the datafiles can't be located anywhere
    """

    def __init__(self, server, pointers, storage, cache):
        #:Server: Large File Storage Server address
        self.server = Server(server)

        if isinstance(pointers, str):
            path = Path("~/.sme").expanduser() / pointers
            try:
                with open(str(path), "r") as f:
                    pointers = json.load(f)
            except FileNotFoundError:
                logger.error("Could not find LargeFileStorage reference file %s", path)
                pointers = {}
        #:dict(fname:hash): points from a filename to the current newest object id, usually a hash
        self.pointers = pointers
        #:Directory: directory of the current data files
        self.current = Path(storage).expanduser().absolute()
        #:Directory: directory for the cache
        self.cache = Path(cache).expanduser().absolute()
        #:dict(fname:hash): hashes of existing files, to avoid recalculation
        self._hashes = {}

    def hash(self, filename):
        """ hash a file """
        hasher = hashlib.sha3_512()
        blocksize = 8192  # 512 * 16
        with open(str(filename), "rb") as f:
            for chunk in iter(lambda: f.read(blocksize), b""):
                hasher.update(chunk)
        return hasher.hexdigest()

    def symlink(self, src, dest):
        try:
            os.symlink(src, dest)
        except OSError:
            # Might Fail on Windows, then just copy the file
            shutil.copy(src, dest)

    def get(self, key):
        """
        Request a datafile from the LargeFileStorage
        Assures that tracked files are at the specified version
        And downloads data from the server if necessary

        Parameters
        ----------
        key : str
            Name of the requested datafile

        Raises
        ------
        FileNotFoundError
            If the requested datafile can not be found anywhere

        Returns
        -------
        fullpath : str
            Absolute path to the datafile
        """
        key = str(key)

        # Step 1: Check if the file is tracked and/or exists in the storage directory
        if key not in self.pointers:
            if key not in self.current:
                if not os.path.exists(key):
                    raise FileNotFoundError(
                        f"File {key} does not exist and is not tracked by the Large File system"
                    )
                else:
                    logger.warning(
                        f"Data file {key} exists, but is not tracked by the large file storage"
                    )
                    return str(key)
            else:
                logger.warning(
                    f"Data file {key} exists, but is not tracked by the large file storage"
                )
                return str(self.current / key)

        # Step 2: Check Pointer version, i.e. newest version
        newest = self.pointers[key]

        if key in self.current:
            # Step 3: If newest version == storage version, we are all good and can use it
            if key in self._hashes.keys():
                current_hash = self._hashes[key]
            else:
                current_hash = self.hash(self.current / key)
                self._hashes[key] = current_hash
            if current_hash == newest:
                return str(self.current / key)

        # Step 4: Otherwise check the cache for the requested version
        if newest in self.cache:
            logger.debug("Using cached version of datafile")
            self.symlink(str(self.cache / newest), str(self.current / key))
            return str(self.current / key)

        # Step 5: If not in the cache, download from the server
        logger.info("Downloading newest version of %s from server", key)
        try:
            self.server.download(newest, self.cache)
            self.symlink(str(self.cache / newest), str(self.current / key))
        except TimeoutError:
            logger.warning("Server connection timed out.")
            if key in self.current:
                logger.warning("Using obsolete, but existing version")
            else:
                logger.warning("No data available for use")
                raise FileNotFoundError("No data could be found for the requested file")

        return str(self.current / key)

    def clean_cache(self):
        """ Remove unused cache files (from old versions) """
        used_files = self.pointers.values()
        for f in self.cache.iterdir():
            if f not in used_files:
                os.remove(f)

    def generate_pointers(self):
        """ Generate the pointers dictionary from the existing storage directory """
        pointers = {}
        for path in self.current.iterdir():
            name = path.stem
            if not path.is_dir:
                pointers[name] = self.hash(path)

        self.pointers = pointers
        return pointers

    def move_to_cache(self):
        """ Move currently used files into cache directory and use symlinks insteadm, just if downloaded from a server """
        for fullpath in self.current.iterdir():
            name = fullpath.stem
            if fullpath.is_file():
                # Copy file
                shutil.copy(str(fullpath), str(self.cache / self.pointers[name]))
                os.remove(str(fullpath))
                self.symlink(
                    str(self.cache / self.pointers[name]), str(self.current / name)
                )

    def create_pointer_file(self, filename):
        """ Create/Update the pointer file with new hashes """
        if self.pointers is None:
            raise RuntimeError("Needs pointers")

        with open(filename, "w") as f:
            json.dump(self.pointers, f)


class Server:
    def __init__(self, url):
        self.url = url

    def download(self, fname, location):
        url = self.url + "/" + fname
        loc = str(location)
        wget.download(url, out=loc)
        print("\n")

    def isUp(self):
        try:
            r = requests.head(self.url)
            return r.status_code == 200
        except:
            return False
        return False


def setup_atmo(config=None):
    if config is None:
        config = Config()
    server = config["data.file_server"]
    storage = config["data.atmospheres"]
    cache = config["data.cache.atmospheres"]
    pointers = config["data.pointers.atmospheres"]
    lfs_atmo = LargeFileStorage(server, pointers, storage, cache)
    return lfs_atmo


def setup_nlte(config=None):
    if config is None:
        config = Config()
    server = config["data.file_server"]
    storage = config["data.nlte_grids"]
    cache = config["data.cache.nlte_grids"]
    pointers = config["data.pointers.nlte_grids"]
    lfs_nlte = LargeFileStorage(server, pointers, storage, cache)
    return lfs_nlte


def setup_lfs(config=None, lfs_atmo=None, lfs_nlte=None):
    if config is None:
        config = Config()
    if lfs_atmo is None:
        lfs_atmo = setup_atmo(config)
    if lfs_nlte is None:
        lfs_nlte = setup_nlte(config)
    return config, lfs_atmo, lfs_nlte


def get_available_atmospheres(config=None):
    if config is None:
        config = Config()
    pointers = config["data.pointers.atmospheres"]
    with open(pointers) as f:
        data = json.load(f)
    return data.keys()


def get_available_nlte_grids(config=None):
    if config is None:
        config = Config()
    pointers = config["data.pointers.nlte_grids"]
    with open(pointers) as f:
        data = json.load(f)
    return data.keys()
