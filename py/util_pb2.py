# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: util.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='util.proto',
  package='pb',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=b'\n\nutil.proto\x12\x02pb\"\x1b\n\x0bPutResponse\x12\x0c\n\x04hash\x18\x01 \x01(\t\"\x07\n\x05\x45mptyb\x06proto3'
)




_PUTRESPONSE = _descriptor.Descriptor(
  name='PutResponse',
  full_name='pb.PutResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='hash', full_name='pb.PutResponse.hash', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
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
  serialized_start=18,
  serialized_end=45,
)


_EMPTY = _descriptor.Descriptor(
  name='Empty',
  full_name='pb.Empty',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
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
  serialized_start=47,
  serialized_end=54,
)

DESCRIPTOR.message_types_by_name['PutResponse'] = _PUTRESPONSE
DESCRIPTOR.message_types_by_name['Empty'] = _EMPTY
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

PutResponse = _reflection.GeneratedProtocolMessageType('PutResponse', (_message.Message,), {
  'DESCRIPTOR' : _PUTRESPONSE,
  '__module__' : 'util_pb2'
  # @@protoc_insertion_point(class_scope:pb.PutResponse)
  })
_sym_db.RegisterMessage(PutResponse)

Empty = _reflection.GeneratedProtocolMessageType('Empty', (_message.Message,), {
  'DESCRIPTOR' : _EMPTY,
  '__module__' : 'util_pb2'
  # @@protoc_insertion_point(class_scope:pb.Empty)
  })
_sym_db.RegisterMessage(Empty)


# @@protoc_insertion_point(module_scope)
