# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pubsub.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import util_pb2 as util__pb2
from github.com.gogo.protobuf.gogoproto import gogo_pb2 as github_dot_com_dot_gogo_dot_protobuf_dot_gogoproto_dot_gogo__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='pubsub.proto',
  package='pb',
  syntax='proto3',
  serialized_options=_b('\360\341\036\001\250\342\036\001\340\341\036\001\330\341\036\000\200\342\036\001\370\341\036\001\270\342\036\001\310\342\036\001\340\342\036\001\320\342\036\001'),
  serialized_pb=_b('\n\x0cpubsub.proto\x12\x02pb\x1a\nutil.proto\x1a-github.com/gogo/protobuf/gogoproto/gogo.proto\"\"\n\x10ListPeersRequest\x12\x0e\n\x06topics\x18\x01 \x03(\t\"e\n\x11ListPeersResponse\x12)\n\x05peers\x18\x01 \x03(\x0b\x32\x1a.pb.ListPeersResponse.Peer\x1a%\n\x04Peer\x12\r\n\x05topic\x18\x01 \x01(\t\x12\x0e\n\x06peerID\x18\x02 \x01(\t\"F\n\x14PubSubPublishRequest\x12\r\n\x05topic\x18\x01 \x01(\t\x12\x0c\n\x04\x64\x61ta\x18\x02 \x01(\x0c\x12\x11\n\tadvertise\x18\x03 \x01(\x08\"9\n\x16PubSubSubscribeRequest\x12\r\n\x05topic\x18\x01 \x01(\t\x12\x10\n\x08\x64iscover\x18\x02 \x01(\x08\"\x1f\n\x0eTopicsResponse\x12\r\n\x05names\x18\x01 \x03(\t\"t\n\x15PubSubMessageResponse\x12\x0c\n\x04\x66rom\x18\x01 \x01(\x0c\x12\x0c\n\x04\x64\x61ta\x18\x02 \x01(\x0c\x12\r\n\x05seqno\x18\x03 \x01(\x0c\x12\x10\n\x08topicIDs\x18\x04 \x03(\t\x12\x11\n\tsignature\x18\x05 \x01(\x0c\x12\x0b\n\x03key\x18\x06 \x01(\x0c\x32\x89\x02\n\tPubSubAPI\x12\x32\n\x0fPubSubGetTopics\x12\t.pb.Empty\x1a\x12.pb.TopicsResponse\"\x00\x12@\n\x0fPubSubListPeers\x12\x14.pb.ListPeersRequest\x1a\x15.pb.ListPeersResponse\"\x00\x12L\n\x0fPubSubSubscribe\x12\x1a.pb.PubSubSubscribeRequest\x1a\x19.pb.PubSubMessageResponse\"\x00\x30\x01\x12\x38\n\rPubSubPublish\x12\x18.pb.PubSubPublishRequest\x1a\t.pb.Empty\"\x00(\x01\x42(\xf0\xe1\x1e\x01\xa8\xe2\x1e\x01\xe0\xe1\x1e\x01\xd8\xe1\x1e\x00\x80\xe2\x1e\x01\xf8\xe1\x1e\x01\xb8\xe2\x1e\x01\xc8\xe2\x1e\x01\xe0\xe2\x1e\x01\xd0\xe2\x1e\x01\x62\x06proto3')
  ,
  dependencies=[util__pb2.DESCRIPTOR,github_dot_com_dot_gogo_dot_protobuf_dot_gogoproto_dot_gogo__pb2.DESCRIPTOR,])




_LISTPEERSREQUEST = _descriptor.Descriptor(
  name='ListPeersRequest',
  full_name='pb.ListPeersRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='topics', full_name='pb.ListPeersRequest.topics', index=0,
      number=1, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=79,
  serialized_end=113,
)


_LISTPEERSRESPONSE_PEER = _descriptor.Descriptor(
  name='Peer',
  full_name='pb.ListPeersResponse.Peer',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='topic', full_name='pb.ListPeersResponse.Peer.topic', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='peerID', full_name='pb.ListPeersResponse.Peer.peerID', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=179,
  serialized_end=216,
)

_LISTPEERSRESPONSE = _descriptor.Descriptor(
  name='ListPeersResponse',
  full_name='pb.ListPeersResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='peers', full_name='pb.ListPeersResponse.peers', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_LISTPEERSRESPONSE_PEER, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=115,
  serialized_end=216,
)


_PUBSUBPUBLISHREQUEST = _descriptor.Descriptor(
  name='PubSubPublishRequest',
  full_name='pb.PubSubPublishRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='topic', full_name='pb.PubSubPublishRequest.topic', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='data', full_name='pb.PubSubPublishRequest.data', index=1,
      number=2, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='advertise', full_name='pb.PubSubPublishRequest.advertise', index=2,
      number=3, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=218,
  serialized_end=288,
)


_PUBSUBSUBSCRIBEREQUEST = _descriptor.Descriptor(
  name='PubSubSubscribeRequest',
  full_name='pb.PubSubSubscribeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='topic', full_name='pb.PubSubSubscribeRequest.topic', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='discover', full_name='pb.PubSubSubscribeRequest.discover', index=1,
      number=2, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=290,
  serialized_end=347,
)


_TOPICSRESPONSE = _descriptor.Descriptor(
  name='TopicsResponse',
  full_name='pb.TopicsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='names', full_name='pb.TopicsResponse.names', index=0,
      number=1, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=349,
  serialized_end=380,
)


_PUBSUBMESSAGERESPONSE = _descriptor.Descriptor(
  name='PubSubMessageResponse',
  full_name='pb.PubSubMessageResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='from', full_name='pb.PubSubMessageResponse.from', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='data', full_name='pb.PubSubMessageResponse.data', index=1,
      number=2, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='seqno', full_name='pb.PubSubMessageResponse.seqno', index=2,
      number=3, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='topicIDs', full_name='pb.PubSubMessageResponse.topicIDs', index=3,
      number=4, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='signature', full_name='pb.PubSubMessageResponse.signature', index=4,
      number=5, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='key', full_name='pb.PubSubMessageResponse.key', index=5,
      number=6, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=382,
  serialized_end=498,
)

_LISTPEERSRESPONSE_PEER.containing_type = _LISTPEERSRESPONSE
_LISTPEERSRESPONSE.fields_by_name['peers'].message_type = _LISTPEERSRESPONSE_PEER
DESCRIPTOR.message_types_by_name['ListPeersRequest'] = _LISTPEERSREQUEST
DESCRIPTOR.message_types_by_name['ListPeersResponse'] = _LISTPEERSRESPONSE
DESCRIPTOR.message_types_by_name['PubSubPublishRequest'] = _PUBSUBPUBLISHREQUEST
DESCRIPTOR.message_types_by_name['PubSubSubscribeRequest'] = _PUBSUBSUBSCRIBEREQUEST
DESCRIPTOR.message_types_by_name['TopicsResponse'] = _TOPICSRESPONSE
DESCRIPTOR.message_types_by_name['PubSubMessageResponse'] = _PUBSUBMESSAGERESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListPeersRequest = _reflection.GeneratedProtocolMessageType('ListPeersRequest', (_message.Message,), {
  'DESCRIPTOR' : _LISTPEERSREQUEST,
  '__module__' : 'pubsub_pb2'
  # @@protoc_insertion_point(class_scope:pb.ListPeersRequest)
  })
_sym_db.RegisterMessage(ListPeersRequest)

ListPeersResponse = _reflection.GeneratedProtocolMessageType('ListPeersResponse', (_message.Message,), {

  'Peer' : _reflection.GeneratedProtocolMessageType('Peer', (_message.Message,), {
    'DESCRIPTOR' : _LISTPEERSRESPONSE_PEER,
    '__module__' : 'pubsub_pb2'
    # @@protoc_insertion_point(class_scope:pb.ListPeersResponse.Peer)
    })
  ,
  'DESCRIPTOR' : _LISTPEERSRESPONSE,
  '__module__' : 'pubsub_pb2'
  # @@protoc_insertion_point(class_scope:pb.ListPeersResponse)
  })
_sym_db.RegisterMessage(ListPeersResponse)
_sym_db.RegisterMessage(ListPeersResponse.Peer)

PubSubPublishRequest = _reflection.GeneratedProtocolMessageType('PubSubPublishRequest', (_message.Message,), {
  'DESCRIPTOR' : _PUBSUBPUBLISHREQUEST,
  '__module__' : 'pubsub_pb2'
  # @@protoc_insertion_point(class_scope:pb.PubSubPublishRequest)
  })
_sym_db.RegisterMessage(PubSubPublishRequest)

PubSubSubscribeRequest = _reflection.GeneratedProtocolMessageType('PubSubSubscribeRequest', (_message.Message,), {
  'DESCRIPTOR' : _PUBSUBSUBSCRIBEREQUEST,
  '__module__' : 'pubsub_pb2'
  # @@protoc_insertion_point(class_scope:pb.PubSubSubscribeRequest)
  })
_sym_db.RegisterMessage(PubSubSubscribeRequest)

TopicsResponse = _reflection.GeneratedProtocolMessageType('TopicsResponse', (_message.Message,), {
  'DESCRIPTOR' : _TOPICSRESPONSE,
  '__module__' : 'pubsub_pb2'
  # @@protoc_insertion_point(class_scope:pb.TopicsResponse)
  })
_sym_db.RegisterMessage(TopicsResponse)

PubSubMessageResponse = _reflection.GeneratedProtocolMessageType('PubSubMessageResponse', (_message.Message,), {
  'DESCRIPTOR' : _PUBSUBMESSAGERESPONSE,
  '__module__' : 'pubsub_pb2'
  # @@protoc_insertion_point(class_scope:pb.PubSubMessageResponse)
  })
_sym_db.RegisterMessage(PubSubMessageResponse)


DESCRIPTOR._options = None

_PUBSUBAPI = _descriptor.ServiceDescriptor(
  name='PubSubAPI',
  full_name='pb.PubSubAPI',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=501,
  serialized_end=766,
  methods=[
  _descriptor.MethodDescriptor(
    name='PubSubGetTopics',
    full_name='pb.PubSubAPI.PubSubGetTopics',
    index=0,
    containing_service=None,
    input_type=util__pb2._EMPTY,
    output_type=_TOPICSRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='PubSubListPeers',
    full_name='pb.PubSubAPI.PubSubListPeers',
    index=1,
    containing_service=None,
    input_type=_LISTPEERSREQUEST,
    output_type=_LISTPEERSRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='PubSubSubscribe',
    full_name='pb.PubSubAPI.PubSubSubscribe',
    index=2,
    containing_service=None,
    input_type=_PUBSUBSUBSCRIBEREQUEST,
    output_type=_PUBSUBMESSAGERESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='PubSubPublish',
    full_name='pb.PubSubAPI.PubSubPublish',
    index=3,
    containing_service=None,
    input_type=_PUBSUBPUBLISHREQUEST,
    output_type=util__pb2._EMPTY,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_PUBSUBAPI)

DESCRIPTOR.services_by_name['PubSubAPI'] = _PUBSUBAPI

# @@protoc_insertion_point(module_scope)
