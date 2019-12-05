// GENERATED CODE -- DO NOT EDIT!
'use strict';
exports.__esModule = true;
var grpc = require('grpc');
var dag_pb = require('./dag_pb.js');
function serialize_pb_AddLinksRequest(arg) {
    if (!(arg instanceof dag_pb.AddLinksRequest)) {
        throw new Error('Expected argument of type pb.AddLinksRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_pb_AddLinksRequest(buffer_arg) {
    return dag_pb.AddLinksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_pb_DagGetRequest(arg) {
    if (!(arg instanceof dag_pb.DagGetRequest)) {
        throw new Error('Expected argument of type pb.DagGetRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_pb_DagGetRequest(buffer_arg) {
    return dag_pb.DagGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_pb_DagGetResponse(arg) {
    if (!(arg instanceof dag_pb.DagGetResponse)) {
        throw new Error('Expected argument of type pb.DagGetResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_pb_DagGetResponse(buffer_arg) {
    return dag_pb.DagGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_pb_DagPutRequest(arg) {
    if (!(arg instanceof dag_pb.DagPutRequest)) {
        throw new Error('Expected argument of type pb.DagPutRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_pb_DagPutRequest(buffer_arg) {
    return dag_pb.DagPutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_pb_DagPutResponse(arg) {
    if (!(arg instanceof dag_pb.DagPutResponse)) {
        throw new Error('Expected argument of type pb.DagPutResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_pb_DagPutResponse(buffer_arg) {
    return dag_pb.DagPutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_pb_GetLinksRequest(arg) {
    if (!(arg instanceof dag_pb.GetLinksRequest)) {
        throw new Error('Expected argument of type pb.GetLinksRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_pb_GetLinksRequest(buffer_arg) {
    return dag_pb.GetLinksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_pb_GetLinksResponse(arg) {
    if (!(arg instanceof dag_pb.GetLinksResponse)) {
        throw new Error('Expected argument of type pb.GetLinksResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_pb_GetLinksResponse(buffer_arg) {
    return dag_pb.GetLinksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_pb_NewIPLDNodeRequest(arg) {
    if (!(arg instanceof dag_pb.NewIPLDNodeRequest)) {
        throw new Error('Expected argument of type pb.NewIPLDNodeRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_pb_NewIPLDNodeRequest(buffer_arg) {
    return dag_pb.NewIPLDNodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
// provides protocol buffer definitions for interactin with IPLD objects
//
// DagAPI provides a gRPC API for manipulating IPLD objects
var DagAPIService = exports.DagAPIService = {
    // DagPut is used to store arbitrary bytes as a custom IPLD object
    dagPut: {
        path: '/pb.DagAPI/DagPut',
        requestStream: false,
        responseStream: false,
        requestType: dag_pb.DagPutRequest,
        responseType: dag_pb.DagPutResponse,
        requestSerialize: serialize_pb_DagPutRequest,
        requestDeserialize: deserialize_pb_DagPutRequest,
        responseSerialize: serialize_pb_DagPutResponse,
        responseDeserialize: deserialize_pb_DagPutResponse
    },
    // DagGet is used to request the raw ipld node data for an IPLD object
    dagGet: {
        path: '/pb.DagAPI/DagGet',
        requestStream: false,
        responseStream: false,
        requestType: dag_pb.DagGetRequest,
        responseType: dag_pb.DagGetResponse,
        requestSerialize: serialize_pb_DagGetRequest,
        requestDeserialize: deserialize_pb_DagGetRequest,
        responseSerialize: serialize_pb_DagGetResponse,
        responseDeserialize: deserialize_pb_DagGetResponse
    },
    // NewIPLDNode is used to create a new IPFS MerkleDAG node.
    // This is the same type as in github.com/ipfs/go-ipld-format.Node
    newIPLDNode: {
        path: '/pb.DagAPI/NewIPLDNode',
        requestStream: false,
        responseStream: false,
        requestType: dag_pb.NewIPLDNodeRequest,
        responseType: dag_pb.DagPutResponse,
        requestSerialize: serialize_pb_NewIPLDNodeRequest,
        requestDeserialize: deserialize_pb_NewIPLDNodeRequest,
        responseSerialize: serialize_pb_DagPutResponse,
        responseDeserialize: deserialize_pb_DagPutResponse
    },
    // AddLinksToNode is used to add links to an existing IPFS MerkleDAG node
    addLinksToNode: {
        path: '/pb.DagAPI/AddLinksToNode',
        requestStream: false,
        responseStream: false,
        requestType: dag_pb.AddLinksRequest,
        responseType: dag_pb.DagPutResponse,
        requestSerialize: serialize_pb_AddLinksRequest,
        requestDeserialize: deserialize_pb_AddLinksRequest,
        responseSerialize: serialize_pb_DagPutResponse,
        responseDeserialize: deserialize_pb_DagPutResponse
    },
    // GetLinks is used to request all the links for a given object
    getLinks: {
        path: '/pb.DagAPI/GetLinks',
        requestStream: false,
        responseStream: false,
        requestType: dag_pb.GetLinksRequest,
        responseType: dag_pb.GetLinksResponse,
        requestSerialize: serialize_pb_GetLinksRequest,
        requestDeserialize: deserialize_pb_GetLinksRequest,
        responseSerialize: serialize_pb_GetLinksResponse,
        responseDeserialize: deserialize_pb_GetLinksResponse
    }
};
// exports.DagAPIClient = grpc.makeGenericClientConstructor(DagAPIService);
exports.DagAPIClient = grpc.makeGenericClientConstructor(DagAPIService);
