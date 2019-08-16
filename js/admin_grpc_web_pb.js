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


module.exports = proto.pb;

