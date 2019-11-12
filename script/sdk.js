"use strict";
exports.__esModule = true;
var grpc_web_1 = require("@improbable-eng/grpc-web");
var grpc_web_node_http_transport_1 = require("@improbable-eng/grpc-web-node-http-transport");
var dag_pb_service_1 = require("./dag_pb_service");
var status_pb_service_1 = require("./status_pb_service");
var util_pb_1 = require("./util_pb");
var dag_pb_1 = require("./dag_pb");
var statRequest = new util_pb_1.Empty();
grpc_web_1.grpc.invoke(status_pb_service_1.StatusAPI.Status, {
    request: statRequest,
    host: "xapi-dev.temporal.cloud:9090",
    transport: grpc_web_node_http_transport_1.NodeHttpTransport(),
    onMessage: function (message) {
        console.log("got response: ", message.toObject());
    },
    onEnd: function (code, msg, trailers) {
        if (code == grpc_web_1.grpc.Code.OK) {
            console.log("all ok");
        }
        else {
            console.log("hit an error", code, msg, trailers);
        }
    }
});
var putRequest = new dag_pb_1.DagPutRequest();
putRequest.setData("hello world");
grpc_web_1.grpc.invoke(dag_pb_service_1.DagAPI.DagPut, {
    request: putRequest,
    host: "xapi-dev.temporal.cloud:9090",
    transport: grpc_web_node_http_transport_1.NodeHttpTransport(),
    onMessage: function (message) {
        console.log("got response: ", message.toObject());
    },
    onEnd: function (code, msg, trailers) {
        if (code == grpc_web_1.grpc.Code.OK) {
            console.log("all ok");
        }
        else {
            console.log("hit an error", code, msg, trailers);
        }
    }
});
