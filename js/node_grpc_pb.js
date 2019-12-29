// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var node_pb = require('./node_pb.js');
var util_pb = require('./util_pb.js');

function serialize_pb_BlockstoreRequest(arg) {
  if (!(arg instanceof node_pb.BlockstoreRequest)) {
    throw new Error('Expected argument of type pb.BlockstoreRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_BlockstoreRequest(buffer_arg) {
  return node_pb.BlockstoreRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_BlockstoreResponse(arg) {
  if (!(arg instanceof node_pb.BlockstoreResponse)) {
    throw new Error('Expected argument of type pb.BlockstoreResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_BlockstoreResponse(buffer_arg) {
  return node_pb.BlockstoreResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ConnMgmtRequest(arg) {
  if (!(arg instanceof node_pb.ConnMgmtRequest)) {
    throw new Error('Expected argument of type pb.ConnMgmtRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ConnMgmtRequest(buffer_arg) {
  return node_pb.ConnMgmtRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ConnMgmtResponse(arg) {
  if (!(arg instanceof node_pb.ConnMgmtResponse)) {
    throw new Error('Expected argument of type pb.ConnMgmtResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ConnMgmtResponse(buffer_arg) {
  return node_pb.ConnMgmtResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  // ConnMgmt provides control over libp2p connections
  connMgmt: {
    path: '/pb.NodeAPI/ConnMgmt',
    requestStream: false,
    responseStream: false,
    requestType: node_pb.ConnMgmtRequest,
    responseType: node_pb.ConnMgmtResponse,
    requestSerialize: serialize_pb_ConnMgmtRequest,
    requestDeserialize: deserialize_pb_ConnMgmtRequest,
    responseSerialize: serialize_pb_ConnMgmtResponse,
    responseDeserialize: deserialize_pb_ConnMgmtResponse,
  },
  // Extras provide control over node extras capabilities
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
  // Blockstore allows low-level management of the underlying blockstore
  blockstore: {
    path: '/pb.NodeAPI/Blockstore',
    requestStream: false,
    responseStream: false,
    requestType: node_pb.BlockstoreRequest,
    responseType: node_pb.BlockstoreResponse,
    requestSerialize: serialize_pb_BlockstoreRequest,
    requestDeserialize: deserialize_pb_BlockstoreRequest,
    responseSerialize: serialize_pb_BlockstoreResponse,
    responseDeserialize: deserialize_pb_BlockstoreResponse,
  },
};

exports.NodeAPIClient = grpc.makeGenericClientConstructor(NodeAPIService);
