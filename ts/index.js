"use strict";
exports.__esModule = true;
var grpc = require("grpc");
// dag grpc imports
var dagMessages = require("./dag_pb");
var dag_grpc_pb_1 = require("./dag_grpc_pb");
// pubsub grpc imports
var pubMessages = require("./pubsub_pb");
var pubsub_grpc_pb_1 = require("./pubsub_grpc_pb");
var TClient = /** @class */ (function () {
    function TClient(endpoint, ssl) {
        if (ssl) {
            this.dagClient = new dag_grpc_pb_1.DagAPIClient(endpoint, grpc.credentials.createSsl());
            this.pubClient = new pubsub_grpc_pb_1.PubSubAPIClient(endpoint, grpc.credentials.createSsl());
        }
        else {
            this.dagClient = new dag_grpc_pb_1.DagAPIClient(endpoint, grpc.credentials.createInsecure());
            this.pubClient = new pubsub_grpc_pb_1.PubSubAPIClient(endpoint, grpc.credentials.createInsecure());
        }
    }
    TClient.prototype.dagPut = function (data) {
        var request = new dagMessages.DagPutRequest();
        request.setData(data);
        var err, response = this.dagClient.dagPut(request, function (err, response) {
            if (err) {
                throw console.error(err);
            }
            console.log(response.getHashesList());
        });
        if (err) {
            throw err;
        }
        return response.hashesList;
    };
    TClient.prototype.pubSubPublish = function (data, topic, advertise) {
        var request = new pubMessages.PubSubPublishRequest();
        request.setData(data);
        request.setTopic(topic);
        request.setAdvertise(advertise);
        this.pubClient.pubSubPublish(request, function (err, response) {
            if (err) {
                throw console.error(err);
            }
            console.log(response);
        });
    };
    return TClient;
}());
var client = new TClient('xapi.temporal.cloud:9090', true);
client.dagPut("hello world");
client.pubSubPublish("hello", "world", false);
