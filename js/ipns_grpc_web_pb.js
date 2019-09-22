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
proto.pb = require('./ipns_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.IPNSAPIClient =
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
proto.pb.IPNSAPIPromiseClient =
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
 *   !proto.pb.NameResolveRequest,
 *   !proto.pb.NameResolveResult>}
 */
const methodInfo_IPNSAPI_Resolve = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.NameResolveResult,
  /** @param {!proto.pb.NameResolveRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.NameResolveResult.deserializeBinary
);


/**
 * @param {!proto.pb.NameResolveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.NameResolveResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.NameResolveResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.IPNSAPIClient.prototype.resolve =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.IPNSAPI/Resolve',
      request,
      metadata || {},
      methodInfo_IPNSAPI_Resolve,
      callback);
};


/**
 * @param {!proto.pb.NameResolveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.NameResolveResult>}
 *     A native promise that resolves to the response
 */
proto.pb.IPNSAPIPromiseClient.prototype.resolve =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.IPNSAPI/Resolve',
      request,
      metadata || {},
      methodInfo_IPNSAPI_Resolve);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.NameResolveRequest,
 *   !proto.pb.NameResolveResult>}
 */
const methodInfo_IPNSAPI_ResolveAsync = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.NameResolveResult,
  /** @param {!proto.pb.NameResolveRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.NameResolveResult.deserializeBinary
);


/**
 * @param {!proto.pb.NameResolveRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pb.NameResolveResult>}
 *     The XHR Node Readable Stream
 */
proto.pb.IPNSAPIClient.prototype.resolveAsync =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.IPNSAPI/ResolveAsync',
      request,
      metadata || {},
      methodInfo_IPNSAPI_ResolveAsync);
};


/**
 * @param {!proto.pb.NameResolveRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pb.NameResolveResult>}
 *     The XHR Node Readable Stream
 */
proto.pb.IPNSAPIPromiseClient.prototype.resolveAsync =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.IPNSAPI/ResolveAsync',
      request,
      metadata || {},
      methodInfo_IPNSAPI_ResolveAsync);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.NamePublishRequest,
 *   !proto.pb.Empty>}
 */
const methodInfo_IPNSAPI_Publish = new grpc.web.AbstractClientBase.MethodInfo(
  util_pb.Empty,
  /** @param {!proto.pb.NamePublishRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  util_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.NamePublishRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.IPNSAPIClient.prototype.publish =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.IPNSAPI/Publish',
      request,
      metadata || {},
      methodInfo_IPNSAPI_Publish,
      callback);
};


/**
 * @param {!proto.pb.NamePublishRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     A native promise that resolves to the response
 */
proto.pb.IPNSAPIPromiseClient.prototype.publish =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.IPNSAPI/Publish',
      request,
      metadata || {},
      methodInfo_IPNSAPI_Publish);
};


module.exports = proto.pb;

