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
proto.pb = require('./node_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.NodeAPIClient =
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
proto.pb.NodeAPIPromiseClient =
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
 *   !proto.pb.GetPeersResponse>}
 */
const methodInfo_NodeAPI_GetPeers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.GetPeersResponse,
  /** @param {!proto.pb.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.GetPeersResponse.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.GetPeersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.GetPeersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.NodeAPIClient.prototype.getPeers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.NodeAPI/GetPeers',
      request,
      metadata || {},
      methodInfo_NodeAPI_GetPeers,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.GetPeersResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.NodeAPIPromiseClient.prototype.getPeers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.NodeAPI/GetPeers',
      request,
      metadata || {},
      methodInfo_NodeAPI_GetPeers);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.ConnectRequest,
 *   !proto.pb.Empty>}
 */
const methodInfo_NodeAPI_Connect = new grpc.web.AbstractClientBase.MethodInfo(
  util_pb.Empty,
  /** @param {!proto.pb.ConnectRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  util_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.ConnectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.NodeAPIClient.prototype.connect =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.NodeAPI/Connect',
      request,
      metadata || {},
      methodInfo_NodeAPI_Connect,
      callback);
};


/**
 * @param {!proto.pb.ConnectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     A native promise that resolves to the response
 */
proto.pb.NodeAPIPromiseClient.prototype.connect =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.NodeAPI/Connect',
      request,
      metadata || {},
      methodInfo_NodeAPI_Connect);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.DisconnectRequest,
 *   !proto.pb.DisconnectResponse>}
 */
const methodInfo_NodeAPI_Disconnect = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.DisconnectResponse,
  /** @param {!proto.pb.DisconnectRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.DisconnectResponse.deserializeBinary
);


/**
 * @param {!proto.pb.DisconnectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.DisconnectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.DisconnectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.NodeAPIClient.prototype.disconnect =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.NodeAPI/Disconnect',
      request,
      metadata || {},
      methodInfo_NodeAPI_Disconnect,
      callback);
};


/**
 * @param {!proto.pb.DisconnectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.DisconnectResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.NodeAPIPromiseClient.prototype.disconnect =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.NodeAPI/Disconnect',
      request,
      metadata || {},
      methodInfo_NodeAPI_Disconnect);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.IsConnectedRequest,
 *   !proto.pb.IsConnectedResponse>}
 */
const methodInfo_NodeAPI_IsConnected = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.IsConnectedResponse,
  /** @param {!proto.pb.IsConnectedRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.IsConnectedResponse.deserializeBinary
);


/**
 * @param {!proto.pb.IsConnectedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.IsConnectedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.IsConnectedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.NodeAPIClient.prototype.isConnected =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.NodeAPI/IsConnected',
      request,
      metadata || {},
      methodInfo_NodeAPI_IsConnected,
      callback);
};


/**
 * @param {!proto.pb.IsConnectedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.IsConnectedResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.NodeAPIPromiseClient.prototype.isConnected =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.NodeAPI/IsConnected',
      request,
      metadata || {},
      methodInfo_NodeAPI_IsConnected);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.EnableExtrasRequest,
 *   !proto.pb.Empty>}
 */
const methodInfo_NodeAPI_EnableExtras = new grpc.web.AbstractClientBase.MethodInfo(
  util_pb.Empty,
  /** @param {!proto.pb.EnableExtrasRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  util_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.EnableExtrasRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.NodeAPIClient.prototype.enableExtras =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.NodeAPI/EnableExtras',
      request,
      metadata || {},
      methodInfo_NodeAPI_EnableExtras,
      callback);
};


/**
 * @param {!proto.pb.EnableExtrasRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     A native promise that resolves to the response
 */
proto.pb.NodeAPIPromiseClient.prototype.enableExtras =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.NodeAPI/EnableExtras',
      request,
      metadata || {},
      methodInfo_NodeAPI_EnableExtras);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.DisableExtrasRequest,
 *   !proto.pb.Empty>}
 */
const methodInfo_NodeAPI_DisableExtras = new grpc.web.AbstractClientBase.MethodInfo(
  util_pb.Empty,
  /** @param {!proto.pb.DisableExtrasRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  util_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.DisableExtrasRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.NodeAPIClient.prototype.disableExtras =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.NodeAPI/DisableExtras',
      request,
      metadata || {},
      methodInfo_NodeAPI_DisableExtras,
      callback);
};


/**
 * @param {!proto.pb.DisableExtrasRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     A native promise that resolves to the response
 */
proto.pb.NodeAPIPromiseClient.prototype.disableExtras =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.NodeAPI/DisableExtras',
      request,
      metadata || {},
      methodInfo_NodeAPI_DisableExtras);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.P2PRequest,
 *   !proto.pb.P2PResponse>}
 */
const methodInfo_NodeAPI_P2P = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.P2PResponse,
  /** @param {!proto.pb.P2PRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.P2PResponse.deserializeBinary
);


/**
 * @param {!proto.pb.P2PRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.P2PResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.P2PResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.NodeAPIClient.prototype.p2P =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.NodeAPI/P2P',
      request,
      metadata || {},
      methodInfo_NodeAPI_P2P,
      callback);
};


/**
 * @param {!proto.pb.P2PRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.P2PResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.NodeAPIPromiseClient.prototype.p2P =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.NodeAPI/P2P',
      request,
      metadata || {},
      methodInfo_NodeAPI_P2P);
};


module.exports = proto.pb;

