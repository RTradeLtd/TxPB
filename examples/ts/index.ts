import * as grpc from "grpc";
import * as dagService from "../../js/dag_grpc_pb";
import * as dagMessages from "../../js/dag_pb";
// import * as dagService from "../../ts/dag_pb_service";
// import * as dagMessages from "../../ts/dag_pb";

class TClient {
    private dagClient: dagService.DagAPIClient;
    constructor(endpoint: string, ssl: boolean) {
        if (ssl) {
            this.dagClient = new dagService.DagAPIClient(endpoint, grpc.credentials.createSsl());
        } else {
            this.dagClient = new dagService.DagAPIClient(endpoint, grpc.credentials.createSsl());
        }
    }

    dagPut(data: any): string[] {
        let request = new dagMessages.DagPutRequest();
        let hashes: string[];
        request.setData(data);
        this.dagClient.dagPut(request, function(err, response) {
            if (err) {
                throw console.error(err);
            }
            console.log(response.getHashesList());
            hashes = response.getHashesList();
        });
        return hashes;
    }
}
let client = new TClient('xapi.temporal.cloud:9090', true);
client.dagPut("hello world");