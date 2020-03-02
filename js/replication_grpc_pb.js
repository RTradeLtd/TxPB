// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var replication_pb = require('./replication_pb.js');

function serialize_pb_ReplicationStatus(arg) {
  if (!(arg instanceof replication_pb.ReplicationStatus)) {
    throw new Error('Expected argument of type pb.ReplicationStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ReplicationStatus(buffer_arg) {
  return replication_pb.ReplicationStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_SignedSubscription(arg) {
  if (!(arg instanceof replication_pb.SignedSubscription)) {
    throw new Error('Expected argument of type pb.SignedSubscription');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_SignedSubscription(buffer_arg) {
  return replication_pb.SignedSubscription.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_Subscription(arg) {
  if (!(arg instanceof replication_pb.Subscription)) {
    throw new Error('Expected argument of type pb.Subscription');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_Subscription(buffer_arg) {
  return replication_pb.Subscription.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_SubscriptionUpdate(arg) {
  if (!(arg instanceof replication_pb.SubscriptionUpdate)) {
    throw new Error('Expected argument of type pb.SubscriptionUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_SubscriptionUpdate(buffer_arg) {
  return replication_pb.SubscriptionUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}


// The replicator provides replication services.
var replicatorService = exports.replicatorService = {
  // Add is used to add a replication to this server, changing it's status from reserved to active.
add: {
    path: '/pb.replicator/Add',
    requestStream: false,
    responseStream: true,
    requestType: replication_pb.Subscription,
    responseType: replication_pb.ReplicationStatus,
    requestSerialize: serialize_pb_Subscription,
    requestDeserialize: deserialize_pb_Subscription,
    responseSerialize: serialize_pb_ReplicationStatus,
    responseDeserialize: deserialize_pb_ReplicationStatus,
  },
  // Status returns an updating stream of the replication status on the server.
status: {
    path: '/pb.replicator/Status',
    requestStream: false,
    responseStream: true,
    requestType: replication_pb.Subscription,
    responseType: replication_pb.ReplicationStatus,
    requestSerialize: serialize_pb_Subscription,
    requestDeserialize: deserialize_pb_Subscription,
    responseSerialize: serialize_pb_ReplicationStatus,
    responseDeserialize: deserialize_pb_ReplicationStatus,
  },
  // GetSubscriptionUpdate returns the latest version of subscribed replication
getSubscriptionUpdate: {
    path: '/pb.replicator/GetSubscriptionUpdate',
    requestStream: false,
    responseStream: false,
    requestType: replication_pb.Subscription,
    responseType: replication_pb.SubscriptionUpdate,
    requestSerialize: serialize_pb_Subscription,
    requestDeserialize: deserialize_pb_Subscription,
    responseSerialize: serialize_pb_SubscriptionUpdate,
    responseDeserialize: deserialize_pb_SubscriptionUpdate,
  },
  // SubmitReplication is used by client agents to start replications, after they 
// have uploaded the files and retrieved the cid, and collected servers to replicate too.
submitReplication: {
    path: '/pb.replicator/SubmitReplication',
    requestStream: false,
    responseStream: true,
    requestType: replication_pb.SignedSubscription,
    responseType: replication_pb.ReplicationStatus,
    requestSerialize: serialize_pb_SignedSubscription,
    requestDeserialize: deserialize_pb_SignedSubscription,
    responseSerialize: serialize_pb_ReplicationStatus,
    responseDeserialize: deserialize_pb_ReplicationStatus,
  },
};

exports.replicatorClient = grpc.makeGenericClientConstructor(replicatorService);
