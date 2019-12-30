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

function serialize_pb_DagRequest(arg) {
  if (!(arg instanceof node_pb.DagRequest)) {
    throw new Error('Expected argument of type pb.DagRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DagRequest(buffer_arg) {
  return node_pb.DagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_DagResponse(arg) {
  if (!(arg instanceof node_pb.DagResponse)) {
    throw new Error('Expected argument of type pb.DagResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DagResponse(buffer_arg) {
  return node_pb.DagResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_pb_KeystoreRequest(arg) {
  if (!(arg instanceof node_pb.KeystoreRequest)) {
    throw new Error('Expected argument of type pb.KeystoreRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_KeystoreRequest(buffer_arg) {
  return node_pb.KeystoreRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_KeystoreResponse(arg) {
  if (!(arg instanceof node_pb.KeystoreResponse)) {
    throw new Error('Expected argument of type pb.KeystoreResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_KeystoreResponse(buffer_arg) {
  return node_pb.KeystoreResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  // Dag is a unidirectional rpc allowing manipulation of low-level ipld objects
  dag: {
    path: '/pb.NodeAPI/Dag',
    requestStream: false,
    responseStream: false,
    requestType: node_pb.DagRequest,
    responseType: node_pb.DagResponse,
    requestSerialize: serialize_pb_DagRequest,
    requestDeserialize: deserialize_pb_DagRequest,
    responseSerialize: serialize_pb_DagResponse,
    responseDeserialize: deserialize_pb_DagResponse,
  },
  // Keystore is a unidirectional RPC allowing management of ipfs keystores
  keystore: {
    path: '/pb.NodeAPI/Keystore',
    requestStream: false,
    responseStream: false,
    requestType: node_pb.KeystoreRequest,
    responseType: node_pb.KeystoreResponse,
    requestSerialize: serialize_pb_KeystoreRequest,
    requestDeserialize: deserialize_pb_KeystoreRequest,
    responseSerialize: serialize_pb_KeystoreResponse,
    responseDeserialize: deserialize_pb_KeystoreResponse,
  },
};

exports.NodeAPIClient = grpc.makeGenericClientConstructor(NodeAPIService);
