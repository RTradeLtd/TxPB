# Replication CLI Documentation

## Prepare a Versioned Replication File

Here is an example minimum replication file:
```yml
topic: test rep
author: 12D3KooWCTToC93Nsy2kqQroRtktzsJ4q5F1ymgR8XqHqje1RXNN
version: 1
redundancy: 2
cids:
- bafybeihykld7uyxzogax6vgyvag42y7464eywpf55gxi5qpoisibh3c5wa
servers:
- id: QmXtW5fXrrvmHWPhq3FLHdm4zKnC5FZdhTRynSQT57Yrmd
  grpcport: 9094
  addresses:
  - /ip4/127.0.0.1/tcp/12345
- id: QmRd2F8C6Nk49zjLmNCHKRzPaMUggEicJMw6tHX6DEe8VL
  grpcport: 9094
  addresses:
  - /ip4/127.0.0.2/tcp/12345
```
The default location of this file is `replication.yml`, you can change it with the `-yml` flag of the `tex-cli rep sign` command.

`topic` and `author` can identifies a replication subscription. You can update a published replication by keeping those identifiers the same and increase the version number. The minimum allowed version is 1.

`author` is the public key that is used to verify the authenticity of updates.

`redundancy` specifies the number of desired servers to replicate to. It must be 2 or greater.

`cids` is a list of contents the servers should replicate. The files should be already available on the IPFS network.

`servers` is a list of protentional servers to replicate to. The number of servers must be equal or greater than redundancy. The servers are preferred by the order they appear in the list.

## Providing the Private Key

The private key is provided by the global config file given to `tex-cli`. You can generate this file by `tex-cli config gen`. By default, it will use the key in `node.private_key` in `config.yml`. Please keep it safe.

## Sign and Publish Replication Changes

Sign and publish is accomplished with the following command:

```bash
tex-cli rep sign
```

## Common Error Conditions

> private key does not sign author id, please use author id 12D3KooWCTToC93Nsy2kqQroRtktzsJ4q5F1ymgR8XqHqje1RXNN or using the correct private key

Use the correct private key, or copy the author id to the `author` field of `replication.yml`.

> an equal or greater version already exist on the network, you must change your replication version to greater than 1

Increase the `version` field of `replication.yml`, or if no changes was made since last publish, you current version was already published on the network.