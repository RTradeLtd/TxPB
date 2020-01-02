// source: pubsub.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.pb.PSREQTYPE', null, global);
goog.exportSymbol('proto.pb.PubSubMessage', null, global);
goog.exportSymbol('proto.pb.PubSubPeer', null, global);
goog.exportSymbol('proto.pb.PubSubRequest', null, global);
goog.exportSymbol('proto.pb.PubSubResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.PubSubRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.PubSubRequest.repeatedFields_, null);
};
goog.inherits(proto.pb.PubSubRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.PubSubRequest.displayName = 'proto.pb.PubSubRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.PubSubResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.PubSubResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.PubSubResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.PubSubResponse.displayName = 'proto.pb.PubSubResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.PubSubMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.PubSubMessage.repeatedFields_, null);
};
goog.inherits(proto.pb.PubSubMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.PubSubMessage.displayName = 'proto.pb.PubSubMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.PubSubPeer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.PubSubPeer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.PubSubPeer.displayName = 'proto.pb.PubSubPeer';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.PubSubRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.PubSubRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.PubSubRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.PubSubRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.PubSubRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requesttype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    topicsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.PubSubRequest}
 */
proto.pb.PubSubRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.PubSubRequest;
  return proto.pb.PubSubRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.PubSubRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.PubSubRequest}
 */
proto.pb.PubSubRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.pb.PSREQTYPE} */ (reader.readEnum());
      msg.setRequesttype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTopics(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.PubSubRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.PubSubRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.PubSubRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.PubSubRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequesttype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTopicsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional PSREQTYPE requestType = 1;
 * @return {!proto.pb.PSREQTYPE}
 */
proto.pb.PubSubRequest.prototype.getRequesttype = function() {
  return /** @type {!proto.pb.PSREQTYPE} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.pb.PSREQTYPE} value
 * @return {!proto.pb.PubSubRequest} returns this
 */
proto.pb.PubSubRequest.prototype.setRequesttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated string topics = 2;
 * @return {!Array<string>}
 */
proto.pb.PubSubRequest.prototype.getTopicsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pb.PubSubRequest} returns this
 */
proto.pb.PubSubRequest.prototype.setTopicsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pb.PubSubRequest} returns this
 */
proto.pb.PubSubRequest.prototype.addTopics = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.PubSubRequest} returns this
 */
proto.pb.PubSubRequest.prototype.clearTopicsList = function() {
  return this.setTopicsList([]);
};


/**
 * optional bytes data = 3;
 * @return {!(string|Uint8Array)}
 */
proto.pb.PubSubRequest.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes data = 3;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.pb.PubSubRequest.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.pb.PubSubRequest.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pb.PubSubRequest} returns this
 */
proto.pb.PubSubRequest.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.PubSubResponse.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.PubSubResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.PubSubResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.PubSubResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.PubSubResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requesttype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    proto.pb.PubSubMessage.toObject, includeInstance),
    topicsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    peersList: jspb.Message.toObjectList(msg.getPeersList(),
    proto.pb.PubSubPeer.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.PubSubResponse}
 */
proto.pb.PubSubResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.PubSubResponse;
  return proto.pb.PubSubResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.PubSubResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.PubSubResponse}
 */
proto.pb.PubSubResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.pb.PSREQTYPE} */ (reader.readEnum());
      msg.setRequesttype(value);
      break;
    case 2:
      var value = new proto.pb.PubSubMessage;
      reader.readMessage(value,proto.pb.PubSubMessage.deserializeBinaryFromReader);
      msg.addMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addTopics(value);
      break;
    case 4:
      var value = new proto.pb.PubSubPeer;
      reader.readMessage(value,proto.pb.PubSubPeer.deserializeBinaryFromReader);
      msg.addPeers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.PubSubResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.PubSubResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.PubSubResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.PubSubResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequesttype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.pb.PubSubMessage.serializeBinaryToWriter
    );
  }
  f = message.getTopicsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getPeersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.pb.PubSubPeer.serializeBinaryToWriter
    );
  }
};


/**
 * optional PSREQTYPE requestType = 1;
 * @return {!proto.pb.PSREQTYPE}
 */
proto.pb.PubSubResponse.prototype.getRequesttype = function() {
  return /** @type {!proto.pb.PSREQTYPE} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.pb.PSREQTYPE} value
 * @return {!proto.pb.PubSubResponse} returns this
 */
proto.pb.PubSubResponse.prototype.setRequesttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated PubSubMessage message = 2;
 * @return {!Array<!proto.pb.PubSubMessage>}
 */
proto.pb.PubSubResponse.prototype.getMessageList = function() {
  return /** @type{!Array<!proto.pb.PubSubMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.PubSubMessage, 2));
};


/**
 * @param {!Array<!proto.pb.PubSubMessage>} value
 * @return {!proto.pb.PubSubResponse} returns this
*/
proto.pb.PubSubResponse.prototype.setMessageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.pb.PubSubMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.PubSubMessage}
 */
proto.pb.PubSubResponse.prototype.addMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.pb.PubSubMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.PubSubResponse} returns this
 */
proto.pb.PubSubResponse.prototype.clearMessageList = function() {
  return this.setMessageList([]);
};


/**
 * repeated string topics = 3;
 * @return {!Array<string>}
 */
proto.pb.PubSubResponse.prototype.getTopicsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pb.PubSubResponse} returns this
 */
proto.pb.PubSubResponse.prototype.setTopicsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pb.PubSubResponse} returns this
 */
proto.pb.PubSubResponse.prototype.addTopics = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.PubSubResponse} returns this
 */
proto.pb.PubSubResponse.prototype.clearTopicsList = function() {
  return this.setTopicsList([]);
};


/**
 * repeated PubSubPeer peers = 4;
 * @return {!Array<!proto.pb.PubSubPeer>}
 */
proto.pb.PubSubResponse.prototype.getPeersList = function() {
  return /** @type{!Array<!proto.pb.PubSubPeer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.PubSubPeer, 4));
};


/**
 * @param {!Array<!proto.pb.PubSubPeer>} value
 * @return {!proto.pb.PubSubResponse} returns this
*/
proto.pb.PubSubResponse.prototype.setPeersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.pb.PubSubPeer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.PubSubPeer}
 */
proto.pb.PubSubResponse.prototype.addPeers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.pb.PubSubPeer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.PubSubResponse} returns this
 */
proto.pb.PubSubResponse.prototype.clearPeersList = function() {
  return this.setPeersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.PubSubMessage.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.PubSubMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.PubSubMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.PubSubMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.PubSubMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: msg.getFrom_asB64(),
    data: msg.getData_asB64(),
    seqno: msg.getSeqno_asB64(),
    topicidsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    signature: msg.getSignature_asB64(),
    key: msg.getKey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.PubSubMessage}
 */
proto.pb.PubSubMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.PubSubMessage;
  return proto.pb.PubSubMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.PubSubMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.PubSubMessage}
 */
proto.pb.PubSubMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFrom(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSeqno(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTopicids(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.PubSubMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.PubSubMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.PubSubMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.PubSubMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSeqno_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getTopicidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
};


/**
 * optional bytes from = 1;
 * @return {!(string|Uint8Array)}
 */
proto.pb.PubSubMessage.prototype.getFrom = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes from = 1;
 * This is a type-conversion wrapper around `getFrom()`
 * @return {string}
 */
proto.pb.PubSubMessage.prototype.getFrom_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFrom()));
};


/**
 * optional bytes from = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFrom()`
 * @return {!Uint8Array}
 */
proto.pb.PubSubMessage.prototype.getFrom_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFrom()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pb.PubSubMessage} returns this
 */
proto.pb.PubSubMessage.prototype.setFrom = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.pb.PubSubMessage.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.pb.PubSubMessage.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.pb.PubSubMessage.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pb.PubSubMessage} returns this
 */
proto.pb.PubSubMessage.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes seqno = 3;
 * @return {!(string|Uint8Array)}
 */
proto.pb.PubSubMessage.prototype.getSeqno = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes seqno = 3;
 * This is a type-conversion wrapper around `getSeqno()`
 * @return {string}
 */
proto.pb.PubSubMessage.prototype.getSeqno_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSeqno()));
};


/**
 * optional bytes seqno = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSeqno()`
 * @return {!Uint8Array}
 */
proto.pb.PubSubMessage.prototype.getSeqno_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSeqno()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pb.PubSubMessage} returns this
 */
proto.pb.PubSubMessage.prototype.setSeqno = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * repeated string topicIDs = 4;
 * @return {!Array<string>}
 */
proto.pb.PubSubMessage.prototype.getTopicidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pb.PubSubMessage} returns this
 */
proto.pb.PubSubMessage.prototype.setTopicidsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pb.PubSubMessage} returns this
 */
proto.pb.PubSubMessage.prototype.addTopicids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.PubSubMessage} returns this
 */
proto.pb.PubSubMessage.prototype.clearTopicidsList = function() {
  return this.setTopicidsList([]);
};


/**
 * optional bytes signature = 5;
 * @return {!(string|Uint8Array)}
 */
proto.pb.PubSubMessage.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes signature = 5;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.pb.PubSubMessage.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.pb.PubSubMessage.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pb.PubSubMessage} returns this
 */
proto.pb.PubSubMessage.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional bytes key = 6;
 * @return {!(string|Uint8Array)}
 */
proto.pb.PubSubMessage.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes key = 6;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.pb.PubSubMessage.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.pb.PubSubMessage.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pb.PubSubMessage} returns this
 */
proto.pb.PubSubMessage.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.PubSubPeer.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.PubSubPeer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.PubSubPeer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.PubSubPeer.toObject = function(includeInstance, msg) {
  var f, obj = {
    topic: jspb.Message.getFieldWithDefault(msg, 1, ""),
    peerid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.PubSubPeer}
 */
proto.pb.PubSubPeer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.PubSubPeer;
  return proto.pb.PubSubPeer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.PubSubPeer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.PubSubPeer}
 */
proto.pb.PubSubPeer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.PubSubPeer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.PubSubPeer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.PubSubPeer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.PubSubPeer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string topic = 1;
 * @return {string}
 */
proto.pb.PubSubPeer.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PubSubPeer} returns this
 */
proto.pb.PubSubPeer.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string peerID = 2;
 * @return {string}
 */
proto.pb.PubSubPeer.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PubSubPeer} returns this
 */
proto.pb.PubSubPeer.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.pb.PSREQTYPE = {
  PS_GET_TOPICS: 0,
  PS_LIST_PEERS: 1,
  PS_SUBSCRIBE: 2,
  PS_PUBLISH: 3
};

goog.object.extend(exports, proto.pb);
