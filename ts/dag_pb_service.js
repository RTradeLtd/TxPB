// package: pb
// file: dag.proto

var dag_pb = require("./dag_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DagAPI = (function () {
  function DagAPI() {}
  DagAPI.serviceName = "pb.DagAPI";
  return DagAPI;
}());

DagAPI.DagPut = {
  methodName: "DagPut",
  service: DagAPI,
  requestStream: false,
  responseStream: false,
  requestType: dag_pb.DagPutRequest,
  responseType: dag_pb.DagPutResponse
};

DagAPI.DagGet = {
  methodName: "DagGet",
  service: DagAPI,
  requestStream: false,
  responseStream: false,
  requestType: dag_pb.DagGetRequest,
  responseType: dag_pb.DagGetResponse
};

DagAPI.NewIPLDNode = {
  methodName: "NewIPLDNode",
  service: DagAPI,
  requestStream: false,
  responseStream: false,
  requestType: dag_pb.NewIPLDNodeRequest,
  responseType: dag_pb.DagPutResponse
};

DagAPI.AddLinksToNode = {
  methodName: "AddLinksToNode",
  service: DagAPI,
  requestStream: false,
  responseStream: false,
  requestType: dag_pb.AddLinksRequest,
  responseType: dag_pb.DagPutResponse
};

DagAPI.GetLinks = {
  methodName: "GetLinks",
  service: DagAPI,
  requestStream: false,
  responseStream: false,
  requestType: dag_pb.GetLinksRequest,
  responseType: dag_pb.GetLinksResponse
};

exports.DagAPI = DagAPI;

function DagAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DagAPIClient.prototype.dagPut = function dagPut(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DagAPI.DagPut, {
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

DagAPIClient.prototype.dagGet = function dagGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DagAPI.DagGet, {
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

DagAPIClient.prototype.newIPLDNode = function newIPLDNode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DagAPI.NewIPLDNode, {
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

DagAPIClient.prototype.addLinksToNode = function addLinksToNode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DagAPI.AddLinksToNode, {
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

DagAPIClient.prototype.getLinks = function getLinks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DagAPI.GetLinks, {
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

exports.DagAPIClient = DagAPIClient;

