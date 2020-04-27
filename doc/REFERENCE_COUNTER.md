# Reference Counter

> If you are looking to migrate from the queue based reference counter, see the [migration doc](REFERENCE_COUNTER_MIGRATION.md)

The source of a major performance drain for go-ipfs and js-ipfs is the pinning system, which is used to ensure that Content Identifiers (CIDs) aren't accidentally deleted. To alleviate this performance drain, TemporalX uses a novel reference counted blockstore. It intercepts all `Put`, `PutMany` and `Delete` calls launching a goroutine to count the reference. After this goroutine is launched, the calls are then sent to the underlying blockstore. The exception to this is `Delete` calls, which don't forward the request to the underlying blockstore.

The reference counter is non-blocking, and has no garbage collection process. Instead whenever a reference count drops to 0, the block is automatically removed. The blocking operations of the reference counter are limited to the counting operations, which have no impact on putting data into the underlying blockstore. Any active counting operations prevent shutting down the blockstore, and subsequently prevent shutting down TemporalX until the counting operations are finished.  

A really interesting side effect of our reference counter is that the overhead imposed by counting operations, and the blockstore locking is a constant 2% -> 5% regardless of how much data you have stored. This is a stark difference when compared to the go-ipfs and js-ipfs pinning system whose performance gets exponentially worse the more data you have stored.

# Why You Shouldn't Use A Cached Blockstore

When using the reference counter, if you want truly accurate results, it is advisable that you do not enable blockstore caching which requires explicit configuration to be enabled. Because the cached blockstore sits ontop of the reference counter blockstore, it will intercept the calls before our reference counter does. This means that more often than not, the calls won't bubble down through to our reference counted blockstore if the caching layer has the block. The effecct of this is that unless you get a cache miss, the maximum reference count will only ever be 1. 

Realistically a cached blockstore won't really reduce a lot of overhead, because the overhead of TemporalX is already so low, that you will get marginal performance gains. If you really want caching, it is advisable that you use datastore level caching through something like our badger datastore, which uses version 2 of the badger codebase, which has extensive caching features. This will ensure that you get the benefits of caching, while getting totally accurate reference count information.

# How Much Blocking Is There

Unless shutting down the blockstore, there is no blocking mutex locks to general blockstore operation. All runtime blocking is isolated to the reference counting operations. This is summarized in the following table

| Action | Mutex Lock Type | What Gets Blocked |
|--------|-----------------|-------------------|
| Put, Get, GetSize, PutMany, DeleteBlock | Blockstore read lock | Nothing |
| Reference count operations | Counter write lock | Other reference count operations |
| Blockstore close | Blockstore write lock + Counter write lock | Everything |