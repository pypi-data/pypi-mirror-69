#!/usr/bin/python
# -*- coding: utf-8 -*-

import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name='ac-electricity',
    version='0.4.5',
    py_modules=['acelectricity'],
    install_requires=['matplotlib'],
    description='An educational module about linear AC electrical circuits',
    author='Fabrice Sincère',
    author_email='fabrice.sincere@ac-grenoble.fr',
    maintainer='Fabrice Sincère',
    maintainer_email='fabrice.sincere@ac-grenoble.fr',
    # url="http://fsincere.free.fr/isn/python/cours_python_dc.php",
    long_description=long_description,
    long_description_content_type="text/markdown",
    classifiers=[
        "Programming Language :: Python :: 3",
        "Intended Audience :: Education",
        "Intended Audience :: Science/Research",
        "Topic :: Scientific/Engineering :: Physics",
        "License :: OSI Approved :: GNU General Public License v3 (GPLv3)",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3',)
