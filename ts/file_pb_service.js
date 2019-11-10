// package: pb
// file: file.proto

var file_pb = require("./file_pb");
var util_pb = require("./util_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var FileAPI = (function () {
  function FileAPI() {}
  FileAPI.serviceName = "pb.FileAPI";
  return FileAPI;
}());

FileAPI.UploadFile = {
  methodName: "UploadFile",
  service: FileAPI,
  requestStream: true,
  responseStream: false,
  requestType: file_pb.UploadRequest,
  responseType: util_pb.PutResponse
};

FileAPI.DownloadFile = {
  methodName: "DownloadFile",
  service: FileAPI,
  requestStream: false,
  responseStream: true,
  requestType: file_pb.DownloadRequest,
  responseType: file_pb.DownloadResponse
};

exports.FileAPI = FileAPI;

function FileAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FileAPIClient.prototype.uploadFile = function uploadFile(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(FileAPI.UploadFile, {
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
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      if (!client.started) {
        client.start(metadata);
      }
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

FileAPIClient.prototype.downloadFile = function downloadFile(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(FileAPI.DownloadFile, {
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

exports.FileAPIClient = FileAPIClient;

