# Gateway

> **Note: gateway is currently disabled pending a rewrite**

Like `go-ipfs` TemporalX exposes a HTTP gateway that can be used to browse data on IPFS without needing to use specialized software.  It features the same functionality, except with the ability to resolve IPLD requests. As with `go-ipfs`, all requests take the form of `/ipfs`, `/ipns`, or `/ipld`, followed by the CID you are requesting. At the moment we only support resolution of up to 1 cid per path at most, we do not yet support multi-cid path resolution. The one limitation to `/ipns` requests, is that it must either point to another IPNS record, or IPFS object. We do not yet support resolution of IPNS records that point to IPLD objects.

The gateway is limited to processing 1000 requests a second, and all requests will timeout after 2 minutes.

## Supported Features

* `/ipns` resolution
  * Must point to `/ipns` or `/ipfs`, records that point to `/ipld` will result in an error
* `/ipfs` resolution
* `/ipld` resolution

## Planned Features

* Built-in caching of resolved requests (probably using ristretto)
* Ability to search multiple-backends (TemporalX, or go-ipfs servers)
