=============================
pyfb-did
=============================

.. image:: https://badge.fury.io/py/pyfb-did.svg
    :target: https://badge.fury.io/py/pyfb-did

.. image:: https://travis-ci.org/mwolff44/pyfb-did.svg?branch=master
    :target: https://travis-ci.org/mwolff44/pyfb-did

.. image:: https://codecov.io/gh/mwolff44/pyfb-did/branch/master/graph/badge.svg
    :target: https://codecov.io/gh/mwolff44/pyfb-did

Your project description goes here

Documentation
-------------

The full documentation is at https://pyfb-did.readthedocs.io.

Quickstart
----------

Install pyfb-did::

    pip install pyfb-did

Add it to your `INSTALLED_APPS`:

.. code-block:: python

    INSTALLED_APPS = (
        ...
        'pyfb_did.apps.PyfbDidConfig',
        ...
    )

Add pyfb-did's URL patterns:

.. code-block:: python

    from pyfb_did import urls as pyfb_did_urls


    urlpatterns = [
        ...
        url(r'^', include(pyfb_did_urls)),
        ...
    ]

Features
--------

* TODO

Running Tests
-------------

Does the code actually work?

::

    source <YOURVIRTUALENV>/bin/activate
    (myenv) $ pip install tox
    (myenv) $ tox

Credits
-------

Tools used in rendering this package:

*  Cookiecutter_
*  `cookiecutter-djangopackage`_

.. _Cookiecutter: https://github.com/audreyr/cookiecutter
.. _`cookiecutter-djangopackage`: https://github.com/pydanny/cookiecutter-djangopackage




History
-------

1.0.3 (2020-05-21)
++++++++++++++++++

* Update dependencies

1.0.2 (2019-06-26)
++++++++++++++++++

* Add dependencies for migration

1.0.1 (2019-05-23)
++++++++++++++++++

* Add domain in SQL view

1.0.0 (2019-01-30)
++++++++++++++++++

* SQL view for kamailio

0.9.0 (2018-12-07)
++++++++++++++++++

* First release on PyPI.


