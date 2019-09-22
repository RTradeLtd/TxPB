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
const methodInfo_PubSubAPI_PubSubGetTopics = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.pb.PubSubAPIClient.prototype.pubSubGetTopics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.PubSubAPI/PubSubGetTopics',
      request,
      metadata || {},
      methodInfo_PubSubAPI_PubSubGetTopics,
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
proto.pb.PubSubAPIPromiseClient.prototype.pubSubGetTopics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.PubSubAPI/PubSubGetTopics',
      request,
      metadata || {},
      methodInfo_PubSubAPI_PubSubGetTopics);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.PubSubListPeersRequest,
 *   !proto.pb.PubSubListPeersResponse>}
 */
const methodInfo_PubSubAPI_PubSubListPeers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.PubSubListPeersResponse,
  /** @param {!proto.pb.PubSubListPeersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.PubSubListPeersResponse.deserializeBinary
);


/**
 * @param {!proto.pb.PubSubListPeersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.PubSubListPeersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.PubSubListPeersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.PubSubAPIClient.prototype.pubSubListPeers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.PubSubAPI/PubSubListPeers',
      request,
      metadata || {},
      methodInfo_PubSubAPI_PubSubListPeers,
      callback);
};


/**
 * @param {!proto.pb.PubSubListPeersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.PubSubListPeersResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.PubSubAPIPromiseClient.prototype.pubSubListPeers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.PubSubAPI/PubSubListPeers',
      request,
      metadata || {},
      methodInfo_PubSubAPI_PubSubListPeers);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.PubSubSubscribeRequest,
 *   !proto.pb.PubSubMessageResponse>}
 */
const methodInfo_PubSubAPI_PubSubSubscribe = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.pb.PubSubAPIClient.prototype.pubSubSubscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.PubSubAPI/PubSubSubscribe',
      request,
      metadata || {},
      methodInfo_PubSubAPI_PubSubSubscribe);
};


/**
 * @param {!proto.pb.PubSubSubscribeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pb.PubSubMessageResponse>}
 *     The XHR Node Readable Stream
 */
proto.pb.PubSubAPIPromiseClient.prototype.pubSubSubscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.PubSubAPI/PubSubSubscribe',
      request,
      metadata || {},
      methodInfo_PubSubAPI_PubSubSubscribe);
};


module.exports = proto.pb;

