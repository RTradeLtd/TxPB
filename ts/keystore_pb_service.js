// package: pb
// file: keystore.proto

var keystore_pb = require("./keystore_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var KeystoreAPI = (function () {
  function KeystoreAPI() {}
  KeystoreAPI.serviceName = "pb.KeystoreAPI";
  return KeystoreAPI;
}());

KeystoreAPI.Keystore = {
  methodName: "Keystore",
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

KeystoreAPIClient.prototype.keystore = function keystore(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KeystoreAPI.Keystore, {
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

