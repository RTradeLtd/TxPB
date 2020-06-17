# Configuration File Documentation

TemporalX configuration is done through a yaml file, while the command line tool `tex-cli` has a commad `tex-cli config` that can be used to generate default configuration files. There is no required location of the config file. By default `tex-cli` looks for a file named `config.yml` in the current directory, but this can be changed by specifying the `--config` or `--cfg` CLI flag.

If you are looking for instructions on how to migrate from an old configuration file format to a new one, please see the [migration documentation](CONFIG_MIGRATION.md)

## Table Of Contents

<p align="left">
  · <a href="#warnings"><strong>Warnings</strong></a>
  <br>
  · <a href="#configuration-file-reference"><strong>Configuration File Reference</strong></a>
  <br>
  · <a href="#temporalx"><strong>TemporalX Configuration</strong></a>
  <br>
  · <a href="#node-configuration"><strong>Node Configuration</strong></a> 
  <br>
  · <a href="#logging"><strong>Logging</strong></a> 
  <br>
  · <a href="#config-file-templates"><strong>Config File Templates</strong></a> 
</p>

# Warnings

The only warning when it comes to TemporalX configuration is not using the pebble datastore. While it works in most situations, if the `Datastore::Query` function is called in particular ways, namely by the datastore backed peerstore, panics can and will happen. Pebble is an experimental datastore, that should only be used for testing, but if you're feeling risky and want to use it in production or dev, only use it for the main storage layer.

# Configuration File Reference

The following example configuration file is a fully populated config file, with reference counting enabled. A much more basic config file can be produced with the command `tex-cli config gen`.

```yaml
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
    # maximum message size in bytes
    max_message_size: 4194304 # this is the default value
    # maximum size of sent messages in bytes
    max_send_msg_size: 2147483647 # this is the default value
    # amount of data to before writing on the gRPC wire
    # 0 means no buffering at all
    write_buffer_size: 32768 # this is the default value
    # amount of data to buffer before issuing a read syscall
    # 0 means no bufering at all
    read_buffer_size: 32768 # this is the default value
    # timeout for connection establishment including HTTP/2 handshaking
    connection_timeout: 2m0s # default value
    # whether to enable compression and decompression of messages
    # note that if you enable this, it is very important that you enable compression
    # on the gRPC client you are using or you may get weird results
    compression: # default is no compression
      enabled: true
      # type of compression, only gzip is supported
      type: gzip
      # amount of compression, 1 lowest and fastest, 9 being best and slowest
      level: 7
  # configures a prometheus endpoint to expose metrics
  # default is disabled
  prometheus: 
    # enable/disable prometheus endpoint
    enabled: enabled 
    # the address to export prometheus metrics on
    endpoint: 127.0.0.1:9093 
  # configures pprof profiling
  # default is disabled
  profiling: 
    # enable/disable profiling
    enabled: enabled
    # the address to expose the net/http/pprof endpoint on 
    endpoint: 127.0.0.1:9091
node:
  # the various address to expose the libp2p swarm connection on
  listen_addresses:
  - /ip4/0.0.0.0/tcp/4005
  # the public key peerID of the private_key we use for libp2p connections
  # this is also known as "our hosts peerID"
  peer_id: 12D3KooWGFFSDieD5xTK1L8ZAqCEGRJ6xAKEeaGnkXaNsrhCAgw1
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
      #### REFERENCE COUNTER CONFIGURATION ####
      ####           START                 ####
      # enables the reference counter
      noQueueStore: true 
      # sets the path to store reference count metadata in
      counterStorePath: /temporalx/counterstore
      # preallocates the worker pool (default & recomended)
      antsPreAlloc: true 
      # defines the maximum number of active count operations (default = number of CPUs)
      # the higher the value, the less chance of blocking counting operations
      # if 8192 leads to blocking double the number until it doesnt (higher value == higher cpu consumption)
      antsMaxWorkers: 8192
      # if set to true no reference count operations will block but if the max workers is reached operation will be discard
      # DEFUALT IS FALSE, RECOMMENDED TO NOT TOUCH THE CONFIGURATION AT ALL
      # if setting to true, a very, very high max worker count is desirable
      antsNonBlocking: true
      # indicates the number of tasks that can block (default = 0 [no limit])
      antsMaxBlockingTasks: 0
      # indicates how long tasks can be running for before being expired (default is empty, thus no limit)
      # acceptables values are time.Duration types (20s, 10min, etc...)
      antsExpiryDuration: 20s
      ####           END                   ####
      #### REFERENCE COUNTER CONFIGURATION ####

  # configures the peerstore used for storing peer information
  peerstore:
    # the type of peerstore to use
    # accepted values: datastore, memory
    type: datastore
    # if using datastore peerstore, can be used to configure the storage component
    datastore:
      type: leveldb
      path: /temporalx/peerstore
  # configure underlying keystore
  keystore:
    # the type of keystore to use
    # accepted values: krab, memory, filesystem
    type: krab
    # if using krab, the password to encrypt keys for
    # storing them on disk in an encrypted format
    passphrase: Swoovretag
    # the underlying datastore to use, any valid datastore
    # type we support is acceptabled
    datastore:
      type: leveldb
      path: keystore
  # controls the built-in replication subsystem
  # allowing replication of CIDs between TemporalX nodes
  # default is enabled
  replication:
    # enable the replication subsystem
    enabled: true
    # where to store replication metadata
    database_location: storage/replication/db.sqlite
    grpc_port: 9094
    grpc_port_dial_Timeout: 1s
    white_list_location: storage/replication/publishers
    replication_delay: 10m
  # provides configuration of libp2p itself
  libp2p:
    # enables private libp2p swarm mode with a 32 byte hex encoded key
    # the value here will be used as the private network shared secret key
    # default is empty string ("") which means use the public network
    swarm_key: thisinotarealswarmtestkey
    # allows configuring the DHt subsystem
    dht:
      # default is a "null" value for everything, which means
      # the DHT library will use default settings, which we've
      # listed below
      options:
        # the latency tolerance for peers we will consider "ok"
        # any peers with latency outside of this window are ignored
        # acceptable values are any time.Duration type
        routing_table_latency_tolerance: 1m0s
        # the maximum age of records we will consider valid for
        # before attempting to talk to the DHT again
        # lower values mean more busy DHT, higher values means
        # less busy DHt at the risk of possibly inaccurate information
        # acceptables values are any time.Duration type
        max_record_age: 24h0m0s
        # whether to operate as a DHT client only, or enable server capabilities
        # if resource usage or network activity is a concern, you can enable this
        # which means your peer will only reach out to the DHT to get data
        # and will never provide data to the DHT
        client_mode: false
        # configures the bucket size of the routing table
        bucket_size: 20
        # the type of DHT protocols we will talk on
        # supported values are: /ipfs/kad/1.0.0 or /ipfs/kad/2.0.0
        protocols:
        - /ipfs/kad/1.0.0
        # disables storing and retrieving provider records
        disable_providers: false
        # disables storing and retrieving value records including public keys
        disable_values: false
      # indicates if we want to use a datastore for DHT information, which allows
      # persisting DHt records through restarts, by storing them on disk
      # the default is disabled, and an in-memory datastore will be used
      persistent:
        # enable persistent storage of dht information
        enabled: true
        # if namespaced is set, than we will use the main node storage datastore
        # and use a namespaced key around, if store is set, and namespaced is enabled
        # namespace takes precedece over the store
        namespaced: true
        # if set, allows using a dedicated datastore for storing DHT information
        # any acceptable "datastore" configuration is usable here
        store:
          type: badger
          path: dhtstore
          opts:
            fileLoadingMode: "0"
    # enables control of the libp2p bootstrap process
    bootstrap:
      # if set, then we will ignore all default bootstrap peers and only
      # use the contents of extra_peers. Note that this is mainly useful for private networks
      # to prevent spending time connecting to default bootstrap peers which will not
      # be reachable on private networks
      skip_defaults: true
      # enables supplying an extra set of peers to use in the boostrap, and periodic bootstrap process
      # if you have multiple TemporalX nodes that aren't in the same replication cluster it's a good idea to list their multiaddresses here to enable connectivity between them all
      # this isn'y needed with TemporalX nodes in a replication cluster, as the replication algorithm
      # ensures connection between all the hosts
      extra_peers:
      - /ip4/207.6.222.55/tcp/4002/ipfs/QmPvnFXWAz1eSghXD6JKpHxaGjbVo4VhBXY2wdBxKPbne5
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
    # allows controlling the libp2p transport subsystem
    # default is "null" which means the default TCP, WS and SECIO + TLS security transports
    transports:
      # the extra transports to use, only supported ones are noise and quic
      enabled:
        noise: true
        quic: true
    # generalized libp2p host configurations
    # only supported field is options
    host:
      # only supported oprtions are natPortMap and enableP2PStreams
      options:
        # enabels libp2p NAT hole punching
        natPortMap: "true"
        # enables p2p stream capabilities, equivalent to ipfs p2p
        enableP2PStreams: "true"
    # provides configuration of the circuit relay system
    # WARNING: do not use unless you know what you are doing
    circuit:
      # enable/disable circuit relay capabilities
      enable: true
      # activate/disable circuit relay
      active: false
      # enable/disable circuit relay discovery
      discovery: false
      # enable being a relay hop (this means we will relay connections)
      relay_hop: false
  # controls the namesys subsystem, commonly known as IPNS
  # default is disabled
  namesys:
    # enable namesys allowing usage of IPNS
    enabled: true
    # enables using the pubsub value store as a way of retrieving IPNS records
    # which increases IPNS name resolution speeds
    pubsub: true
    # the size of the LRU cache for namesys records we publish and resolve
    # if namesys is enabled and cache_size is unspecified, 128 is used
    cache_size: 128
  # controls the libp2p pubsub system
  # default is enabled with no option and value store disabled
  pubsub:
    # enable libp2pb pubsub
    enabled: true
    # enables advanced control over libp2p pubsub options
    # default is "null" which means all options are disabled and defaults used
    options:
      # the maximum number of queued outbound messages to any given pubsub peer
      outbound_queue_size: 100
      # enables flood based publishing alongside gossip sub
      flood_publish: true
      # enables exchanging peers with other peers whenever the gossip PRUNE operation occurs
      peer_exchange: true
    # enables using pubsub as a value store for content routing mainly useful for IPNS
    # default is disabled, and when enabled pubsub content routing is used first before the DHT
    value_store:
      # enable pubsub as a content routing layer to be tried first before interacting with the DHT
      enabled: true
      # the namespaces to use with the pubsub content routing layer
      # if enabled the default is ipns
      namespaces:
      - ipns
      # WARNING: 
      #   this is experimental, and enables using pubsub as a way of retrieving and publishing
      #   using pubsub first before using the dht
      - ipfs
    direct_peers:
    - /ip4/207.6.222.55/tcp/4002/ipfs/QmPvnFXWAz1eSghXD6JKpHxaGjbVo4VhBXY2wdBxKPbne5
  # enables control of the cid provider subsystem
  # responsible for announcing content we host
  # default is enabled, and the values below are the defaults
  cid_provider:
    # enables the cid provider system
    provider_enabled: true
    # how long to spend announcing to the network that we provide content
    # whenever the content is added to our node
    provider_timeout: 3m0s
    # the interval at which we iterate over all root CIDs for all content we store
    # and reannounce it to the network
    reprovider_interval: 12h0m0s
  # enables a service discovery subsystem
  # it is mostly useful with pubsub to enable discovering pubsub hosts
  # default is disable
  discovery:
    # enables a basic discovery system using the DHT
    enabled: true
    # enables an advanced discovery system using exponential backoffs if queries fail
    # requires discovery be enabled as well
    backoff_enabled: true
    # the type of backoff discovery, only supported one is ExponentialBackoff
    type: ExponentialBackoff
    # the minimum backoff time
    min_backoff: 1m0s
    # the maximum backoff time
    max_backoff: 1h0m0s
  # generalized node configuration options
  opts:
    # enables a bloom+arc cache on top of the blockstore
    # can improve query performance and reduce disk IO
    blockstoreCaching: true
    # whether or not we are running on a low power device
    # useful if running TemporalX on low-memory devices like RPi
    lowPower: false
# the file we will dump logs into
log_file: ./logger.log
```

# TemporalX

The `temporalx` section is used to configure the TemporalX gRPC server that facilitates interaction with our custom node. Additionally it enables things like tracing, and monitoring.

<p align="left">
  · <a href="#api"><strong>API</strong></a>
  <br>
  · <a href="#prometheus"><strong>Prometheus</strong></a>
  <br>
  · <a href="#profiling"><strong>Profiling</strong></a>
  <br>
  · <a href="#gateway"><strong>Gateway</strong></a>
</p>

## API

The `api` section is used to configure the gRPC API server, enabling controlling JWT authentication, tls configuration,  jaeger tracing, as well as a variety of other gRPC configurations. For a brief overview on jaeger tracing, see [our short tracing doc](TRACING.md).

The following table lists all available configuration options. When a field is denoted as `foo.bar` it would translate to the following in the YAML configuration file:

```yaml
foo:
   bar: somevaluebaz
```

| Field | Value | Default | Note |
|-------|-------|---------|-------|
| `tracing` | bool | false | enables jaeger tracing |
| `listen_address` | string | 0.0.0.0:9090 | specifes the addres to listen on for gRPC connections |
| `listen_proto` | string | tcp | only tcp is supported at the moment, but udp may work |
| `tls.cert_file` | string | "" | path to tls cert in PEM format |
| `tls.key_file` | string | "" | path to tls key file corresponding to the cert |
| `jwt.realm` | string | "" | realm used for jwt authentication |
| `jwt.key` | string | "" | the key used to sign jwt messages |
| `max_message_size` | int | 4194304 | max size in bytes for messages we receive |
| `max_send_msg_size` | int | 2147483647 | max size in bytes for messages we send |
| `write_buffer_size` | int | 32768 | amount of data to buffer before writing on the wire |
| `read_buffer_size` | int | 32768 | amount of data to buffer before reading from the wire |
| `connection_timeout` | time.Duration | 2m0s | for more information on time.Duration see the [time package](https://pkg.go.dev/time?tab=doc) |
| `compression.enabled` | bool | false | whether or not to enable gRPC compression, if enabled must enable on the client too |
| `compression.type` | string | "" | type of compression to use, only gzip supported at the moment |
| `compression.level` | int | 1  | usually on a scale of 1-9, ultimtaely depends on the compression algorithm |

## Prometheus

The `prometheus` section is used to configure a prometheus endpoint that can be used for metric collection. The default setting is disabled. Metric collection via prometheus can sometimes be impactful on resources

Configuration Options:

* `enabled` enables/disables the prometheus endpoint
* `endpoint` the ip+port to expose the `/metrics` handler on.

Note that some metrics we measure may require certain actions to be taken to reach a representation of the current state, and as such you may not receive totally accurate metrics from prometheus for some time. This can be circumvented by seeding the metrics when TemporalX first starts up. To seed the metrics you can use the `--seed.metrics` server command flag, covered in the getting started documentation.

## Profiling

The `profiling` section is used to configure profiling of TemporalX via pprof, and exposes `net/http/pprof` handlers.

Configuration Options:

* `enabled` enables/disables profiling collection with a default of disabled.
* `endpoint` is the ip+port to expose `net/http/pprof` handlers on.

## Gateway

> **Note: gateway is currently disabled pending a rewrite and configuration declartions are no longer processed**

The `gateway` section is used to configure the IPFS HTTP Gateway that TemporalX exposes. It has feature parity with `go-ipfs` to a certain extent, ignoring some of the `X-Ipfs-*` headers, while also supporting `/ipld` lookups. When encountering UnixFS directories, a slightly different "directory index" is displayed than what is shown when using `go-ipfs`.

The gateway http server by default enables gzip "level 3" compression, and has a max processing limit of 1000 requests/second, and a 2 minute timeout for inactive connections. Eventually these will be configurable, but for now they are some sensible defaults. Additionally the gateway will error out when processing a request body 1GB or larger in size.

The gateway offers no write capabilities, and is strictly focused on read-only purposes. Planned features include an in-memory cache. 

Configuration Options:

* `enabled` enables/disables http gateway (default false)
* `address` specifies the address and port we will listen on (default is empty string)
* `allowed_methods` specifies the http methods we allow (default is all)
* `allowed_origins` specifies the origins we will accept requests from (default is all)
* `allowed_headers` specifies the http headers we will process (default is all)

# Node Configuration

The `node` section is used to configure the underlying libp2p, and ipfs subsystems used by TemporalX.

<p align="left">
  · <a href="#top-level-identity-configurations"><strong>Top Level (Identity)</strong></a>
  <br>
  · <a href="#datastore"><strong>Datastore</strong></a>
  <br>
  · <a href="#replication"><strong>Replication</strong></a>
  <br>
  · <a href="#storage"><strong>Storage</strong></a>
  <br>
  · <a href="#peerstore"><strong>Peerstore</strong></a>
  <br>
  · <a href="#keystore"><strong>Keystore</strong></a>
  <br>
  · <a href="#libp2p"><strong>LibP2P</strong></a> 
  <br>
  · <a href="#namesys"><strong>NameSys</strong></a> 
  <br>
  · <a href="#pubsub"><strong>PubSub</strong></a> 
  <br>
  · <a href="#cid-provider"><strong>CID Provider</strong></a> 
  <br>
  · <a href="#discovery"><strong>Discovery</strong></a> 
  <br>
  · <a href="#opts"><strong>Opts</strong></a> 
</p>

## Top Level (Identity) Configurations

The following fields are individual fields within the `node` YAML section, and used for specifying configurations used to establish your libp2p peer identity. All following fields *except* `peer_id` are needed, and will be automatically generated each time you create a new config file.

* `listen_addresses`
  * Specifies all the multiaddrs that the node will accept libp2p connections on
* `peer_id`
  * A hashed public key corresponding to the key declared in `private_key`
* `private_key`
  * A hex encoded private key, although any valid LibP2P private/public key algorithm can be used, TemporalX will only generated ED25519 keys, although you can provide any valid hex-encoded LibP2P private key


## Datastore

The `datastore` section(s) of the yaml config file is used to config key-value datastores. These key-value datastores are used throughout the entire libp2p, and ipfs stack. Every `datastore` section shares the same configuration options with each other.

The `datastore` configurations also apply to the `storage` section of `node`, where DAG data blocks are stored. The `storage` section also includes an additional storage type of `noQueueStore`, which is a reference-counted DAG block store. `noQueueStore` is only supported by `storage`.

The current datastore types are supported:

* postgresql
  * enables using a postgresql database to back the datastore
  * suitable for storing very large amounts of data
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

Please note that all options below apply to all `datastore` configuration sections.

## PostgreSQL Options


| Name   | Details | Required |
|--------|---------|----------|
| host   | an ip address or hostname used to connect to the database host | yes |
| port   | port the host is using to accept connections on | yes |
| user   | the username to use when connecting to the database | yes |
| password | the password to use when connecting to the database | yes |
| database | the name of the database to use | yes |
| table    | the name of the table to use in the database | yes |
| sslMode  | if set to `disable` will not use ssl when connecting to the host | optional |
| acceptRecreateWarning | if set to `recreate tables` and used in combination with `recreateTables` it will drop all existing data in all tables, delete the tables, and create them | no |
| recreateTables | when used in combination with `acceptRecreateWarning` will nuke the database and recreate it |
| runMigrations | if set to `true` we will create the database tables, useful when first using a database | no
| createIndex | when used in combination with `runMigations` or `recreateTables` it will enable creation of an index that optimizes search queries | no

## Badger Options

| Name            | Values                 | Details                          | Default |
|-----------------|------------------------|----------------------------------|----|
| fileLoadingMode | 0 (FileIO), 2 (MemoryMap)| Controls how data is loaded. FileIO is suitable for memory constrained devices at the cost of performance | 0 |
| passphrase | 32 character string | Enables on the fly AES256 encryption of data | empty string (disabled) |
| logMode | disabled| Disable internal badger logging |  Empty string (logging enabled) | 
| async | false, true | Enable asynchronous writes to disk for better performance with the increased risk of data loss | false |


## Pebble Options

| Name            | Values                 | Details                          | Default |
|-----------------|------------------------|----------------------------------|----|
| withSync | false, true | Enable synchronous writes to disk | false |

## LevelDB Options

| Name | Values | Details | Default |
|------|--------|---------|---------|
| noSync | true, false | disable sync writes to disk | false |



## Replication

The `replication` section is used to configure the built-in replication protocol enabling groups of TemporalX node to replicate content between each other. Think IPFS Cluster, but extremely lightweight without complex consensus methods. The replication service uses an internal sqlite database to store replication state, and exposes a grpc port for communicating with other nodes. Server to server communication is secured by tls certificates derived from the nodes peer identity. 

Example configuration:

```yaml
replication:
  enabled: true
  database_location: storage/replication/db.sqlite
  grpc_port: 9094
  white_list_location: storage/replication/publishers
  replication_delay: 10m
```

A breakdown of replication configuration is as follows

name                  | example            | explanation                                     |
----------------------|--------------------|-------------------------------------------------|
grpc_port_dial_timeout | 2s                | timeout grpc connections if dial takes longer than given timeout|
enabled               | true               | whether or not replication is enabled           |
database_location     | vstorage/replication/db.sqlite | Location of the SQL database to keep track of replications. |
grpc_port             | 9094                          | A dedicated TCP port for replication protocol. |
white_list_location   | storage/replication/publishers | Location to a collection of peer public keys that are allowed to replicate on this server. The file format is raw protobuf as defined in github.com/libp2p/go-libp2p-core/crypto | 
replication_delay | 10m | ReplicationDelay is the time between two replication runs. Uses golang time.Duration string types | 
## Storage

The `storage` section is used to configure the main storage layer of our node. It consists of a generic `datastore` with a `blockstore` on top, and is primarily used for storing our "data" (files, etc..). It also enables managing of blocks using a novel reference count system, as opposed to a pinning system.

This is also where we configure the reference counted blockstore, which is an optional feature that is disabled by default. To read about the reference counter, click [here](REFERENCE_COUNTER.md).

When not using a reference-counted blockstore, delete requests operate on the backing data directly. Therefore, an external data management system is required if the reference-counted blockstore is not enabled.

Example Configurations:

Memory

```yaml
  storage:
    type: memory
```

LevelDB

```yaml
  storage:
    type: leveldb
    path: /temporalx/storage
```

Pebble
```yaml
  storage:
    type: pebble
    path: /temporalx/storage
    opts:
      withSync: true
```

LevelDB (reference counted)

```yaml
  storage:
    type: leveldb
    path: /temporalx/storage
    opts:
      noQueueStore: true
      counterStorePath: /temporalx/counterstore
      antsPreAlloc: true 
      antsMaxWorkers: 8192
      antsNonBlocking: true
      antsMaxBlockingTasks: 0
      antsExpiryDuration: 20s
```

A breakdown of the reference counter configurations is as follows

name                  | example            | explanation                                     |
----------------------|--------------------|-------------------------------------------------|
noQueueStore          | true               | enables the queueless reference count           |
counterStorePath      | counterstorage     | the path for storing reference counter metadata |
antsPreAlloc          | true               | preallocate worker pool for maximum memory efficiency |
antsMaxWorkers        | 8192               | maximum number of active count operations at a single moment |
antsNonBlocking       | true               | prevents count operation submission from blocking at the risk of inaccurate counts |
antsMaxBlockingTasks  | 8192               | indicates the max number of tasks that can block on submission |
antsExpiryDuration    | 10s                | enables setting a life time on tasks before they get removed |


If you are using the referene counter, you will want to make sure you don't enable blockstore caching, otherwise you will not get totally accurate reference count information, as the cached blockstore will intercept the blockstore call before our reference counter intercepts the call. By "not totally accurate" we mean that you will lmost likely get a maximum reference count of 1. For more deatils on this please consult the reference counter information page.

## Peerstore

The `peerstore` section is used to define configuration options for the libp2p peerstore, which is where records of all libp2p peers we encounter are stored. We currently have two supported types:

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

## Keystore

The `keystore` section is used to define configuration options for the keystore, which is a repository used by services like namesys to manage private keys. We currently have three supported types:

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

Filesystem

```yaml
  keystore:
    type: filesystem
    datastore:
      path: /temporalx/keystore
```

## LibP2P

The `libp2p` section is used to configure the libp2p host that we start up, and is a core component of TemporalX. All these configurations are from libp2p itself, so for those who have used existing IPFS solutions these may seem familiar.

<p align="left">
  · <a href="#dht"><strong>DHT</strong></a>
  <br>
  · <a href="#connection-manager"><strong>Connection Manager</strong></a>
  <br>
  · <a href="#circuit"><strong>Circuit</strong></a>
  <br>
  · <a href="#enabled-transports"><strong>Enabled Transports</strong></a>
  <br>
  · <a href="#dht-options"><strong>DHT Options</strong></a>
  <br>
  · <a href="#host-options"><strong>Host Options</strong></a>
  <br>
  · <a href="#swarm-key-private-networks"><strong>Swarm Key (Private Networks)</strong></a> 
</p>


### DHT

The `dht` section allows controlling the libp2p dht, as well as enabling a persistent DHT that allows storing DHT records on disk, and can be namespaced around the main storage datastore, or use a dedicated datastore.

#### Options

The `dht.options` section can be used to fine tune the DHT, and the routing table. Generally it's recommended to leave this empty unless you are very familiar with the mechanics of libp2p and its DHT. 

| Field | Type |
|-------|------|
| `dht.options.routing_table_latency_tolerance` | time.Duration |
| `dht.options.max_record_age` | time.Duration |
| `dht.options.client_mode` | bool |
| `dht.options.bucket_size` | int |
| `dht.options.protocols` | array of string |

#### Persistent

The `dht.persistent` section can be used to control how we persist DHT information on disk out of memory. This allows retaining DHT information whenever a node restarts, whereas the default setting is in-memory storage, thus losing all DHT data. Enabling this can be advantageous to reduce memory usage on very busy nodes, share DHT data amongst nodes via postgres, etc...

| Field | Type | Note |
|-------|------|-------|
| `dht.persistent.enabled` | bool | |
| `dht.persistent.namespaced` | bool | if using namespaced, dont use the `store` settings |
| `dht.persistent.store` | `datastore` | allows specifying a valid `datastore`  configuration to use instead of using a namespace wrapper around the main storage datastore |  

### Bootstrap

The `bootstrap` section can be used to skip the default list of peers to bootstrap from, or to provide an extra set of peers to use when bootstrapping.

| Field | Type | Note |
|-------|------|-------|
| `skip_defaults` | bool | allows skipping the default bootstrap peers, primarily useful on private networks |
| `extra_peers` | array of multiaddresses | when used with `skip_defaults: true` this will be the only set of peers used when bootstrapping

### Connection Manager

The `connection_manager` section is used to configure our libp2p connection management subsystem. It is not technically a "required" configuration, however it is strongly recommended you use it to keep resource consumption underwatch.

Configuration Options:

* `enabled` is used to enable/disable the connection manager.
* `low_water_mark` is the minimum number of connections we attempt to maintain
* `high_water_mark` is the number of connections that, when exceeded, will trigger a connection GC operation which will trim connections until the `low_water_mark` is reached.
* `grace_period` is a time duration that new connections are immune from being closed by the connection manager. It uses Golang `time.Duration` syntax so values like `1h` (1 hour), `10m` (10 minutes) are acceptable

### Transports

The `transports` section is used to configure the available transports. At the moment the only recognized configuration is `transports.enabled`, and a list of protocols to use as methods of communicating with other peers. The following tranports are optional:

* `noise`
* `quic`

### Host

The `host` section is used to configure the libp2p host. At the moment the only recognized configuration is `host.options` and a list of optional funcionality for the libp2p host. The following options are accepted:

| Field | Type | Default | Note |
|-------|------|---------|-------|
| `natPortMap` | bool | false | enables NAT hole punching |
| `enableP2PStreams` | bool | false | enables management of p2p streams to enable tunneling TCP/UDP traffic over libp2p |

### Circuit

The `circuit` section is used to configure libp2p circuit relay capabilities. It is recommended that unless you have a specific requirement you either leave this disabled, or simply set `enable` to true. You probably don't want to alter any of the settings here unless you know what you are doing and are familiar with the way libp2p works.

Configuration Options:

* `enable` is used to enable/disable the circuit relay. When set to true, our node will be allowed to dial through relay peers, and will listen for incoming connections from relay peers.
* `active` configures the relay transport to actively establish outbound connections on behalf of clients.
* `discovery` configures the relay transport to discover new relays by probing every single new peer. This can seriously impact performance.
* `relay_hop` configures the relay transport to accept requests to relay traffic on behalf of third-parties. Unless `active` is set to true, this will only relay traffic between peers that are already connected to our node.

### Enabled Transports

The `enabled_transports` section is used to configure the various transports that will be used by our node. By default we will use TCP and Web Socket transports with transport security provided by [secio](https://github.com/libp2p/go-libp2p-secio)

Configuration Options:

* `tls` is used to enable the [tls](https://github.com/libp2p/go-libp2p-tls) encrypted security transport, and will prefer tls transport security over secio transport security.
* `quic` is used to enable the [quic](https://github.com/libp2p/go-libp2p-quic-transport) transport.
* `noise` is used to enable the [noise](https://github.com/libp2p/go-libp2p-noise) security transport.

### DHT Options

The `dht_options` section is used to provide optional control of kad dht we instantiate. It currently supports one setting `persistentDHT` which is used to store DHT records on disk. It enables persisting DHT records long-term, and avoiding storing them in memory which has the side-effect of reducing memory consumption. If set to true, it uses datastore key [namespaces](https://github.com/ipfs/go-datastore/tree/master/namespace) to wrap around the main storage layer of our node. This means that it will use whatever datastore type you define in `node.storage`, and wrap all keys with a `dhtdatastore` prefix.

### Host Options

The `host_options` section is used to provide optional control of libp2p host configurations and supports the following configuration options:

* `natPortMap` is used to enable nat port mapping capabilities through [go-libp2p-nat docs](https://github.com/libp2p/go-libp2p-nat)
* `enableP2PStreams` is used to enabel "p2p streams" which is equivalent to the `ipfs p2p` command.

### Swarm Key (Private Networks)

The `swarm_key` is a configuration directive enables the usage of encrypted/private libp2p swarm connections via a pre-shared key. The default is an empty string, which will have the libp2p host operate on the "public network". If a non-empty string, the value will be used as the pre-shared key. It takes a 32-byte hex encoded string, which can be generated with `tex-cli config new-swarm-key` or `tex-cli config nsk`. If you want to force private libp2p communication, that is disable communication with libp2p hosts not using the same swarm key (or not using a swarm at all) set the environment variable `LIBP2P_FORCE_PNET` to `1` before launching TemporalX.


## Namesys

The `namesys` section is used to configure our name system, which is a generalized name system, supporting the IPNS protocol. 

| Field | Type | Default | Note |
|-------|------|---------|------|
| `namesys.enabled` | bool | false | |
| `namesys.pubsub` | bool | false | if true, requires using the `pubsub.value_store` configuration option mentioned in the next section |
| `cache_size` | bool | 128 | if `namesys.enabled` is set to true, this will allow caching up to N records in an LRU cache

## PubSub

The `pubsub` section is used to configure libp2p pubsub, which currently is using the gossipsub protocol.

| Field | Type | Default | Note |
|-------|------|---------|------|
| `pubsub.enabled` | bool | false | enables a pubsub router using the gossipsub protocol |
| `pubsub.direct_peers`| array of multiaddrs | specifies a set of peers to unconditionally forward messages to |
| `pubsub.options.outbound_queue_size` | int | `1 << 20` | maximum number of queued outbound messages to a single peer |
| `pubsub.options.flood_publish` | bool | false | enables publishing every message to all known peers, enabling a hybrid gossipsub + floodsub |
| `pubsub.options.peer_exchange` bool | false | whenevert the gossipsub `PRUNE` operation occurs, exchange peers
| `pubsub.value_store.enabled` | bool | false | enables using pubsub as a content routing subsystem, primarily useful for IPNS-over-PubSub, but can also be used to retrieve IPFS keys over pubsub |
| `pubsub.value_store.namespaces` | array of string | `ipns` | enables specifying keyspaces that will attempt to use pubsub to retrieve records. if the value store system is enabled, you'll need to set `namesys.pubsub: true`

## Cid Provider

The `cid_provider` section enables control of the subsystem responsible for providing to the network that we are storing some content.

| Field | Type | Default |
|-------|------|---------|
| `cid_provider.enabled` | bool | true |
| `cid_provider.provider_timeout` | time.Duration | 3m0s |
| `cid_provider.reprovider_timeout` | time.Duration | 12h0m0s |

## Discovery

The `discovery` section enables a service discover system, primarily used by pubsub to enable discovery of pubsub peers that are useful to us (ie, listening on the same topic).

| Field | Type | Default | Note |
|-------|------|---------|------|
| `discovery.enabled` | bool | true | enables basic service discovery using the dht |
| `discovery.backoff_enabled` | bool | false | enables slightly more advanced discovery ontop of basic DHT discovery, using backoff queries |
| `discovery.type` | string | "" | Current supported type is `ExponentialBackoff`
| `discovery.min_backoff` | time.Duration | "" | minimum backoff time
| `discovery.max_backoff` | time.Duration | "" | maximum backoff time

## Opts

The `opts` section is used to provide generalized configuration of TemporalX's IPFS node, and can be used to disable/enable certain internal components.

Configuration Options:

* `idStore` is used to enable optimized handling of identity hashes by enabling the `IDStore`, at the cost of decreasesd performance for all other types of blocks
* `blockstoreCaching` is used to enable a bloom+arc cache that sits on top of the blockstore, which can be used to improve query performance and reduce disk IO at the cost of increased memory consumption.
* `lowPower` is used to enable preference for settings friendly to low power devices.
* `pubsub` is used to enable the libp2p pubsub subsystem. It is disabled by default.
* `namesys` is used to enable the libp2p name resolution subsystem which provdies support for resolving IPNS, ENS, DNSLink, and more. It is disabled by default.
* `ipnsps`is used to enable IPNS PubSub transport/router (this reuqires enabling pubsub + namesys)
* `discovery` is used to enable service discovery
* `discoveryBackoff` is used to enable an advanced service discovery mechanism at the cost of increased resource consumption

# Logging

TemporalX uses `uber-go/zap` for our logging systems, whose logging output can be fine-tuned with the following environment variales

* `DEV_LOGGING` when set to `true` enables logging of development related conditions, primarily only useful when developing services against TemporalX
* `DEBUG_LOGGING` when set to `true` will display all logs including debug logs, note that this can cause very verbose output
* `FILE_LOGGING` when set to `true` will not show logs on stdout, and instead will only dump logs to the log file

Additionally because we use some upstream libraries that leverage `ipfs/go-log` the following environment variables can be used to control `ipfs/go-log` behavior:

* `IPFS_LOGGING` sets the level of verbosity of the logging and must be one of: debug, info, warn, error, dpanic, panic, fatal.
* `IPFS_LOGGING_FMT` sets formatting of the log output and must be one of: color, nocolor


# Config File Templates

The following sections contain template config files for a variety of platforms and environments, and can be used as a baseline for your own configuration

## Server (High Memory)

The following config should be suitable for server machines with 8GB+ memory and provides the best performance

```yaml
temporalx:
  api: 
    tracing: false
    listen_address: 0.0.0.0:9090 
    listen_proto: tcp
    tls:
      cert_file: certfile.txt 
      key_file: keyfile.txt 
    jwt: 
      realm: realm 
      key: key
    max_message_size: 4194304
    max_send_msg_size: 2147483647
    write_buffer_size: 32768
    read_buffer_size: 32768
    connection_timeout: 2m0s
    # if clients wil be connecting over high speed low-latency networks this likely isn't needed
    compression:
      enabled: true
      type: gzip
      level: 3
node:
  listen_addresses:
  - /ip4/0.0.0.0/tcp/4005
  peer_id: 12D3KooWGFFSDieD5xTK1L8ZAqCEGRJ6xAKEeaGnkXaNsrhCAgw1
  private_key: 080112403bd9126aeee7f2186e0e0f96aba8f402a9628caf986a003bb62f081144f74a4bc62c107665752d48ffa876d1d8c7c48cf65ce6f91cd185de33fc34afdeb7ec61
  storage:
    type: badger
    path: storage
    opts:
      fileLoadingMode: 2
      noQueueStore: true
      counterStorePath: counterstore
      antsPreAlloc: true
      antsMaxWorkers: 8192
  peerstore:
    type: memory
  keystore:
    type: krab
    passphrase: Swoovretag
    datastore:
      type: leveldb
      path: keystore
  replication:
    enabled: true
    database_location: storage/replication/db.sqlite
    grpc_port: 9094
    grpc_port_dial_Timeout: 1s
    white_list_location: storage/replication/publishers
    replication_delay: 10m
  libp2p:
    connection_manager:
      enabled: true
      low_water_mark: 6000
      high_water_mark: 9000
      grace_period: 20s
    transports:
      enabled:
        noise: true
        quic: true
  namesys:
    enabled: true
    pubsub: true
    cache_size: 1024
  pubsub:
    enabled: true
    value_store:
      enabled: true
      namespaces:
      - ipns
  cid_provider:
    provider_enabled: true
    provider_timeout: 3m0s
    reprovider_interval: 12h0m0s
  discovery:
    enabled: true
    backoff_enabled: true
    type: ExponentialBackoff
    min_backoff: 1m0s
    max_backoff: 1h0m0s
  opts:
    blockstoreCaching: true
log_file: ./logger.log
```

## Server (Low Memory)

The following configuration is suitable for servers with 6GB+ memory, and provide a combination of good performance, and low memory consumption, while also using reference counting

```yaml
temporalx:
  api: 
    tracing: false
    listen_address: 0.0.0.0:9090 
    listen_proto: tcp
    max_message_size: 4194304
    max_send_msg_size: 2147483647
    write_buffer_size: 32768
    read_buffer_size: 32768
    connection_timeout: 2m0s
node:
  listen_addresses:
  - /ip4/0.0.0.0/tcp/4005
  peer_id: 12D3KooWGFFSDieD5xTK1L8ZAqCEGRJ6xAKEeaGnkXaNsrhCAgw1
  private_key: 080112403bd9126aeee7f2186e0e0f96aba8f402a9628caf986a003bb62f081144f74a4bc62c107665752d48ffa876d1d8c7c48cf65ce6f91cd185de33fc34afdeb7ec61
  storage:
    type: badger
    path: storage
    opts:
      fileLoadingMode: 0
      noQueueStore: true 
      counterStorePath: counterstore
      antsMaxWorkers: 8192
  peerstore:
    type: memory
  keystore:
    type: krab
    passphrase: Swoovretag
    datastore:
      type: leveldb
      path: keystore
  replication:
    enabled: true
    database_location: storage/replication/db.sqlite
    grpc_port: 9094
    grpc_port_dial_Timeout: 1s
    white_list_location: storage/replication/publishers
    replication_delay: 10m
  libp2p:
    connection_manager:
      enabled: true
      low_water_mark: 6000
      high_water_mark: 9000
      grace_period: 20s
    transports:
      enabled:
        quic: true
  namesys:
    enabled: true
    pubsub: true
    cache_size: 1024
  pubsub:
    enabled: true
    value_store:
      enabled: true
      namespaces:
      - ipns
  cid_provider:
    provider_enabled: true
    provider_timeout: 3m0s
    reprovider_interval: 12h0m0s
  discovery:
    enabled: true
    backoff_enabled: true
    type: ExponentialBackoff
    min_backoff: 1m0s
    max_backoff: 1h0m0s
  opts:
    blockstoreCaching: true
log_file: ./logger.log
```

## Mid-Range

On a machine with more than 4GB of memory, the following config template will provide good performance, data replication, namesys, and pubsub discovery.

```yaml
temporalx:
  api: 
    max_message_size: 4194304
    max_send_msg_size: 2147483647
    write_buffer_size: 32768
    read_buffer_size: 32768
    connection_timeout: 2m0s
node:
  listen_addresses:
  - /ip4/0.0.0.0/tcp/4005
  peer_id: 12D3KooWGFFSDieD5xTK1L8ZAqCEGRJ6xAKEeaGnkXaNsrhCAgw1
  private_key: 080112403bd9126aeee7f2186e0e0f96aba8f402a9628caf986a003bb62f081144f74a4bc62c107665752d48ffa876d1d8c7c48cf65ce6f91cd185de33fc34afdeb7ec61
  storage:
    type: badger
    path: /temporalx/storage
    opts:
      fileLoadingMode: 0
  peerstore:
    type: memory
  keystore:
    type: filesystem
    datastore:
      path: keystore
  replication:
    enabled: true
    database_location: storage/replication/db.sqlite
    grpc_port: 9094
    grpc_port_dial_Timeout: 1s
    white_list_location: storage/replication/publishers
    replication_delay: 10m
  libp2p:
    connection_manager:
      enabled: true
      low_water_mark: 1200
      high_water_mark: 1800
      grace_period: 20s
  namesys:
    enabled: true
    cache_size: 1024
  pubsub:
    enabled: true
  cid_provider:
    provider_enabled: true
    provider_timeout: 3m0s
    reprovider_interval: 12h0m0s
  discovery:
    enabled: true
log_file: ./logger.log
```

## Low Power / High Memory 

Similar to the low power lowest memory configuration, this template will provide slightly better performance, but will be higher in memory consumption. This should be fine for use with devices like the Raspberry Pi 4 4GB model, and similar spec'd devices.

```yaml
temporalx:
  api: 
    listen_address: 0.0.0.0:9090 
    listen_proto: tcp
    max_message_size: 4194304
    max_send_msg_size: 2147483647
    write_buffer_size: 32768
    read_buffer_size: 32768
    connection_timeout: 2m0s
node:
  listen_addresses:
  - /ip4/0.0.0.0/tcp/4005
  peer_id: 12D3KooWGFFSDieD5xTK1L8ZAqCEGRJ6xAKEeaGnkXaNsrhCAgw1
  private_key: 080112403bd9126aeee7f2186e0e0f96aba8f402a9628caf986a003bb62f081144f74a4bc62c107665752d48ffa876d1d8c7c48cf65ce6f91cd185de33fc34afdeb7ec61
  storage:
    type: badger
    path: /temporalx/storage
    opts:
      fileLoadingMode: 0
  peerstore:
    type: memory
  keystore:
    type: filesystem
    datastore:
      path: keystore
  pubsub:
    enabled: true
  namesys:
    enabled: true
  libp2p:
    dht:
      options:
        client_mode: true
      persistent:
        enabled: true
        namespaced: true
    connection_manager:
      enabled: true
      low_water_mark: 300
      high_water_mark: 900
      grace_period: 20s
  cid_provider:
    provider_enabled: true
    provider_timeout: 2m0s
    reprovider_interval: 12h0m0s
  opts:
    lowPower: true
log_file: ./logger.log
```

## Low Power / Lowest Memory


This config template is suitable for use with the most memory restricted environments, such as embedded systems using Raspberry Pis, IoT devices, etc...

```yaml
temporalx:
  api: 
    listen_address: 0.0.0.0:9090 
    listen_proto: tcp
    max_message_size: 4194304
    max_send_msg_size: 2147483647
    write_buffer_size: 32768
    read_buffer_size: 32768
    connection_timeout: 2m0s
node:
  listen_addresses:
  - /ip4/0.0.0.0/tcp/4005
  peer_id: 12D3KooWGFFSDieD5xTK1L8ZAqCEGRJ6xAKEeaGnkXaNsrhCAgw1
  private_key: 080112403bd9126aeee7f2186e0e0f96aba8f402a9628caf986a003bb62f081144f74a4bc62c107665752d48ffa876d1d8c7c48cf65ce6f91cd185de33fc34afdeb7ec61
  storage:
    type: leveldb
    path: /temporalx/storage
  peerstore:
    type: datastore
    datastore:
      type: leveldb
      path: /temporalx/peerstore
  keystore:
    type: filesystem
    datastore:
      path: keystore
  libp2p:
    dht:
      options:
        client_mode: true
      persistent:
        enabled: true
        namespaced: true
    connection_manager:
      enabled: true
      low_water_mark: 300
      high_water_mark: 900
      grace_period: 20s
  cid_provider:
    provider_enabled: true
    provider_timeout: 1m0s
    reprovider_interval: 24h0m0s
  opts:
    lowPower: true
log_file: ./logger.log
```
