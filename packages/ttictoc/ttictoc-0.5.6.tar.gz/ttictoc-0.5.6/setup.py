import setuptools

with open("README.md", "r") as f:
    long_description = f.read()

# def __get_version():
#  import json
#  with open('ttictoc/version.json') as f:
#    version = json.load(f)['version']
#  return version

version = "0.5.6"  # __get_version()

setuptools.setup(
    name="ttictoc",
    version=version,
    author="Hector Sanchez",
    author_email="hector.direct@gmail.com",
    license="MIT",
    description="Time parts of your code easily.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/hector-sab/ttictoc",
    keywords="tictoc tic toc time timing",
    packages=["ttictoc"],
    classifiers=(
        "Programming Language :: Python",
        "Programming Language :: Python :: 2.7",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.3",
        "Programming Language :: Python :: 3.4",
        "Programming Language :: Python :: 3.5",
        "Programming Language :: Python :: 3.6",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ),
    include_package_data=True,
    zip_safe=True,
)
