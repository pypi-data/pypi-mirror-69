aiocarbon
=========

.. image:: https://coveralls.io/repos/github/mosquito/aiocarbon/badge.svg?branch=master
    :target: https://coveralls.io/github/mosquito/aiocarbon
    :alt: Coveralls

.. image:: https://travis-ci.org/mosquito/aiocarbon.svg
    :target: https://travis-ci.org/mosquito/aiocarbon
    :alt: Travis CI

.. image:: https://img.shields.io/pypi/v/aiocarbon.svg
    :target: https://pypi.python.org/pypi/aiocarbon/
    :alt: Latest Version

.. image:: https://img.shields.io/pypi/wheel/aiocarbon.svg
    :target: https://pypi.python.org/pypi/aiocarbon/

.. image:: https://img.shields.io/pypi/pyversions/aiocarbon.svg
    :target: https://pypi.python.org/pypi/aiocarbon/

.. image:: https://img.shields.io/pypi/l/aiocarbon.svg
    :target: https://pypi.python.org/pypi/aiocarbon/

Client for feeding data to graphite.

Example
-------

Counter example:

.. code-block:: python

    import asyncio
    import aiocarbon


    async def main(loop):
        aiocarbon.setup(
            host="127.0.0.1", port=2003, client_class=aiocarbon.TCPClient
        )

        for _ in range(1000):
            with aiocarbon.Counter("foo"):
                await asyncio.sleep(0.1)


    if __name__ == "__main__":
        loop = asyncio.get_event_loop()
        loop.run_until_complete(main(loop))
        loop.close()
