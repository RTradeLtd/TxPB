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
  # a hex encoded private key
  private_key: 080112403bd9126aeee7f2186e0e0f96aba8f402a9628caf986a003bb62f081144f74a4bc62c107665752d48ffa876d1d8c7c48cf65ce6f91cd185de33fc34afdeb7ec61
  # configures the main datastore used for things like the dht, blockstore, etc...
  storage:
    # the type of datastore to use
    # accepted values: badger, pebble, leveldb, memory
    type: badger
    # the path to the datastore
    path: /temporalx/storage
    # options  that may be use to alter datastore configuration.
    # badger options:
    # fileLoadingMode: 0 (FileIO), 2 (MemoryMap)
    #
    # pebble options:
    # withSync: true, false
    opts:
      withSync: "false"
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
      path: peerstore
  # configure underyling keystore
  keystore:
    # the type of keystore to use
    # accepted values: krab, memory, filesystem
    type: krab
    # if using krab or filesystem keystore allows configuring the storage component
    # if uing filesystem keystore, the only required parameter is path
    datastore:
      type: leveldb
      path: keystore
  # provides configuration of libp2p itself
  libp2p:
    # provides configuration of the host connection manager
    connection_manager:
      # enable/disable the configuration manager
      enabled: true
      # the minimum number of peers that we will try to connect to
      low_water_mark: 100
      # the maximum number of peers we will connect to
      high_water_mark: 300
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
  # general node configuration
  opts:
    # enables a bloom+arc cache ontop of the blockstore
    # can improve query performance and reduce disk IO
    blockstoreCaching: false
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