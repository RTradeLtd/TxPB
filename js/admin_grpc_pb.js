// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var admin_pb = require('./admin_pb.js');

function serialize_pb_ManageGCRequest(arg) {
  if (!(arg instanceof admin_pb.ManageGCRequest)) {
    throw new Error('Expected argument of type pb.ManageGCRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ManageGCRequest(buffer_arg) {
  return admin_pb.ManageGCRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ManageGCResponse(arg) {
  if (!(arg instanceof admin_pb.ManageGCResponse)) {
    throw new Error('Expected argument of type pb.ManageGCResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ManageGCResponse(buffer_arg) {
  return admin_pb.ManageGCResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_RefCountRequest(arg) {
  if (!(arg instanceof admin_pb.RefCountRequest)) {
    throw new Error('Expected argument of type pb.RefCountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_RefCountRequest(buffer_arg) {
  return admin_pb.RefCountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_RefCountResponse(arg) {
  if (!(arg instanceof admin_pb.RefCountResponse)) {
    throw new Error('Expected argument of type pb.RefCountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_RefCountResponse(buffer_arg) {
  return admin_pb.RefCountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// AdminAPI facilitates administrative management of TemporalX via a localhost gRPC API
var AdminAPIService = exports.AdminAPIService = {
  // ManageGC is used to manage TemporalX's garbage collection process
  manageGC: {
    path: '/pb.AdminAPI/ManageGC',
    requestStream: false,
    responseStream: false,
    requestType: admin_pb.ManageGCRequest,
    responseType: admin_pb.ManageGCResponse,
    requestSerialize: serialize_pb_ManageGCRequest,
    requestDeserialize: deserialize_pb_ManageGCRequest,
    responseSerialize: serialize_pb_ManageGCResponse,
    responseDeserialize: deserialize_pb_ManageGCResponse,
  },
  // RefCount is used to analyze the counter store and pull reference count information
  refCount: {
    path: '/pb.AdminAPI/RefCount',
    requestStream: false,
    responseStream: false,
    requestType: admin_pb.RefCountRequest,
    responseType: admin_pb.RefCountResponse,
    requestSerialize: serialize_pb_RefCountRequest,
    requestDeserialize: deserialize_pb_RefCountRequest,
    responseSerialize: serialize_pb_RefCountResponse,
    responseDeserialize: deserialize_pb_RefCountResponse,
  },
};

exports.AdminAPIClient = grpc.makeGenericClientConstructor(AdminAPIService);
