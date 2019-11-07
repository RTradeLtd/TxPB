// package: pb
// file: status.proto

var status_pb = require("./status_pb");
var util_pb = require("./util_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var StatusAPI = (function () {
  function StatusAPI() {}
  StatusAPI.serviceName = "pb.StatusAPI";
  return StatusAPI;
}());

StatusAPI.Version = {
  methodName: "Version",
  service: StatusAPI,
  requestStream: false,
  responseStream: false,
  requestType: util_pb.Empty,
  responseType: status_pb.VersionResponse
};

StatusAPI.Status = {
  methodName: "Status",
  service: StatusAPI,
  requestStream: false,
  responseStream: false,
  requestType: util_pb.Empty,
  responseType: status_pb.StatusResponse
};

exports.StatusAPI = StatusAPI;

function StatusAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

StatusAPIClient.prototype.version = function version(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(StatusAPI.Version, {
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

StatusAPIClient.prototype.status = function status(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(StatusAPI.Status, {
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

exports.StatusAPIClient = StatusAPIClient;

