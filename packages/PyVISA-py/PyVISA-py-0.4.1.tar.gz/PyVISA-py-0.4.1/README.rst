PyVISA-py
=========

A PyVISA backend that implements a large part of the "Virtual Instrument Software
Architecture" (VISA_) in pure Python (with the help of some nice cross platform
libraries python packages!).


Description
-----------

PyVISA started as wrapper for the NI-VISA library and therefore you need to install
National Instruments VISA library in your system. This works most of the time,
for most people. But NI-VISA is a proprietary library that only works on certain
systems. That is when PyVISA-py jumps in.

Starting from version 1.6, PyVISA allows to use different backends. These backends can be
dynamically loaded. PyVISA-py is one of such backends. It implements most of the methods
for Message Based communication (Serial/USB/GPIB/Ethernet) using Python and some well developed,
easy to deploy and cross platform libraries

.. _VISA: http://www.ivifoundation.org/Downloads/Specifications.htm


VISA and Python
---------------

Python has a couple of features that make it very interesting for measurement controlling:

- Python is an easy-to-learn scripting language with short development cycles.
- It represents a high abstraction level, which perfectly blends with the abstraction
  level of measurement programs.
- It has a very rich set of native libraries, including numerical and plotting modules for
  data analysis and visualisation.
- A large set of books (in many languages) and on-line publications is available.


Requirements
------------

- Python (tested with 2.7, 3.4+)
- PyVISA 1.6+

Optionally
- PySerial (to interface with Serial instruments)
- PyUSB (to interface with USB instruments)
- linux-gpib (to interface with gpib instruments, only on linux)
- gpib-ctypes (to interface with GPIB instruments on Windows and Linux, warning: experimental)


Python 2 support
----------------

With Python 2 EOL behind us, and given the limited time maintainers have,
the 0.4.0 release of PyVISA-py  will be the last version of PyVISA-py supporting
Python 2.


Installation
--------------

Using pip:

    $ pip install pyvisa-py


Documentation
--------------

The documentation can be read online at https://pyvisa-py.readthedocs.org
