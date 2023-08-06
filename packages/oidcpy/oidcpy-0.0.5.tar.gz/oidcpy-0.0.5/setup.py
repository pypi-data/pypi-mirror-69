import setuptools

with open("README.md", "r") as fd:
    long_description = fd.read()

setuptools.setup(
    name="oidcpy",
    version="0.0.5",
    author="Marcel van den Dungen",
    author_email="author@example.com",
    description="OpenID Connect library code",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/marcelvandendungen/oidcpy",
    py_modules=["authorize"],
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
)
