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
proto.pb = require('./p2p_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.P2PAPIClient =
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
proto.pb.P2PAPIPromiseClient =
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
 *   !proto.pb.CloseRequest,
 *   !proto.pb.Empty>}
 */
const methodInfo_P2PAPI_Close = new grpc.web.AbstractClientBase.MethodInfo(
  util_pb.Empty,
  /** @param {!proto.pb.CloseRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  util_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.CloseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.P2PAPIClient.prototype.close =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.P2PAPI/Close',
      request,
      metadata || {},
      methodInfo_P2PAPI_Close,
      callback);
};


/**
 * @param {!proto.pb.CloseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     A native promise that resolves to the response
 */
proto.pb.P2PAPIPromiseClient.prototype.close =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.P2PAPI/Close',
      request,
      metadata || {},
      methodInfo_P2PAPI_Close);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.ForwardRequest,
 *   !proto.pb.Empty>}
 */
const methodInfo_P2PAPI_Forward = new grpc.web.AbstractClientBase.MethodInfo(
  util_pb.Empty,
  /** @param {!proto.pb.ForwardRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  util_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.ForwardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.P2PAPIClient.prototype.forward =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.P2PAPI/Forward',
      request,
      metadata || {},
      methodInfo_P2PAPI_Forward,
      callback);
};


/**
 * @param {!proto.pb.ForwardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     A native promise that resolves to the response
 */
proto.pb.P2PAPIPromiseClient.prototype.forward =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.P2PAPI/Forward',
      request,
      metadata || {},
      methodInfo_P2PAPI_Forward);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.ListenRequest,
 *   !proto.pb.Empty>}
 */
const methodInfo_P2PAPI_Listen = new grpc.web.AbstractClientBase.MethodInfo(
  util_pb.Empty,
  /** @param {!proto.pb.ListenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  util_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.ListenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.P2PAPIClient.prototype.listen =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.P2PAPI/Listen',
      request,
      metadata || {},
      methodInfo_P2PAPI_Listen,
      callback);
};


/**
 * @param {!proto.pb.ListenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     A native promise that resolves to the response
 */
proto.pb.P2PAPIPromiseClient.prototype.listen =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.P2PAPI/Listen',
      request,
      metadata || {},
      methodInfo_P2PAPI_Listen);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.LsRequest,
 *   !proto.pb.LsResponse>}
 */
const methodInfo_P2PAPI_Ls = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.LsResponse,
  /** @param {!proto.pb.LsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.LsResponse.deserializeBinary
);


/**
 * @param {!proto.pb.LsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.LsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.LsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.P2PAPIClient.prototype.ls =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.P2PAPI/Ls',
      request,
      metadata || {},
      methodInfo_P2PAPI_Ls,
      callback);
};


/**
 * @param {!proto.pb.LsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.LsResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.P2PAPIPromiseClient.prototype.ls =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.P2PAPI/Ls',
      request,
      metadata || {},
      methodInfo_P2PAPI_Ls);
};


module.exports = proto.pb;

