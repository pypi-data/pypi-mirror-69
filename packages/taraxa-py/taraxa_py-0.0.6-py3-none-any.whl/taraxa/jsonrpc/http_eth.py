from .utl import *
from ._http import *


@traxa_rpc
def eth_syncing():
    params = []
    return params


@traxa_rpc
def eth_coinbase(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_mining():
    params = []
    return params


@traxa_rpc
def eth_hashrate(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_gasPrice(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_accounts(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_getBalance(address, tag="latest", **kwargs):
    tag = tag_check(tag)
    params = [address, tag]
    return params


@traxa_rpc
def eth_blockNumber(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_getStorageAt(address, position, tag="latest", **kwargs):
    tag = tag_check(tag)
    params = [address, position, tag]
    return params


@traxa_rpc
def eth_getTransactionCount(address, tag="latest", **kwargs):
    tag = tag_check(tag)
    params = [address, tag]
    return params


@traxa_rpc
def eth_getBlockTransactionCountByHash(hash, **kwargs):
    params = [hash]
    return params


@traxa_rpc
def eth_getBlockTransactionCountByNumber(tag, **kwargs):
    tag = tag_check(tag)
    params = [tag]
    return params


@traxa_rpc
def eth_getUncleCountByBlockHash(hash, **kwargs):
    params = [hash]
    return params


@traxa_rpc
def eth_getUncleCountByBlockNumber(tag, **kwargs):
    tag = tag_check(tag)
    params = [tag]
    return params


@traxa_rpc
def eth_getCode(address, tag, **kwargs):
    tag = tag_check(tag)
    params = [address, tag]
    return params


# TODO
@traxa_rpc
def eth_sign(address, data, tag="latest", **kwargs):
    tag = tag_check(tag)
    params = [address, data]
    return params


# TODO
@traxa_rpc
def eth_sendTransaction(trx, **kwargs):
    params = [trx]
    return params


@traxa_rpc
def eth_sendRawTransaction(trx, tag="latest", **kwargs):
    tag = tag_check(tag)
    params = [trx]
    return params


# TODO
@traxa_rpc
def eth_call(trx, tag, **kwargs):
    tag = tag_check(tag)
    params = [
        {
            # "from": trx['from'],
            # "to": trx['to'],
            # "gas": trx['gas'],
            # "gasPrice": trx['gasPrice'],
            # "value": trx['value'],
            # "data": trx['data'],
        },
        tag
    ]
    return params


# TODO
@traxa_rpc
def eth_estimateGas(trx, tag, **kwargs):
    tag = tag_check(tag)
    params = [
        {
            # "from": trx['from'],
            # "to": trx['to'],
            # "gas": trx['gas'],
            # "gasPrice": trx['gasPrice'],
            # "value": trx['value'],
            # "data": trx['data'],
        },
        tag
    ]
    return params


@traxa_rpc
def eth_getBlockByHash(hash, fullTransactions=False, **kwargs):
    params = [hash, fullTransactions]
    return params


@traxa_rpc
def eth_getBlockByNumber(tag, fullTransactions=False, **kwargs):
    tag = tag_check(tag)
    params = [tag, fullTransactions]
    return params


@traxa_rpc
def eth_getTransactionByHash(hash, **kwargs):
    params = [hash]
    return params


@traxa_rpc
def eth_getTransactionByBlockHashAndIndex(hash, index, **kwargs):
    params = [hash, index]
    return params


@traxa_rpc
def eth_getTransactionByBlock(tag, index, **kwargs):
    tag = tag_check(tag)
    params = [tag, index]
    return params


@traxa_rpc
def eth_getTransactionReceipt(hash, **kwargs):
    params = [hash]
    return params


@traxa_rpc
def eth_pendingTransactions(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_getUncleByBlockHashAndIndex(hash, index, **kwargs):
    params = [hash, index]
    return params


@traxa_rpc
def eth_getUncleByBlockNumberAndIndex(tag, index, **kwargs):
    tag = tag_check(tag)
    params = [tag, index]
    return params


@traxa_rpc
def eth_newFilter(filter, **kwargs):
    params = [filter]
    return params


@traxa_rpc
def eth_newBlockFilter(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_newPendingTransactionFilter(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_uninstallFilter(id, **kwargs):
    params = [id]
    return params


@traxa_rpc
def eth_getFilterChanges(id, **kwargs):
    params = [id]
    return params


@traxa_rpc
def eth_getFilterLogs(id, **kwargs):
    params = [id]
    return params


@traxa_rpc
def eth_getLogs(filter, **kwargs):
    params = [filter]
    return params


@traxa_rpc
def eth_getWork(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_submitWork(nonce, header_power_hash, mix_digest, **kwargs):
    params = [nonce, header_power_hash, mix_digest]
    return params


@traxa_rpc
def eth_submitHashrate(hash_rate, id, **kwargs):
    params = [hash_rate, id]
    return params


@traxa_rpc
def eth_getProof(address, storage_keys, tag, **kwargs):
    tag = tag_check(tag)
    params = [address, storage_keys, tag]
    return params


# =============
# below is only taraxa rpc, not in eth
# =============


@traxa_rpc
def eth_getStorageRoot(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_flush(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_newFilterEx(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_getFilterChangesEx(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_getFilterLogsEx(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_getLogsEx(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_register(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_unregister(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_fetchQueuedTransactions(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_signTransaction(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_inspectTransaction(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_notePassword(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_chainId(**kwargs):
    params = []
    return params


@traxa_rpc
def eth_signTransaction(address, data, tag="latest", **kwargs):
    tag = tag_check(tag)
    params = [address, data]
    return params


@traxa_rpc
def eth_getDagBlockByHash(hash, fullTransactions=False, **kwargs):
    params = [hash, fullTransactions]
    return params


@traxa_rpc
def eth_getDagBlockByLevel(tag, fullTransactions=False, **kwargs):
    tag = tag_check(tag)
    params = [tag, fullTransactions]
    return params
