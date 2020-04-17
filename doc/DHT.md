# DHT

TemporalX uses a forked version of `go-libp2p-kad-dht` (we call `libp2p-kad-dht`), as well as `go-libp2p-kbucket` (we call `libp2p-kbucket`). The main reason for forking these libraries is so we can have more control over what changes we bring in, and when we have to deal with breaking changes. Additionally it allows us to perform some optimizations, and codebase cleanups without having to worry about it being accepted into the upstream codebase before we use it.

Recently (v0.7.0) the `go-libp2p-kad-dht` library went through some major refactors, however it's not clear how thoroughly tested these changes are, outside of in-repo unit testing, and basic testing within testground (the go-ipfs testing library). Additionally none of these changes will be thoroughly tested within go-ipfs for quite some. As such this has lead to us needing to define a consistent versioning scheme for our fork.

| Repo Name | Our Version | Upstream Max Version | Notes |
|-----------|-------------|----------------------|--------|
| libp2p-kad-dht | v1     | v0.5.2 | current version used by TemporalX |
| libp2p-kad-dht | v2     | v0.6.1 | next version to be used by TemporalX |
| libp2p-kad-dht | v3     | v0.7.0 | not clear if this will be used by TemporalX |

# Notes

v0.7.0 of upstream represents some significant changes to the way the DHT library works. It introduced the concept of "Dual DHT" a WAN/Public DHT, and a LAN/Private DHT. Personally speaking I'm not sure this is the "right way" to fix things with the libp2p DHT. Additionally it is a pretty major change to roll out, which from what I can tell, hasn't been thoroughly tested, nor benchmarked at scale. At the time this documentation is being written, it's unclear whether or not we will move to this system. We will be moving to our v2 of `libp2p-kad-dht` eventually, as this brings us closer to a more realistic kademlia style DHT.

# Notable Changes

* The biggest change by far is the removal of `jbenet/goprocess` instead using `context.Context` + `context.CancelFunc` directly.
* Removal of `ipfs/go-log`
* Switching to `prometheus` for metric tracking