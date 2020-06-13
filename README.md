<h1 align="center"> TxPB </h1>
<p align="center">
  <a href="#client-libraries"><strong>Client Libraries</strong></a> · <a href="#documentation"><strong>Documentation</strong></a> · <a href="#examples"><strong>Examples</strong></a> · <a href="#faq"><strong>FAQ</strong></a> · <a href="#license"><strong>License</strong></a>
</p>

`TxPB` is the main source of information for using TemporalX, and includes protocol buffer definitions, generated code, and documentation. If you are looking for the protocol buffer definitions, check the `pb` folder.

We have pre-generated gRPC bindings for the following languages:

* [golang](https://github.com/RTradeLtd/TxPB/tree/master/go)
* [javascript (nodejs)](https://github.com/RTradeLtd/TxPB/tree/master/js)
* [typescript (grpc-web)](https://github.com/RTradeLtd/TxPB/tree/master/ts)
* [java](https://github.com/RTradeLtd/TxPB/tree/master/java/pb)
* [python](https://github.com/RTradeLtd/TxPB/tree/master/py)
* [rust](https://github.com/RTradeLtd/TxPB/tree/master/rs/src)


If you want bindings in other languages, feel free to open a github issue. Alternatively you can generate language bindings independently as long as the languages you are using support the appropriate protocol buffer and gRPC versions.

# Client Libraries

The following packages are client libraries that can be used to interact with TemporalX without needing to write any code, or writing less code than using gRPC directly:

* [go-temporalx-sdk](https://github.com/RTradeLtd/go-temporalx-sdk)
* [kronosx-rs rust sdk (WIP)](https://github.com/AIDXNZ/kronosx-rs)
  * Will eventually replace the rust bindings included in this repo once `kronosx-rs` is finished.

# Documentation

For all documentation please consult the [docs folder](https://docsx.temporal.cloud/doc/)

# Examples

We have an ever growing library of examples that will help you get started with TemporalX. For all code examples see the `examples` folder.

# Code Generation

Before generating the code, you'll need to download quite a few generators. Before downloading the generators you'll need to have a valid installation of the following, please consult appropriate installation manuals as required:

* Go 1.13+
* NodeJS
* NPM
* Python3
* Make

Once you have all of this installed, you can then install the needed generators which will allow you to generate the gRPC client stubs. To do this run `make install`. This has to download quite a few packages so it might take some time to complete. The only thing this doesn't install is a java generator, to do that visit https://search.maven.org/search?q=g:io.grpc%20a:protoc-gen-grpc-java and download the one for your platform.

After you've downloaded all generator tooling, you can generate the client stubs, and documentation with a single `make`.

# FAQ

In an effort to reduce the frequency of responding to commonly asked questions, we have provided an [FAQ](FAQ.md)

# License

All code in this repository is licensed under `AGPL-3.0`, and all documentation is licensed under `MIT`. Documentation is anything that is a readme, or html file. Code is pretty much anything other than documentation such as javascript, java, golang, python, and `.proto` files.

This is different than the license key that is used to authorize your purchase and ownership of TemporalX.
