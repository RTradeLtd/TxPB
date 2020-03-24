var services = require('../../js/node_grpc_pb');
var messages = require('../../js/node_pb');
var grpc = require('grpc');

function main() {
    var client = new services.NodeAPIClient(
        'xapi.temporal.cloud:9090', 
        grpc.credentials.createInsecure()
    );
    var request = new messages.DagRequest()
    request.RequestType = messages.DAG_PUT;
    request.Data = "hello world";
    client.dag(request, function(err, response) {
        if (err) {
            console.error("failed to put dag", err);
            return;
        }
        response.array.forEach(element => {
            if (element === undefined) {
                return
            }
            element.forEach(ele => {
                if (ele === undefined) {
                    return
                }
                console.log("hash " + ele);
            })
        });
    })

}

main();