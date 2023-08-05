'''Install scikit-glpk bindings as well as GLPK library.'''

from setuptools import find_packages, setup

setup(
    name='scikit-glpk',
    version='0.0.3',
    author='Nicholas McKibben',
    author_email='nicholas.bgp@gmail.com',
    url='https://github.com/mckib2/scikit-glpk',
    license='MIT',
    description='Python linprog interface for GLPK',
    long_description=open('README.rst', encoding='utf-8').read(),
    packages=find_packages(),
    keywords='glpk linprog scikit',
    install_requires=open('requirements.txt').read().split(),
    python_requires='>=3.5',
)
