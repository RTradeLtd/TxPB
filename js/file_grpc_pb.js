// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var file_pb = require('./file_pb.js');
var util_pb = require('./util_pb.js');

function serialize_pb_DownloadRequest(arg) {
  if (!(arg instanceof file_pb.DownloadRequest)) {
    throw new Error('Expected argument of type pb.DownloadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DownloadRequest(buffer_arg) {
  return file_pb.DownloadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_DownloadResponse(arg) {
  if (!(arg instanceof file_pb.DownloadResponse)) {
    throw new Error('Expected argument of type pb.DownloadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DownloadResponse(buffer_arg) {
  return file_pb.DownloadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_PutResponse(arg) {
  if (!(arg instanceof util_pb.PutResponse)) {
    throw new Error('Expected argument of type pb.PutResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PutResponse(buffer_arg) {
  return util_pb.PutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_RemoveRequest(arg) {
  if (!(arg instanceof file_pb.RemoveRequest)) {
    throw new Error('Expected argument of type pb.RemoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_RemoveRequest(buffer_arg) {
  return file_pb.RemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_RemoveResponse(arg) {
  if (!(arg instanceof file_pb.RemoveResponse)) {
    throw new Error('Expected argument of type pb.RemoveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_RemoveResponse(buffer_arg) {
  return file_pb.RemoveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_UploadRequest(arg) {
  if (!(arg instanceof file_pb.UploadRequest)) {
    throw new Error('Expected argument of type pb.UploadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_UploadRequest(buffer_arg) {
  return file_pb.UploadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// FileAPI provides a gRPC api to upload/download files as UnixFS objects
var FileAPIService = exports.FileAPIService = {
  // UploadFile allows uploading a file as a UnixFS object (equivalent to ipfs pin add)
uploadFile: {
    path: '/pb.FileAPI/UploadFile',
    requestStream: true,
    responseStream: false,
    requestType: file_pb.UploadRequest,
    responseType: util_pb.PutResponse,
    requestSerialize: serialize_pb_UploadRequest,
    requestDeserialize: deserialize_pb_UploadRequest,
    responseSerialize: serialize_pb_PutResponse,
    responseDeserialize: deserialize_pb_PutResponse,
  },
  // DownloadFile allows downloading a UnixFS object (equivalent to ipfs get)
downloadFile: {
    path: '/pb.FileAPI/DownloadFile',
    requestStream: false,
    responseStream: true,
    requestType: file_pb.DownloadRequest,
    responseType: file_pb.DownloadResponse,
    requestSerialize: serialize_pb_DownloadRequest,
    requestDeserialize: deserialize_pb_DownloadRequest,
    responseSerialize: serialize_pb_DownloadResponse,
    responseDeserialize: deserialize_pb_DownloadResponse,
  },
  // RemoveFile allows removing a UnixFS object or decrease it's reference counter (equivalent to ipfs pin rm)
removeFile: {
    path: '/pb.FileAPI/RemoveFile',
    requestStream: false,
    responseStream: false,
    requestType: file_pb.RemoveRequest,
    responseType: file_pb.RemoveResponse,
    requestSerialize: serialize_pb_RemoveRequest,
    requestDeserialize: deserialize_pb_RemoveRequest,
    responseSerialize: serialize_pb_RemoveResponse,
    responseDeserialize: deserialize_pb_RemoveResponse,
  },
};

exports.FileAPIClient = grpc.makeGenericClientConstructor(FileAPIService);
