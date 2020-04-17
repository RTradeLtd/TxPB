# Memory Constrained Environments

In certain situations you may be running TemporalX in a memory constrained environments. When using default configurations, TemporalX is already supremely memory efficient, however there are certain situations where you may want to scale up this memory efficiency, say on a raspberry pi. Although efficient on memory, the configurations in this guide will provide a somewhat noticeable impact to performance, and as such is only recommended in memory constrained environments.

# What Counts As "Memory Constrained"

For the purpose of this documentation, we define memory constrained as embedded devices, ultralite laptops, and SoC boards such as the Raspbery Pi. For a guideline of what configurations you should apply based on system specifications consult the table below.

| Available RAM | Recommended Configurations |
|---------------|----------------------------|
| 1GB           | All configurations |
| 4GB           | Persistent DHT, Datastore Peerstore, Main Datastore |               
| 4GB+          | Above 4GB you probably dont need to follow these recommendations |

# Configuration Recommendations

## Persistent DHT

* By enabling persistent DHT mode, you no longer store the entire DHT subsystem in-memory, and instead store it on disk. Through our profiling and benchmarking we observed this as being a significant memory hog, and were able to vastly reduce memory consumption by running persistent DHT
* This will provide a noticeable slow-down to DHT queries, as you will need to fetch them from disk as opposed to in-memory

## Datastore Peerstore

* By enabling datastore peerstore, you no longer have to store tens of thousands of peerIDs, records, and associated information in memory
* This will provide a noticeable slow-down to peerstore queries as you will need to fetch them from disk as opposed to in-memory

## Queueless Reference Counter

* The queue based reference requires multiple different components that increase memory consumption
* If you insist on using the queue based reference counter, don't use more than 1 worker

## Filesystem Keystore

* Use the filesystem keystore which stores keys directly on disk, as opposed to the krab keystore which uses badger, and encrypts your keys, or the the in-memory keystore

## Main datastore

* For the main datastore it is recommended that you use leveldb, as this is the most memory efficient datastore available
* Alternatively you can use the badger datastore with `fileLoadingMode` set to `0`

## Low Power Mode

* Lower power mode is primarily used to set sensible defualts for LibP2P settings if there are none set in the configuration file
* If you do have LibP2P settings in the configuration file, then low power mode will be ignored
* In the future we will be phasing out usage of low power mode in preference of using the config file entirely