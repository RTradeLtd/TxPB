# Migrating From Queue Based Counter To Queueless Counter

Starting in v3.4.0 of TemporalX, we are switching to a reference counter that doesn't require a queue system to pass reference count operations to a backend worker. Instead reference counter operations happen transparently in the background as data comes into the blockstore. This system is much more efficient, it's faster, and the reference counter information is backwards compatible with the previous data. 

However, when shutting down a TemporalX node that uses the queue based reference counter, it is possible that there are pending reference count operations still left in the queue that would be picked up the next time TemporalX starts. Any pending operations still in this queue are not compatible with queueless reference counter. As such a few steps are needed to be taken to ensure that you don't lose any reference count information, and are as follows:

1) Start TemporalX using the queue based reference counter
2) Ensure that the API, and if possible the TemproalX node itself are inaccessible, so as to ensure no new blockstore requests are made, and no new reference count operations are started
3) Using prometheus  wait until the `queue.worker.queue_size` metric hits 0. If you aren't using prometheus then you'll have to wait a while. Although its pretty quick, it is recommended that you wait up to 1 hour if you do not have prometheus enabled, so as to be sure that you dont accidentally lose any information
4) Shutdown the TemporalX node
5) Edit the config file to replace `counedStore` with `noQueueStore`, and make sure to leave `counterStorePath` untouched, so as to pick up the previous state information
6) Restart TemporalX and you'll be using the new queueless reference counter