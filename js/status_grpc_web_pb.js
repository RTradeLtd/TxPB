/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var util_pb = require('./util_pb.js')

var github_com_gogo_protobuf_gogoproto_gogo_pb = require('./github.com/gogo/protobuf/gogoproto/gogo_pb.js')
const proto = {};
proto.pb = require('./status_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.StatusAPIClient =
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
proto.pb.StatusAPIPromiseClient =
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
 *   !proto.pb.Empty,
 *   !proto.pb.VersionResponse>}
 */
const methodInfo_StatusAPI_Version = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.VersionResponse,
  /** @param {!proto.pb.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.VersionResponse.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.VersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.VersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.StatusAPIClient.prototype.version =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.StatusAPI/Version',
      request,
      metadata || {},
      methodInfo_StatusAPI_Version,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.VersionResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.StatusAPIPromiseClient.prototype.version =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.StatusAPI/Version',
      request,
      metadata || {},
      methodInfo_StatusAPI_Version);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Empty,
 *   !proto.pb.StatusResponse>}
 */
const methodInfo_StatusAPI_Status = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.StatusResponse,
  /** @param {!proto.pb.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.StatusResponse.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.StatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.StatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.StatusAPIClient.prototype.status =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.StatusAPI/Status',
      request,
      metadata || {},
      methodInfo_StatusAPI_Status,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.StatusResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.StatusAPIPromiseClient.prototype.status =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.StatusAPI/Status',
      request,
      metadata || {},
      methodInfo_StatusAPI_Status);
};


module.exports = proto.pb;

