// package: pb
// file: pubsub.proto

var pubsub_pb = require("./pubsub_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PubSubAPI = (function () {
  function PubSubAPI() {}
  PubSubAPI.serviceName = "pb.PubSubAPI";
  return PubSubAPI;
}());

PubSubAPI.PubSub = {
  methodName: "PubSub",
  service: PubSubAPI,
  requestStream: true,
  responseStream: true,
  requestType: pubsub_pb.PubSubRequest,
  responseType: pubsub_pb.PubSubResponse
};

exports.PubSubAPI = PubSubAPI;

function PubSubAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PubSubAPIClient.prototype.pubSub = function pubSub(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(PubSubAPI.PubSub, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.PubSubAPIClient = PubSubAPIClient;

