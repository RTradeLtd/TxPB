# Replication Documentation

## The Basics

Replication builds on top of the IPFS protocol and enables users to replicate files
on supported servers with a high degree of autonomy.

A replication file is a protocol buffer container (./replication.proto) with the following parts:

- CIDs, a list of IPFS content IDs, as the set of data to replicate.
- Servers, a list of potential servers to replicate to.
- Replication Factor, the minimum number of replications to make.

Each server can be directly connected to by a network agent and have the following observable states:

- Not Reachable, where the server is down or can not be connected to.
- Reachable and Reserved, where the server is not asked to replicate CIDs.
- Reachable and Active, where the server is asked to replicate CIDs.

To maintain a minimum number of reachable and active servers, an agent runs the following pseudocode:

``` pseudocode
// Part 1: Collect and retrieves the state of each server.
for each listed server {
    if (not reachable){
        ignore it
    }else if (is active){
        add server to list A
    }else{
        add server to list R
    }
}

// Part 2: Activate servers until Replication Factor is reached, or run out of reserves.
while (|A| < ReplicationFactor) and (|R| > 0){
    R1, R = R[0], R[1:]
    if (activate R1, and is successful){
        add R1 to A
    }
}
```

After initiation, all active servers periodically runs the above algorithm, therefor maintaining a self
repairing replication set. The servers have the same ordering to all agents, therefor many agents can run the
maintenance algorithm in parallel and request the same servers to activate, without any additional coordination.

If there are not enough active server after the replication algorithm was run,
then the best possible result was still achieved. In this case, an error is logged which could be used to
set off alarms, and auto recovery happens as soon as offline servers become reachable again.

If all active server goes offline at the same time, then replication fails and data becomes unavailable. There is
no alternative to this scenario. This is also the only true fail condition.

Although an active server may or may not have all CID contents saved locally, they are counted the same
because such property is transient.

## Secure Updates

A replication file is warped inside a SignedSubscription (./api.proto) for authorized updating.
a SignedSubscription contains the following sections:

- Topic, a static `string`.
  - Names the purpose of the subscription.
  - URI format is suggested but not required.
- Author ID, a static libp2p peer ID in `bytes`.
  - Authenticates the subscription.
  - Together with topic this also identifies a subscription.
  - An author can publish multiple subscriptions and many authors can publish the on the same topic without conflict.
  - Changes to either topic or author creates a new subscription, so they are "static" and can not be modified in an update.
- Version, a strictly increasing number, 1 or greater, in `int64`.
  - Use a counter or timestamp.
  - The highest know version is the newest version to replicate.
- Replication file, in `bytes`.
  - This file is what updates between versions.
- Signature, in `bytes`.
  - Creates a SignedSubscription using the author's private key.

Updates are pushed, or pulled during replication maintenance, if version numbers on both side of a connection does not match.
Subscriptions are eventually consistent and converges to the highest version number. An author should not, but currently there
is no protection against version number reuse.

<!-- See #ReplicatorServer or (./api.proto) for gRPC API. (not yet public)-->

## Administrative

Currently, the replication protocol requires it's own gRPC port. Which must be included with the servers libp2p address.

When a server is asked to become active, it only checks one thing: is the author whitelisted?
This also allows servers not listed to replicate the files but not counted towards replication factor.

## Security Details

*This section is intended to help someone doing a security review of replication
and should not be required reading to use the feature securely.*

With security advice from:
[Protocol Interactions and the Chosen Protocol Attack
(J. Kelsey, B. Schneier, and D. Wagner) 1997](https://www.schneier.com/academic/archives/1997/01/protocol_interaction.html)

Protocol Buffers is designed for size and speed, but have the following properties that must be considered:

- Protocol Buffers are not self descripting.
  - Two protocols can easily share the same binary data structure,
  - but we must never sign or accept data for a different protocol.
- Protocol Buffers do not have a standard canonical encoding.
  - Unmarshalling and marshalling does not guarantee a binary match,
  - but signing algorithms operate on binary data.
- Protocol Buffers ignores data not listed in the schema by default,
  - but we should never sign unknown data.

To solve these concerns we must sign and verify data encoded using Protocol Buffers carefully.

Replication file contains a required header field, currently this must match "rtrade-replication v0" (for the current development stage).
Before signing a file, all protocol buffers structures are checked against unrecognised fields.
The binary data passed to the signing algorithm is defined as follows:

- Where all numbers and length information are encoded as variable length integers (encoding/binary.PutUvarint).

- Where all bytes and strings are encoded with length prefixed.

- The bytes to be signed are: Topic `string` | AuthorId [`peer.ID`](https://www.godoc.org/github.com/libp2p/go-libp2p-core/peer#ID.Marshal) | Version [`Uvarint`](https://godoc.org/encoding/binary#PutUvarint)| Replication (encoded protocol buffers bytes)

## Notable missing features that may or may not be worked on

Additional logic before accepting an activation, to protect against resource overuse in a public network.

Conditions for requesting and accepting deactivation on a server.

Management and removal of old versions from local database.

Encrypted subscription. If there is a need to hide update meta data.

gRPC over libp2p.

Advanced server listing and ordering features.

Graceful server deprecation. This add a third observable state "deprecated".
It can not become active, but can be connected to and serves existing data.

Erasure coding.
