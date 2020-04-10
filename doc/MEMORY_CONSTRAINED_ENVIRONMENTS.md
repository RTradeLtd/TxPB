# Memory Constrained Environments

In certain situations you may be running TemporalX in a memory constrained environments. When using default configurations, TemporalX is already supremely memory efficient, however there are certain situations where you may want to scale up this memory efficiency, say on a raspberry pi. Although efficient on memory, the configurations in this guide will provide a somewhat noticeable impact to performance, and as such is only recommended in memory constrained environments.

Enable persistent DHT

* By enabling persistent DHT mode, you no longer store the entire DHT subsystem in-memory, and instead store it on disk. Through our profiling and benchmarking we observed this as being a significant memory hog, and were able to vastly reduce memory consumption by running persistent DHT
* This will provide a noticeable slow-down to DHT queries, as you will need to fetch them from disk as opposed to in-memory

Enable datastore peerstore

* By enabling datastore peerstore, you no longer have to store tens of thousands of peerIDs, records, and associated information in memory
 