# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: node.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import util_pb2 as util__pb2
from github.com.gogo.protobuf.gogoproto import gogo_pb2 as github_dot_com_dot_gogo_dot_protobuf_dot_gogoproto_dot_gogo__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='node.proto',
  package='pb',
  syntax='proto3',
  serialized_options=_b('\360\341\036\001\250\342\036\001\340\341\036\001\330\341\036\000\200\342\036\001\370\341\036\001\270\342\036\001\310\342\036\001\340\342\036\001\320\342\036\001'),
  serialized_pb=_b('\n\nnode.proto\x12\x02pb\x1a\nutil.proto\x1a-github.com/gogo/protobuf/gogoproto/gogo.proto\"\xaa\x01\n\nP2PRequest\x12#\n\x0brequestType\x18\x01 \x01(\x0e\x32\x0e.pb.P2PREQTYPE\x12\x0b\n\x03\x61ll\x18\x02 \x01(\x08\x12\x0f\n\x07verbose\x18\x03 \x01(\x08\x12\x14\n\x0cprotocolName\x18\x04 \x01(\t\x12\x15\n\rlistenAddress\x18\x05 \x01(\t\x12\x15\n\rtargetAddress\x18\x06 \x01(\t\x12\x15\n\rremoteAddress\x18\x07 \x01(\t\"V\n\x0bP2PResponse\x12#\n\x0brequestType\x18\x01 \x01(\x0e\x32\x0e.pb.P2PREQTYPE\x12\r\n\x05names\x18\x02 \x03(\t\x12\x13\n\x0b\x63onnsClosed\x18\x03 \x01(\x05\"#\n\x10GetPeersResponse\x12\x0f\n\x07peerIDs\x18\x01 \x03(\t\"$\n\x0e\x43onnectRequest\x12\x12\n\nmultiAddrs\x18\x01 \x03(\t\"%\n\x12IsConnectedRequest\x12\x0f\n\x07peerIDs\x18\x01 \x03(\t\"\x82\x01\n\x13IsConnectedResponse\x12\x39\n\tconnected\x18\x01 \x03(\x0b\x32&.pb.IsConnectedResponse.ConnectedEntry\x1a\x30\n\x0e\x43onnectedEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x08:\x02\x38\x01\"$\n\x11\x44isconnectRequest\x12\x0f\n\x07peerIDs\x18\x01 \x03(\t\"\xd4\x01\n\x12\x44isconnectResponse\x12\x32\n\x06status\x18\x01 \x03(\x0b\x32\".pb.DisconnectResponse.StatusEntry\x1aS\n\x0bStatusEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x33\n\x05value\x18\x02 \x01(\x0b\x32$.pb.DisconnectResponse.StatusMessage:\x02\x38\x01\x1a\x35\n\rStatusMessage\x12\x14\n\x0c\x64isconnected\x18\x01 \x01(\x08\x12\x0e\n\x06reason\x18\x02 \x01(\t\"<\n\x13\x45nableExtrasRequest\x12%\n\rextrasFeature\x18\x01 \x01(\x0e\x32\x0e.pb.EXTRASTYPE\"=\n\x14\x44isableExtrasRequest\x12%\n\rextrasFeature\x18\x01 \x01(\x0e\x32\x0e.pb.EXTRASTYPE*8\n\nP2PREQTYPE\x12\t\n\x05\x43LOSE\x10\x00\x12\x0b\n\x07\x46ORWARD\x10\x01\x12\n\n\x06LISTEN\x10\x02\x12\x06\n\x02LS\x10\x03*5\n\nEXTRASTYPE\x12\x0c\n\x08IDENTIFY\x10\x00\x12\n\n\x06PUBSUB\x10\x01\x12\r\n\tDISCOVERY\x10\x02\x32\xfd\x02\n\x07NodeAPI\x12-\n\x08GetPeers\x12\t.pb.Empty\x1a\x14.pb.GetPeersResponse\"\x00\x12*\n\x07\x43onnect\x12\x12.pb.ConnectRequest\x1a\t.pb.Empty\"\x00\x12=\n\nDisconnect\x12\x15.pb.DisconnectRequest\x1a\x16.pb.DisconnectResponse\"\x00\x12@\n\x0bIsConnected\x12\x16.pb.IsConnectedRequest\x1a\x17.pb.IsConnectedResponse\"\x00\x12\x34\n\x0c\x45nableExtras\x12\x17.pb.EnableExtrasRequest\x1a\t.pb.Empty\"\x00\x12\x36\n\rDisableExtras\x12\x18.pb.DisableExtrasRequest\x1a\t.pb.Empty\"\x00\x12(\n\x03P2P\x12\x0e.pb.P2PRequest\x1a\x0f.pb.P2PResponse\"\x00\x42(\xf0\xe1\x1e\x01\xa8\xe2\x1e\x01\xe0\xe1\x1e\x01\xd8\xe1\x1e\x00\x80\xe2\x1e\x01\xf8\xe1\x1e\x01\xb8\xe2\x1e\x01\xc8\xe2\x1e\x01\xe0\xe2\x1e\x01\xd0\xe2\x1e\x01\x62\x06proto3')
  ,
  dependencies=[util__pb2.DESCRIPTOR,github_dot_com_dot_gogo_dot_protobuf_dot_gogoproto_dot_gogo__pb2.DESCRIPTOR,])

_P2PREQTYPE = _descriptor.EnumDescriptor(
  name='P2PREQTYPE',
  full_name='pb.P2PREQTYPE',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='CLOSE', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='FORWARD', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='LISTEN', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='LS', index=3, number=3,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=963,
  serialized_end=1019,
)
_sym_db.RegisterEnumDescriptor(_P2PREQTYPE)

P2PREQTYPE = enum_type_wrapper.EnumTypeWrapper(_P2PREQTYPE)
_EXTRASTYPE = _descriptor.EnumDescriptor(
  name='EXTRASTYPE',
  full_name='pb.EXTRASTYPE',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='IDENTIFY', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='PUBSUB', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='DISCOVERY', index=2, number=2,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=1021,
  serialized_end=1074,
)
_sym_db.RegisterEnumDescriptor(_EXTRASTYPE)

EXTRASTYPE = enum_type_wrapper.EnumTypeWrapper(_EXTRASTYPE)
CLOSE = 0
FORWARD = 1
LISTEN = 2
LS = 3
IDENTIFY = 0
PUBSUB = 1
DISCOVERY = 2



_P2PREQUEST = _descriptor.Descriptor(
  name='P2PRequest',
  full_name='pb.P2PRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='requestType', full_name='pb.P2PRequest.requestType', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='all', full_name='pb.P2PRequest.all', index=1,
      number=2, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='verbose', full_name='pb.P2PRequest.verbose', index=2,
      number=3, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='protocolName', full_name='pb.P2PRequest.protocolName', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='listenAddress', full_name='pb.P2PRequest.listenAddress', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='targetAddress', full_name='pb.P2PRequest.targetAddress', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='remoteAddress', full_name='pb.P2PRequest.remoteAddress', index=6,
      number=7, type=9, cpp_type=9, label=1,
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
  serialized_start=78,
  serialized_end=248,
)


_P2PRESPONSE = _descriptor.Descriptor(
  name='P2PResponse',
  full_name='pb.P2PResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='requestType', full_name='pb.P2PResponse.requestType', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='names', full_name='pb.P2PResponse.names', index=1,
      number=2, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='connsClosed', full_name='pb.P2PResponse.connsClosed', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
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
  serialized_start=250,
  serialized_end=336,
)


_GETPEERSRESPONSE = _descriptor.Descriptor(
  name='GetPeersResponse',
  full_name='pb.GetPeersResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='peerIDs', full_name='pb.GetPeersResponse.peerIDs', index=0,
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
  serialized_start=338,
  serialized_end=373,
)


_CONNECTREQUEST = _descriptor.Descriptor(
  name='ConnectRequest',
  full_name='pb.ConnectRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='multiAddrs', full_name='pb.ConnectRequest.multiAddrs', index=0,
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
  serialized_start=375,
  serialized_end=411,
)


_ISCONNECTEDREQUEST = _descriptor.Descriptor(
  name='IsConnectedRequest',
  full_name='pb.IsConnectedRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='peerIDs', full_name='pb.IsConnectedRequest.peerIDs', index=0,
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
  serialized_start=413,
  serialized_end=450,
)


_ISCONNECTEDRESPONSE_CONNECTEDENTRY = _descriptor.Descriptor(
  name='ConnectedEntry',
  full_name='pb.IsConnectedResponse.ConnectedEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='pb.IsConnectedResponse.ConnectedEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='pb.IsConnectedResponse.ConnectedEntry.value', index=1,
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
  serialized_options=_b('8\001'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=535,
  serialized_end=583,
)

_ISCONNECTEDRESPONSE = _descriptor.Descriptor(
  name='IsConnectedResponse',
  full_name='pb.IsConnectedResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='connected', full_name='pb.IsConnectedResponse.connected', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_ISCONNECTEDRESPONSE_CONNECTEDENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=453,
  serialized_end=583,
)


_DISCONNECTREQUEST = _descriptor.Descriptor(
  name='DisconnectRequest',
  full_name='pb.DisconnectRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='peerIDs', full_name='pb.DisconnectRequest.peerIDs', index=0,
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
  serialized_start=585,
  serialized_end=621,
)


_DISCONNECTRESPONSE_STATUSENTRY = _descriptor.Descriptor(
  name='StatusEntry',
  full_name='pb.DisconnectResponse.StatusEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='pb.DisconnectResponse.StatusEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='pb.DisconnectResponse.StatusEntry.value', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('8\001'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=698,
  serialized_end=781,
)

_DISCONNECTRESPONSE_STATUSMESSAGE = _descriptor.Descriptor(
  name='StatusMessage',
  full_name='pb.DisconnectResponse.StatusMessage',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='disconnected', full_name='pb.DisconnectResponse.StatusMessage.disconnected', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='reason', full_name='pb.DisconnectResponse.StatusMessage.reason', index=1,
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
  serialized_start=783,
  serialized_end=836,
)

_DISCONNECTRESPONSE = _descriptor.Descriptor(
  name='DisconnectResponse',
  full_name='pb.DisconnectResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='status', full_name='pb.DisconnectResponse.status', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_DISCONNECTRESPONSE_STATUSENTRY, _DISCONNECTRESPONSE_STATUSMESSAGE, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=624,
  serialized_end=836,
)


_ENABLEEXTRASREQUEST = _descriptor.Descriptor(
  name='EnableExtrasRequest',
  full_name='pb.EnableExtrasRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='extrasFeature', full_name='pb.EnableExtrasRequest.extrasFeature', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
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
  serialized_start=838,
  serialized_end=898,
)


_DISABLEEXTRASREQUEST = _descriptor.Descriptor(
  name='DisableExtrasRequest',
  full_name='pb.DisableExtrasRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='extrasFeature', full_name='pb.DisableExtrasRequest.extrasFeature', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
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
  serialized_start=900,
  serialized_end=961,
)

_P2PREQUEST.fields_by_name['requestType'].enum_type = _P2PREQTYPE
_P2PRESPONSE.fields_by_name['requestType'].enum_type = _P2PREQTYPE
_ISCONNECTEDRESPONSE_CONNECTEDENTRY.containing_type = _ISCONNECTEDRESPONSE
_ISCONNECTEDRESPONSE.fields_by_name['connected'].message_type = _ISCONNECTEDRESPONSE_CONNECTEDENTRY
_DISCONNECTRESPONSE_STATUSENTRY.fields_by_name['value'].message_type = _DISCONNECTRESPONSE_STATUSMESSAGE
_DISCONNECTRESPONSE_STATUSENTRY.containing_type = _DISCONNECTRESPONSE
_DISCONNECTRESPONSE_STATUSMESSAGE.containing_type = _DISCONNECTRESPONSE
_DISCONNECTRESPONSE.fields_by_name['status'].message_type = _DISCONNECTRESPONSE_STATUSENTRY
_ENABLEEXTRASREQUEST.fields_by_name['extrasFeature'].enum_type = _EXTRASTYPE
_DISABLEEXTRASREQUEST.fields_by_name['extrasFeature'].enum_type = _EXTRASTYPE
DESCRIPTOR.message_types_by_name['P2PRequest'] = _P2PREQUEST
DESCRIPTOR.message_types_by_name['P2PResponse'] = _P2PRESPONSE
DESCRIPTOR.message_types_by_name['GetPeersResponse'] = _GETPEERSRESPONSE
DESCRIPTOR.message_types_by_name['ConnectRequest'] = _CONNECTREQUEST
DESCRIPTOR.message_types_by_name['IsConnectedRequest'] = _ISCONNECTEDREQUEST
DESCRIPTOR.message_types_by_name['IsConnectedResponse'] = _ISCONNECTEDRESPONSE
DESCRIPTOR.message_types_by_name['DisconnectRequest'] = _DISCONNECTREQUEST
DESCRIPTOR.message_types_by_name['DisconnectResponse'] = _DISCONNECTRESPONSE
DESCRIPTOR.message_types_by_name['EnableExtrasRequest'] = _ENABLEEXTRASREQUEST
DESCRIPTOR.message_types_by_name['DisableExtrasRequest'] = _DISABLEEXTRASREQUEST
DESCRIPTOR.enum_types_by_name['P2PREQTYPE'] = _P2PREQTYPE
DESCRIPTOR.enum_types_by_name['EXTRASTYPE'] = _EXTRASTYPE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

P2PRequest = _reflection.GeneratedProtocolMessageType('P2PRequest', (_message.Message,), {
  'DESCRIPTOR' : _P2PREQUEST,
  '__module__' : 'node_pb2'
  # @@protoc_insertion_point(class_scope:pb.P2PRequest)
  })
_sym_db.RegisterMessage(P2PRequest)

P2PResponse = _reflection.GeneratedProtocolMessageType('P2PResponse', (_message.Message,), {
  'DESCRIPTOR' : _P2PRESPONSE,
  '__module__' : 'node_pb2'
  # @@protoc_insertion_point(class_scope:pb.P2PResponse)
  })
_sym_db.RegisterMessage(P2PResponse)

GetPeersResponse = _reflection.GeneratedProtocolMessageType('GetPeersResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETPEERSRESPONSE,
  '__module__' : 'node_pb2'
  # @@protoc_insertion_point(class_scope:pb.GetPeersResponse)
  })
_sym_db.RegisterMessage(GetPeersResponse)

ConnectRequest = _reflection.GeneratedProtocolMessageType('ConnectRequest', (_message.Message,), {
  'DESCRIPTOR' : _CONNECTREQUEST,
  '__module__' : 'node_pb2'
  # @@protoc_insertion_point(class_scope:pb.ConnectRequest)
  })
_sym_db.RegisterMessage(ConnectRequest)

IsConnectedRequest = _reflection.GeneratedProtocolMessageType('IsConnectedRequest', (_message.Message,), {
  'DESCRIPTOR' : _ISCONNECTEDREQUEST,
  '__module__' : 'node_pb2'
  # @@protoc_insertion_point(class_scope:pb.IsConnectedRequest)
  })
_sym_db.RegisterMessage(IsConnectedRequest)

IsConnectedResponse = _reflection.GeneratedProtocolMessageType('IsConnectedResponse', (_message.Message,), {

  'ConnectedEntry' : _reflection.GeneratedProtocolMessageType('ConnectedEntry', (_message.Message,), {
    'DESCRIPTOR' : _ISCONNECTEDRESPONSE_CONNECTEDENTRY,
    '__module__' : 'node_pb2'
    # @@protoc_insertion_point(class_scope:pb.IsConnectedResponse.ConnectedEntry)
    })
  ,
  'DESCRIPTOR' : _ISCONNECTEDRESPONSE,
  '__module__' : 'node_pb2'
  # @@protoc_insertion_point(class_scope:pb.IsConnectedResponse)
  })
_sym_db.RegisterMessage(IsConnectedResponse)
_sym_db.RegisterMessage(IsConnectedResponse.ConnectedEntry)

DisconnectRequest = _reflection.GeneratedProtocolMessageType('DisconnectRequest', (_message.Message,), {
  'DESCRIPTOR' : _DISCONNECTREQUEST,
  '__module__' : 'node_pb2'
  # @@protoc_insertion_point(class_scope:pb.DisconnectRequest)
  })
_sym_db.RegisterMessage(DisconnectRequest)

DisconnectResponse = _reflection.GeneratedProtocolMessageType('DisconnectResponse', (_message.Message,), {

  'StatusEntry' : _reflection.GeneratedProtocolMessageType('StatusEntry', (_message.Message,), {
    'DESCRIPTOR' : _DISCONNECTRESPONSE_STATUSENTRY,
    '__module__' : 'node_pb2'
    # @@protoc_insertion_point(class_scope:pb.DisconnectResponse.StatusEntry)
    })
  ,

  'StatusMessage' : _reflection.GeneratedProtocolMessageType('StatusMessage', (_message.Message,), {
    'DESCRIPTOR' : _DISCONNECTRESPONSE_STATUSMESSAGE,
    '__module__' : 'node_pb2'
    # @@protoc_insertion_point(class_scope:pb.DisconnectResponse.StatusMessage)
    })
  ,
  'DESCRIPTOR' : _DISCONNECTRESPONSE,
  '__module__' : 'node_pb2'
  # @@protoc_insertion_point(class_scope:pb.DisconnectResponse)
  })
_sym_db.RegisterMessage(DisconnectResponse)
_sym_db.RegisterMessage(DisconnectResponse.StatusEntry)
_sym_db.RegisterMessage(DisconnectResponse.StatusMessage)

EnableExtrasRequest = _reflection.GeneratedProtocolMessageType('EnableExtrasRequest', (_message.Message,), {
  'DESCRIPTOR' : _ENABLEEXTRASREQUEST,
  '__module__' : 'node_pb2'
  # @@protoc_insertion_point(class_scope:pb.EnableExtrasRequest)
  })
_sym_db.RegisterMessage(EnableExtrasRequest)

DisableExtrasRequest = _reflection.GeneratedProtocolMessageType('DisableExtrasRequest', (_message.Message,), {
  'DESCRIPTOR' : _DISABLEEXTRASREQUEST,
  '__module__' : 'node_pb2'
  # @@protoc_insertion_point(class_scope:pb.DisableExtrasRequest)
  })
_sym_db.RegisterMessage(DisableExtrasRequest)


DESCRIPTOR._options = None
_ISCONNECTEDRESPONSE_CONNECTEDENTRY._options = None
_DISCONNECTRESPONSE_STATUSENTRY._options = None

_NODEAPI = _descriptor.ServiceDescriptor(
  name='NodeAPI',
  full_name='pb.NodeAPI',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=1077,
  serialized_end=1458,
  methods=[
  _descriptor.MethodDescriptor(
    name='GetPeers',
    full_name='pb.NodeAPI.GetPeers',
    index=0,
    containing_service=None,
    input_type=util__pb2._EMPTY,
    output_type=_GETPEERSRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='Connect',
    full_name='pb.NodeAPI.Connect',
    index=1,
    containing_service=None,
    input_type=_CONNECTREQUEST,
    output_type=util__pb2._EMPTY,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='Disconnect',
    full_name='pb.NodeAPI.Disconnect',
    index=2,
    containing_service=None,
    input_type=_DISCONNECTREQUEST,
    output_type=_DISCONNECTRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='IsConnected',
    full_name='pb.NodeAPI.IsConnected',
    index=3,
    containing_service=None,
    input_type=_ISCONNECTEDREQUEST,
    output_type=_ISCONNECTEDRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='EnableExtras',
    full_name='pb.NodeAPI.EnableExtras',
    index=4,
    containing_service=None,
    input_type=_ENABLEEXTRASREQUEST,
    output_type=util__pb2._EMPTY,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='DisableExtras',
    full_name='pb.NodeAPI.DisableExtras',
    index=5,
    containing_service=None,
    input_type=_DISABLEEXTRASREQUEST,
    output_type=util__pb2._EMPTY,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='P2P',
    full_name='pb.NodeAPI.P2P',
    index=6,
    containing_service=None,
    input_type=_P2PREQUEST,
    output_type=_P2PRESPONSE,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_NODEAPI)

DESCRIPTOR.services_by_name['NodeAPI'] = _NODEAPI

# @@protoc_insertion_point(module_scope)
