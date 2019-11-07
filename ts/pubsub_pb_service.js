// package: pb
// file: pubsub.proto

var pubsub_pb = require("./pubsub_pb");
var util_pb = require("./util_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PubSubAPI = (function () {
  function PubSubAPI() {}
  PubSubAPI.serviceName = "pb.PubSubAPI";
  return PubSubAPI;
}());

PubSubAPI.PubSubGetTopics = {
  methodName: "PubSubGetTopics",
  service: PubSubAPI,
  requestStream: false,
  responseStream: false,
  requestType: util_pb.Empty,
  responseType: pubsub_pb.PubSubTopicsResponse
};

PubSubAPI.PubSubListPeers = {
  methodName: "PubSubListPeers",
  service: PubSubAPI,
  requestStream: false,
  responseStream: false,
  requestType: pubsub_pb.PubSubListPeersRequest,
  responseType: pubsub_pb.PubSubListPeersResponse
};

PubSubAPI.PubSubSubscribe = {
  methodName: "PubSubSubscribe",
  service: PubSubAPI,
  requestStream: false,
  responseStream: true,
  requestType: pubsub_pb.PubSubSubscribeRequest,
  responseType: pubsub_pb.PubSubMessageResponse
};

PubSubAPI.PubSubPublish = {
  methodName: "PubSubPublish",
  service: PubSubAPI,
  requestStream: true,
  responseStream: false,
  requestType: pubsub_pb.PubSubPublishRequest,
  responseType: util_pb.Empty
};

exports.PubSubAPI = PubSubAPI;

function PubSubAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PubSubAPIClient.prototype.pubSubGetTopics = function pubSubGetTopics(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PubSubAPI.PubSubGetTopics, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PubSubAPIClient.prototype.pubSubListPeers = function pubSubListPeers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PubSubAPI.PubSubListPeers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PubSubAPIClient.prototype.pubSubSubscribe = function pubSubSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(PubSubAPI.PubSubSubscribe, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

PubSubAPIClient.prototype.pubSubPublish = function pubSubPublish(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(PubSubAPI.PubSubPublish, {
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
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      if (!client.started) {
        client.start(metadata);
      }
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

