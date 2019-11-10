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

NodeAPI.GetPeers = {
  methodName: "GetPeers",
  service: NodeAPI,
  requestStream: false,
  responseStream: false,
  requestType: util_pb.Empty,
  responseType: node_pb.GetPeersResponse
};

NodeAPI.Connect = {
  methodName: "Connect",
  service: NodeAPI,
  requestStream: false,
  responseStream: false,
  requestType: node_pb.ConnectRequest,
  responseType: util_pb.Empty
};

NodeAPI.Disconnect = {
  methodName: "Disconnect",
  service: NodeAPI,
  requestStream: false,
  responseStream: false,
  requestType: node_pb.DisconnectRequest,
  responseType: node_pb.DisconnectResponse
};

NodeAPI.IsConnected = {
  methodName: "IsConnected",
  service: NodeAPI,
  requestStream: false,
  responseStream: false,
  requestType: node_pb.IsConnectedRequest,
  responseType: node_pb.IsConnectedResponse
};

NodeAPI.EnableExtras = {
  methodName: "EnableExtras",
  service: NodeAPI,
  requestStream: false,
  responseStream: false,
  requestType: node_pb.EnableExtrasRequest,
  responseType: util_pb.Empty
};

NodeAPI.DisableExtras = {
  methodName: "DisableExtras",
  service: NodeAPI,
  requestStream: false,
  responseStream: false,
  requestType: node_pb.DisableExtrasRequest,
  responseType: util_pb.Empty
};

exports.NodeAPI = NodeAPI;

function NodeAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NodeAPIClient.prototype.getPeers = function getPeers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeAPI.GetPeers, {
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

NodeAPIClient.prototype.connect = function connect(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeAPI.Connect, {
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

NodeAPIClient.prototype.disconnect = function disconnect(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeAPI.Disconnect, {
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

NodeAPIClient.prototype.isConnected = function isConnected(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeAPI.IsConnected, {
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

NodeAPIClient.prototype.enableExtras = function enableExtras(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeAPI.EnableExtras, {
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

NodeAPIClient.prototype.disableExtras = function disableExtras(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeAPI.DisableExtras, {
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

