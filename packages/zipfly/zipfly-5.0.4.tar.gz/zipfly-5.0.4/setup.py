from setuptools import setup
import sys
import os

#from zipfly.zipfly import __version__
__version__ = '5.0.4'

CURRENT_PYTHON = sys.version_info[:2]
REQUIRED_PYTHON = (3,6)

# This check and everything above must remain compatible with Python 3.6
if CURRENT_PYTHON < REQUIRED_PYTHON:

    sys.stderr.write("""
        ==========================
        Unsupported Python version
        ==========================
        This version of ZipFly requires Python {}.{}, but you're trying to
        install it on Python {}.{}.
        This may be because you are using a version of pip that doesn't
        understand the python_requires classifier""".format(*(REQUIRED_PYTHON + CURRENT_PYTHON)))
    sys.exit(1)

setup(
    name='zipfly',
    packages=['zipfly'],
    description='ZipFly',
    version=__version__,
    url='http://github.com/buzonIO/zipfly',
    download_url = f'https://github.com/BuzonIO/zipfly/archive/v{__version__}.tar.gz',
    author='Buzon',
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    author_email='support@buzon.io',
    keywords=['zipfly','buzon'],
    install_requires=[],
    classifiers=[
        'Development Status :: 5 - Production/Stable',
        'Intended Audience :: Developers',
        'Topic :: Software Development :: Build Tools',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
    ],
)
