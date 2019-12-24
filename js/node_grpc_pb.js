// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var node_pb = require('./node_pb.js');
var util_pb = require('./util_pb.js');

function serialize_pb_ConnectionManagementRequest(arg) {
  if (!(arg instanceof node_pb.ConnectionManagementRequest)) {
    throw new Error('Expected argument of type pb.ConnectionManagementRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ConnectionManagementRequest(buffer_arg) {
  return node_pb.ConnectionManagementRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ConnectionManagementResponse(arg) {
  if (!(arg instanceof node_pb.ConnectionManagementResponse)) {
    throw new Error('Expected argument of type pb.ConnectionManagementResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ConnectionManagementResponse(buffer_arg) {
  return node_pb.ConnectionManagementResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_Empty(arg) {
  if (!(arg instanceof util_pb.Empty)) {
    throw new Error('Expected argument of type pb.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_Empty(buffer_arg) {
  return util_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ExtrasRequest(arg) {
  if (!(arg instanceof node_pb.ExtrasRequest)) {
    throw new Error('Expected argument of type pb.ExtrasRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ExtrasRequest(buffer_arg) {
  return node_pb.ExtrasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetPeersResponse(arg) {
  if (!(arg instanceof node_pb.GetPeersResponse)) {
    throw new Error('Expected argument of type pb.GetPeersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetPeersResponse(buffer_arg) {
  return node_pb.GetPeersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_P2PRequest(arg) {
  if (!(arg instanceof node_pb.P2PRequest)) {
    throw new Error('Expected argument of type pb.P2PRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_P2PRequest(buffer_arg) {
  return node_pb.P2PRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_P2PResponse(arg) {
  if (!(arg instanceof node_pb.P2PResponse)) {
    throw new Error('Expected argument of type pb.P2PResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_P2PResponse(buffer_arg) {
  return node_pb.P2PResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// NodeAPI provide an API to control the underlying custom ipfs node
var NodeAPIService = exports.NodeAPIService = {
  // GetPeers returns a message containing a slice of current peers in our peerstore
  getPeers: {
    path: '/pb.NodeAPI/GetPeers',
    requestStream: false,
    responseStream: false,
    requestType: util_pb.Empty,
    responseType: node_pb.GetPeersResponse,
    requestSerialize: serialize_pb_Empty,
    requestDeserialize: deserialize_pb_Empty,
    responseSerialize: serialize_pb_GetPeersResponse,
    responseDeserialize: deserialize_pb_GetPeersResponse,
  },
  connectionManagement: {
    path: '/pb.NodeAPI/ConnectionManagement',
    requestStream: false,
    responseStream: false,
    requestType: node_pb.ConnectionManagementRequest,
    responseType: node_pb.ConnectionManagementResponse,
    requestSerialize: serialize_pb_ConnectionManagementRequest,
    requestDeserialize: deserialize_pb_ConnectionManagementRequest,
    responseSerialize: serialize_pb_ConnectionManagementResponse,
    responseDeserialize: deserialize_pb_ConnectionManagementResponse,
  },
  extras: {
    path: '/pb.NodeAPI/Extras',
    requestStream: false,
    responseStream: false,
    requestType: node_pb.ExtrasRequest,
    responseType: util_pb.Empty,
    requestSerialize: serialize_pb_ExtrasRequest,
    requestDeserialize: deserialize_pb_ExtrasRequest,
    responseSerialize: serialize_pb_Empty,
    responseDeserialize: deserialize_pb_Empty,
  },
  // P2P allows control of generalized p2p streams for tcp/udp based protocol.
  // By using this RPC, we can tunnel traffic similar to ssh tunneling
  // except using libp2p as the transport layer, and and tcp/udp port.
  p2P: {
    path: '/pb.NodeAPI/P2P',
    requestStream: false,
    responseStream: false,
    requestType: node_pb.P2PRequest,
    responseType: node_pb.P2PResponse,
    requestSerialize: serialize_pb_P2PRequest,
    requestDeserialize: deserialize_pb_P2PRequest,
    responseSerialize: serialize_pb_P2PResponse,
    responseDeserialize: deserialize_pb_P2PResponse,
  },
};

exports.NodeAPIClient = grpc.makeGenericClientConstructor(NodeAPIService);
