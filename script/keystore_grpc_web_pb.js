/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


const proto = {};
proto.pb = require('./keystore_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.KeystoreAPIClient =
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
proto.pb.KeystoreAPIPromiseClient =
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
 *   !proto.pb.KeystoreRequest,
 *   !proto.pb.KeystoreResponse>}
 */
const methodInfo_KeystoreAPI_KeystoreHas = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.KeystoreResponse,
  /** @param {!proto.pb.KeystoreRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.KeystoreResponse.deserializeBinary
);


/**
 * @param {!proto.pb.KeystoreRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.KeystoreResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.KeystoreResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.KeystoreAPIClient.prototype.keystoreHas =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.KeystoreAPI/KeystoreHas',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_KeystoreHas,
      callback);
};


/**
 * @param {!proto.pb.KeystoreRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.KeystoreResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.KeystoreAPIPromiseClient.prototype.keystoreHas =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.KeystoreAPI/KeystoreHas',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_KeystoreHas);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.KeystoreRequest,
 *   !proto.pb.KeystoreResponse>}
 */
const methodInfo_KeystoreAPI_KeystoreGet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.KeystoreResponse,
  /** @param {!proto.pb.KeystoreRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.KeystoreResponse.deserializeBinary
);


/**
 * @param {!proto.pb.KeystoreRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.KeystoreResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.KeystoreResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.KeystoreAPIClient.prototype.keystoreGet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.KeystoreAPI/KeystoreGet',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_KeystoreGet,
      callback);
};


/**
 * @param {!proto.pb.KeystoreRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.KeystoreResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.KeystoreAPIPromiseClient.prototype.keystoreGet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.KeystoreAPI/KeystoreGet',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_KeystoreGet);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.KeystoreRequest,
 *   !proto.pb.KeystoreResponse>}
 */
const methodInfo_KeystoreAPI_KeystorePut = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.KeystoreResponse,
  /** @param {!proto.pb.KeystoreRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.KeystoreResponse.deserializeBinary
);


/**
 * @param {!proto.pb.KeystoreRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.KeystoreResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.KeystoreResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.KeystoreAPIClient.prototype.keystorePut =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.KeystoreAPI/KeystorePut',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_KeystorePut,
      callback);
};


/**
 * @param {!proto.pb.KeystoreRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.KeystoreResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.KeystoreAPIPromiseClient.prototype.keystorePut =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.KeystoreAPI/KeystorePut',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_KeystorePut);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.KeystoreRequest,
 *   !proto.pb.KeystoreResponse>}
 */
const methodInfo_KeystoreAPI_KeystoreDelete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.KeystoreResponse,
  /** @param {!proto.pb.KeystoreRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.KeystoreResponse.deserializeBinary
);


/**
 * @param {!proto.pb.KeystoreRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.KeystoreResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.KeystoreResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.KeystoreAPIClient.prototype.keystoreDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.KeystoreAPI/KeystoreDelete',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_KeystoreDelete,
      callback);
};


/**
 * @param {!proto.pb.KeystoreRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.KeystoreResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.KeystoreAPIPromiseClient.prototype.keystoreDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.KeystoreAPI/KeystoreDelete',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_KeystoreDelete);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.KeystoreRequest,
 *   !proto.pb.KeystoreResponse>}
 */
const methodInfo_KeystoreAPI_KeystoreList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.KeystoreResponse,
  /** @param {!proto.pb.KeystoreRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.KeystoreResponse.deserializeBinary
);


/**
 * @param {!proto.pb.KeystoreRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.KeystoreResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.KeystoreResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.KeystoreAPIClient.prototype.keystoreList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.KeystoreAPI/KeystoreList',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_KeystoreList,
      callback);
};


/**
 * @param {!proto.pb.KeystoreRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.KeystoreResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.KeystoreAPIPromiseClient.prototype.keystoreList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.KeystoreAPI/KeystoreList',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_KeystoreList);
};


module.exports = proto.pb;

