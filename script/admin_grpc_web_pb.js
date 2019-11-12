/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


const proto = {};
proto.pb = require('./admin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.AdminAPIClient =
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
proto.pb.AdminAPIPromiseClient =
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
 *   !proto.pb.ManageGCRequest,
 *   !proto.pb.ManageGCResponse>}
 */
const methodInfo_AdminAPI_ManageGC = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.ManageGCResponse,
  /** @param {!proto.pb.ManageGCRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.ManageGCResponse.deserializeBinary
);


/**
 * @param {!proto.pb.ManageGCRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.ManageGCResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.ManageGCResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.AdminAPIClient.prototype.manageGC =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.AdminAPI/ManageGC',
      request,
      metadata || {},
      methodInfo_AdminAPI_ManageGC,
      callback);
};


/**
 * @param {!proto.pb.ManageGCRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.ManageGCResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.AdminAPIPromiseClient.prototype.manageGC =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.AdminAPI/ManageGC',
      request,
      metadata || {},
      methodInfo_AdminAPI_ManageGC);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.RefCountRequest,
 *   !proto.pb.RefCountResponse>}
 */
const methodInfo_AdminAPI_RefCount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.RefCountResponse,
  /** @param {!proto.pb.RefCountRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.RefCountResponse.deserializeBinary
);


/**
 * @param {!proto.pb.RefCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.RefCountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.RefCountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.AdminAPIClient.prototype.refCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.AdminAPI/RefCount',
      request,
      metadata || {},
      methodInfo_AdminAPI_RefCount,
      callback);
};


/**
 * @param {!proto.pb.RefCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.RefCountResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.AdminAPIPromiseClient.prototype.refCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.AdminAPI/RefCount',
      request,
      metadata || {},
      methodInfo_AdminAPI_RefCount);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.BlockstoreRequest,
 *   !proto.pb.BlockstoreResponse>}
 */
const methodInfo_AdminAPI_Blockstore = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.BlockstoreResponse,
  /** @param {!proto.pb.BlockstoreRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.BlockstoreResponse.deserializeBinary
);


/**
 * @param {!proto.pb.BlockstoreRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.BlockstoreResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.BlockstoreResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.AdminAPIClient.prototype.blockstore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.AdminAPI/Blockstore',
      request,
      metadata || {},
      methodInfo_AdminAPI_Blockstore,
      callback);
};


/**
 * @param {!proto.pb.BlockstoreRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.BlockstoreResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.AdminAPIPromiseClient.prototype.blockstore =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.AdminAPI/Blockstore',
      request,
      metadata || {},
      methodInfo_AdminAPI_Blockstore);
};


module.exports = proto.pb;

