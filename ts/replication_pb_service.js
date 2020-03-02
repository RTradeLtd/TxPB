// package: pb
// file: replication.proto

var replication_pb = require("./replication_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var replicator = (function () {
  function replicator() {}
  replicator.serviceName = "pb.replicator";
  return replicator;
}());

replicator.Add = {
  methodName: "Add",
  service: replicator,
  requestStream: false,
  responseStream: true,
  requestType: replication_pb.Subscription,
  responseType: replication_pb.ReplicationStatus
};

replicator.Status = {
  methodName: "Status",
  service: replicator,
  requestStream: false,
  responseStream: true,
  requestType: replication_pb.Subscription,
  responseType: replication_pb.ReplicationStatus
};

replicator.GetSubscriptionUpdate = {
  methodName: "GetSubscriptionUpdate",
  service: replicator,
  requestStream: false,
  responseStream: false,
  requestType: replication_pb.Subscription,
  responseType: replication_pb.SubscriptionUpdate
};

replicator.SubmitReplication = {
  methodName: "SubmitReplication",
  service: replicator,
  requestStream: false,
  responseStream: true,
  requestType: replication_pb.SignedSubscription,
  responseType: replication_pb.ReplicationStatus
};

exports.replicator = replicator;

function replicatorClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

replicatorClient.prototype.add = function add(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(replicator.Add, {
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

replicatorClient.prototype.status = function status(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(replicator.Status, {
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

replicatorClient.prototype.getSubscriptionUpdate = function getSubscriptionUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(replicator.GetSubscriptionUpdate, {
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

replicatorClient.prototype.submitReplication = function submitReplication(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(replicator.SubmitReplication, {
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

exports.replicatorClient = replicatorClient;

