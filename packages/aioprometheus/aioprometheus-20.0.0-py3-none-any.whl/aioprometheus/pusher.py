import asyncio

try:
    import aiohttp
    import aiohttp.web
except ImportError as err:
    aiohttp = None

from urllib.parse import urljoin
from .formats import text

# imports only used for type annotations
from asyncio.base_events import BaseEventLoop
from .registry import CollectorRegistry


class Pusher(object):
    """
    This class can be used in applications that can't support the
    standard pull strategy. The pusher object pushes the metrics
    to a push-gateway which can be scraped by Prometheus.
    """

    PATH = "/metrics/job/{0}"

    def __init__(self, job_name: str, addr: str, loop: BaseEventLoop = None) -> None:
        """

        :param job_name: The name of the job.

        :param addr: The address of the push gateway. The default port the
          push gateway listens on is 9091 so the address will typically be
          something like this ``http://hostname:9091``.

        :param loop: The event loop instance to use. If no loop is specified
          then the default event loop will be used.
        """
        if aiohttp is None:
            raise RuntimeError(
                "`aiohttp` could not be imported. Did you install `aioprometheus` "
                "with the `aiohttp` extra?"
            )

        self.job_name = job_name
        self.addr = addr
        self.loop = loop or asyncio.get_event_loop()
        self.formatter = text.TextFormatter()
        self.headers = self.formatter.get_headers()
        self.path = urljoin(self.addr, self.PATH.format(job_name))

    async def add(self, registry: CollectorRegistry) -> "aiohttp.web.Response":
        """
        ``add`` works like replace, but only metrics with the same name as the
        newly pushed metrics are replaced.
        """
        async with aiohttp.ClientSession() as session:
            payload = self.formatter.marshall(registry)
            async with session.post(
                self.path, data=payload, headers=self.headers
            ) as resp:
                return resp

    async def replace(self, registry: CollectorRegistry) -> "aiohttp.web.Response":
        """
        ``replace`` pushes new values for a group of metrics to the push
        gateway.

        .. note::

            All existing metrics with the same grouping key specified in the
            URL will be replaced with the new metrics value.

        """
        async with aiohttp.ClientSession() as session:
            payload = self.formatter.marshall(registry)
            async with session.put(
                self.path, data=payload, headers=self.headers
            ) as resp:
                return resp

    async def delete(self, registry: CollectorRegistry) -> "aiohttp.web.Response":
        """
        ``delete`` deletes metrics from the push gateway. All metrics with
        the grouping key specified in the URL are deleted.
        """
        async with aiohttp.ClientSession() as session:
            payload = self.formatter.marshall(registry)
            async with session.delete(
                self.path, data=payload, headers=self.headers
            ) as resp:
                return resp
