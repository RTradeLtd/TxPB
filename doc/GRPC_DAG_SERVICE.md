# gRPC Based DAGService

One of the core interfaces for using IPFS is the [`DAGService`](https://github.com/ipfs/go-ipld-format/blob/master/merkledag.go#L54) interface, that specifies how you can get, and add IPLD nodes both to the network, and your local blockstore.

Within the `go` folder in the repository root is a file `dag_service.go` which satisfies the `DAGService` interface, allowing you to integrate TemporalX into a variety of other projects such as go-ipfs, ipfs-lite, and basically any other golang based project that uses the `DAGService` interface.

By using this module you will not be required to run a DAGService locally, and can instead delegate all processing to a remote TemporalX server via the `Dag` RPC call. This is particular interesting for use with things like `go-ds-crdt` as well as running TemporalX in resource constrained environments while being able to fully leverage the resources of a more powerful, remote TemporalX service.

For an example of how this is used, please consult [s3x](https://github.com/RTradeLtd/s3x/pull/40)