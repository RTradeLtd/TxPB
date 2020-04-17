# Benchmarks

Our primary source of benchmarks for TemporalX comes from our CI builds, where with every new release, we run the same set of benchmarks. The idea behind this is that we can see performance changes in real time, and catch performance regressions as they happen, not months or weeks later. All of our CI benchmarks come from the **amazing** [gobenchdata](https://github.com/marketplace/actions/continuous-benchmarking-for-go). While our setup is a little convoluted due to a closed source repository, consisting of running the CI benchmarks, and manually uploading them to GitHub Pages, gobenchdata is an all around extremely solid benchmark recording tool. This limitation of a convoluted process is only because github actions don't work very well with private repositories.

# CI Benchmarks

The following are benchmark samples that we capture during our CI processes to ensure consistent performance overtime, and catch performance regressions as they happen:

* [Reference Counter Benchmarks](https://rtradeltd.github.io/counter/)
  * These run benchmarks against the two types of reference counters we have
  * Measure GC, Delete, Put times
* [TemporalX Benchmarks](https://benchx.temporal.cloud/)
  * These runs TemporalX's benchmarks 
  * Measures a variety of the API calls

# Published Reports

Every once in awhile we will publish reports/analysis of the performance you get with TemporalX:

* [TemporalX vs Go-IPFS](https://medium.com/temporal-cloud/temporalx-vs-go-ipfs-official-node-benchmarks-8457037a77cf)
  * Initially captured when we first released TemporalX, we've gotten even faster since then. Once go-ipfs v0.5.0 is released we will do a follow-up to this benchmark
  * You can expect 7x-10x performance gains when fully leveraging gRPC benefits
  * You can expect 3x performance gains when leveraging gRPC like HTTP (connect to server, send request, disconnect)
* [TemporalX Replication vs IPFS Cluster](https://medium.com/temporal-cloud/nodes-w-built-in-replication-high-performance-security-consensus-free-6657ac9e44ea)
  * TemporalX replicated the same dataset in 128 seconds
  * IPFS Cluster replicated the same dataset in 1020 seconds