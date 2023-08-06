import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="wenux",  # Replace with your own username
    version="1.0.1",
    author="Jozef Urbanovský",
    author_email="jurbanov@redhat.com",
    description="WAN emulator for Linux",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/Axonis/DP",
    packages=setuptools.find_packages(),
    include_package_data=True,
    classifiers=[
        "Programming Language :: Python :: 3.7",
        "License :: OSI Approved :: GNU General Public License v3 (GPLv3)",
        "Operating System :: POSIX :: Linux",
    ],
    python_requires='>=3.7',
)
