Dow Jones Factiva Pipelines Library
###################################

Tools for processing and analysing data from Snapshots and Streams.

Installation
============
To install this library, run the following commands.

.. code-block::

    $ pip install --upgrade factiva-pipelines

Using Library services
======================
Create a new snapshot and download to a local repository just require a few lines of code.

.. code-block:: python

    from factiva.pipelines import snapshot_files as sf
    from factiva.pipelines import metadata as fm

    all_articles = sf.read_folder('./nag6oqitd2', only_stats=True)
    all_articles = fm.expand_country_codes(covid)
    all_articles = fm.expand_industry_codes(covid)

In the previous code a folder from a Snapshot download is read fully into a Pandas Dataframe. Then, some metadata codes are expanded into new columns with their human-readable texts.
