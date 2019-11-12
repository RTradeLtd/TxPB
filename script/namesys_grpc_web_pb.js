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
proto.pb = require('./namesys_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.NameSysAPIClient =
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
proto.pb.NameSysAPIPromiseClient =
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
 *   !proto.pb.NameSysResolveRequest,
 *   !proto.pb.NameSysResolveResult>}
 */
const methodInfo_NameSysAPI_NameSysResolve = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.NameSysResolveResult,
  /** @param {!proto.pb.NameSysResolveRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.NameSysResolveResult.deserializeBinary
);


/**
 * @param {!proto.pb.NameSysResolveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.NameSysResolveResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.NameSysResolveResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.NameSysAPIClient.prototype.nameSysResolve =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.NameSysAPI/NameSysResolve',
      request,
      metadata || {},
      methodInfo_NameSysAPI_NameSysResolve,
      callback);
};


/**
 * @param {!proto.pb.NameSysResolveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.NameSysResolveResult>}
 *     A native promise that resolves to the response
 */
proto.pb.NameSysAPIPromiseClient.prototype.nameSysResolve =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.NameSysAPI/NameSysResolve',
      request,
      metadata || {},
      methodInfo_NameSysAPI_NameSysResolve);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.NameSysResolveRequest,
 *   !proto.pb.NameSysResolveResult>}
 */
const methodInfo_NameSysAPI_NameSysResolveAsync = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.NameSysResolveResult,
  /** @param {!proto.pb.NameSysResolveRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.NameSysResolveResult.deserializeBinary
);


/**
 * @param {!proto.pb.NameSysResolveRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pb.NameSysResolveResult>}
 *     The XHR Node Readable Stream
 */
proto.pb.NameSysAPIClient.prototype.nameSysResolveAsync =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.NameSysAPI/NameSysResolveAsync',
      request,
      metadata || {},
      methodInfo_NameSysAPI_NameSysResolveAsync);
};


/**
 * @param {!proto.pb.NameSysResolveRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pb.NameSysResolveResult>}
 *     The XHR Node Readable Stream
 */
proto.pb.NameSysAPIPromiseClient.prototype.nameSysResolveAsync =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.NameSysAPI/NameSysResolveAsync',
      request,
      metadata || {},
      methodInfo_NameSysAPI_NameSysResolveAsync);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.NameSysPublishRequest,
 *   !proto.pb.Empty>}
 */
const methodInfo_NameSysAPI_NameSysPublish = new grpc.web.AbstractClientBase.MethodInfo(
  util_pb.Empty,
  /** @param {!proto.pb.NameSysPublishRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  util_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.NameSysPublishRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.NameSysAPIClient.prototype.nameSysPublish =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.NameSysAPI/NameSysPublish',
      request,
      metadata || {},
      methodInfo_NameSysAPI_NameSysPublish,
      callback);
};


/**
 * @param {!proto.pb.NameSysPublishRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     A native promise that resolves to the response
 */
proto.pb.NameSysAPIPromiseClient.prototype.nameSysPublish =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.NameSysAPI/NameSysPublish',
      request,
      metadata || {},
      methodInfo_NameSysAPI_NameSysPublish);
};


module.exports = proto.pb;

