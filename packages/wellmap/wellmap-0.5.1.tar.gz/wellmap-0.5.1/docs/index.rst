*************************************************
``wellmap`` — File format for 96-well plate layouts
*************************************************

.. module:: wellmap

Many medium-throughput experiments produce data in 24-, 96-, or 384-well plate 
format.  However, it can be a challenge to keep track of which wells (e.g. A1, 
B2, etc.) correspond to which experimental conditions (e.g. genotype, drug 
concentration, replicate number, etc.) for large numbers of experiments.  It 
can also be a challenge to write analysis scripts flexible enough to handle the 
different plate layouts that will inevitably come up as more and more 
experiments are run.

The ``wellmap`` package solves these challenges by introducing a TOML-based file 
format that succinctly describes the organization of wells on plates.  The file 
format is designed to be human-readable and -writable, so it can serve as a 
standalone digital record.  The file format can also parsed by ``wellmap`` to 
help write analysis scripts that will work regardless of how you (or your 
collaborators) organize wells on your plates.

.. image:: https://img.shields.io/pypi/v/wellmap.svg
   :target: https://pypi.python.org/pypi/wellmap

.. image:: https://img.shields.io/pypi/pyversions/wellmap.svg
   :target: https://pypi.python.org/pypi/wellmap

.. image:: https://img.shields.io/travis/kalekundert/wellmap.svg
   :target: https://travis-ci.org/kalekundert/wellmap

.. image:: https://readthedocs.org/projects/wellmap/badge/?version=latest
   :target: http://wellmap.readthedocs.io/en/latest/

.. image:: https://img.shields.io/coveralls/kalekundert/wellmap.svg
   :target: https://coveralls.io/github/kalekundert/wellmap?branch=master

.. toctree::
   :caption: Getting Started
   :hidden:

   basic_usage
   using_from_r
   example_layouts
   related_software
   getting_help

.. toctree::
   :caption: Reference
   :hidden:
   
   file_format
   python_api
   command_line

