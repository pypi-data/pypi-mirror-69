=====
Scruf
=====

Scruf is a functional testing framework for command line applications. It is
heavily inspired by cram_. This is currently early in development and while I
aim to maintain the current interface breaking changes may occur.

.. _cram: https://bitheap.org/cram/

Test Structure
==============

This is a summary of the structure of tests expected by ``scruf``

* Lines beginning with ``#`` are comments and are ignored

* Non comment lines beginning with any non-space character are interpreted as
  test descriptions

* Lines beginning with 4 spaces followed by a ``$`` are commands to be tested

* Lines beginning with 4 space followed by a ``>`` are continuations of
  commands

* Non command or continuation lines beginning with 4 spaces are expected
  command outputs

A quick example test::

   "printf" produces text
   $ printf "hello\nworld!\n"
   hello
   world

There are examples present under ``examples/``

Expected Output Specification
-----------------------------

Documentation coming soon

Test Output
===========

By default ``scruf`` will output results in TAP_ (Test Anything Protocol)

.. _TAP: http://testanything.org
