// package: pb
// file: p2p.proto

var p2p_pb = require("./p2p_pb");
var util_pb = require("./util_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var P2PAPI = (function () {
  function P2PAPI() {}
  P2PAPI.serviceName = "pb.P2PAPI";
  return P2PAPI;
}());

P2PAPI.Close = {
  methodName: "Close",
  service: P2PAPI,
  requestStream: false,
  responseStream: false,
  requestType: p2p_pb.CloseRequest,
  responseType: util_pb.Empty
};

P2PAPI.Forward = {
  methodName: "Forward",
  service: P2PAPI,
  requestStream: false,
  responseStream: false,
  requestType: p2p_pb.ForwardRequest,
  responseType: util_pb.Empty
};

P2PAPI.Listen = {
  methodName: "Listen",
  service: P2PAPI,
  requestStream: false,
  responseStream: false,
  requestType: p2p_pb.ListenRequest,
  responseType: util_pb.Empty
};

P2PAPI.Ls = {
  methodName: "Ls",
  service: P2PAPI,
  requestStream: false,
  responseStream: false,
  requestType: p2p_pb.LsRequest,
  responseType: p2p_pb.LsResponse
};

exports.P2PAPI = P2PAPI;

function P2PAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

P2PAPIClient.prototype.close = function close(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P2PAPI.Close, {
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

P2PAPIClient.prototype.forward = function forward(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P2PAPI.Forward, {
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

P2PAPIClient.prototype.listen = function listen(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P2PAPI.Listen, {
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

P2PAPIClient.prototype.ls = function ls(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P2PAPI.Ls, {
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

exports.P2PAPIClient = P2PAPIClient;

