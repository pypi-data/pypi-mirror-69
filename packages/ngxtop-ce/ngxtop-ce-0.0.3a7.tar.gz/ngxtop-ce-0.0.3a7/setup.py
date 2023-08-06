from setuptools import setup

setup(
    name="ngxtop-ce",
    version="0.0.3a7",
    description="Real-time metrics for nginx server",
    long_description=open("README.rst").read(),
    license="MIT",
    url="https://github.com/ngxtop/ngxtop",
    author="Lucas Ramage",
    author_email="ramage.lucas@protonmail.com",
    classifiers=[
        "Development Status :: 4 - Beta",
        "License :: OSI Approved :: MIT License",
        "Environment :: Console",
        "Intended Audience :: Developers",
        "Intended Audience :: System Administrators",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.2",
        "Programming Language :: Python :: 3.3",
        "Programming Language :: Python :: 3.7",
    ],
    keywords="cli monitoring nginx system",
    packages=["ngxtop"],
    install_requires=["docopt", "tabulate", "pyparsing"],
    entry_points={"console_scripts": ["ngxtop = ngxtop.ngxtop:main",],},
)
