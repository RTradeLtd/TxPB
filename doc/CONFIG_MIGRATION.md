# Configuration Migration

Every once in awhile we will introduce breaking changes to the configuration file format, however we will always provide a CLI command that can be used to do the migration.

# Version 3 To Version 4

## Overview

To migrate from version 3 to version 4 run the following command:

```shell
$> tex-cli --cfg /path/to/version3/config.yml config migrate --input.version 3 --target.version 4
```

This will than replace the config file at `/path/to/version3/config.yml` with it's version 4 equivalent. There will also be a file `/path/to/version3/config.yml-bak` which is a backup of the version 3 configuration file.


## Problems

The only problems we have identified when migrating from v3 to v4 occur with `time.Duration` values. Depending on how you had your v3 configuration done, you get warnings similar to:

```
error encountered: time: invalid duration
```

You will want to search for any empty strings `""` that are related to a time duration configuration option. The likely culprit is `grpc_port_dial_Timeout`, and the best fix is to remove the setting, or set it to something like `2s`.