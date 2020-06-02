# Getting Started

This documentation covers everything you need to know to quickly get your TemporalX server up and running. If this is your first time installating TemporalX, this is the documentation you should be reading.

## Table Of Contents

<p align="left">
  · <a href="#installation-and-license-registration"><strong>Installation And License Registration</strong></a>
  <br>
  · <a href="#command-overview"><strong>Command Overview</strong></a>
  <br>
  · <a href="#configuration-initialization"><strong>Configuration Initialization</strong></a> 
  <br>
  · <a href="#client-overview"><strong>Client Overview</strong></a>
  <br>
  · <a href="#starting-the-node"><strong>Starting The Node</strong></a>
  <br> 
  · <a href="#stopping-the-node"><strong>Stopping The Node</strong></a>
  <br>
  · <a href="#node-bootstrapping"><strong>Node Bootstrapping</strong></a>
  <br>
   · <a href="#your-first-upload"><strong>Your First Upload</strong></a>
  <br>
  . <a href="#monitoring"><strong>Monitoring</strong></a>
  <br>
  . <a href="#admin-api"><strong>Admin API</strong></a>
  <br>
  · <a href="#logging"><strong>Logging</strong></a> 
</p>

## Installation And License Registration

To install TemporalX, all you have to do is take the binary that you download and place it in a location that you can execute commands from. Typically this is somewhere in the `$PATH` variable but you'll want to consult the manual for your specific operating system. We recommend that you name the executable `tex-cli`.

Before you can use TemporalX, you need to register a license key. When purchasing TemporalX you'll be given a unique identifier called a UUID. To register TemporalX you need to set the identifier under the environment variable `TEMPORAL_UUID`. For example, if your UUID is 1, you would want to set `TEMPORAL_UUID=1`. After this run the command `tex-cli` and you'll go through the registration process automatically. 

You only need to register TemporalX the first time you run it on a machine. Each license is restricted to the machine it is registered on, and during the license registration process, both the license key and uuid get saved to the `.temporalx` of your home directory.

If you use systemd we have a systemd service file that you can use to handle starting/stopping TemporalX:

```
[Unit]
Description=temporalx enterprise ipfs client
After=network.target

[Service]
User=temporalx
Group=temporalx
Type=simple
LimitNOFILE=65535
PIDFile=/var/run/temporalx.pid
ExecStart=/boot_scripts/temporalx_management.sh server
KillSignal=SIGINT

[Install]
WantedBy=multi-user.target
```

And the TemporalX management script
```
#! /bin/bash

# used to manage a TemporalX installation
CONFIG_FILE="/boot_scripts/temporalx.yml"

case "$1" in

    server)
        # start TemporalX with bootstrapping and periodic bootstrapping
        tex-cli --config "$CONFIG_FILE" --bp --bpp --bppi 2m20s server
        ;;

esac
```

## Command Overview

The command line client is called `tex-cli`, and invoking the command without any arguments, or with the `--help`/`-h` flag will display the following information:

**Note: where it says `<VERSION>` will be the git release tag when the binary was built, this is from `v3.4.2`**

```
NAME:
   tex-cli - TemporalX command-line management tool

USAGE:
   tex-cli [global options] command [command options] [arguments...]

VERSION:
   <VERSION>

AUTHORS:
   Alex Trottier <postables@rtradetechnologies.com>
   George Xie <georgex@rtradetechnologies.com>

COMMANDS:
   admin             admin commands
   util              generalized utility functions
   client            gRPC client subcommands
   config            configuration management tools
   replication, rep  Create, update, and monitor replications
   server            run the gRPC api server
   node              runs a standalone node without the API
   license           license management
   help, h           Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --bootstrap, --bp                                  bootstrap against public ipfs (default: false)
   --bootstrap.periodic, --bpp                        enables periodic reboostrapping (default: false)
   --bootstrap.periodic.interval value, --bppi value  how often to run periodic rebootstrapping (default: 2m0s)
   --config PATH, --cfg PATH                          load the configuration file at PATH (default: "./config.yml")
   --config.env, --cfg.e                              load configuration file from environment variables (default: false)
   --help, -h                                         show help (default: false)
   --version, -v                                      print the version (default: false)
```

## Configuration Initialization

To create a yaml configuration file, you can use the command:

```
$ tex-cli config generate
``` 

To populate a default configuration file in your curent directory named `config2.yml`, run the command:

```
$ tex-cli --config config2.yml config generate
```

The default configuration is set to usable on machines with low memory like raspberry pi's, or other similar devices. If you want to see a configuration suitable for machines with more available resources such as services, see the example config file located in the [config documentation](CONFIGURATION.md).

Make sure you always use a hex encoded private key that is either generated by the tex-cli binary during config initialization, or by yourself securely offline. Do not use any of the ones in the documentation because they are publicly available. These private keys are ed25519 keys as generated by the `go-libp2p-core` crypto library, except they are also hex encoded.

## Client Overview

All non-replication commands that use the gRPC API are grouped under the `client` command. Previously you used to be able to configure the client via the yaml configuration file, however this proved to be a bit difficult to use via the CLI and involved shipping copies of the config file to whatever machine you were using the CLI on. This has been refactored to use the following two flags under the `client` command:

* `--endpoint.address, --ea` - the address of the TemporalX gRPC server
  * examples:
    * `--endpoint.address xapi.temporal.cloud:9090`
    * `--ea xapi.temporal.cloud:9090`
* `--insecure` - indicates whether the endpoint requires TLS encryption or if it is insecure
  * examples:
    * `--insecure=false` - connecting to an SSL/TLS enabled endpoint
    * `--insecure=true` (default) - connecting to an endpoint with no SSL/TLS

For detailed information about the client commands [view the go-temporalx-sdk documentation](https://github.com/RTradeLtd/go-temporalx-sdk#usage).

## Starting The Node

To start the node with the config file located at `/tmp/config.yml` run:

```
$ tex-cli --config /tmp/config.yml server
```

If you want to bootstrap against the public libp2p bootstrap servers, and Temporal's public IPFS infrastructure, use the `--bp` flag like so:

```
$ tex-cli --config /tmp/config.yml --bp server
```

This bootstrap process is done in the background, and does not block the startup process.

## Stopping The Node

To stop the node after running the server, you can use any of the following os calls and system calls against the tex-cli server process, such as `kill -9` or `CTRL+C` in the terminal window you are running the server from. This will immediately cancel all active gRPC calls, and start tthe shutdown process.

It is important to not forcefully abort the shutdown process, and let the process complete once it is triggerd. Force shutting down the node will have an increased risk of data corruption, and if using reference counting, will lose any pending reference count operations.

## Node Bootstrapping

TemporalX includes two types of bootstrapping capabilities that allow us to ensure we always maintain a high number of connected peers. 

The first being a traditional boostrap functionality as is done with go-ipfs; This is invoked with the `--bootstrap, --bp` flags, which triggers a one time connection to a preset list of peers, and starts the DHT bootstrap function which maintains the routing table.

The second type is a periodic bootstrap, which runs at a usesr-configurable interval (default of 2 minutes), and connects to the preset peer list (approximately 30 peers), along with an additional 10 randomly selected peers from our known peer list. This periodic bootstrapping functionality is lightweight, and consumes very little resources, but in practice allows us to both reach our target peer count faster, and easier to maitnain.

As noted by the following output with the TemporalX not being online for more than 5 minutes, and go-ipfs having approximately 7 day uptime, the TemporalX node is much better connected than go-ipfs.

```
rtrade@capecod:~/stress$ tex-cli client --ea 192.168.1.201:9090 --insecure=true node peer count
connected peer count: 746
rtrade@capecod:~/stress$ ipfs swarm peers | wc -l
133
```

To enable periodic bootstrap you can use `--bootstrap.periodic, --bpp` and should you want to configure the interval to something other than the default 2 minutes `--bootstrap.periodic.interval value, --bppi value` where `value` is a time.Duration value such as `2m0s, 1hr` etc...

Note that to use periodic bootstrap, you must also use the regular bootstrapping method enabled with `--boostrap, --bp`.

## Your First Upload

To upload a file located at `/tmp/foo.txt` as a unixfs object to your local node, and make it publicly available to the IPFS network run the command:

```
$ tex-cli client --ea localhost:9090 file upload --file.name /tmp/foo.txt
```

Which will return output like:

```
$ tex-cli client --ea localhost:9090  file upload --file.name /tmp/foo.txt

hash of file bafybeifxokjh6pny5eq7fdh3bhik4sfzrpmevp5c24guonwtu44iusa5h4
```

To download the file and save it at `/tmp/foo2.txt` run the command

```
$ tex-cli client --ea localhost:9090  file download --cid bafybeifxokjh6pny5eq7fdh3bhik4sfzrpmevp5c24guonwtu44iusa5h4 --save.path /tmp/foo2.txt
```

When you run the `client file upload` command, you end up storing the given file as a unixfs object, and you announce to the network that you are providing the returned hash. When you run the `client file download` command, we first check if node has the data for the given cid locally, and if not we ask the rest of the network for that data.

No output isn't a sign of anything going wrong, and means your action completed. For example `client file download` and `client file upload` by default dont give any output.  If you want to display some additional information, try the flag `--print-progress` or `--pp`

## Monitoring

Using the configuration file you can enable metric collection that gets exposed via a prometheus http endpoint. You can either consume from this endpoint directly, or plug it into tools like Grafana for nice looking charts.

Within the config file set `prometheus.enabled: true` and provide an ip+port you want to expose the metrics on. The metrics will be available on the path `/metrics`. For example if you provided the ip+port `127.0.0.1:9093` you can go to `127.0.0.1:9093/metrics` and start collecting your data.

Additionally you can enable system profiling in the same way, however the path for that information is `/debug/pprof`.

### Metric Seeding

The following usage of `--seed.metrics` will enable seeding of prometheus metrics:

```shell
$> tex-cli server --seed.metrics (long form)
$> tex-cli server --sm           (short form)
```

## Admin API

Expose via `localhost:9999` we have an admin gRPC API that allows low-level management of TemporalX, in particular it allows managed the garbage collection of the reference counted blockstore.

## Logging

By default, logs are printed to standard out, and also stored on disk where ever you specify by the `log_file` config file key. By default we display, and log all levels *except* **debug**.

There are a few environment variables that can be used to adjust logging:

* `DEV_LOGGING=true` - enables logging of extra processing information useful when developing on TemporalX.
* `DEBUG_LOGGING=true`- enables collection of debug level information.
* `FILE_LOGGING=true` - disables logging of information to standard out, and only logs to the log file.


Additionally some of the libraries we use such as `go-libp2p` have internal logging systems. To enable those, you can use the environment variable name `IPFS_LOGGING`, and set it to a log level. For example `IPFS_LOGGING=debug` will enable debug level log collection from libraries use `github.com/ipfs/go-log` internally.