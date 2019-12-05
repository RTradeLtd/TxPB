import * as grpc from "grpc";
import * as dagMessages from "./dag_pb";
import {DagAPIClient} from  "./dag_grpc_pb";


class TClient {
    private dagClient: typeof DagAPIClient;
    constructor(endpoint: string, ssl: boolean) {
        if (ssl) {
            this.dagClient = new DagAPIClient(endpoint, grpc.credentials.createSsl());
        } else {
            this.dagClient = new DagAPIClient(endpoint, grpc.credentials.createInsecure());
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