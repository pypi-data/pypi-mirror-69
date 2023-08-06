import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="orthoseg", 
    version="0.0.10",
    author="Pieter Roggemans",
    author_email="pieter.roggemans@gmail.com",
    description="Package to make it easier to segment orthophotos.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/theroggy/orthoseg",
    packages=setuptools.find_packages(),
    include_package_data=True,
    install_requires=[
            "tensorflow-gpu", "pillow", "rasterio", "geopandas", 
            "owslib", "segmentation-models", "geofile-ops"],
    entry_points='''
            [console_scripts]
            orthoseg=orthoseg.orthoseg:main
            ''',
    classifiers=[
            "Programming Language :: Python :: 3",
            "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
)