import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="xl_tool", # Replace with your own username
    version="0.1.6",
    author="Xiaolin",
    author_email="119xiaolin@163.com",
    description="my tool function",
    long_description=long_description,
    long_description_content_type="text/markdown",
	install_requires=['requests>=2.21.0','numpy>=1.16.0','chardet>=3.0.4'],
    url="",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.5',
	
)