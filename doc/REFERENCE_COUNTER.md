# Reference Counter

> If you are looking to migrate from the queue based reference counter, see the [migration doc](REFERENCE_COUNTER_MIGRATION.md)

## Overview

The source of a major performance drain for go-ipfs and js-ipfs is the pinning system, which is used to ensure that Content Identifiers (CIDs) aren't accidentally deleted. To alleviate this performance drain, TemporalX uses a novel reference counted blockstore. It intercepts all `Put`, `PutMany` and `Delete` calls launching a goroutine to perform a reference count operation on the blocks, which is started after the underlying blockstore call has completed.

## Internals

A worker pool is used to manage the counting operations goroutine for memory efficiency and to decouple counting operations from blocking general blockstore calls. The worker pool has a configurable limit which defines the maximum number of active count operations. If a submission to the worker pool happens while the maximum number is reached, the submitter is blocked until the limit is decreased, and thus blocking the calling blockstore call. In practice this doesn't happen that often, and can be mitigated by increasing the limit of the worker pool.

The internals of the reference counter are optimized to enable minimal disk IO via the usage of transactions. Calling `Blockstore::CollectGarbage` will force a flush of this transaction to disk outside of the normal method of operation which is to flush whenever 4MB of data is buffered into the transaction and `Txn::Commit` is called. This will block counting operations, but is pretty quick as a single 4MB buffer needs to be flushed. The reference counter is technically GC-less, as data is deleted whenever the reference count operation hits 0.

## Overhead

With the refactor of this blockstore to use the worker pool, the only overhead imposed to regular blockstore interactions is submitting the task to the worker pool, which in practice shouldn't have an overhead of more than 2%. This is a constant overhead that doesn't change regardless of how many active workers there are *except* when the submission would go above the limit. In these cases the calling blockstore is blocked until a worker finishes.

Due to our use of transactions, this is a pretty quick process; If however blocking does occur and at a level undesirable to your needs, our recommended solution is to double the maximum value of the worker limit until you reach a level that doesn't prodcue any blocking.  Changing the worker pool limit does require a restart of TemporalX after altering the configuration file, but eventually this will be doable at runtime via the gRPC API
 

# Storage Of Counter Metadata

## Redundancy

TemporalX at the moment does nothing to make storage of the counter metadata redundant, as it would be hard to find a redundancy solution that works across all the use cases and environments of the end users. As such the redundancy of the counter metadata is left up to the end users. However there are two main options:

* Regular file-level backups via `rsync`
  * Provides no impact on performance, but can lead to gaps in backed up data depending on frequency of backups
* Using a path for leveldb placed onto redundant disk arrays such as those provided by RAID, ZFS, GlusterFS, etc...
  * Will likely provide some impacto n performance, but provide the highest level of redundancy

## Where To Store

On the subject of "where" to store this metadata, it's recommended you use the fastest storage method you have possible. Ideally SSD or NVMe SSD, but HDD's will work. The server we use for our stress testing of TemporalX uses a RAID5 array and the impact from this isn't too much despite RAID5 being ~10x slower to write to.

# How Much Blocking Is There

There are very few situations in which the blockstore will block calling functions

| Action | Mutex Lock Type | What Gets Blocked |
|--------|-----------------|-------------------|
| Put, Get, GetSize, PutMany, DeleteBlock | Blockstore read lock | Nothing |
| Reference count operation submission | Pool write lock | Worker submits (unless pool is full, this block is minimal and not measurable) |
| Reference count operation | Counter read lock & CID Lock | Will only block the same CID from being counted simultaneously |
| CollectGarbage | Blockstore and counter lock | Count operations and blockstore calls |
| Blockstore close | Blockstore write lock + Counter write lock | Count operations and blockstore calls |

# Why You Shouldn't Use A Cached Blockstore

When using the reference counter, if you want truly accurate results, it is advisable that you do not enable blockstore caching which requires explicit configuration to be enabled. Because the cached blockstore sits ontop of the reference counter blockstore, it will intercept the calls before our reference counter does. This means that more often than not, the calls won't bubble down through to our reference counted blockstore if the caching layer has the block. The effecct of this is that unless you get a cache miss, the maximum reference count will only ever be 1. 

Realistically a cached blockstore won't really reduce a lot of overhead, because the overhead of TemporalX is already so low, that you will get marginal performance gains. If you really want caching, it is advisable that you use datastore level caching through something like our badger datastore, which uses version 2 of the badger codebase, which has extensive caching features. This will ensure that you get the benefits of caching, while getting totally accurate reference count information.
