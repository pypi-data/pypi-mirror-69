"""Setup for the partition-networkx package."""

import setuptools

with open('README.md', encoding='utf-8') as f:
    README = f.read()

setuptools.setup(
    author="Valérie Poulin and François Théberge",
    author_email="theberge@ieee.org",
    name='partition_networkx',
    license="MIT",
    description='Adds ensemble clustering (ecg) and graph-aware measures (gam) to networkx.',
    version='v0.0.1',
    long_description=README,
    long_description_content_type='text/markdown',
    url='https://github.com/ftheberge/graph-partition-and-measures',
    packages=setuptools.find_packages(),
    python_requires=">=3.6",
    install_requires=['networkx','python-louvain','numpy'],
    classifiers=[
        # Trove classifiers
        # (https://pypi.python.org/pypi?%3Aaction=list_classifiers)
        'Development Status :: 4 - Beta',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3',
        'Topic :: Scientific/Engineering',
        'Topic :: Software Development :: Libraries :: Python Modules',
        'Intended Audience :: Science/Research',
    ],
)
