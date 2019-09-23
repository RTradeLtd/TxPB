# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: namesys.proto

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
  name='namesys.proto',
  package='pb',
  syntax='proto3',
  serialized_options=_b('\360\341\036\001\250\342\036\001\340\341\036\001\330\341\036\000\200\342\036\001\370\341\036\001\270\342\036\001\310\342\036\001\340\342\036\001\320\342\036\001'),
  serialized_pb=_b('\n\rnamesys.proto\x12\x02pb\x1a\nutil.proto\x1a-github.com/gogo/protobuf/gogoproto/gogo.proto\"`\n\x15NameSysResolveRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05\x64\x65pth\x18\x02 \x01(\r\x12\x16\n\x0e\x64htRecordCount\x18\x03 \x01(\r\x12\x12\n\ndhtTimeout\x18\x04 \x01(\x05\"3\n\x14NameSysResolveResult\x12\x0c\n\x04path\x18\x01 \x01(\t\x12\r\n\x05\x65rror\x18\x02 \x01(\t\"G\n\x15NameSysPublishRequest\x12\x12\n\nprivateKey\x18\x01 \x01(\x0c\x12\r\n\x05value\x18\x02 \x01(\t\x12\x0b\n\x03\x65ol\x18\x03 \x01(\x05\x32\xdf\x01\n\nNameSysAPI\x12G\n\x0eNameSysResolve\x12\x19.pb.NameSysResolveRequest\x1a\x18.pb.NameSysResolveResult\"\x00\x12N\n\x13NameSysResolveAsync\x12\x19.pb.NameSysResolveRequest\x1a\x18.pb.NameSysResolveResult\"\x00\x30\x01\x12\x38\n\x0eNameSysPublish\x12\x19.pb.NameSysPublishRequest\x1a\t.pb.Empty\"\x00\x42(\xf0\xe1\x1e\x01\xa8\xe2\x1e\x01\xe0\xe1\x1e\x01\xd8\xe1\x1e\x00\x80\xe2\x1e\x01\xf8\xe1\x1e\x01\xb8\xe2\x1e\x01\xc8\xe2\x1e\x01\xe0\xe2\x1e\x01\xd0\xe2\x1e\x01\x62\x06proto3')
  ,
  dependencies=[util__pb2.DESCRIPTOR,github_dot_com_dot_gogo_dot_protobuf_dot_gogoproto_dot_gogo__pb2.DESCRIPTOR,])




_NAMESYSRESOLVEREQUEST = _descriptor.Descriptor(
  name='NameSysResolveRequest',
  full_name='pb.NameSysResolveRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='pb.NameSysResolveRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='depth', full_name='pb.NameSysResolveRequest.depth', index=1,
      number=2, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='dhtRecordCount', full_name='pb.NameSysResolveRequest.dhtRecordCount', index=2,
      number=3, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='dhtTimeout', full_name='pb.NameSysResolveRequest.dhtTimeout', index=3,
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
  serialized_start=80,
  serialized_end=176,
)


_NAMESYSRESOLVERESULT = _descriptor.Descriptor(
  name='NameSysResolveResult',
  full_name='pb.NameSysResolveResult',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='path', full_name='pb.NameSysResolveResult.path', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='error', full_name='pb.NameSysResolveResult.error', index=1,
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
  serialized_start=178,
  serialized_end=229,
)


_NAMESYSPUBLISHREQUEST = _descriptor.Descriptor(
  name='NameSysPublishRequest',
  full_name='pb.NameSysPublishRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='privateKey', full_name='pb.NameSysPublishRequest.privateKey', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='pb.NameSysPublishRequest.value', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='eol', full_name='pb.NameSysPublishRequest.eol', index=2,
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
  serialized_start=231,
  serialized_end=302,
)

DESCRIPTOR.message_types_by_name['NameSysResolveRequest'] = _NAMESYSRESOLVEREQUEST
DESCRIPTOR.message_types_by_name['NameSysResolveResult'] = _NAMESYSRESOLVERESULT
DESCRIPTOR.message_types_by_name['NameSysPublishRequest'] = _NAMESYSPUBLISHREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

NameSysResolveRequest = _reflection.GeneratedProtocolMessageType('NameSysResolveRequest', (_message.Message,), {
  'DESCRIPTOR' : _NAMESYSRESOLVEREQUEST,
  '__module__' : 'namesys_pb2'
  # @@protoc_insertion_point(class_scope:pb.NameSysResolveRequest)
  })
_sym_db.RegisterMessage(NameSysResolveRequest)

NameSysResolveResult = _reflection.GeneratedProtocolMessageType('NameSysResolveResult', (_message.Message,), {
  'DESCRIPTOR' : _NAMESYSRESOLVERESULT,
  '__module__' : 'namesys_pb2'
  # @@protoc_insertion_point(class_scope:pb.NameSysResolveResult)
  })
_sym_db.RegisterMessage(NameSysResolveResult)

NameSysPublishRequest = _reflection.GeneratedProtocolMessageType('NameSysPublishRequest', (_message.Message,), {
  'DESCRIPTOR' : _NAMESYSPUBLISHREQUEST,
  '__module__' : 'namesys_pb2'
  # @@protoc_insertion_point(class_scope:pb.NameSysPublishRequest)
  })
_sym_db.RegisterMessage(NameSysPublishRequest)


DESCRIPTOR._options = None

_NAMESYSAPI = _descriptor.ServiceDescriptor(
  name='NameSysAPI',
  full_name='pb.NameSysAPI',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=305,
  serialized_end=528,
  methods=[
  _descriptor.MethodDescriptor(
    name='NameSysResolve',
    full_name='pb.NameSysAPI.NameSysResolve',
    index=0,
    containing_service=None,
    input_type=_NAMESYSRESOLVEREQUEST,
    output_type=_NAMESYSRESOLVERESULT,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='NameSysResolveAsync',
    full_name='pb.NameSysAPI.NameSysResolveAsync',
    index=1,
    containing_service=None,
    input_type=_NAMESYSRESOLVEREQUEST,
    output_type=_NAMESYSRESOLVERESULT,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='NameSysPublish',
    full_name='pb.NameSysAPI.NameSysPublish',
    index=2,
    containing_service=None,
    input_type=_NAMESYSPUBLISHREQUEST,
    output_type=util__pb2._EMPTY,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_NAMESYSAPI)

DESCRIPTOR.services_by_name['NameSysAPI'] = _NAMESYSAPI

# @@protoc_insertion_point(module_scope)
