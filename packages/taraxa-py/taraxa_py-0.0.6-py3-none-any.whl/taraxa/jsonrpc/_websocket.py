import json
import asyncio
import websockets
from . import NODE_WS_HOST, NODE_WS_PORT, JSONRPC, ID
import logging


class Config():

    def __init__(self, host=NODE_WS_HOST, port=NODE_WS_PORT, jsonrpc=JSONRPC, id=ID):
        self.host = host
        self.port = port
        self.jsonrpc = jsonrpc
        self.id = id

    def __str__(self):
        return "host:{},port:{},jsonrpc:{},id:{}".format(self.host, self.port, self.jsonrpc, self.id)


config = Config()


def set_ws(params):
    if "host" in params:
        config.host = params["host"]
    if "port" in params:
        config.port = params["port"]
    if "jsonrpc" in params:
        config.port = params["jsonrpc"]
    if "id" in params:
        config.port = params["id"]


def reset_ws():
    config.host = NODE_WS_HOST
    config.port = NODE_WS_PORT
    config.jsonrpc = JSONRPC
    config.id = ID


async def send_ws(data, callback, host="", port=0):
    if not host:
        host = config.host
    if not port:
        port = config.port

    while True:
        try:
            async with websockets.connect('ws://' + host + ':' + str(port)) as ws:
                await ws.send(data)
                try:
                    async for msg in ws:
                        _data = json.loads(msg)
                        callback(_data)
                except ConnectionRefusedError as e:
                    logging.info(
                        'lose connection,reconnect %s second later.\n%s' % (0.5, data))
                    await asyncio.sleep(0.5)
        except ConnectionRefusedError as e:
            logging.info(
                'connect fail,try again %s second later.\n%s' % (0.5, data))
            await asyncio.sleep(0.5)


def message_ws(jsonrp, method, params, id):
    trx = {"jsonrpc": jsonrp, "method": method, "params": params, "id": id}
    return json.dumps(trx)


def traxa_rpc_ws(func):

    def wrap_func(*args, **kwargs):
        jsonrpc = kwargs.get("jsonrpc", config.jsonrpc)  # 默认参数
        method = func.__name__  # jsonrpc方法名同函数名
        params, callback = func(*args, **kwargs)
        id = kwargs.get("id", config.id)  # 默认参数
        host = kwargs.get("host", config.host)
        port = kwargs.get("port", config.port)
        trx = message_ws(jsonrpc, method, params, id)

        loop = asyncio.get_event_loop()
        loop.run_until_complete(send_ws(trx, callback, host=host, port=port))

    return wrap_func


@traxa_rpc_ws
def eth_subscribe(action, callback, **kwargs):
    params = [action]
    return params, callback


def newOrderedBlock(callback, **kwargs):
    eth_subscribe("newOrderedBlock", callback, **kwargs)


def newDagBlocks(callback, **kwargs):
    eth_subscribe("newDagBlocks", callback, **kwargs)


def newScheduleBlocks(callback, **kwargs):
    eth_subscribe("newScheduleBlocks", callback, **kwargs)


def newDagBlocksFinalized(callback, **kwargs):
    eth_subscribe("newDagBlocksFinalized", callback, **kwargs)


if __name__ == "__main__":
    callback = print
    newDagBlocksFinalized(callback)
