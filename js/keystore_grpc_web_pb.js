/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var github_com_gogo_protobuf_gogoproto_gogo_pb = require('./github.com/gogo/protobuf/gogoproto/gogo_pb.js')
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
const methodInfo_KeystoreAPI_Has = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.pb.KeystoreAPIClient.prototype.has =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.KeystoreAPI/Has',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_Has,
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
proto.pb.KeystoreAPIPromiseClient.prototype.has =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.KeystoreAPI/Has',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_Has);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.KeystoreRequest,
 *   !proto.pb.KeystoreResponse>}
 */
const methodInfo_KeystoreAPI_Get = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.pb.KeystoreAPIClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.KeystoreAPI/Get',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_Get,
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
proto.pb.KeystoreAPIPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.KeystoreAPI/Get',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_Get);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.KeystoreRequest,
 *   !proto.pb.KeystoreResponse>}
 */
const methodInfo_KeystoreAPI_Put = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.pb.KeystoreAPIClient.prototype.put =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.KeystoreAPI/Put',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_Put,
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
proto.pb.KeystoreAPIPromiseClient.prototype.put =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.KeystoreAPI/Put',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_Put);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.KeystoreRequest,
 *   !proto.pb.KeystoreResponse>}
 */
const methodInfo_KeystoreAPI_Delete = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.pb.KeystoreAPIClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.KeystoreAPI/Delete',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_Delete,
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
proto.pb.KeystoreAPIPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.KeystoreAPI/Delete',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_Delete);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.KeystoreRequest,
 *   !proto.pb.KeystoreResponse>}
 */
const methodInfo_KeystoreAPI_List = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.pb.KeystoreAPIClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.KeystoreAPI/List',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_List,
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
proto.pb.KeystoreAPIPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.KeystoreAPI/List',
      request,
      metadata || {},
      methodInfo_KeystoreAPI_List);
};


module.exports = proto.pb;

