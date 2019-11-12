// package: pb
// file: namesys.proto

var namesys_pb = require("./namesys_pb");
var util_pb = require("./util_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var NameSysAPI = (function () {
  function NameSysAPI() {}
  NameSysAPI.serviceName = "pb.NameSysAPI";
  return NameSysAPI;
}());

NameSysAPI.NameSysResolve = {
  methodName: "NameSysResolve",
  service: NameSysAPI,
  requestStream: false,
  responseStream: false,
  requestType: namesys_pb.NameSysResolveRequest,
  responseType: namesys_pb.NameSysResolveResult
};

NameSysAPI.NameSysResolveAsync = {
  methodName: "NameSysResolveAsync",
  service: NameSysAPI,
  requestStream: false,
  responseStream: true,
  requestType: namesys_pb.NameSysResolveRequest,
  responseType: namesys_pb.NameSysResolveResult
};

NameSysAPI.NameSysPublish = {
  methodName: "NameSysPublish",
  service: NameSysAPI,
  requestStream: false,
  responseStream: false,
  requestType: namesys_pb.NameSysPublishRequest,
  responseType: util_pb.Empty
};

exports.NameSysAPI = NameSysAPI;

function NameSysAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NameSysAPIClient.prototype.nameSysResolve = function nameSysResolve(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NameSysAPI.NameSysResolve, {
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

NameSysAPIClient.prototype.nameSysResolveAsync = function nameSysResolveAsync(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(NameSysAPI.NameSysResolveAsync, {
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

NameSysAPIClient.prototype.nameSysPublish = function nameSysPublish(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NameSysAPI.NameSysPublish, {
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

exports.NameSysAPIClient = NameSysAPIClient;

