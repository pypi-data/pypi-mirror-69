from setuptools import setup
from setuptools.command.test import test as TestCommand
import sys
import os

# Read the version but avoid importing the __init__.py since
# we might not have all dependencies installed
with open(os.path.join(os.path.dirname(__file__), "vi3o", "version.py")) as fp:
    exec(fp.read())

requirements=["cffi>=1.0.0"]

if sys.version_info < (3,):
    requirements.append("numpy>=1.7.1,<1.17")
else:
    requirements.append("numpy>=1.7.1")

if sys.version_info <= (3, 3, 0):
    requirements.append("pathlib2")

class PyTestCommand(TestCommand):
    user_options = []

    def finalize_options(self):
        pass

    def run_tests(self):
        import pytest
        errno = pytest.main()
        sys.exit(errno)

setup(
    name='vi3o',
    description='VIdeo and Image IO',
    long_description='''
Utility for loading/saving/displaying video and images. It gives random
access to mjpg (in http multipart format) and H264 (in .mkv format) video
frames. For recordings origination from Axis cameras the camera system
time at the time of capture is provided as timestamp for each frame.
    ''',
    version=__version__,
    packages=['vi3o'],
    zip_safe=False,
    url='http://vi3o.readthedocs.org',
    author='Hakan Ardo',
    author_email='hakan@debian.org',
    license='MIT',
    setup_requires=["cffi>=1.0.0"],
    cffi_modules=["build_mjpg.py:ffi", "build_mkv.py:ffi"],
    install_requires=requirements,
    extras_require={
        "full": [
            "pillow < 7",
            "pyglet < 1.5"
        ]
    },
    cmdclass={'test': PyTestCommand},
    tests_require=['pytest <= 4.6, !=4.6.0', 'pillow < 7', "mock"],
)
