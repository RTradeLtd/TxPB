/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var util_pb = require('./util_pb.js')

const proto = {};
proto.pb = require('./file_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.FileAPIClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.FileAPIPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.DownloadRequest,
 *   !proto.pb.DownloadResponse>}
 */
const methodInfo_FileAPI_DownloadFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.DownloadResponse,
  /** @param {!proto.pb.DownloadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.DownloadResponse.deserializeBinary
);


/**
 * @param {!proto.pb.DownloadRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pb.DownloadResponse>}
 *     The XHR Node Readable Stream
 */
proto.pb.FileAPIClient.prototype.downloadFile =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.FileAPI/DownloadFile',
      request,
      metadata || {},
      methodInfo_FileAPI_DownloadFile);
};


/**
 * @param {!proto.pb.DownloadRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pb.DownloadResponse>}
 *     The XHR Node Readable Stream
 */
proto.pb.FileAPIPromiseClient.prototype.downloadFile =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.FileAPI/DownloadFile',
      request,
      metadata || {},
      methodInfo_FileAPI_DownloadFile);
};


module.exports = proto.pb;

