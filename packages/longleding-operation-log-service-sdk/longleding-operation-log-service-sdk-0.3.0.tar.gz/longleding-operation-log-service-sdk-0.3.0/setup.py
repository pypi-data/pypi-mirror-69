# -*- coding: utf-8 -*-
import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="longleding-operation-log-service-sdk",
    version="0.3.0",
    author="Shi Ran",
    author_email="ran.shi@longleding.com",
    description="Longleding Operation Log Service SDK",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://git.emhub.top/em/operation-log-service",
    packages=setuptools.find_packages(),
    install_requires=[
        "attrs",
        "grpcio",
        "marshmallow",
    ],
    classifiers=[
        "Programming Language :: Python :: 3",
        "Topic :: System :: Logging",
    ],
    python_requires='>=3.6',
)
