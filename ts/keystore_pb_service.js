// package: pb
// file: keystore.proto

var keystore_pb = require("./keystore_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var KeystoreAPI = (function () {
  function KeystoreAPI() {}
  KeystoreAPI.serviceName = "pb.KeystoreAPI";
  return KeystoreAPI;
}());

KeystoreAPI.KeystoreHas = {
  methodName: "KeystoreHas",
  service: KeystoreAPI,
  requestStream: false,
  responseStream: false,
  requestType: keystore_pb.KeystoreRequest,
  responseType: keystore_pb.KeystoreResponse
};

KeystoreAPI.KeystoreGet = {
  methodName: "KeystoreGet",
  service: KeystoreAPI,
  requestStream: false,
  responseStream: false,
  requestType: keystore_pb.KeystoreRequest,
  responseType: keystore_pb.KeystoreResponse
};

KeystoreAPI.KeystorePut = {
  methodName: "KeystorePut",
  service: KeystoreAPI,
  requestStream: false,
  responseStream: false,
  requestType: keystore_pb.KeystoreRequest,
  responseType: keystore_pb.KeystoreResponse
};

KeystoreAPI.KeystoreDelete = {
  methodName: "KeystoreDelete",
  service: KeystoreAPI,
  requestStream: false,
  responseStream: false,
  requestType: keystore_pb.KeystoreRequest,
  responseType: keystore_pb.KeystoreResponse
};

KeystoreAPI.KeystoreList = {
  methodName: "KeystoreList",
  service: KeystoreAPI,
  requestStream: false,
  responseStream: false,
  requestType: keystore_pb.KeystoreRequest,
  responseType: keystore_pb.KeystoreResponse
};

exports.KeystoreAPI = KeystoreAPI;

function KeystoreAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

KeystoreAPIClient.prototype.keystoreHas = function keystoreHas(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KeystoreAPI.KeystoreHas, {
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

KeystoreAPIClient.prototype.keystoreGet = function keystoreGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KeystoreAPI.KeystoreGet, {
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

KeystoreAPIClient.prototype.keystorePut = function keystorePut(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KeystoreAPI.KeystorePut, {
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

KeystoreAPIClient.prototype.keystoreDelete = function keystoreDelete(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KeystoreAPI.KeystoreDelete, {
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

KeystoreAPIClient.prototype.keystoreList = function keystoreList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KeystoreAPI.KeystoreList, {
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

exports.KeystoreAPIClient = KeystoreAPIClient;

