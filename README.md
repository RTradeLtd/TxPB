# TxPB

TxPB is the main public information repository for TemporalX. It includes all protocol buffers we use, along with their generated gRPC code in a variety of languages. Additionally there is documentation on some of the TemporalX subsystems, such as the reference counter, and licensing system. Additinoally the configuration file is fully documented, along with a small "getting started" tutorial. 

Pre-generated gRPC and protocol buffer bindings exist for the following languages:

* [C++](https://github.com/RTradeLtd/TxPB/tree/master/cpp)
* [Golang](https://github.com/RTradeLtd/TxPB/tree/master/go)
* [Java](https://github.com/RTradeLtd/TxPB/tree/master/java)
* [JavaScript (grpc-web)](https://github.com/RTradeLtd/TxPB/tree/master/js)
* [Python](https://github.com/RTradeLtd/TxPB/tree/master/py)
* [TypeScript (grpc-web)](https://github.com/RTradeLtd/TxPB/tree/master/ts)

# Documentation

* [Overview](./doc)
* [Getting Started](./doc/GETTING_STARTED.md)
* [Configuration File Documentation](./doc/CONFIGURATION.md)
* [Reference Counter Overview](./doc/REFERENCE_COUNTER.md)
* [Replication Overview](./doc/REPLICATION.md)
* [License Key Overview](./doc/LICENSE_OVERVIEW.md)
* [Protocol Buffer Documentation](./doc/PROTO.md)
* [TemporalX HTTP Gateway](./doc/GATEWAY.md)
* [Benchmarks](./doc/BENCHMARKS.md)

# Code Generation

Code generation requires a number of dependencies installed, particularily an environment capable of building gRPC code for the following languages:

* C++
* Golang
* Java
* JavaScript
* Python
* TypeScript

To generate the code for all aforementioned languages, simply type `make`. Along with generating code, this will update the generated markdown documentation.

## Installing Generators (TODO)

### Java

To install the java generator, vist [search.maven.org](https://search.maven.org/search?q=g:io.grpc%20a:protoc-gen-grpc-java)

# License

All code in this repository is licensed under `AGPL-3.0`, and all documentation is licensed under `MIT`. Documentation is anything that is a readme, or html file. Code is pretty much anything other than documentation such as javascript, java, golang, python, and `.proto` files.

This is different than the license key that is used to authorize your purchase and ownership of TemporalX.
