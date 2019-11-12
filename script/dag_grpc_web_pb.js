/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


const proto = {};
proto.pb = require('./dag_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.DagAPIClient =
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
proto.pb.DagAPIPromiseClient =
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
 *   !proto.pb.DagPutRequest,
 *   !proto.pb.DagPutResponse>}
 */
const methodInfo_DagAPI_DagPut = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.DagPutResponse,
  /** @param {!proto.pb.DagPutRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.DagPutResponse.deserializeBinary
);


/**
 * @param {!proto.pb.DagPutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.DagPutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.DagPutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.DagAPIClient.prototype.dagPut =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.DagAPI/DagPut',
      request,
      metadata || {},
      methodInfo_DagAPI_DagPut,
      callback);
};


/**
 * @param {!proto.pb.DagPutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.DagPutResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.DagAPIPromiseClient.prototype.dagPut =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.DagAPI/DagPut',
      request,
      metadata || {},
      methodInfo_DagAPI_DagPut);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.DagGetRequest,
 *   !proto.pb.DagGetResponse>}
 */
const methodInfo_DagAPI_DagGet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.DagGetResponse,
  /** @param {!proto.pb.DagGetRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.DagGetResponse.deserializeBinary
);


/**
 * @param {!proto.pb.DagGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.DagGetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.DagGetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.DagAPIClient.prototype.dagGet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.DagAPI/DagGet',
      request,
      metadata || {},
      methodInfo_DagAPI_DagGet,
      callback);
};


/**
 * @param {!proto.pb.DagGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.DagGetResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.DagAPIPromiseClient.prototype.dagGet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.DagAPI/DagGet',
      request,
      metadata || {},
      methodInfo_DagAPI_DagGet);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.NewIPLDNodeRequest,
 *   !proto.pb.DagPutResponse>}
 */
const methodInfo_DagAPI_NewIPLDNode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.DagPutResponse,
  /** @param {!proto.pb.NewIPLDNodeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.DagPutResponse.deserializeBinary
);


/**
 * @param {!proto.pb.NewIPLDNodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.DagPutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.DagPutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.DagAPIClient.prototype.newIPLDNode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.DagAPI/NewIPLDNode',
      request,
      metadata || {},
      methodInfo_DagAPI_NewIPLDNode,
      callback);
};


/**
 * @param {!proto.pb.NewIPLDNodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.DagPutResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.DagAPIPromiseClient.prototype.newIPLDNode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.DagAPI/NewIPLDNode',
      request,
      metadata || {},
      methodInfo_DagAPI_NewIPLDNode);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.AddLinksRequest,
 *   !proto.pb.DagPutResponse>}
 */
const methodInfo_DagAPI_AddLinksToNode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.DagPutResponse,
  /** @param {!proto.pb.AddLinksRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.DagPutResponse.deserializeBinary
);


/**
 * @param {!proto.pb.AddLinksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.DagPutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.DagPutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.DagAPIClient.prototype.addLinksToNode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.DagAPI/AddLinksToNode',
      request,
      metadata || {},
      methodInfo_DagAPI_AddLinksToNode,
      callback);
};


/**
 * @param {!proto.pb.AddLinksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.DagPutResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.DagAPIPromiseClient.prototype.addLinksToNode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.DagAPI/AddLinksToNode',
      request,
      metadata || {},
      methodInfo_DagAPI_AddLinksToNode);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.GetLinksRequest,
 *   !proto.pb.GetLinksResponse>}
 */
const methodInfo_DagAPI_GetLinks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.GetLinksResponse,
  /** @param {!proto.pb.GetLinksRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.GetLinksResponse.deserializeBinary
);


/**
 * @param {!proto.pb.GetLinksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.GetLinksResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.GetLinksResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.DagAPIClient.prototype.getLinks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.DagAPI/GetLinks',
      request,
      metadata || {},
      methodInfo_DagAPI_GetLinks,
      callback);
};


/**
 * @param {!proto.pb.GetLinksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.GetLinksResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.DagAPIPromiseClient.prototype.getLinks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.DagAPI/GetLinks',
      request,
      metadata || {},
      methodInfo_DagAPI_GetLinks);
};


module.exports = proto.pb;

