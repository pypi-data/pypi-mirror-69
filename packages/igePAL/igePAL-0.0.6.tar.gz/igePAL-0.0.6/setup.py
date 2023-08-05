import importlib
try:
    importlib.import_module('numpy')
except ImportError:
	from pip._internal import main as _main
	_main(['install', 'numpy'])

from setuptools import setup, Extension, find_packages
import setuptools
import numpy
import sys
import os
from distutils.sysconfig import get_python_lib
import shutil

# To use a consistent encoding
from codecs import open

from os import path
here = path.abspath(path.dirname(__file__))


sfc_module = Extension('igePAL._igePAL',
                    sources=[
                        'igePAL.cpp',
                        'PAL.cpp',
                        'win32/PALImpl.cpp',
                        'nativefiledialog/nfd_common.c',
                        'nativefiledialog/nfd_win.cpp',
                    ],
                    include_dirs=['./', './win32', './nativefiledialog/include'],
                    library_dirs=[],
			        libraries=['ole32', 'shell32'])

setup(name='igePAL', version='0.0.6',
		description= 'C++ extension Platform Abstraction Layer for 3D and 2D games.',
		author=u'Indigames',
		author_email='dev@indigames.net',
		packages=find_packages(),
		ext_modules=[sfc_module],
		long_description=open(path.join(here, 'README.md')).read(),
        long_description_content_type='text/markdown',
        
        # The project's main homepage.
        url='https://indigames.net/',
        
		license='MIT',
		classifiers=[
			'Intended Audience :: Developers',
			'License :: OSI Approved :: MIT License',
			'Programming Language :: Python :: 3',
			#'Operating System :: MacOS :: MacOS X',
			#'Operating System :: POSIX :: Linux',
			'Operating System :: Microsoft :: Windows',
			'Topic :: Games/Entertainment',
		],
        # What does your project relate to?
        keywords='PAL 3D game Indigames',
      )
