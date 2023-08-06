=============================
pyinaturalist
=============================

.. image:: https://badge.fury.io/py/pyinaturalist.png
    :target: http://badge.fury.io/py/pyinaturalist

.. image:: https://www.travis-ci.com/niconoe/pyinaturalist.svg?branch=master
    :target: https://www.travis-ci.com/niconoe/pyinaturalist

.. image:: https://readthedocs.org/projects/pyinaturalist/badge/?version=latest
    :target: https://pyinaturalist.readthedocs.io/en/latest/?badge=latest
    :alt: Documentation Status

Python client for the `iNaturalist APIs <https://www.inaturalist.org/pages/api+reference>`_.

Status
------

Work in progress: features are implemented one by one, as time allows and as the authors needs them.

That being said, many things are already possible (searching observations, creating a new observation, ...) and
contributions are welcome!

Python 3 only.

Examples
--------

Search all observations matching a criteria:
--------------------------------------------

.. code-block:: python

    from pyinaturalist.node_api import get_all_observations

    obs = get_all_observations(params={'user_id': 'niconoe'})

see `available parameters <https://api.inaturalist.org/v1/docs/#!/Observations/get_observations/>`_.

For authenticated API calls, you first need to obtain a token for the user:
---------------------------------------------------------------------------


.. code-block:: python

    from pyinaturalist.rest_api import get_access_token

    token = get_access_token(username='<your_inaturalist_username>', password='<your_inaturalist_password>',
                             app_id='<your_inaturalist_app_id>',
                             app_secret=<your_inaturalist_app_secret>)



Note: you'll need to `create an iNaturalist app <https://www.inaturalist.org/oauth/applications/new>`_.

Create a new observation:
-------------------------

.. code-block:: python

    from pyinaturalist.rest_api import create_observations

    params = {'observation':
                {'taxon_id': 54327,  # Vespa Crabro
                 'observed_on_string': datetime.datetime.now().isoformat(),
                 'time_zone': 'Brussels',
                 'description': 'This is a free text comment for the observation',
                 'tag_list': 'wasp, Belgium',
                 'latitude': 50.647143,
                 'longitude': 4.360216,
                 'positional_accuracy': 50, # meters,

                 # sets vespawatch_id (an observation field whose ID is 9613) to the value '100'.
                 'observation_field_values_attributes':
                    [{'observation_field_id': 9613,'value': 100}],
                 },
    }

    r = create_observations(params=params, access_token=token)

    new_observation_id = r[0]['id']

Upload a picture for this observation:
--------------------------------------
.. code-block:: python

    from pyinaturalist.rest_api import add_photo_to_observation

    r = add_photo_to_observation(observation_id=new_observation_id,
                                 file_object=open('/Users/nicolasnoe/vespa.jpg', 'rb'),
                                 access_token=token)

Update an existing observation of yours:
----------------------------------------
.. code-block:: python

        from pyinaturalist.rest_api import update_observation

        p = {'ignore_photos': 1,  # Otherwise existing pictures will be deleted
             'observation': {'description': 'updated description !'}}
        r = update_observation(observation_id=17932425, params=p, access_token=token)


Get a list of all (globally available) observation fields:
----------------------------------------------------------
.. code-block:: python

    from pyinaturalist.rest_api import get_all_observation_fields

    r = get_all_observation_fields(search_query="DNA")

Sets an observation field value to an existing observation:
-----------------------------------------------------------
.. code-block:: python

    from pyinaturalist.rest_api import put_observation_field_values

    put_observation_field_values(observation_id=7345179,
                                 observation_field_id=9613,
                                 value=250,
                                 access_token=token)

