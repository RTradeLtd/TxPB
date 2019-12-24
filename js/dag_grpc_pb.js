// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var dag_pb = require('./dag_pb.js');

function serialize_pb_DagRequest(arg) {
  if (!(arg instanceof dag_pb.DagRequest)) {
    throw new Error('Expected argument of type pb.DagRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DagRequest(buffer_arg) {
  return dag_pb.DagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_DagResponse(arg) {
  if (!(arg instanceof dag_pb.DagResponse)) {
    throw new Error('Expected argument of type pb.DagResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DagResponse(buffer_arg) {
  return dag_pb.DagResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DagAPIService = exports.DagAPIService = {
  // Dag is a unidirectional rpc allowing manipulation of low-level ipld objects
  dag: {
    path: '/pb.DagAPI/Dag',
    requestStream: false,
    responseStream: false,
    requestType: dag_pb.DagRequest,
    responseType: dag_pb.DagResponse,
    requestSerialize: serialize_pb_DagRequest,
    requestDeserialize: deserialize_pb_DagRequest,
    responseSerialize: serialize_pb_DagResponse,
    responseDeserialize: deserialize_pb_DagResponse,
  },
  // DagStream is like Dag but with bidirectional streams
  dagStream: {
    path: '/pb.DagAPI/DagStream',
    requestStream: true,
    responseStream: true,
    requestType: dag_pb.DagRequest,
    responseType: dag_pb.DagResponse,
    requestSerialize: serialize_pb_DagRequest,
    requestDeserialize: deserialize_pb_DagRequest,
    responseSerialize: serialize_pb_DagResponse,
    responseDeserialize: deserialize_pb_DagResponse,
  },
};

exports.DagAPIClient = grpc.makeGenericClientConstructor(DagAPIService);
