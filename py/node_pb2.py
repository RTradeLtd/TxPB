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


DESCRIPTOR = _descriptor.FileDescriptor(
  name='node.proto',
  package='pb',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n\nnode.proto\x12\x02pb\x1a\nutil.proto\"\xde\x01\n\nP2PRequest\x12#\n\x0brequestType\x18\x01 \x01(\x0e\x32\x0e.pb.P2PREQTYPE\x12\x0b\n\x03\x61ll\x18\x02 \x01(\x08\x12\x0f\n\x07verbose\x18\x03 \x01(\x08\x12\x14\n\x0cprotocolName\x18\x04 \x01(\t\x12\x15\n\rlistenAddress\x18\x05 \x01(\t\x12\x15\n\rtargetAddress\x18\x06 \x01(\t\x12\x15\n\rremoteAddress\x18\x07 \x01(\t\x12\x1c\n\x14\x61llowCustomProtocols\x18\x08 \x01(\x08\x12\x14\n\x0creportPeerID\x18\t \x01(\x08\"z\n\x0bP2PResponse\x12#\n\x0brequestType\x18\x01 \x01(\x0e\x32\x0e.pb.P2PREQTYPE\x12\r\n\x05names\x18\x02 \x03(\t\x12\x13\n\x0b\x63onnsClosed\x18\x03 \x01(\x05\x12\"\n\x0bstreamInfos\x18\x04 \x03(\x0b\x32\r.pb.P2PLsInfo\"^\n\tP2PLsInfo\x12\x14\n\x0cprotocolName\x18\x01 \x01(\t\x12\x15\n\rlistenAddress\x18\x02 \x01(\t\x12\x15\n\rtargetAddress\x18\x03 \x01(\t\x12\r\n\x05local\x18\x04 \x01(\x08\"#\n\x10GetPeersResponse\x12\x0f\n\x07peerIDs\x18\x01 \x03(\t\"l\n\x1b\x43onnectionManagementRequest\x12(\n\x0brequestType\x18\x01 \x01(\x0e\x32\x13.pb.CONNMGMTREQTYPE\x12\x12\n\nmultiAddrs\x18\x02 \x03(\t\x12\x0f\n\x07peerIDs\x18\x03 \x03(\t\"\xe8\x02\n\x1c\x43onnectionManagementResponse\x12\x42\n\tconnected\x18\x02 \x03(\x0b\x32/.pb.ConnectionManagementResponse.ConnectedEntry\x12<\n\x06status\x18\x03 \x03(\x0b\x32,.pb.ConnectionManagementResponse.StatusEntry\x1a\x30\n\x0e\x43onnectedEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x08:\x02\x38\x01\x1a]\n\x0bStatusEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12=\n\x05value\x18\x02 \x01(\x0b\x32..pb.ConnectionManagementResponse.StatusMessage:\x02\x38\x01\x1a\x35\n\rStatusMessage\x12\x14\n\x0c\x64isconnected\x18\x01 \x01(\x08\x12\x0e\n\x06reason\x18\x02 \x01(\t\"^\n\rExtrasRequest\x12&\n\x0brequestType\x18\x01 \x01(\x0e\x32\x11.pb.EXTRASREQTYPE\x12%\n\rextrasFeature\x18\x02 \x01(\x0e\x32\x0e.pb.EXTRASTYPE*8\n\nP2PREQTYPE\x12\t\n\x05\x43LOSE\x10\x00\x12\x0b\n\x07\x46ORWARD\x10\x01\x12\n\n\x06LISTEN\x10\x02\x12\x06\n\x02LS\x10\x03*C\n\x0f\x43ONNMGMTREQTYPE\x12\x0e\n\nCM_CONNECT\x10\x00\x12\x11\n\rCM_DISCONNECT\x10\x01\x12\r\n\tCM_STATUS\x10\x02*.\n\rEXTRASREQTYPE\x12\r\n\tEX_ENABLE\x10\x00\x12\x0e\n\nEX_DISABLE\x10\x01*?\n\nEXTRASTYPE\x12\x0c\n\x08IDENTIFY\x10\x00\x12\n\n\x06PUBSUB\x10\x01\x12\r\n\tDISCOVERY\x10\x02\x12\x08\n\x04MDNS\x10\x03\x32\xe9\x01\n\x07NodeAPI\x12-\n\x08GetPeers\x12\t.pb.Empty\x1a\x14.pb.GetPeersResponse\"\x00\x12[\n\x14\x43onnectionManagement\x12\x1f.pb.ConnectionManagementRequest\x1a .pb.ConnectionManagementResponse\"\x00\x12(\n\x06\x45xtras\x12\x11.pb.ExtrasRequest\x1a\t.pb.Empty\"\x00\x12(\n\x03P2P\x12\x0e.pb.P2PRequest\x1a\x0f.pb.P2PResponse\"\x00\x62\x06proto3')
  ,
  dependencies=[util__pb2.DESCRIPTOR,])

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
  serialized_start=1081,
  serialized_end=1137,
)
_sym_db.RegisterEnumDescriptor(_P2PREQTYPE)

P2PREQTYPE = enum_type_wrapper.EnumTypeWrapper(_P2PREQTYPE)
_CONNMGMTREQTYPE = _descriptor.EnumDescriptor(
  name='CONNMGMTREQTYPE',
  full_name='pb.CONNMGMTREQTYPE',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='CM_CONNECT', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CM_DISCONNECT', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CM_STATUS', index=2, number=2,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=1139,
  serialized_end=1206,
)
_sym_db.RegisterEnumDescriptor(_CONNMGMTREQTYPE)

CONNMGMTREQTYPE = enum_type_wrapper.EnumTypeWrapper(_CONNMGMTREQTYPE)
_EXTRASREQTYPE = _descriptor.EnumDescriptor(
  name='EXTRASREQTYPE',
  full_name='pb.EXTRASREQTYPE',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='EX_ENABLE', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='EX_DISABLE', index=1, number=1,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=1208,
  serialized_end=1254,
)
_sym_db.RegisterEnumDescriptor(_EXTRASREQTYPE)

EXTRASREQTYPE = enum_type_wrapper.EnumTypeWrapper(_EXTRASREQTYPE)
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
    _descriptor.EnumValueDescriptor(
      name='MDNS', index=3, number=3,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=1256,
  serialized_end=1319,
)
_sym_db.RegisterEnumDescriptor(_EXTRASTYPE)

EXTRASTYPE = enum_type_wrapper.EnumTypeWrapper(_EXTRASTYPE)
CLOSE = 0
FORWARD = 1
LISTEN = 2
LS = 3
CM_CONNECT = 0
CM_DISCONNECT = 1
CM_STATUS = 2
EX_ENABLE = 0
EX_DISABLE = 1
IDENTIFY = 0
PUBSUB = 1
DISCOVERY = 2
MDNS = 3



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
    _descriptor.FieldDescriptor(
      name='allowCustomProtocols', full_name='pb.P2PRequest.allowCustomProtocols', index=7,
      number=8, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='reportPeerID', full_name='pb.P2PRequest.reportPeerID', index=8,
      number=9, type=8, cpp_type=7, label=1,
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
  serialized_start=31,
  serialized_end=253,
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
    _descriptor.FieldDescriptor(
      name='streamInfos', full_name='pb.P2PResponse.streamInfos', index=3,
      number=4, type=11, cpp_type=10, label=3,
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
  serialized_start=255,
  serialized_end=377,
)


_P2PLSINFO = _descriptor.Descriptor(
  name='P2PLsInfo',
  full_name='pb.P2PLsInfo',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='protocolName', full_name='pb.P2PLsInfo.protocolName', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='listenAddress', full_name='pb.P2PLsInfo.listenAddress', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='targetAddress', full_name='pb.P2PLsInfo.targetAddress', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='local', full_name='pb.P2PLsInfo.local', index=3,
      number=4, type=8, cpp_type=7, label=1,
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
  serialized_start=379,
  serialized_end=473,
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
  serialized_start=475,
  serialized_end=510,
)


_CONNECTIONMANAGEMENTREQUEST = _descriptor.Descriptor(
  name='ConnectionManagementRequest',
  full_name='pb.ConnectionManagementRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='requestType', full_name='pb.ConnectionManagementRequest.requestType', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='multiAddrs', full_name='pb.ConnectionManagementRequest.multiAddrs', index=1,
      number=2, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='peerIDs', full_name='pb.ConnectionManagementRequest.peerIDs', index=2,
      number=3, type=9, cpp_type=9, label=3,
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
  serialized_start=512,
  serialized_end=620,
)


_CONNECTIONMANAGEMENTRESPONSE_CONNECTEDENTRY = _descriptor.Descriptor(
  name='ConnectedEntry',
  full_name='pb.ConnectionManagementResponse.ConnectedEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='pb.ConnectionManagementResponse.ConnectedEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='pb.ConnectionManagementResponse.ConnectedEntry.value', index=1,
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
  serialized_start=785,
  serialized_end=833,
)

_CONNECTIONMANAGEMENTRESPONSE_STATUSENTRY = _descriptor.Descriptor(
  name='StatusEntry',
  full_name='pb.ConnectionManagementResponse.StatusEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='pb.ConnectionManagementResponse.StatusEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='pb.ConnectionManagementResponse.StatusEntry.value', index=1,
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
  serialized_start=835,
  serialized_end=928,
)

_CONNECTIONMANAGEMENTRESPONSE_STATUSMESSAGE = _descriptor.Descriptor(
  name='StatusMessage',
  full_name='pb.ConnectionManagementResponse.StatusMessage',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='disconnected', full_name='pb.ConnectionManagementResponse.StatusMessage.disconnected', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='reason', full_name='pb.ConnectionManagementResponse.StatusMessage.reason', index=1,
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
  serialized_start=930,
  serialized_end=983,
)

_CONNECTIONMANAGEMENTRESPONSE = _descriptor.Descriptor(
  name='ConnectionManagementResponse',
  full_name='pb.ConnectionManagementResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='connected', full_name='pb.ConnectionManagementResponse.connected', index=0,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='status', full_name='pb.ConnectionManagementResponse.status', index=1,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_CONNECTIONMANAGEMENTRESPONSE_CONNECTEDENTRY, _CONNECTIONMANAGEMENTRESPONSE_STATUSENTRY, _CONNECTIONMANAGEMENTRESPONSE_STATUSMESSAGE, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=623,
  serialized_end=983,
)


_EXTRASREQUEST = _descriptor.Descriptor(
  name='ExtrasRequest',
  full_name='pb.ExtrasRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='requestType', full_name='pb.ExtrasRequest.requestType', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='extrasFeature', full_name='pb.ExtrasRequest.extrasFeature', index=1,
      number=2, type=14, cpp_type=8, label=1,
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
  serialized_start=985,
  serialized_end=1079,
)

_P2PREQUEST.fields_by_name['requestType'].enum_type = _P2PREQTYPE
_P2PRESPONSE.fields_by_name['requestType'].enum_type = _P2PREQTYPE
_P2PRESPONSE.fields_by_name['streamInfos'].message_type = _P2PLSINFO
_CONNECTIONMANAGEMENTREQUEST.fields_by_name['requestType'].enum_type = _CONNMGMTREQTYPE
_CONNECTIONMANAGEMENTRESPONSE_CONNECTEDENTRY.containing_type = _CONNECTIONMANAGEMENTRESPONSE
_CONNECTIONMANAGEMENTRESPONSE_STATUSENTRY.fields_by_name['value'].message_type = _CONNECTIONMANAGEMENTRESPONSE_STATUSMESSAGE
_CONNECTIONMANAGEMENTRESPONSE_STATUSENTRY.containing_type = _CONNECTIONMANAGEMENTRESPONSE
_CONNECTIONMANAGEMENTRESPONSE_STATUSMESSAGE.containing_type = _CONNECTIONMANAGEMENTRESPONSE
_CONNECTIONMANAGEMENTRESPONSE.fields_by_name['connected'].message_type = _CONNECTIONMANAGEMENTRESPONSE_CONNECTEDENTRY
_CONNECTIONMANAGEMENTRESPONSE.fields_by_name['status'].message_type = _CONNECTIONMANAGEMENTRESPONSE_STATUSENTRY
_EXTRASREQUEST.fields_by_name['requestType'].enum_type = _EXTRASREQTYPE
_EXTRASREQUEST.fields_by_name['extrasFeature'].enum_type = _EXTRASTYPE
DESCRIPTOR.message_types_by_name['P2PRequest'] = _P2PREQUEST
DESCRIPTOR.message_types_by_name['P2PResponse'] = _P2PRESPONSE
DESCRIPTOR.message_types_by_name['P2PLsInfo'] = _P2PLSINFO
DESCRIPTOR.message_types_by_name['GetPeersResponse'] = _GETPEERSRESPONSE
DESCRIPTOR.message_types_by_name['ConnectionManagementRequest'] = _CONNECTIONMANAGEMENTREQUEST
DESCRIPTOR.message_types_by_name['ConnectionManagementResponse'] = _CONNECTIONMANAGEMENTRESPONSE
DESCRIPTOR.message_types_by_name['ExtrasRequest'] = _EXTRASREQUEST
DESCRIPTOR.enum_types_by_name['P2PREQTYPE'] = _P2PREQTYPE
DESCRIPTOR.enum_types_by_name['CONNMGMTREQTYPE'] = _CONNMGMTREQTYPE
DESCRIPTOR.enum_types_by_name['EXTRASREQTYPE'] = _EXTRASREQTYPE
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

P2PLsInfo = _reflection.GeneratedProtocolMessageType('P2PLsInfo', (_message.Message,), {
  'DESCRIPTOR' : _P2PLSINFO,
  '__module__' : 'node_pb2'
  # @@protoc_insertion_point(class_scope:pb.P2PLsInfo)
  })
_sym_db.RegisterMessage(P2PLsInfo)

GetPeersResponse = _reflection.GeneratedProtocolMessageType('GetPeersResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETPEERSRESPONSE,
  '__module__' : 'node_pb2'
  # @@protoc_insertion_point(class_scope:pb.GetPeersResponse)
  })
_sym_db.RegisterMessage(GetPeersResponse)

ConnectionManagementRequest = _reflection.GeneratedProtocolMessageType('ConnectionManagementRequest', (_message.Message,), {
  'DESCRIPTOR' : _CONNECTIONMANAGEMENTREQUEST,
  '__module__' : 'node_pb2'
  # @@protoc_insertion_point(class_scope:pb.ConnectionManagementRequest)
  })
_sym_db.RegisterMessage(ConnectionManagementRequest)

ConnectionManagementResponse = _reflection.GeneratedProtocolMessageType('ConnectionManagementResponse', (_message.Message,), {

  'ConnectedEntry' : _reflection.GeneratedProtocolMessageType('ConnectedEntry', (_message.Message,), {
    'DESCRIPTOR' : _CONNECTIONMANAGEMENTRESPONSE_CONNECTEDENTRY,
    '__module__' : 'node_pb2'
    # @@protoc_insertion_point(class_scope:pb.ConnectionManagementResponse.ConnectedEntry)
    })
  ,

  'StatusEntry' : _reflection.GeneratedProtocolMessageType('StatusEntry', (_message.Message,), {
    'DESCRIPTOR' : _CONNECTIONMANAGEMENTRESPONSE_STATUSENTRY,
    '__module__' : 'node_pb2'
    # @@protoc_insertion_point(class_scope:pb.ConnectionManagementResponse.StatusEntry)
    })
  ,

  'StatusMessage' : _reflection.GeneratedProtocolMessageType('StatusMessage', (_message.Message,), {
    'DESCRIPTOR' : _CONNECTIONMANAGEMENTRESPONSE_STATUSMESSAGE,
    '__module__' : 'node_pb2'
    # @@protoc_insertion_point(class_scope:pb.ConnectionManagementResponse.StatusMessage)
    })
  ,
  'DESCRIPTOR' : _CONNECTIONMANAGEMENTRESPONSE,
  '__module__' : 'node_pb2'
  # @@protoc_insertion_point(class_scope:pb.ConnectionManagementResponse)
  })
_sym_db.RegisterMessage(ConnectionManagementResponse)
_sym_db.RegisterMessage(ConnectionManagementResponse.ConnectedEntry)
_sym_db.RegisterMessage(ConnectionManagementResponse.StatusEntry)
_sym_db.RegisterMessage(ConnectionManagementResponse.StatusMessage)

ExtrasRequest = _reflection.GeneratedProtocolMessageType('ExtrasRequest', (_message.Message,), {
  'DESCRIPTOR' : _EXTRASREQUEST,
  '__module__' : 'node_pb2'
  # @@protoc_insertion_point(class_scope:pb.ExtrasRequest)
  })
_sym_db.RegisterMessage(ExtrasRequest)


_CONNECTIONMANAGEMENTRESPONSE_CONNECTEDENTRY._options = None
_CONNECTIONMANAGEMENTRESPONSE_STATUSENTRY._options = None

_NODEAPI = _descriptor.ServiceDescriptor(
  name='NodeAPI',
  full_name='pb.NodeAPI',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=1322,
  serialized_end=1555,
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
    name='ConnectionManagement',
    full_name='pb.NodeAPI.ConnectionManagement',
    index=1,
    containing_service=None,
    input_type=_CONNECTIONMANAGEMENTREQUEST,
    output_type=_CONNECTIONMANAGEMENTRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='Extras',
    full_name='pb.NodeAPI.Extras',
    index=2,
    containing_service=None,
    input_type=_EXTRASREQUEST,
    output_type=util__pb2._EMPTY,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='P2P',
    full_name='pb.NodeAPI.P2P',
    index=3,
    containing_service=None,
    input_type=_P2PREQUEST,
    output_type=_P2PRESPONSE,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_NODEAPI)

DESCRIPTOR.services_by_name['NodeAPI'] = _NODEAPI

# @@protoc_insertion_point(module_scope)
