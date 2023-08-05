from os.path import abspath, dirname

from setuptools import setup
from setuptools.command.install import install


LONG_DESCRIPTION = open(dirname(abspath(__file__)) + "/README.md", "r").read()


class PostInstallCommand(install):
    def run(self):
        install.run(self)
        print("mypy_boto3: Running post-install script for mypy-boto3-efs")
        try:
            from mypy_boto3.main import add_package_to_index

            add_package_to_index("efs")
            print("mypy_boto3: Service efs added to index")
        except Exception as e:
            print("mypy_boto3: Package index update failed for mypy-boto3-efs:", e)


setup(
    name="mypy-boto3-efs",
    version="1.13.13.0",
    packages=["mypy_boto3_efs"],
    url="https://github.com/vemel/mypy_boto3_builder",
    license="MIT License",
    author="Vlad Emelianov",
    author_email="vlad.emelianov.nz@gmail.com",
    description="Type annotations for boto3.EFS 1.13.13 service, generated by mypy-boto3-buider 1.0.9",
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Intended Audience :: Developers",
        "Environment :: Console",
        "License :: OSI Approved :: MIT License",
        "Natural Language :: English",
        "Operating System :: OS Independent",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3 :: Only",
        "Programming Language :: Python :: Implementation :: CPython",
        "Typing :: Typed",
    ],
    keywords="boto3 efs type-annotations boto3-stubs mypy typeshed autocomplete auto-generated",
    long_description=LONG_DESCRIPTION,
    long_description_content_type="text/markdown",
    package_data={"mypy_boto3_efs": ["py.typed"]},
    python_requires=">=3.6",
    project_urls={
        "Documentation": "https://mypy-boto3-builder.readthedocs.io/en/latest/",
        "Source": "https://github.com/vemel/mypy_boto3_builder",
        "Tracker": "https://github.com/vemel/mypy_boto3_builder/issues",
    },
    install_requires=["typing_extensions; python_version < '3.8'",],
    zip_safe=False,
    cmdclass={"install": PostInstallCommand},
)
