# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ipns.proto

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
  name='ipns.proto',
  package='pb',
  syntax='proto3',
  serialized_options=_b('\360\341\036\001\250\342\036\001\340\341\036\001\330\341\036\000\200\342\036\001\370\341\036\001\270\342\036\001\310\342\036\001\340\342\036\001\320\342\036\001'),
  serialized_pb=_b('\n\nipns.proto\x12\x02pb\x1a\nutil.proto\x1a-github.com/gogo/protobuf/gogoproto/gogo.proto\"]\n\x12NameResolveRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05\x64\x65pth\x18\x02 \x01(\r\x12\x16\n\x0e\x64htRecordCount\x18\x03 \x01(\r\x12\x12\n\ndhtTimeout\x18\x04 \x01(\x05\"0\n\x11NameResolveResult\x12\x0c\n\x04path\x18\x01 \x01(\t\x12\r\n\x05\x65rror\x18\x02 \x01(\t\"D\n\x12NamePublishRequest\x12\x12\n\nprivateKey\x18\x01 \x01(\x0c\x12\r\n\x05value\x18\x02 \x01(\t\x12\x0b\n\x03\x65ol\x18\x03 \x01(\x05\x32\xb8\x01\n\x07IPNSAPI\x12:\n\x07Resolve\x12\x16.pb.NameResolveRequest\x1a\x15.pb.NameResolveResult\"\x00\x12\x41\n\x0cResolveAsync\x12\x16.pb.NameResolveRequest\x1a\x15.pb.NameResolveResult\"\x00\x30\x01\x12.\n\x07Publish\x12\x16.pb.NamePublishRequest\x1a\t.pb.Empty\"\x00\x42(\xf0\xe1\x1e\x01\xa8\xe2\x1e\x01\xe0\xe1\x1e\x01\xd8\xe1\x1e\x00\x80\xe2\x1e\x01\xf8\xe1\x1e\x01\xb8\xe2\x1e\x01\xc8\xe2\x1e\x01\xe0\xe2\x1e\x01\xd0\xe2\x1e\x01\x62\x06proto3')
  ,
  dependencies=[util__pb2.DESCRIPTOR,github_dot_com_dot_gogo_dot_protobuf_dot_gogoproto_dot_gogo__pb2.DESCRIPTOR,])




_NAMERESOLVEREQUEST = _descriptor.Descriptor(
  name='NameResolveRequest',
  full_name='pb.NameResolveRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='pb.NameResolveRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='depth', full_name='pb.NameResolveRequest.depth', index=1,
      number=2, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='dhtRecordCount', full_name='pb.NameResolveRequest.dhtRecordCount', index=2,
      number=3, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='dhtTimeout', full_name='pb.NameResolveRequest.dhtTimeout', index=3,
      number=4, type=5, cpp_type=1, label=1,
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
  serialized_start=77,
  serialized_end=170,
)


_NAMERESOLVERESULT = _descriptor.Descriptor(
  name='NameResolveResult',
  full_name='pb.NameResolveResult',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='path', full_name='pb.NameResolveResult.path', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='error', full_name='pb.NameResolveResult.error', index=1,
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
  serialized_start=172,
  serialized_end=220,
)


_NAMEPUBLISHREQUEST = _descriptor.Descriptor(
  name='NamePublishRequest',
  full_name='pb.NamePublishRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='privateKey', full_name='pb.NamePublishRequest.privateKey', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='pb.NamePublishRequest.value', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='eol', full_name='pb.NamePublishRequest.eol', index=2,
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
  serialized_start=222,
  serialized_end=290,
)

DESCRIPTOR.message_types_by_name['NameResolveRequest'] = _NAMERESOLVEREQUEST
DESCRIPTOR.message_types_by_name['NameResolveResult'] = _NAMERESOLVERESULT
DESCRIPTOR.message_types_by_name['NamePublishRequest'] = _NAMEPUBLISHREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

NameResolveRequest = _reflection.GeneratedProtocolMessageType('NameResolveRequest', (_message.Message,), {
  'DESCRIPTOR' : _NAMERESOLVEREQUEST,
  '__module__' : 'ipns_pb2'
  # @@protoc_insertion_point(class_scope:pb.NameResolveRequest)
  })
_sym_db.RegisterMessage(NameResolveRequest)

NameResolveResult = _reflection.GeneratedProtocolMessageType('NameResolveResult', (_message.Message,), {
  'DESCRIPTOR' : _NAMERESOLVERESULT,
  '__module__' : 'ipns_pb2'
  # @@protoc_insertion_point(class_scope:pb.NameResolveResult)
  })
_sym_db.RegisterMessage(NameResolveResult)

NamePublishRequest = _reflection.GeneratedProtocolMessageType('NamePublishRequest', (_message.Message,), {
  'DESCRIPTOR' : _NAMEPUBLISHREQUEST,
  '__module__' : 'ipns_pb2'
  # @@protoc_insertion_point(class_scope:pb.NamePublishRequest)
  })
_sym_db.RegisterMessage(NamePublishRequest)


DESCRIPTOR._options = None

_IPNSAPI = _descriptor.ServiceDescriptor(
  name='IPNSAPI',
  full_name='pb.IPNSAPI',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=293,
  serialized_end=477,
  methods=[
  _descriptor.MethodDescriptor(
    name='Resolve',
    full_name='pb.IPNSAPI.Resolve',
    index=0,
    containing_service=None,
    input_type=_NAMERESOLVEREQUEST,
    output_type=_NAMERESOLVERESULT,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='ResolveAsync',
    full_name='pb.IPNSAPI.ResolveAsync',
    index=1,
    containing_service=None,
    input_type=_NAMERESOLVEREQUEST,
    output_type=_NAMERESOLVERESULT,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='Publish',
    full_name='pb.IPNSAPI.Publish',
    index=2,
    containing_service=None,
    input_type=_NAMEPUBLISHREQUEST,
    output_type=util__pb2._EMPTY,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_IPNSAPI)

DESCRIPTOR.services_by_name['IPNSAPI'] = _IPNSAPI

# @@protoc_insertion_point(module_scope)
