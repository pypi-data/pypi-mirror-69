
onecron
=======


.. image:: https://img.shields.io/pypi/v/package_name.svg
   :target: https://pypi.python.org/pypi/onecron
   :alt: Latest PyPI version


sleep until next specified time.

Usage
-----

.. code-block::

   $ onecron 12:00 --debug 2>/dev/null
   [I|16910|200522 10:04:05.773 root:MainThread:onecron:56] Wait for 2020-05-22 12:00:00
   ^C
   $ onecron 0 12 * * * --debug 2>/dev/null
   [I|17467|200522 10:04:20.802 root:MainThread:onecron:56] Wait for 2020-05-22 12:00:00
   ^C
   $ onecron 0 12 --debug 2>/dev/null
   [I|17717|200522 10:04:30.514 root:MainThread:onecron:56] Wait for 2020-05-22 12:00:00
   $ ./onecron 6 10 && echo $(date)
   2020年 5月 22日 金曜日 10:06:00 JST

Installation
------------

.. code-block::

   pip install onecron

Requirements
^^^^^^^^^^^^

Compatibility
-------------

Licence
-------

Authors
-------

package_name was written by `fx-kirin <fx.kirin@gmail.com>`_.
