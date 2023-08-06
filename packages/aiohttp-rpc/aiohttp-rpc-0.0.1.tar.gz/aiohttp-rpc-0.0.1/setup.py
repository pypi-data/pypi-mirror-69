#!/usr/bin/env python
# coding: utf-8

from setuptools import setup, find_packages

if __name__ == '__main__':
    setup(
        name='aiohttp-rpc',
        version='0.0.1',
        author='Michael Sulyak',
        url='https://github.com/expert-m/aiohttp-rpc/',
        author_email='michael@sulyak.info',
        keywords=(
            'aiohttp', 'asyncio', 'json-rpc',
        ),
        install_requires=(
            'aiohttp>=3,<4',
        ),
        license='MIT license',
        python_requires='>=3.5',
        packages=find_packages(),
        classifiers=(
            #"Development Status :: 1 - Planning",
            "Development Status :: 2 - Pre-Alpha",
            # "Development Status :: 3 - Alpha",
            # "Development Status :: 4 - Beta",
            # "Development Status :: 5 - Production/Stable",
            "Environment :: Web Environment",
            "Intended Audience :: Developers",
            "License :: OSI Approved :: GNU Library or Lesser General Public License (LGPL)",
            "License :: OSI Approved :: MIT License",
            "Operating System :: OS Independent",
            "Programming Language :: Python :: 2",
            "Topic :: Software Development :: Libraries :: Python Modules",
            "Topic :: System :: Networking",
            "Topic :: Internet :: WWW/HTTP",
            "Topic :: Internet :: WWW/HTTP :: HTTP Servers",
            "Topic :: Internet :: WWW/HTTP :: WSGI :: Application",
        ),
    )
