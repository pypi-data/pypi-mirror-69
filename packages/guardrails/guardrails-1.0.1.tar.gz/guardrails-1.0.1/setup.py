import setuptools

with open('requirements.txt') as f:
    required = f.read().splitlines()


def get_license():
    """ replace the license content while creating the package"""
    with open("LICENSE.md", "r", encoding="utf8") as fh:
        license_description = fh.read()
        return license_description


def get_maintainers():
    """ replace the maintainers content while creating the package"""
    with open("MAINTAINERS.md", "r", encoding="utf8") as fh:
        maintainers_description = fh.read()
        return maintainers_description


with open("README.md", "r", encoding="utf8") as fh:
    long_description = fh.read()
    if "[MAINTAINERS.md](MAINTAINERS.md)" in long_description:
        long_description = long_description.replace("[MAINTAINERS.md](MAINTAINERS.md)", str(get_maintainers()))
    if "[License.md](License.md)" in long_description:
        long_description = long_description.replace("[License.md](License.md)", str(get_license()))
setuptools.setup(
    name="guardrails",
    version="1.0.1",
    author="Brijesh",
    author_email="brijesh.krishnank@philips.com",
    description="guardrails",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/philips-software/python_guardrails",
    packages=setuptools.find_packages(include=['guardrails'], exclude=['test', '*.test', '*.test.*']),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    install_requires=required,
    python_requires='>=3.7',
)