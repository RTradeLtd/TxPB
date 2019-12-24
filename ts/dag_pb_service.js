// package: pb
// file: dag.proto

var dag_pb = require("./dag_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DagAPI = (function () {
  function DagAPI() {}
  DagAPI.serviceName = "pb.DagAPI";
  return DagAPI;
}());

DagAPI.Dag = {
  methodName: "Dag",
  service: DagAPI,
  requestStream: false,
  responseStream: false,
  requestType: dag_pb.DagRequest,
  responseType: dag_pb.DagResponse
};

DagAPI.DagStream = {
  methodName: "DagStream",
  service: DagAPI,
  requestStream: true,
  responseStream: true,
  requestType: dag_pb.DagRequest,
  responseType: dag_pb.DagResponse
};

exports.DagAPI = DagAPI;

function DagAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DagAPIClient.prototype.dag = function dag(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DagAPI.Dag, {
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

DagAPIClient.prototype.dagStream = function dagStream(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(DagAPI.DagStream, {
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

exports.DagAPIClient = DagAPIClient;

