import asyncio
import logging

from rabbit.client import AioRabbitClient
from rabbit.publish import Publish
from rabbit.subscribe import Subscribe
from rabbit.task import StandardTask


class Consumer:
    def __init__(self, loop=None):
        logging.getLogger().setLevel(logging.DEBUG)
        self.loop = loop or asyncio.get_event_loop()
        self.subscribe_client = AioRabbitClient()
        self.loop.create_task(self.subscribe_client.persistent_connect())

    async def init(self):
        publish = Publish(self.subscribe_client)
        subscribe = Subscribe(
            client=self.subscribe_client, publish=publish, task=StandardTask()
        )
        await publish.configure()
        await subscribe.configure()

    def run(self):
        self.loop.run_until_complete(self.init())
        self.loop.run_forever()
