// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var namesys_pb = require('./namesys_pb.js');
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

function serialize_pb_NameSysPublishRequest(arg) {
  if (!(arg instanceof namesys_pb.NameSysPublishRequest)) {
    throw new Error('Expected argument of type pb.NameSysPublishRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_NameSysPublishRequest(buffer_arg) {
  return namesys_pb.NameSysPublishRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_NameSysResolveRequest(arg) {
  if (!(arg instanceof namesys_pb.NameSysResolveRequest)) {
    throw new Error('Expected argument of type pb.NameSysResolveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_NameSysResolveRequest(buffer_arg) {
  return namesys_pb.NameSysResolveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_NameSysResolveResult(arg) {
  if (!(arg instanceof namesys_pb.NameSysResolveResult)) {
    throw new Error('Expected argument of type pb.NameSysResolveResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_NameSysResolveResult(buffer_arg) {
  return namesys_pb.NameSysResolveResult.deserializeBinary(new Uint8Array(buffer_arg));
}


// NameSysAPI provides a generic name resolution API
var NameSysAPIService = exports.NameSysAPIService = {
  // NameSysResolve is used to resolve a name, waiting for the request to complete
  nameSysResolve: {
    path: '/pb.NameSysAPI/NameSysResolve',
    requestStream: false,
    responseStream: false,
    requestType: namesys_pb.NameSysResolveRequest,
    responseType: namesys_pb.NameSysResolveResult,
    requestSerialize: serialize_pb_NameSysResolveRequest,
    requestDeserialize: deserialize_pb_NameSysResolveRequest,
    responseSerialize: serialize_pb_NameSysResolveResult,
    responseDeserialize: deserialize_pb_NameSysResolveResult,
  },
  // NameSysResolveAsync is like Resolve, except instead of waiting for the request
  // to complete, we send back a stream which we will send the result on
  nameSysResolveAsync: {
    path: '/pb.NameSysAPI/NameSysResolveAsync',
    requestStream: false,
    responseStream: true,
    requestType: namesys_pb.NameSysResolveRequest,
    responseType: namesys_pb.NameSysResolveResult,
    requestSerialize: serialize_pb_NameSysResolveRequest,
    requestDeserialize: deserialize_pb_NameSysResolveRequest,
    responseSerialize: serialize_pb_NameSysResolveResult,
    responseDeserialize: deserialize_pb_NameSysResolveResult,
  },
  // NameSysPublish is used to publish an IPNS record, with/with-out an EOL
  nameSysPublish: {
    path: '/pb.NameSysAPI/NameSysPublish',
    requestStream: false,
    responseStream: false,
    requestType: namesys_pb.NameSysPublishRequest,
    responseType: util_pb.Empty,
    requestSerialize: serialize_pb_NameSysPublishRequest,
    requestDeserialize: deserialize_pb_NameSysPublishRequest,
    responseSerialize: serialize_pb_Empty,
    responseDeserialize: deserialize_pb_Empty,
  },
};

exports.NameSysAPIClient = grpc.makeGenericClientConstructor(NameSysAPIService);
