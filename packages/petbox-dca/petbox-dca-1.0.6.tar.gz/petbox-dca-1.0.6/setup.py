"""
Decline Curve Models
Originally developed for David S. Fulford's thesis research

Author
------
David S. Fulford
Derrick W. Turk

Notes
-----
Created on August 5, 2019
"""

import os
import sys
from re import sub

from petbox.dca import __version__

try:
    from setuptools import setup  # type: ignore
except ImportError:
    from distutils.core import setup


def get_long_description() -> str:
    # Fix display issues on PyPI caused by RST markup
    with open('README.rst', 'r') as f:
        readme = f.read()

    replacements = [
        '.. automodule:: petbox.dca',
        ':noindex:',
    ]

    def replace(s: str) -> str:
        for r in replacements:
            s = s.replace(r, '')
        return s

    lines = []
    with open('docs/versions.rst', 'r') as f:
        iter_f = iter(f)
        _ = next(f)
        for line in f:
            if any(r in line for r in replacements):
                continue
            lines.append(line)

    version_history = ''.join(lines)
    version_history = sub(r':func:`([a-zA-Z0-9._]+)`', r'\1', version_history)

    for l in version_history:
        if ':noindex:' in l:
            print("STILL HERE")

    return readme + '\n\n' + version_history


if sys.argv[-1] == 'build':
    print(f'\nBuilding version {__version__}...\n')
    os.system('rm -r dist\\')  # clean out dist/
    os.system('python setup.py sdist bdist_wheel')


setup(
    name='petbox-dca',
    version=__version__,
    description='Decline Curve Library',
    long_description=get_long_description(),
    long_description_content_type="text/x-rst",
    url='https://github.com/petbox-dev/dca',
    author='David S. Fulford',
    author_email='dsfulford@gmail.com',
    license='MIT',
    install_requires=['numpy>=1.17', 'scipy'],
    zip_safe=False,
    packages=['petbox.dca'],
    package_data={
        'petbox.dca': ['py.typed']
    },
    include_package_data=True,
    python_requires='>=3.7',
    classifiers=[
        'Development Status :: 5 - Production/Stable',
        'Intended Audience :: Science/Research',
        'Intended Audience :: Education',
        'Intended Audience :: Developers',
        'Natural Language :: English',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
        'Programming Language :: Python :: Implementation :: CPython',
        'Topic :: Scientific/Engineering',
        'Topic :: Scientific/Engineering :: Mathematics',
        'Topic :: Software Development :: Libraries',
        'Typing :: Typed'
    ],
    keywords=[
        'petbox-dca', 'dca', 'decline curve', 'type curve',
        'production forecast', 'production data analysis'
    ],
)
