Interbreathe
============

This module fixes pending_xrefs when intersphinx and breathe are run
together across multi-repo projects. Since not enough information is
added to the nodes built from the doxygen documentation, intersphinx
is unable to correctly fixup the paths for references that exist in
other projects. This module fixes it by registering a resolver post
transform with higher priority than intersphinx, so it adds the
missing information first.

Download
--------

``interbreathe`` is available from github and `PyPI, the Python Package
Index <http://pypi.python.org/pypi/interbreathe>`_. It can be installed with::

    pip install interbreathe

Using
-----

To enable it, just add:

.. code-block::

    extensions = [
        sphinx.ext.intersphinx,
        breathe,
        interbreathe,  # <- add it!
        ...
    ]

To your main project's ``conf.py``.
