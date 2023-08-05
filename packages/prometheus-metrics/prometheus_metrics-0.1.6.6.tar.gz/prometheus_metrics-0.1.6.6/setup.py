import os
from setuptools import setup, find_packages


def read(fname):
    return open(os.path.join(os.path.dirname(__file__), fname)).read()



setup(
    name="prometheus_metrics",
    version="0.1.6.6",
    url="https://github.com/dr1s/prometheus_metrics",
    author="Daniel Schmitz",
    license="MIT",
    description="Manage prometheus metrics",
    long_description=read("README.md"),
    long_description_content_type="text/markdown",
    install_requires=[
        "prometheus_client",
    ],
    packages=find_packages(),
    include_package_data=True,
    entry_points={"console_scripts": ["emby_exporter=emby_exporter:main"]},
)
