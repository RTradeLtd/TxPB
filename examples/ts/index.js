"use strict";
exports.__esModule = true;
var grpc = require("grpc");
var dagService = require("../../js/dag_grpc_pb");
var dagMessages = require("../../js/dag_pb");
// import * as dagService from "../../ts/dag_pb_service";
// import * as dagMessages from "../../ts/dag_pb";
var TClient = /** @class */ (function () {
    function TClient(endpoint, ssl) {
        if (ssl) {
            this.dagClient = new dagService.DagAPIClient(endpoint, grpc.credentials.createSsl());
        }
        else {
            this.dagClient = new dagService.DagAPIClient(endpoint, grpc.credentials.createSsl());
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
    TClient.prototype.dagGet = function (hash) {
        var request = new dagMessages.DagGetRequest();
        request.setHash(hash);
        this.dagClient.dagGet(request, function (err, response) {
            if (err) {
                throw console.error(err);
            }
            console.log(response.getRawdata.toString);
        });
    };
    return TClient;
}());
var client = new TClient('xapi.temporal.cloud:9090', true);
client.dagPut("hello world");
client.dagGet("bafkreigvtmpdxuaawgeexa3n3j5pq3gecqvnaulizvbnwxdyq5usekuqve");
