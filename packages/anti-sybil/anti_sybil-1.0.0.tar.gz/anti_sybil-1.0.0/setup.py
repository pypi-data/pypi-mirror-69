import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="anti_sybil",
    version="1.0.0",
    author="Abram Symons",
    author_email="abram.symons@protonmail.com",
    description="Anti sybil package for BrightID",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="http://github.com/BrightID/BrightID-Node",
    packages=setuptools.find_packages(),
    install_requires=['networkx==2.1', 'flask', 'requests', 'matplotlib', 'xmltodict'],
    include_package_data=True,
    zip_safe=False,
    classifiers=[
        "Programming Language :: Python :: 3.7",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ]
)