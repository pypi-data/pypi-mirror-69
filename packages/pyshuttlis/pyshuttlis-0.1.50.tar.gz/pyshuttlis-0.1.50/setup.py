from setuptools import setup, find_packages

setup(
    name="pyshuttlis",
    version="0.1.50",
    description="Utilities",
    url="https://github.com/shuttl-tech/pyshuttlis",
    author="Shuttl",
    author_email="sherub.thakur@shuttl.com",
    license="MIT",
    packages=find_packages(),
    classifiers=["Programming Language :: Python :: 3.7"],
    install_requires=["shapely", "pytz", "voluptuous", "cython", "geopy", "geo-py"],
    extras_require={
        "test": ["pytest", "pytest-runner", "pytest-cov", "pytest-pep8"],
        "dev": ["flake8"],
    },
)
