// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var keystore_pb = require('./keystore_pb.js');

function serialize_pb_KeystoreRequest(arg) {
  if (!(arg instanceof keystore_pb.KeystoreRequest)) {
    throw new Error('Expected argument of type pb.KeystoreRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_KeystoreRequest(buffer_arg) {
  return keystore_pb.KeystoreRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_KeystoreResponse(arg) {
  if (!(arg instanceof keystore_pb.KeystoreResponse)) {
    throw new Error('Expected argument of type pb.KeystoreResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_KeystoreResponse(buffer_arg) {
  return keystore_pb.KeystoreResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// KeystoreAPI provides a keystore management API
var KeystoreAPIService = exports.KeystoreAPIService = {
  keystore: {
    path: '/pb.KeystoreAPI/Keystore',
    requestStream: false,
    responseStream: false,
    requestType: keystore_pb.KeystoreRequest,
    responseType: keystore_pb.KeystoreResponse,
    requestSerialize: serialize_pb_KeystoreRequest,
    requestDeserialize: deserialize_pb_KeystoreRequest,
    responseSerialize: serialize_pb_KeystoreResponse,
    responseDeserialize: deserialize_pb_KeystoreResponse,
  },
};

exports.KeystoreAPIClient = grpc.makeGenericClientConstructor(KeystoreAPIService);
