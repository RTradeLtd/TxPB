import * as messages from "../../ts/node_pb";
import * as services from "../../ts/node_pb_service";
var grpc = require('grpc');
function main() {
    var client = new services.NodeAPIClient(
        'xapi.temporal.cloud:9090', 
        grpc.credentials.createInsecure(),
    );
    var request = new messages.DagRequest()
    request.setRequesttype(messages.DAGREQTYPE.DAG_PUT);
    request.setData("hello world");
    client.dag(request, function(err, response) {
        if (err) {
            console.error("failed to put dag", err);
            return;
        }
        response.getHashesList().forEach(element => {
            if (element === undefined) {
                return
            }
            console.log(element)
        });
    })
}

main();