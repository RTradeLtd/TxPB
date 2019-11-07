// package: pb
// file: admin.proto

var admin_pb = require("./admin_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AdminAPI = (function () {
  function AdminAPI() {}
  AdminAPI.serviceName = "pb.AdminAPI";
  return AdminAPI;
}());

AdminAPI.ManageGC = {
  methodName: "ManageGC",
  service: AdminAPI,
  requestStream: false,
  responseStream: false,
  requestType: admin_pb.ManageGCRequest,
  responseType: admin_pb.ManageGCResponse
};

AdminAPI.RefCount = {
  methodName: "RefCount",
  service: AdminAPI,
  requestStream: false,
  responseStream: false,
  requestType: admin_pb.RefCountRequest,
  responseType: admin_pb.RefCountResponse
};

AdminAPI.Blockstore = {
  methodName: "Blockstore",
  service: AdminAPI,
  requestStream: false,
  responseStream: false,
  requestType: admin_pb.BlockstoreRequest,
  responseType: admin_pb.BlockstoreResponse
};

exports.AdminAPI = AdminAPI;

function AdminAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AdminAPIClient.prototype.manageGC = function manageGC(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminAPI.ManageGC, {
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

AdminAPIClient.prototype.refCount = function refCount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminAPI.RefCount, {
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

AdminAPIClient.prototype.blockstore = function blockstore(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminAPI.Blockstore, {
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

exports.AdminAPIClient = AdminAPIClient;

