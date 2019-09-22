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
proto.pb = require('./pubsub_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.PubSubAPIClient =
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
proto.pb.PubSubAPIPromiseClient =
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
 *   !proto.pb.TopicsResponse>}
 */
const methodInfo_PubSubAPI_GetTopics = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.TopicsResponse,
  /** @param {!proto.pb.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.TopicsResponse.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.TopicsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.TopicsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.PubSubAPIClient.prototype.getTopics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.PubSubAPI/GetTopics',
      request,
      metadata || {},
      methodInfo_PubSubAPI_GetTopics,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.TopicsResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.PubSubAPIPromiseClient.prototype.getTopics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.PubSubAPI/GetTopics',
      request,
      metadata || {},
      methodInfo_PubSubAPI_GetTopics);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.ListPeersRequest,
 *   !proto.pb.ListPeersResponse>}
 */
const methodInfo_PubSubAPI_ListPeers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.ListPeersResponse,
  /** @param {!proto.pb.ListPeersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.ListPeersResponse.deserializeBinary
);


/**
 * @param {!proto.pb.ListPeersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.ListPeersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.ListPeersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.PubSubAPIClient.prototype.listPeers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.PubSubAPI/ListPeers',
      request,
      metadata || {},
      methodInfo_PubSubAPI_ListPeers,
      callback);
};


/**
 * @param {!proto.pb.ListPeersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.ListPeersResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.PubSubAPIPromiseClient.prototype.listPeers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.PubSubAPI/ListPeers',
      request,
      metadata || {},
      methodInfo_PubSubAPI_ListPeers);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.PubSubSubscribeRequest,
 *   !proto.pb.PubSubMessageResponse>}
 */
const methodInfo_PubSubAPI_Subscribe = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.PubSubMessageResponse,
  /** @param {!proto.pb.PubSubSubscribeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.PubSubMessageResponse.deserializeBinary
);


/**
 * @param {!proto.pb.PubSubSubscribeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pb.PubSubMessageResponse>}
 *     The XHR Node Readable Stream
 */
proto.pb.PubSubAPIClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.PubSubAPI/Subscribe',
      request,
      metadata || {},
      methodInfo_PubSubAPI_Subscribe);
};


/**
 * @param {!proto.pb.PubSubSubscribeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pb.PubSubMessageResponse>}
 *     The XHR Node Readable Stream
 */
proto.pb.PubSubAPIPromiseClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.PubSubAPI/Subscribe',
      request,
      metadata || {},
      methodInfo_PubSubAPI_Subscribe);
};


module.exports = proto.pb;

