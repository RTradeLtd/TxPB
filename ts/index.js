"use strict";
exports.__esModule = true;
var grpc = require("grpc");
var dagMessages = require("./dag_pb");
var dag_grpc_pb_1 = require("./dag_grpc_pb");
var TClient = /** @class */ (function () {
    function TClient(endpoint, ssl) {
        if (ssl) {
            this.dagClient = new dag_grpc_pb_1.DagAPIClient(endpoint, grpc.credentials.createSsl());
        }
        else {
            this.dagClient = new dag_grpc_pb_1.DagAPIClient(endpoint, grpc.credentials.createInsecure());
        }
    }
    TClient.prototype.dagPut = function (data) {
        var request = new dagMessages.DagPutRequest();
        var hashes;
        request.setData(data);
        this.dagClient.dagPut(request, function (err, response) {
            if (err) {
                throw console.error(err);
            }
            console.log(response.getHashesList());
            hashes = response.getHashesList();
        });
        return hashes;
    };
    return TClient;
}());
var client = new TClient('xapi.temporal.cloud:9090', true);
client.dagPut("hello world");
