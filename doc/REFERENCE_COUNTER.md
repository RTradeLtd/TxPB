# Reference Counter

> If you are looking to migrate from the queue based reference counter, see the [migration doc](REFERENCE_COUNTER_MIGRATION.md)

The source of a major performance drain for go-ipfs and js-ipfs is the pinning system, which is used to ensure that Content Identifiers (CIDs) aren't accidentally deleted. To alleviate this performance drain, TemporalX uses a novel reference counted blockstore. It intercepts all `Put`, `PutMany` and `Delete` calls launching a goroutine to perform a reference count operation on the blocks, which is started after the underlying blockstore call has completed.

A worker pool is used to manage the counting operations goroutine for memory efficiency and to decouple counting operations from blocking general blockstore calls. The worker pool has a configurable limit which defines the maximum number of active count operations. If a submission to the worker pool happens while the maximum number is reached, the submitter is blocked until the limit is decreased, and thus blocking the calling blockstore call. In practice this doesn't happen that often, and can be mitigated by increasing the limit of the worker pool.

The internals of the reference counter are optimized to enable minimal disk IO via the usage of transactions. Calling `Blockstore::CollectGarbage` will force a flush of this transaction to disk outside of the normal method of operation which is to flush whenever 4MB of data is buffered into the transaction and `Txn::Commit` is called. This will block counting operations, but is pretty quick as a single 4MB buffer needs to be flushed. The reference counter is technically GC-less, as data is deleted whenever the reference count operation hits 0.

With the refactor of this blockstore to use the worker pool, the only overhead imposed to regular blockstore interactions is submitting the task to the worker pool, which in practice shouldn't have an overhead of more than 2%. This is a constant overhead that doesn't change regardless of how many active workers there are *except* when the submission would go above the limit. In these cases the calling blockstore is blocked until a worker finishes. Due to our use of transactions, this is a pretty quick process; If this proves to be too much blocking for your needs, simply double the maximum worker number 2x of the value it is when the blocking occurs. At the moment this requires a restart of TemporalX after making the configuration change, but the ability to tune the worker limit via the gRPC API will be enabled soon.

# Why You Shouldn't Use A Cached Blockstore

When using the reference counter, if you want truly accurate results, it is advisable that you do not enable blockstore caching which requires explicit configuration to be enabled. Because the cached blockstore sits ontop of the reference counter blockstore, it will intercept the calls before our reference counter does. This means that more often than not, the calls won't bubble down through to our reference counted blockstore if the caching layer has the block. The effecct of this is that unless you get a cache miss, the maximum reference count will only ever be 1. 

Realistically a cached blockstore won't really reduce a lot of overhead, because the overhead of TemporalX is already so low, that you will get marginal performance gains. If you really want caching, it is advisable that you use datastore level caching through something like our badger datastore, which uses version 2 of the badger codebase, which has extensive caching features. This will ensure that you get the benefits of caching, while getting totally accurate reference count information.

# How Much Blocking Is There

There are very few situations in which the blockstore will block calling functions

| Action | Mutex Lock Type | What Gets Blocked |
|--------|-----------------|-------------------|
| Put, Get, GetSize, PutMany, DeleteBlock | Blockstore read lock | Nothing |
| Reference count operation submission | Pool write lock | Worker submits (unless pool is full, this block is minimal and not measurable) |
| Reference count operation | Counter read lock & CID Lock | Will only block the same CID from being counted simultaneously |
| CollectGarbage | Blockstore and counter lock | Count operations and blockstore calls |
| Blockstore close | Blockstore write lock + Counter write lock | Count operations and blockstore calls |