# TxPB

`TxPB` is the main source of information for using TemporalX, and includes protocol buffer definitions, generated code, and documentation.

We have pre-generated gRPC bindings for the following languages:

* [golang](https://github.com/RTradeLtd/TxPB/tree/master/go)
* [javascript (grpc-web)](https://github.com/RTradeLtd/TxPB/tree/master/js)
* [java](https://github.com/RTradeLtd/TxPB/tree/master/java/pb)
* [python](https://github.com/RTradeLtd/TxPB/tree/master/py)

If you want bindings in other languages, feel free to open a github issue. Alternatively you can generate language bindings independently as long as the languages you are using support the appropriate protocol buffer and gRPC versions.

# Documentation

## Protocol Buffer/gRPC 

To view the generated protocol buffer and gRPC documentation click [here](https://rtradeltd.github.io/TxPB/doc/index.html)

All of our `.proto` files are thoroughly commented and combined with [protoc-gen-doc](https://github.com/pseudomuto/protoc-gen-doc) to generate the documentation.

## TemporalX Manual

* [Configuration](doc/CONFIGURATION.md)
* [Getting Started](doc/GETTING_STARTED.md)
* [License Overview](doc/LICENSE_OVERVIEW.md)
