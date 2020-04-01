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
authorprivatekey: ""
clientprivatekey: ""
```

The default location of this file is `replication.yml`, you can change it with the `--yml` flag of the `tex-cli rep sign` command.

`topic` and `author` identifies a replication subscription. You can update a published replication by keeping those identifiers the same and increase the version number. The minimum allowed `version` is 1.

`author` is the public key that is used to verify the authenticity of updates.

`redundancy` specifies the number of desired servers to replicate to. It must be 2 or greater.

`cids` is a list of contents the servers should replicate. The files should be already available on the IPFS network.

`servers` is a list of protentional servers to replicate to. The number of servers must be equal or greater than redundancy. The servers are preferred by the order they appear in the list. To publish on a server, the author's public key must be whitelisted.

`authorprivatekey` is a optional setting allowing you to save the author's private key within the replication file. It is suggested to use a key store for better security. (Private keys are encoded using hex encoding the same way as the `node.private_key` in `config.yml`.)

`clientprivatekey` is a optional setting allowing you to use a permeant connection id for tls and libp2p protocols. This private key must not be the same as any servers that you want to connect to.

## Providing the Author's Private Key Externally

One way to provide the author's private key is by using the global config file given to `tex-cli`. You can generate this file by `tex-cli config gen`. By default, it will use the key in `node.private_key` in `config.yml`. Please keep it safe.

You can also use the key store set in `config.yml` with the `--author` flag to use the named private key.

## Sign and Publish Replication Changes

Sign and publish is accomplished with the following command:

```bash
tex-cli rep sign
```

## Add an Author to a Server's Whitelist

You can export your public key with the following command:

```bash
tex-cli rep export-public-key
```

Which will create a file named as your author id, such as `12D3KooWEdRfREmzv2NnVjaPAvCR9WAWnShgEcLTbrk7NLpqH7g3.publickey`.

Copy this file to your server's whitelist folder and restart your server will add it to the white list.

The whitelist folder is defined under `node.replication.white_list_location` of `config.yml`, which is `storage/replication/publishers` by default.

## Check Server state

To check the state of a replication use the following command:

```bash
tex-cli rep check
```

Sample Output:

```txt
server 0: active true, target 3, current 3
server 1: active true, target 3, current 2
```

Where `active` is a server that is actively replicating. The number of active servers should be at `redundancy` or greater.

`target` is the targeted version. This is the highest version the server knows about.

`current` is the highest version the server have replicated. If this number is lower than `target`, then this server is retrieving the listed cids.

## YAML automation

You can edit some fields of the `replication.yml` file from the cli for basic scripting capabilities.

The cids and version field can be updated with the following example command:

```bash
tex-cli rep edit --remove-cid all --add-cid bafybeihykld7uyxzogax6vgyvag42y7464eywpf55gxi5qpoisibh3c5wa --increase-version
```

Where all existing cids are removed, a new one is added, and the version increased by one. The remove and add flags can be repeated to add or remove a list of cids.

## Common Error Conditions

> private key does not sign author id, please use author id 12D3KooWCTToC93Nsy2kqQroRtktzsJ4q5F1ymgR8XqHqje1RXNN or using the correct private key

Use the correct private key, or copy the author id to the `author` field of `replication.yml`.

> rpc error: code = FailedPrecondition desc = Author 12D3KooWEdRfREmzv2NnVjaPAvCR9WAWnShgEcLTbrk7NLpqH7g3 not allowed to replicate on this server

This author is not white listed on the server, to add it to the white list,  

> an equal or greater version already exist on the network, you must change your replication version to greater than 1

Increase the `version` field of `replication.yml`, or if no changes was made since last publish, you current version was already published on the network.

> current version is stuck at 0 or other number lower than target

Make sure the cids are availed on IPFS. You can upload the files directly to one of the replicating servers for best performance.
