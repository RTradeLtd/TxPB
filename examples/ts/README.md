# ts

To run this you'll need to install the following dependencies

```shell
$> npm install grpc
$> npm install google-protobuf
$> npm install @improbable-eng/grpc-web
$> npm install -g typescript
```

To compile typescript to javascript run `tsc index.ts` and you can then run the example with `node index.js`

On some machines the above may cause an error and I'm not exactly sure why. To fix this you can change the `messages` and `services` import to the following:

```
var messages = require("../../js/node_pb");
var services = require("../../js/node_grpc_pb");
```