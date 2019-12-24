// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var node_pb = require('./node_pb.js');
var util_pb = require('./util_pb.js');

function serialize_pb_ConnectRequest(arg) {
  if (!(arg instanceof node_pb.ConnectRequest)) {
    throw new Error('Expected argument of type pb.ConnectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ConnectRequest(buffer_arg) {
  return node_pb.ConnectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_DisableExtrasRequest(arg) {
  if (!(arg instanceof node_pb.DisableExtrasRequest)) {
    throw new Error('Expected argument of type pb.DisableExtrasRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DisableExtrasRequest(buffer_arg) {
  return node_pb.DisableExtrasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_DisconnectRequest(arg) {
  if (!(arg instanceof node_pb.DisconnectRequest)) {
    throw new Error('Expected argument of type pb.DisconnectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DisconnectRequest(buffer_arg) {
  return node_pb.DisconnectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_DisconnectResponse(arg) {
  if (!(arg instanceof node_pb.DisconnectResponse)) {
    throw new Error('Expected argument of type pb.DisconnectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DisconnectResponse(buffer_arg) {
  return node_pb.DisconnectResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_pb_EnableExtrasRequest(arg) {
  if (!(arg instanceof node_pb.EnableExtrasRequest)) {
    throw new Error('Expected argument of type pb.EnableExtrasRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_EnableExtrasRequest(buffer_arg) {
  return node_pb.EnableExtrasRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_pb_IsConnectedRequest(arg) {
  if (!(arg instanceof node_pb.IsConnectedRequest)) {
    throw new Error('Expected argument of type pb.IsConnectedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_IsConnectedRequest(buffer_arg) {
  return node_pb.IsConnectedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_IsConnectedResponse(arg) {
  if (!(arg instanceof node_pb.IsConnectedResponse)) {
    throw new Error('Expected argument of type pb.IsConnectedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_IsConnectedResponse(buffer_arg) {
  return node_pb.IsConnectedResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  // Connect is used to connect to remote libp2p peers
  connect: {
    path: '/pb.NodeAPI/Connect',
    requestStream: false,
    responseStream: false,
    requestType: node_pb.ConnectRequest,
    responseType: util_pb.Empty,
    requestSerialize: serialize_pb_ConnectRequest,
    requestDeserialize: deserialize_pb_ConnectRequest,
    responseSerialize: serialize_pb_Empty,
    responseDeserialize: deserialize_pb_Empty,
  },
  // Disconnect is used to disconnect remote libp2p peer connections
  disconnect: {
    path: '/pb.NodeAPI/Disconnect',
    requestStream: false,
    responseStream: false,
    requestType: node_pb.DisconnectRequest,
    responseType: node_pb.DisconnectResponse,
    requestSerialize: serialize_pb_DisconnectRequest,
    requestDeserialize: deserialize_pb_DisconnectRequest,
    responseSerialize: serialize_pb_DisconnectResponse,
    responseDeserialize: deserialize_pb_DisconnectResponse,
  },
  // IsConnected is used to check if we are connected with a given peer
  isConnected: {
    path: '/pb.NodeAPI/IsConnected',
    requestStream: false,
    responseStream: false,
    requestType: node_pb.IsConnectedRequest,
    responseType: node_pb.IsConnectedResponse,
    requestSerialize: serialize_pb_IsConnectedRequest,
    requestDeserialize: deserialize_pb_IsConnectedRequest,
    responseSerialize: serialize_pb_IsConnectedResponse,
    responseDeserialize: deserialize_pb_IsConnectedResponse,
  },
  // EnableExtras is used to enable a particular extras feature
  enableExtras: {
    path: '/pb.NodeAPI/EnableExtras',
    requestStream: false,
    responseStream: false,
    requestType: node_pb.EnableExtrasRequest,
    responseType: util_pb.Empty,
    requestSerialize: serialize_pb_EnableExtrasRequest,
    requestDeserialize: deserialize_pb_EnableExtrasRequest,
    responseSerialize: serialize_pb_Empty,
    responseDeserialize: deserialize_pb_Empty,
  },
  // DisableExtras is used to disable a particular extras feature
  disableExtras: {
    path: '/pb.NodeAPI/DisableExtras',
    requestStream: false,
    responseStream: false,
    requestType: node_pb.DisableExtrasRequest,
    responseType: util_pb.Empty,
    requestSerialize: serialize_pb_DisableExtrasRequest,
    requestDeserialize: deserialize_pb_DisableExtrasRequest,
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
