.. image:: https://beeware.org/static/images/defaultlogo.png
    :width: 72px
    :target: https://beeware.org

Travertino
==========

.. image:: https://img.shields.io/pypi/pyversions/travertino.svg
    :target: https://pypi.python.org/pypi/travertino

.. image:: https://img.shields.io/pypi/v/travertino.svg
    :target: https://pypi.python.org/pypi/travertino

.. image:: https://img.shields.io/pypi/status/travertino.svg
    :target: https://pypi.python.org/pypi/travertino

.. image:: https://img.shields.io/pypi/l/travertino.svg
    :target: https://github.com/beeware/travertino/blob/master/LICENSE

.. image:: https://github.com/beeware/travertino/workflows/CI/badge.svg?branch=master
   :target: https://github.com/beeware/travertino/actions
   :alt: Build Status

.. image:: https://badges.gitter.im/beeware/general.svg
    :target: https://gitter.im/beeware/general

Travertino is a set of constants and utilities for describing user
interfaces, including:

* colors
* directions
* text alignment
* sizes

Usage
-----

Install Travatino:

    $ pip install travertino

Then in your python code, import and use it::

    >>> from travertino import color, rgb,

    # Define a new color as an RGB triple
    >>> red = rgb(0xff, 0x00, 0x00)

    # Parse a color from a string
    >>> color('#dead00')
    rgb(0xde, 0xad, 0x00)

    # Reference a pre-defined color
    >>> color('RebeccaPurple')
    rgb(102, 51, 153)


Community
---------

Travertino is part of the `BeeWare suite`_. You can talk to the community through:

* `@pybeeware on Twitter`_

* The `beeware/general`_ channel on Gitter.

We foster a welcoming and respectful community as described in our
`BeeWare Community Code of Conduct`_.

Contributing
------------

If you experience problems with Travertino, `log them on GitHub`_. If you
want to contribute code, please `fork the code`_ and `submit a pull request`_.

.. _BeeWare suite: http://beeware.org
.. _Read The Docs: https://travertino.readthedocs.io
.. _@pybeeware on Twitter: https://twitter.com/pybeeware
.. _beeware/general: https://gitter.im/beeware/general
.. _BeeWare Community Code of Conduct: http://beeware.org/community/behavior/
.. _log them on Github: https://github.com/beeware/travertino/issues
.. _fork the code: https://github.com/beeware/travertino
.. _submit a pull request: https://github.com/beeware/travertino/pulls
