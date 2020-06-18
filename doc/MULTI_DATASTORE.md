# Multi Datastore

TemporalX has a novel concept of "multi-datastore" compared to the reference implementations of IPFS, which use one mega datastore separated by key namespaces for certain subsystems, or forced in-memory store in other places. Our multi-datastore concept allows you to use either namespace keys as is done with go-ipfs, or using dedicated datastore for specific subsystems.

When enabled, the following subsystems use dedicated datastores:

* Keystore
* Peerstore
* Reference counter store
* DHT
* Provider queue