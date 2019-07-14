# TxPB

`TxPB` provides protocol buffer definitions, and generated code for using TemporalX, the API for RTrade's custom IPFS node.

It has gRPC bindings for the following languages:

* golang
* javascript (grpc-web)
* java
* python

If you want bindings in other languages, feel free to open a github issue.

# Notes

The [`IPLDLink`](https://github.com/RTradeLtd/TxPB/blob/master/dag.proto#L106) and [`IPLDNode`](https://github.com/RTradeLtd/TxPB/blob/69898da501880e8f7f83b1ba0bdeb3ea7367a53f/dag.proto#L116) message types are copied from [ipfs/go-merkledag](https://github.com/ipfs/go-merkledag/blob/master/pb/merkledag.proto) but modified to work solely with `proto3` protocol buffer definitions. 
