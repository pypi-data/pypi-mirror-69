import pathlib
import os
import codecs
import re
from setuptools import setup, find_packages

here = os.path.abspath(os.path.dirname(__file__))


def read(*parts):
    with codecs.open(os.path.join(here, *parts), "r") as fp:
        return fp.read()


def find_version(*file_paths):
    version_file = read(*file_paths)
    version_match = re.search(r"^__version__ = ['\"]([^'\"]*)['\"]", version_file, re.M)
    if version_match:
        return version_match.group(1)
    raise RuntimeError("Unable to find version string.")


setup(
    name="moped",
    version=find_version("moped", "__init__.py"),
    description="Short description",
    long_description=(pathlib.Path(__file__).parent / "README.md").read_text(),
    long_description_content_type="text/markdown",
    url="https://gitlab.com/marvin.vanaalst/moped",
    author="Nima Saadat",
    author_email="nima.saadat@hhu.de",
    maintainer_email="marvin.van.aalst@hhu.de",
    license="GPL3",
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Environment :: Console",
        "Intended Audience :: Science/Research",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: GNU General Public License v3 or later (GPLv3+)",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Topic :: Software Development",
        "Topic :: Scientific/Engineering",
        "Operating System :: Microsoft :: Windows",
        "Operating System :: POSIX",
        "Operating System :: Unix",
        "Operating System :: MacOS",
        "Operating System :: OS Independent",
    ],
    keywords="modelling stoichiometric metacyc biocyc bigg kegg blast pathologic",
    project_urls={
        "Documentation": "https://moped.readthedocs.io/en/latest/",
        "Source": "https://gitlab.com/marvin.vanaalst/moped",
        "Tracker": "https://gitlab.com/marvin.vanaalst/moped/issues",
    },
    packages=find_packages("."),
    install_requires=[
        "numpy>=1.17.3",
        "pandas>=0.25.3",
        "cobra>=0.17.1",
        "pyasp>=1.4.4",
        "meneco==1.5.3",
        "modelbase>=1.0",
        "coverage",
        "black",
    ],
    python_requires=">=3.6.0",
    zip_safe=False,
)
