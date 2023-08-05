#! /usr/bin/env python3

import os
import sys
from setuptools import setup, find_packages


here = os.path.abspath(os.path.dirname(__file__))


def read(fname):
    return open(os.path.join(here, fname)).read()


with open(os.path.join(here, "yaqd_control", "VERSION")) as version_file:
    version = version_file.read().strip()

extra_files = {"yaqd_control": ["VERSION"]}

if sys.platform == "win32" or "win32" in sys.argv:
    extra_files = {"yaqd_control": ["VERSION", "bin/nssm.exe"]}

setup(
    name="yaqd-control",
    packages=find_packages(exclude=("tests", "tests.*")),
    package_data=extra_files,
    python_requires=">=3.7",
    install_requires=[
        "appdirs",
        "toml",
        "click",
        "prettytable",
        "colorama",
        "msgpack>=1.0.0",
    ],
    extras_require={
        "docs": ["sphinx", "sphinx-gallery>=0.3.0", "sphinx-rtd-theme"],
        "dev": ["black", "pre-commit", "pydocstyle"],
    },
    version=version,
    description="Command line tools for inspecting and controlling yaq daemons.",
    long_description=read("README.md"),
    long_description_content_type="text/markdown",
    author="yaq Developers",
    author_email="git@ksunden.space",
    license="LGPL v3",
    url="https://yaq.fyi",
    project_urls={
        "Source": "https://gitlab.com/yaq/yaqd-control",
        "Documentation": "https://yaq.fyi",
        "Issue Tracker": "https://gitlab.com/yaq/yaqd-control/issues",
    },
    entry_points={"console_scripts": ["yaqd=yaqd_control.__main__:main"]},
    keywords="spectroscopy science multidimensional hardware",
    classifiers=[
        "Development Status :: 1 - Planning",
        "Intended Audience :: Science/Research",
        "License :: OSI Approved :: GNU Lesser General Public License v3 (LGPLv3)",
        "Natural Language :: English",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Topic :: Scientific/Engineering",
    ],
)
