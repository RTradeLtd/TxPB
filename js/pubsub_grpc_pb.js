// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pubsub_pb = require('./pubsub_pb.js');

function serialize_pb_PubSubRequest(arg) {
  if (!(arg instanceof pubsub_pb.PubSubRequest)) {
    throw new Error('Expected argument of type pb.PubSubRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PubSubRequest(buffer_arg) {
  return pubsub_pb.PubSubRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_PubSubResponse(arg) {
  if (!(arg instanceof pubsub_pb.PubSubResponse)) {
    throw new Error('Expected argument of type pb.PubSubResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PubSubResponse(buffer_arg) {
  return pubsub_pb.PubSubResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PubSubAPIService = exports.PubSubAPIService = {
  // PubSub allows controlling libp2p pubsub topics and subscriptions
  pubSub: {
    path: '/pb.PubSubAPI/PubSub',
    requestStream: true,
    responseStream: true,
    requestType: pubsub_pb.PubSubRequest,
    responseType: pubsub_pb.PubSubResponse,
    requestSerialize: serialize_pb_PubSubRequest,
    requestDeserialize: deserialize_pb_PubSubRequest,
    responseSerialize: serialize_pb_PubSubResponse,
    responseDeserialize: deserialize_pb_PubSubResponse,
  },
};

exports.PubSubAPIClient = grpc.makeGenericClientConstructor(PubSubAPIService);
