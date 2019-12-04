// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var status_pb = require('./status_pb.js');
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

function serialize_pb_StatusResponse(arg) {
  if (!(arg instanceof status_pb.StatusResponse)) {
    throw new Error('Expected argument of type pb.StatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_StatusResponse(buffer_arg) {
  return status_pb.StatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_VersionResponse(arg) {
  if (!(arg instanceof status_pb.VersionResponse)) {
    throw new Error('Expected argument of type pb.VersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_VersionResponse(buffer_arg) {
  return status_pb.VersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// provides utilities to retrieve api status information from
var StatusAPIService = exports.StatusAPIService = {
  // Version is used to retrieve api version information
  version: {
    path: '/pb.StatusAPI/Version',
    requestStream: false,
    responseStream: false,
    requestType: util_pb.Empty,
    responseType: status_pb.VersionResponse,
    requestSerialize: serialize_pb_Empty,
    requestDeserialize: deserialize_pb_Empty,
    responseSerialize: serialize_pb_VersionResponse,
    responseDeserialize: deserialize_pb_VersionResponse,
  },
  // Status is used to retrieve api status information.
  status: {
    path: '/pb.StatusAPI/Status',
    requestStream: false,
    responseStream: false,
    requestType: util_pb.Empty,
    responseType: status_pb.StatusResponse,
    requestSerialize: serialize_pb_Empty,
    requestDeserialize: deserialize_pb_Empty,
    responseSerialize: serialize_pb_StatusResponse,
    responseDeserialize: deserialize_pb_StatusResponse,
  },
};

exports.StatusAPIClient = grpc.makeGenericClientConstructor(StatusAPIService);
