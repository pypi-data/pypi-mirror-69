# Copyright (C) 2015-2020 Jeff Vierstra (jvierstra@altius.org)


import os
import sys
import pathlib


from setuptools import find_packages, setup
from distutils.command.build_clib import build_clib
from distutils.extension import Extension
from distutils import log
from Cython.Distutils import build_ext

import numpy as np

from glob import glob

__version__ = "1.1.0"

if sys.version_info[0] != 3 or sys.version_info[1] <= 5:
    print("Package requires Python version 3.5+")
    sys.exit(1)

cephes_include = "cephes"
cephes_src = glob("cephes/*.c")
cehpes_lib = ('cephes', { 'sources': cephes_src })

modules = [
	dict(name="footprint_tools.modeling.predict", sources=["footprint_tools/modeling/predict.pyx"]),
	dict(name="footprint_tools.modeling.predict", sources=["footprint_tools/modeling/predict.pyx"]),
	dict(name="footprint_tools.modeling.dispersion", sources=["footprint_tools/modeling/dispersion.pyx"]),
	dict(name="footprint_tools.stats.windowing", sources = ["footprint_tools/stats/windowing.pyx"]),
	dict(name="footprint_tools.stats.distributions.nbinom", sources=["footprint_tools/stats/distributions/nbinom.pyx"]),
	dict(name="footprint_tools.stats.segment", sources=["footprint_tools/stats/segment.pyx"]),
	dict(name="footprint_tools.stats.fdr.bisect", sources=["footprint_tools/stats/fdr/bisect.pyx"]),
	dict(name="footprint_tools.stats.differential", sources=["footprint_tools/stats/differential.pyx"])
]

scripts = ["scripts/ftd-learn-dispersion-model", "scripts/ftd-compute-deviation", "scripts/ftd-compute-posterior", "scripts/ftd-learn-beta-prior", "scripts/ftd-diff-test"]
install_requires = ["cython", "numpy>=1.10", "scipy>=0.17", "pysam>=0.15", "pyfaidx>=0.4.2", "statsmodels", "genome_tools>=1.0", "pwlf"]

setup(
	name = "footprint_tools",
	version = __version__,
	license = "GPL-3.0-or-later",
	description = "Genomic footprint detection",
	long_description=(pathlib.Path(__file__).parent / "README.md").read_text(),
    long_description_content_type="text/markdown",
	author = "Jeff Vierstra",
	author_email = "jvierstra@altius.org",
	url = "https://github.com/jvierstra/footprint-tools",
	download_url = "https://github.com/jvierstra/footprint-tools/archive/1.1.0.tar.gz",
	keywords = ["genomic footprints", "bioinformatics"],
	zip_safe = False,
	packages =  find_packages(),
	libraries = [cehpes_lib],
    # ext_modules = cythonize([Extension(**opts) for opts in modules]),
    ext_modules = [Extension(**opts) for opts in modules],
    include_dirs=[np.get_include(), cephes_include],
    cmdclass = {'build_clib': build_clib, 'build_ext': build_ext},
    # cmdclass = {'build_clib': build_clib},
    install_requires = install_requires,
    scripts = scripts,
    classifiers=[
	    'Development Status :: 5 - Production/Stable',      # Chose either "3 - Alpha", "4 - Beta" or "5 - Production/Stable" as the current state of your package
	    'Intended Audience :: Science/Research',      # Define that your audience are developers
	    'Topic :: Scientific/Engineering :: Bio-Informatics',
	    'License :: OSI Approved :: GNU General Public License v3 or later (GPLv3+)',
	    'Programming Language :: Python :: 2.7',     #Specify which pyhton versions that you want to support
	    'Programming Language :: Python :: 3',
	    'Programming Language :: Python :: 3.5', 
],
)
