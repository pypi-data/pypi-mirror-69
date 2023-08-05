Coop - base for all (most) Neon Jungle sites
============================================

This is a base to build all Neon Jungle sites off.
This package contains all the common code shared
between sites, with the ideal Neon Jungle site containing only
model definitions, templates, and front end assets.

Making a release
----------------

Upgrade the version in ``coop/_version.py``.
Coops version stays in step with Wagtail. i.e. Coop 2.4.x uses Wagtail 2.4.x.
Point releases are used to add features during a Wagtail version lifespan.

Update the CHANGELOG. Please.

Tag your release:

.. code-block:: bash

    $ git tag "x.y.z"
    $ git push --tags

Make a virtual environment and activate it. You may already have one from last
time:

.. code-block:: bash

    $ python3 -m venv venv
    $ source venv/bin/activate
    $ pip install wheel twine # Only required once per venv

Then, package up and publish the package:

.. code-block:: bash

    $ rm -rf dist/ # delete any previous dists
    $ ./setup.py sdist bdist_wheel
    $ twine upload dist/*

And you are done!
