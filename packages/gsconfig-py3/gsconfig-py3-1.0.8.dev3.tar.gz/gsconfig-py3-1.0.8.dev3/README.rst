gsconfig-py3
============

gsconfig-py3 is a python3 library for manipulating a GeoServer instance via the GeoServer RESTConfig API.

gsconfig-py3 is a port of gsconfig (https://github.com/boundlessgeo/gsconfig) for python3.

Tested with geoserver 2.8.1.

The project is distributed under a `MIT License <LICENSE.txt>`_ .

Installing
==========

.. code-block:: shell

    git clone git@github.com:dimitri-justeau/gsconfig-py3.git
    cd gsconfig-py3
    python setup.py install

Getting Help
============

gsconfig-py3 keeps the same API as gsconfig, so you can refer to http://boundlessgeo.github.io/gsconfig/ for getting help to use it.

Sample Layer Creation Code
==========================

.. code-block:: python

    from geoserver.catalog import Catalog
    cat = Catalog("http://localhost:8080/geoserver/")
    topp = cat.get_workspace("topp")
    shapefile_plus_sidecars = shapefile_and_friends("states")
    # shapefile_and_friends should look on the filesystem to find a shapefile
    # and related files based on the base path passed in
    #
    # shapefile_plus_sidecars == {
    #    'shp': 'states.shp',
    #    'shx': 'states.shx',
    #    'prj': 'states.prj',
    #    'dbf': 'states.dbf'
    # }

    # 'data' is required (there may be a 'schema' alternative later, for creating empty featuretypes)
    # 'workspace' is optional (GeoServer's default workspace is used by... default)
    # 'name' is required
    ft = cat.create_featurestore(name, workspace=topp, data=shapefile_plus_sidecars)
