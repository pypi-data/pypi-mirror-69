# -*- coding: utf-8 -*-

from setuptools import setup, find_packages


with open("README.md", "r") as fh:
    long_description = fh.read()

setup(
    name="asyncpy",
    url="https://github.com/lixi5338619/asyncpy.git",
    version="1.0.0",
    description="Use asyncio and aiohttp's concatenated web crawler framework",
    long_description=long_description,
    author="lx",
    author_email="125066648@qq.com",
    keywords="python web crawl asyncio",
    maintainer='lx',
    packages = find_packages(),
    platforms=["all"],

    install_requires=[
        'lxml',
        'parsel',
        'docopt',
        'aiohttp',
        ],
    python_requires='>=3.6',
    classifiers=[
        "Programming Language :: Python :: 3",
    ],

)

