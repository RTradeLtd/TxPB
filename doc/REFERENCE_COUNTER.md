# Reference Counter

TemporalX uses a novel reference counter designed to work with IPFS Content Identifiers (CIDs). We use this in place of a pinning system like that used by `js-ipfs` and `go-ipfs`, which allows us to realize significant performance and efficiency gains.

The reference counter is implemented as a reference counter blockstore, which satisfies the IPFS blockstore interface. It intercepts all `Put`, `PutMany` and `Delete` calls and processes the block, while forwarding the request down the processing chain. `Delete` calls are handled a little differently, and the request is not actually forwarded down the procesisng chain. We use `Delete` calls as a "dereference" operation, that decreases the reference count of the block in question.

One of the really awesome features about our reference counter unlike the pinning system used by `go-ipfs` is that it is *non-blocking* unless you are doing a garbage collection run! If you want to see just how much faster our non-blocking reference counter is, check out our [benchmark blog post](https://medium.com/temporal-cloud/temporalx-vs-go-ipfs-official-node-benchmarks-8457037a77cf).

In order to permanently remove blocks that have a reference count of 0, you must trigger a garbage collection using TemporalX's admin api. The admin api is only enabled when using the reference counted blockstore, and is exposed on `localhost:9999` by default.  When you trigger a garbage collection, all blockstore interaction calls are blocked, while we wait for pending reference count operations to complete. Once all pending reference count operations have finished, we look for any unferenced blocks. These blocks are then subsequently permanently removed. After removing all unreferenced blocks, we resume normal operation and unblock all blockstore interaction calls.

# Why You Shouldn't Use A Cached Blockstore

When using the reference counter, if you want truly accurate results, it is advisable that you do not enable blockstore caching which requires explicit configuration to be enabled. Because the cached blockstore sits ontop of the reference counter blockstore, it will intercept the calls before our reference counter does. This means that more often than not, the calls won't bubble down through to our reference counted blockstore if the caching layer has the block. The effecct of this is that unless you get a cache miss, the maximum reference count will only ever be 1. 

Realistically a cached blockstore won't really reduce a lot of overhead, because the overhead of TemporalX is already so low, that you will get marginal performance gains. If you really want caching, it is advisable that you use datastore level caching through something like our badger datastore, which uses version 2 of the badger codebase, which has extensive caching features. This will ensure that you get the benefits of caching, while getting totally accurate reference count information.

# How Much Blocking Is There

There's only a few situations in which our blockstore wrapper is blocking across all functionality, and we try to isolate what gets blocked as much as possible.


| Action | Mutex Lock Type | What Gets Blocked |
|--------|-----------------|-------------------|
| Put, Get, GetSize, PutMany, DeleteBlock | Blockstore read lock | Nothing |
| Reference count operations | Counter write lock | Other reference count operations |
| Garbage Collection | Blockstore write lock + Counter write lock | Everything |
| Blockstore close | Blockstore write lock + Counter write lock | Everything

Essentially the only time there is  total blockstore lock preventing any calls is during garbage collection and shutdown. The act of reference counting is non-blocking to the blockstore in general, but it is blocking to other reference counting operations. Because of our design, we're able to enable a consistent impact to performance due to reference counting operations, and during our benchmarks there was about a 2% -> 5% performance impact regardless of how much data is stored in the blockstore itself. This is a pretty negligible impact considering that the pinning system used by go-ipfs gets exponentially worse in performance the more data you store.

The biggest performance sink hole in this is the garbage collection process, not the reference counting process. In and of itself garbage collection is pretty quick with our reference counter as we just need to read key->value pairs without any graph traversal, however  depending on how much data you are garbage collecting at any one momment, the biggest impact on the performance will be your disk speeds.

Thankfully due to our multi-datastore configuration capabilities, if you are in an environment where performance is of extreme importance, you can place this metadata store on an NVMe SSD, or regular SSD drive and this will mitigate a large portion of the garbage collection overhead.

# Migrating From Queue Based Counter To Queueless Counter

Starting in v3.4.0 of TemporalX, we are switching to a reference counter that doesn't require a queue system to pass reference count operations to a backend worker. Instead reference counter operations happen transparently in the background as data comes into the blockstore. This system is much more efficient, it's faster, and the reference counter information is backwards compatible with the previous data. 

However, when shutting down a TemporalX node that uses the queue based reference counter, it is possible that there are pending reference count operations still left in the queue that would be picked up the next time TemporalX starts. Any pending operations still in this queue are not compatible with queueless reference counter. As such a few steps are needed to be taken to ensure that you don't lose any reference count information, and are as follows:

1) Start TemporalX using the queue based reference counter
2) Ensure that the API, and if possible the TemproalX node itself are inaccessible, so as to ensure no new blockstore requests are made, and no new reference count operations are started
3) Using prometheus  wait until the `queue.worker.queue_size` metric hits 0. If you aren't using prometheus then you'll have to wait a while. Although its pretty quick, it is recommended that you wait up to 1 hour if you do not have prometheus enabled, so as to be sure that you dont accidentally lose any information
4) Shutdown the TemporalX node
5) Edit the config file to replace `counedStore` with `noQueueStore`, and make sure to leave `counterStorePath` untouched, so as to pick up the previous state information
6) Restart TemporalX and you'll be using the new queueless reference counter