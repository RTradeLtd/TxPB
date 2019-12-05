import * as grpc from "grpc";
// dag grpc imports
import * as dagMessages from "./dag_pb";
import {DagAPIClient} from  "./dag_grpc_pb";
// pubsub grpc imports
import * as pubMessages from "./pubsub_pb";
import {PubSubAPIClient} from "./pubsub_grpc_pb";


class TClient {
    public dagClient: typeof DagAPIClient;
    public pubClient: typeof PubSubAPIClient;
    constructor(endpoint: string, ssl: boolean) {
        if (ssl) {
            this.dagClient = new DagAPIClient(endpoint, grpc.credentials.createSsl());
            this.pubClient = new PubSubAPIClient(endpoint, grpc.credentials.createSsl());
        } else {
            this.dagClient = new DagAPIClient(endpoint, grpc.credentials.createInsecure());
            this.pubClient = new PubSubAPIClient(endpoint, grpc.credentials.createInsecure());
        }
    }

    dagPut(data: any): string[] {
        let request = new dagMessages.DagPutRequest();
        request.setData(data);
        let err, response = this.dagClient.dagPut(request, function(err: Error, response: dagMessages.DagPutResponse) {
            if (err) {
                throw console.error(err);
            }
            console.log(response.getHashesList());
        });
        if (err) {
            throw err;
        }
        return response.hashesList;
    }

    pubSubPublish(data: string, topic: string, advertise: boolean) {
        let request = new pubMessages.PubSubPublishRequest();
        request.setData(data);
        request.setTopic(topic);
        request.setAdvertise(advertise);
        this.pubClient.pubSubPublish(request, function(err: Error, response: pubMessages.PubSubMessageResponse) {
            if (err) {
                throw console.error(err);
            }
            console.log(response);
        })
    }
}

let client = new TClient('xapi.temporal.cloud:9090', true);
client.dagPut("hello world");
client.pubSubPublish("hello", "world", false)