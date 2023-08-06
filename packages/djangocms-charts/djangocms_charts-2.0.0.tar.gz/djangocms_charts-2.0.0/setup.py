import os
from setuptools import find_packages, setup

with open(os.path.join(os.path.dirname(__file__), 'README.md')) as readme:
    README = readme.read()

# allow setup.py to be run from any path
os.chdir(os.path.normpath(os.path.join(os.path.abspath(__file__), os.pardir)))

setup(
    name='djangocms_charts',
    version='2.0.0',
    packages=find_packages(),
    include_package_data=True,
    license='MIT License',
    description='DjangoCMS Plugin to add and edit ChartJs charts',
    long_description=README,
    long_description_content_type='text/markdown',
    url='https://github.com/mcldev/djangocms-charts',
    author='Michael Carder Ltd',
    classifiers=[
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Framework :: Django',
        'Framework :: Django :: 1.11',
        'Framework :: Django :: 2.2',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
        'Topic :: Internet :: WWW/HTTP',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
    ],
    install_requires=[
        'six',
        'django>=1.11',
        'django-cms>=3.4',
    ],
    package_data={
        'readme': ['README.rst'],
        'license': ['LICENSE']
    },
)

