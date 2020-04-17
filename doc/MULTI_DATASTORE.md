# Multi Datastore

TemporalX has a novel concept of "multi-datastore" compared to the reference implementations of IPFS, which use one mega blockstore separate by key namespaces. Although in certain places we use key namespaces, the act of namespaced keys isn't free in cost. There is a slight overhead, which under most hobbyist circumstances is not that great, however at production scale workloads, overheads add up. To mitigate some of these overheads, we leverage multiple datastores for different purposes. With the exception of persistent DHT mode that namespaces around the main storage datastore, all other stores go into separate datastores.

When enabled, the following subsystems use dedicated datastores:

* Keystore
* Peerstore
* Reference counter store

When enabled, the following subsystems share the same datastore using namespaced keys:

* DHT (note: by default dht is stored in memory)
* Main storage store
* Provider queue