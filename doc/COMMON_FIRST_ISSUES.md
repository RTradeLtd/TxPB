# Common First Time User Issues

The following is a small list of issues first time users often run into, and the recommended ways of resolving them.

>  `error encountered: mkdir peerstore: permission denied`

The default configuration when generated via `tex-cli config gen` uses relative paths for specifying the location of things on disk such as the peerstore datastore. Typically this issue is encountered when you test out TemporalX via the CLI, and then use the same configuration file via a service manager like systemd.

If using a service manager such as systemd it is best to specify the path to things with absolute paths, and ensure that the service is running under the correct user account. If you are running TemporalX directly from the CLI, it is usually sufficient to use relative paths.

> when starting the server with `--bp` you may occasionally see errors

These errors are not serious, and simply indicate that TemporalX was unable to connect to the default bootstrap peers.

> 2020/04/30 18:29:29 failed to get machine identifier

This indicates that your machine had a problem generating the unique identifier used when creating your license on first boot. Please make sure you have the UUID you have been given set with an exported environment variable `TEMPORAL_UUID`. If this issue still happens please contact your TemporalX sales representative as this likely means there is an issue generating the license.

>  /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.28' not found (required by tex-cli)

An error like this, or similar to this it means that the version of libc used to build the TemporalX binary is incompatible with your system. Please contact your TemporalX sales representative.

> repeated messages of `insufficient peer capacity` are showing up in the logs

This is an error log that should be a debug log, and is a non-serious issue. It is fixed in the v3.4.1 release of TemporalX so make sure you are using that version or higher