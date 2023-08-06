# -*- coding: UTF-8 -*-
from distutils.core import setup
from setuptools import find_packages
import sys


_version = "0.8"
_packages = find_packages(exclude=["*.tests", "*.tests.*", "tests.*", "tests"])

_short_description = "Python tool to find and list requirements of a Python project"

_CLASSIFIERS = [
    'Development Status :: 5 - Production/Stable',
    'Environment :: Console',
    'Intended Audience :: Developers',
    'Operating System :: Unix',
    'Topic :: Software Development :: Quality Assurance',
    'Programming Language :: Python :: 2.7',
    'Programming Language :: Python :: 3.4',
    'Programming Language :: Python :: 3.5',
    'Programming Language :: Python :: 3.6',
    'Programming Language :: Python :: 3.7',
    'Programming Language :: Python :: 3.8',
    'License :: OSI Approved :: MIT License',
]


if sys.version_info < (2, 7):
    # pylint 1.4 dropped support for Python 2.6
    _install_requires = [
        'astroid>=1.0,<1.3.0',
    ]
elif sys.version_info < (3, 0):
    # astroid 2.x is Python 3 only
    _install_requires = [
        'astroid>=1.4,<2.0',
    ]
else:
    _install_requires = [
        'astroid>=1.4',
    ]

setup(
    name='moser-fork-requirements-detector',
    url='https://github.com/moser/requirements-detector',
    author='landscape.io (forked by moser)',
    author_email='moser@moserei.de',
    description=_short_description,
    version=_version,
    scripts=['bin/detect-requirements'],
    install_requires=_install_requires,
    packages=_packages,
    license='MIT',
    keywords='python requirements detector',
    classifiers=_CLASSIFIERS,
)
