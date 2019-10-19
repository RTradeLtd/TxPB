# Configuration File Documentation

TemporalX configuration is done through a yaml file, while the command line `tex-cli` has a helper command to generate a fully populated config file.

The following example configuration file is a fully populated config file, with reference counting enabled. A much more basic config file can be produced with the command `tex-cli config gen`.

```yaml
# configures the TemporalX gRPC Server
temporalx: 
  # configures the api 
  api: 
    # enables/disables jaeger tracing
    tracing: false
    # the address, and port to expose the gRPC API on
    listen_address: 0.0.0.0:9090 
     # the protocol for the gRPC API endpoint
    listen_proto: tcp
    # configures TLS
    tls:
      # the location to a certificate 
      cert_file: certfile.txt 
      # the location to the private key corresponding to the certificate
      key_file: keyfile.txt 
    # configures jwt authentication
    jwt: 
      # the jwt realm
      realm: realm 
      # the actual jwt key
      key: key
  # configures a prometheus endpoint to expose metrics
  prometheus: 
    # enable/disable prometheus endpoint
    enabled: false 
    # the address to export prometheus metrics on
    endpoint: 127.0.0.1:9093 
  # configures pprof profiling
  profiling: 
    # enable/disable profiling
    enabled: false
    # the address to expose the net/http/pprof endpoint on 
    endpoint: 127.0.0.1:9091
# configures the custom IPFS node TemporalX uses 
node:
  # the various address to expose the libp2p swarm connection on
  listen_addresses:
  - /ip4/0.0.0.0/tcp/4005
  # a hex encoded ed25519 private key
  private_key: 080112403bd9126aeee7f2186e0e0f96aba8f402a9628caf986a003bb62f081144f74a4bc62c107665752d48ffa876d1d8c7c48cf65ce6f91cd185de33fc34afdeb7ec61
  # configures the main datastore used for things like the dht, blockstore, etc...
  storage:
    # the type of datastore to use
    # accepted values: badger, pebble, leveldb, memory
    type: badger
    # the path to the datastore
    path: /temporalx/storage
    opts:
      # this is a config setting for use with badger
      # the default when left out is 0, which is FileIO and
      # is suitable for use with devices like the Raspberry Pi 3B+.
      # Here we are overriding the default to 2 (MemoryMap) which
      # is more performant, at the cost of increased memory consumption
      fileLoadingMode: 2
      # enable/disable reference counted blockstore
      countedStore: true
      # the key namespace used for the ref counter queue
      counterQueueNamespace: cqueuenamespace
      # the key namespace used for ref counter entries
      counterStoreNamespace: cstorenamespace
        # the path to store ref counter entries in
      counterStorePath: /temporalx/counterstore
  # configures the libp2p peerstore
  peerstore:
    # the type of peerstore to use
    # accepted values: datastore, memory
    type: datastore
    # if using datastore peerstore, can be used to configure the storage component
    datastore:
      type: leveldb
      path: /temporalx/peerstore
  # configure underyling keystore
  keystore:
    # the type of keystore to use
    # accepted values: krab, memory, filesystem
    type: filesystem
    datastore:
      path: /temporalx/keystore
  # provides configuration of libp2p itself
  libp2p:
    # provides configuration of the host connection manager
    connection_manager:
      # enable/disable the configuration manager
      enabled: true
      # the minimum number of peers that we will try to connect to
      low_water_mark: 6000
      # the maximum number of peers we will connect to
      high_water_mark: 9000
      # the time we wait before considering a new connection eligible for removal;
      grace_period: 20s
    # provides configuration of the circuit relay system
    # WARNING: do not use unless you know what you are doing
    circuit:
      # enable/disable circuit relay capabilities
      enable: false
      # activate/disable circuit relay
      active: false
      # enable/disable circuit relay discovery
      discovery: false
      # enable being a relay hop (this means we will relay connections)
      relay_hop: false
    # enables modifying the available transports
    enabled_transports:
      # enables and prefers tls security/transport over secio
      # default is true
      tls: true
      # enables the quic transport
      # default is false
      quic: false
    # enables modifying dht settings
    dht_options:
      # persistently store DHT information between reboots
      # it does this using a namespaced wrapper around the "storage" datastore specified earlier in the yaml config file
      persistentDHT: "true"
  # general node configuration
  opts:
    # enables a bloom+arc cache ontop of the blockstore
    # can improve query performance and reduce disk IO
    blockstoreCaching: true
    # whether or not we are running on a low power device
    # useful if running TemporalX on low-memory devices like RPi
    lowPower: false
    # enable/disable pubsub
    pubsub: true
    # enable/disable ipns and other name resolution systems
    namesys: true
# the file we will dump logs into
log_file: ./logger.log
```

# Datastore

The `datastore` portions of the yaml config file is used to config key-value datastores. These key-value datastores are used throughout the entire libp2p, and ipfs stack. Every `datastore` section shares the same configuration options with each other. In fact in the code-base, they all use the same code.

One thing thing to note is the section of the `node` configuration called `storage`. This is really just an aliased/renamed `datastore` section that is used for the storing all our data. By this we mean things like files, documents, movies, etc... It is for all intents and purposes our "main storage".  The one exception to this is the example configuration file earlier in the documentation which enables the `countedStore` which is a reference counted blockstore. If this is used in other `datastore` configuration sections it is simply ignored.

The current datastore types are supported:

* pebble
  * currently experimental, but is generally the fastest datastore next to pure in-memory stores
  * it is generally okay, however it can cause unexpected errors, and should be used at your own risk.
  * not quite as expensive on memory as badger
* badger
  * not quite as fast as pebble, but still extremely fast and stable.
  * The badger default was adjusted to use `fileLoadingMode` with `FileIO` to enable use on low-memory devices.
  * If using on server environments, change `fileLoadingMode` to 2.
* leveldb
  * generally the lowest memory requirements, and suitable for low-memory devices.
  * generally the slowest datastore
* memory
  * consumes the most memory out of everything since it resides entirely in-memory
  * all data is lost on crash, or restart of service and should only be used for testing

The current `opts` for all `datastore` sections are as follows. Note that whenever an `opt`ion is left out, the default is implied:


| Name            | Values                 | Details                          |
|-----------------|------------------------|----------------------------------|
| fileLoadingMode | * 0 (FileIO - default)<br> * 2 (MemoryMap)| Specifies how objects are loaded when using the **badger** datastore type. FileIO is for memory constrained devices |
| withSync | * false (default)<br> * true | Specifies whether to synchronize writes to disk when using the **pebble** datastore type.

# Peerstore

The peerstore is used to define configuration options for the libp2p peerstore, which is where records of all libp2p peers we encounter are stored. We currently have two supported types:

*  `datastore`
* `memory`

Example Configurations:

Memory

```yaml
  peerstore:
    type: memory
```

Datastore (badger)

```yaml
  peerstore:
    type: datastore
    datastore:
      type: badger
      path: /temporalx/peerstore
      opts:
         fileLoadingMode: 2
```

# Keystore

The keystore is used to define configuration options for the keystore, which is a repository used by services like namesys to manage private keys. We currently have three supported types:

* `krab`
* `memory`
* `filesystem`

We personally recommended usage of `krab` as it encrypts all keys on disk when not in use, and only decrypts them in memory when needing to be used. It is however more resource intensive and should only be used in server environments.

Example Configurations:

Datastore (krab)

```yaml
  keystore:
    type: krab
    # the password we encrypt keys with
    passphrase: password123
    datastore:
      type: badger
      path: /temporalx/keystore
      opts:
         fileLoadingMode: 2
```

Memory

```yaml
  keystore:
    type: memory
```