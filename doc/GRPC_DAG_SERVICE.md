# gRPC Based DAGService

One of the core interfaces for using IPFS is the [`DAGService`](https://github.com/ipfs/go-ipld-format/blob/master/merkledag.go#L54) interface, that specifies how you can get, and add IPLD nodes both to the network, and your local blockstore.

[dag_service.go](../go/dag_service.go) showcases a working example of you can use can use the `NodeAPIClient` generated gRPC client as a way of satisfying `ipld.DAGService` using TemporalX. As such this will allow you to swap out existing `DAGService` implementations used by clients such as go-ipfs, or ipfs-lite for one that relies on a remote TemporalX server.

By using this module you will not be required to run a DAGService locally, and can instead delegate all processing to a remote TemporalX server via the `Dag` RPC call. This is particular interesting for use with things like `go-ds-crdt` as well as running TemporalX in resource constrained environments while being able to fully leverage the resources of a more powerful, remote TemporalX service.

For an example of how this is used, please consult [s3x](https://github.com/RTradeLtd/s3x/pull/40)