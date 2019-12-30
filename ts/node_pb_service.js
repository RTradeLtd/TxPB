// package: pb
// file: node.proto

var node_pb = require("./node_pb");
var util_pb = require("./util_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var NodeAPI = (function () {
  function NodeAPI() {}
  NodeAPI.serviceName = "pb.NodeAPI";
  return NodeAPI;
}());

NodeAPI.ConnMgmt = {
  methodName: "ConnMgmt",
  service: NodeAPI,
  requestStream: false,
  responseStream: false,
  requestType: node_pb.ConnMgmtRequest,
  responseType: node_pb.ConnMgmtResponse
};

NodeAPI.Extras = {
  methodName: "Extras",
  service: NodeAPI,
  requestStream: false,
  responseStream: false,
  requestType: node_pb.ExtrasRequest,
  responseType: util_pb.Empty
};

NodeAPI.P2P = {
  methodName: "P2P",
  service: NodeAPI,
  requestStream: false,
  responseStream: false,
  requestType: node_pb.P2PRequest,
  responseType: node_pb.P2PResponse
};

NodeAPI.Blockstore = {
  methodName: "Blockstore",
  service: NodeAPI,
  requestStream: false,
  responseStream: false,
  requestType: node_pb.BlockstoreRequest,
  responseType: node_pb.BlockstoreResponse
};

NodeAPI.Dag = {
  methodName: "Dag",
  service: NodeAPI,
  requestStream: false,
  responseStream: false,
  requestType: node_pb.DagRequest,
  responseType: node_pb.DagResponse
};

NodeAPI.Keystore = {
  methodName: "Keystore",
  service: NodeAPI,
  requestStream: false,
  responseStream: false,
  requestType: node_pb.KeystoreRequest,
  responseType: node_pb.KeystoreResponse
};

exports.NodeAPI = NodeAPI;

function NodeAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NodeAPIClient.prototype.connMgmt = function connMgmt(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeAPI.ConnMgmt, {
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

NodeAPIClient.prototype.extras = function extras(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeAPI.Extras, {
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

NodeAPIClient.prototype.p2P = function p2P(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeAPI.P2P, {
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

NodeAPIClient.prototype.blockstore = function blockstore(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeAPI.Blockstore, {
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

NodeAPIClient.prototype.dag = function dag(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeAPI.Dag, {
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

NodeAPIClient.prototype.keystore = function keystore(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeAPI.Keystore, {
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

exports.NodeAPIClient = NodeAPIClient;

