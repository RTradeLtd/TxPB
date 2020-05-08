# Frequently Asked Questions

## Is TemporalX A Fork Of Go-IPFS

TemporalX is not a fork of go-ipfs in any capacity, nor does it inherit any dependencies from `go-ipfs`. The TemporalX API server, and node we use are entirely written from scratch as this was the only way possible to get the performance we need. In some situations we inherit dependencies from other IPFS organization repositories, namely data format libraries such as `go-cid`, `go-block-format`, etc..

## What Dependencies Are Forked From Upstream

The current list is as follows, but note that over time we will continue to fork upstream libraries.

* `go-libp2p-kad-dht`
* `go-libp2p-kbucket`
* `go-libp2p-pubsub-router`
* `go-ipfs-provider`
* `go-libp2p-testutils`
* `go-ipns`
* `go-ipfs-routing`
* `go-libp2p-routing-helpers`
* `go-libp2p-record`
* `go-ipfs-blockstore`
* `go-ipfs-provider`
* `go-libp2p-connmgr`
* `go-libp2p-tls`
* `go-ws-transport`
* `go-libp2p-peerstore`
* `go-blockservice`

## Is TemporalX Compatible With The Rest Of The IPFS Network

Yes, we do everything we can to make sure that TemporalX nodes can talk to go-ipfs nodes, as well as transfer data to/from them. We are not interested in creating a separate IPFS network, nor are we interested in breaking compatability with the rest of the network. If we did these things, TemporalX wouldn't be very useful outside of niche use cases by enterprise organizations. As such, any data you add to IPFS via TemporalX can be transferred to, and consumed by Go-IPFS; Any data you add to IPFS via Go-IPFS can be transferred to and consumed by TemporalX.

## Why Is TemporalX Closed Source

Simply put, we are a small startup without a lot of outside funding, and open-sourcing the project would mean we are unable to sustain the development or ourselves. As of the later half of 2019 and 2020 a lot of our money gets spent on development of internal tools like TemporalX. To improve TemporalX and continue it's development, we need a way to recover our investment in the development of TemporalX, which is mainly selling the software as is, integrating the software into contract projects we work on, selling support packages, etc... (the usual song and dance for enterprise software). 

Additionally as a business we need to protect our IP, and avoid the ability for people to copy and paste our work. It is unfortunate, but it is quite frequent in the open-source community for such incidents to happen. Additionally the funding of open-source only projects is a difficult affair, a problem that is not unique to us, but all open-source projects. Furthermore we have a plethora of open-source repositories suitable for people who find closed-source software undesirable.

## Why Dont You Push Improvements Upstream


The bulk of our modifications are not compatible with upstream implementations. As TemporalX is written from scratch, there is no easy way to upstream the improvements we've made, and in most cases the improvements are just straight up not compatible with upstream. If we find bugs we report them upstrea, and will even fix them if time permits.


## How Does The TemporalX License Work

The license is essentially an access pass to updates. As long as the license is valid, you will be eligible to receive updates to TemporalX as we make them available. If the license expires, you don't have to worry about the software not working, it will still work! With an expired license however, it means that you are not eligible to receive updates, and will have to use the version of TemporalX that you have when the license expires if it is not renewed.

## How Much Is The TemporalX License

At the time of this writting the cost is $299USD/yr for a license that covers three nodes. You may be wondering "how did you arrive at three nodes", the answer of which is pretty simple. TemporalX includes built-in replication, and the bare minimum for a highly available replicated anything is "3 nodes". As such we wanted to ensure that the base license includes the ability to have a highly available TemporalX environment to protect your data.

## Does TemporalX Offer X Functionality That Go-IPFS Offers

In all cases we have feature parity with non-experimental go-ipfs features. This includes private networks, pubsub, ipns, etc.. The only time we don't have feature parity is when it comes to the experimental features like MFS, or FUSE mounts.

## Does TemporalX Support Private Networks

Yes


## Why Was TemporalX Created And We Didn't Just Improve Go-IPFS

When we first approached the idea of TemporalX, we initially tried forking the go-ipfs codebase and the ipfs-cluster codebase. However this effort was quickly abandoned, namely because the go-ipfs codebase is massive, several years old, and has to appease a much larger audience, with a wide variety of needs, some of which aren't what we, and what the target audience of TemporalX needs. TemporalX was created to provide enterprise grade IPFS performance, in a stable and robust package that is easy to maintain. By starting from scratch, we were able to build from a clean slate, and be able to think outside the box when it comes to how an IPFS node should be have in production environments.