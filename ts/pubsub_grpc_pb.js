// GENERATED CODE -- DO NOT EDIT!
'use strict';
exports.__esModule = true;
var grpc = require('grpc');
var pubsub_pb = require('./pubsub_pb.js');
var util_pb = require('./util_pb.js');
function serialize_pb_Empty(arg) {
    if (!(arg instanceof util_pb.Empty)) {
        throw new Error('Expected argument of type pb.Empty');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_pb_Empty(buffer_arg) {
    return util_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_pb_PubSubListPeersRequest(arg) {
    if (!(arg instanceof pubsub_pb.PubSubListPeersRequest)) {
        throw new Error('Expected argument of type pb.PubSubListPeersRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_pb_PubSubListPeersRequest(buffer_arg) {
    return pubsub_pb.PubSubListPeersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_pb_PubSubListPeersResponse(arg) {
    if (!(arg instanceof pubsub_pb.PubSubListPeersResponse)) {
        throw new Error('Expected argument of type pb.PubSubListPeersResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_pb_PubSubListPeersResponse(buffer_arg) {
    return pubsub_pb.PubSubListPeersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_pb_PubSubMessageResponse(arg) {
    if (!(arg instanceof pubsub_pb.PubSubMessageResponse)) {
        throw new Error('Expected argument of type pb.PubSubMessageResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_pb_PubSubMessageResponse(buffer_arg) {
    return pubsub_pb.PubSubMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_pb_PubSubPublishRequest(arg) {
    if (!(arg instanceof pubsub_pb.PubSubPublishRequest)) {
        throw new Error('Expected argument of type pb.PubSubPublishRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_pb_PubSubPublishRequest(buffer_arg) {
    return pubsub_pb.PubSubPublishRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_pb_PubSubSubscribeRequest(arg) {
    if (!(arg instanceof pubsub_pb.PubSubSubscribeRequest)) {
        throw new Error('Expected argument of type pb.PubSubSubscribeRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_pb_PubSubSubscribeRequest(buffer_arg) {
    return pubsub_pb.PubSubSubscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_pb_PubSubTopicsResponse(arg) {
    if (!(arg instanceof pubsub_pb.PubSubTopicsResponse)) {
        throw new Error('Expected argument of type pb.PubSubTopicsResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_pb_PubSubTopicsResponse(buffer_arg) {
    return pubsub_pb.PubSubTopicsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
// PubSubAPI provides a gRPC API for a libp2p pubsub instance
var PubSubAPIService = exports.PubSubAPIService = {
    // PubSubGetTopics is used to return a list of all
    // known topics the pubsub instance is subscribed to.
    pubSubGetTopics: {
        path: '/pb.PubSubAPI/PubSubGetTopics',
        requestStream: false,
        responseStream: false,
        requestType: util_pb.Empty,
        responseType: pubsub_pb.PubSubTopicsResponse,
        requestSerialize: serialize_pb_Empty,
        requestDeserialize: deserialize_pb_Empty,
        responseSerialize: serialize_pb_PubSubTopicsResponse,
        responseDeserialize: deserialize_pb_PubSubTopicsResponse
    },
    // PubSubListPeers is used to return a list of peers subscribed
    // to a given topic or topics.
    pubSubListPeers: {
        path: '/pb.PubSubAPI/PubSubListPeers',
        requestStream: false,
        responseStream: false,
        requestType: pubsub_pb.PubSubListPeersRequest,
        responseType: pubsub_pb.PubSubListPeersResponse,
        requestSerialize: serialize_pb_PubSubListPeersRequest,
        requestDeserialize: deserialize_pb_PubSubListPeersRequest,
        responseSerialize: serialize_pb_PubSubListPeersResponse,
        responseDeserialize: deserialize_pb_PubSubListPeersResponse
    },
    // PubSubSubscribe is used to subscribe to a topic and receive messages
    // Server will stream the messages received on the topic specified 
    // during the initial subscription call, and send each message
    // back to the client as it is received. 
    pubSubSubscribe: {
        path: '/pb.PubSubAPI/PubSubSubscribe',
        requestStream: false,
        responseStream: true,
        requestType: pubsub_pb.PubSubSubscribeRequest,
        responseType: pubsub_pb.PubSubMessageResponse,
        requestSerialize: serialize_pb_PubSubSubscribeRequest,
        requestDeserialize: deserialize_pb_PubSubSubscribeRequest,
        responseSerialize: serialize_pb_PubSubMessageResponse,
        responseDeserialize: deserialize_pb_PubSubMessageResponse
    },
    // PubSubPublish is used to send a stream of messages to a pubsub topic.
    pubSubPublish: {
        path: '/pb.PubSubAPI/PubSubPublish',
        requestStream: true,
        responseStream: false,
        requestType: pubsub_pb.PubSubPublishRequest,
        responseType: util_pb.Empty,
        requestSerialize: serialize_pb_PubSubPublishRequest,
        requestDeserialize: deserialize_pb_PubSubPublishRequest,
        responseSerialize: serialize_pb_Empty,
        responseDeserialize: deserialize_pb_Empty
    }
};
exports.PubSubAPIClient = grpc.makeGenericClientConstructor(PubSubAPIService);
