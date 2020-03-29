# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: file.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import util_pb2 as util__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='file.proto',
  package='pb',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=b'\n\nfile.proto\x12\x02pb\x1a\nutil.proto\"C\n\x16\x44irectoryUploadRequest\x12\x0c\n\x04path\x18\x01 \x01(\t\x12\x0c\n\x04hash\x18\x02 \x01(\t\x12\r\n\x05isDir\x18\x03 \x01(\x08\"K\n\rUploadRequest\x12\x16\n\x04\x62lob\x18\x01 \x01(\x0b\x32\x08.pb.Blob\x12\"\n\x07options\x18\x02 \x01(\x0b\x32\x11.pb.UploadOptions\"C\n\rUploadOptions\x12\x11\n\tmultiHash\x18\x01 \x01(\t\x12\x0e\n\x06layout\x18\x02 \x01(\t\x12\x0f\n\x07\x63hunker\x18\x03 \x01(\t\"X\n\x0f\x44ownloadRequest\x12\x0c\n\x04hash\x18\x01 \x01(\t\x12\x11\n\tchunkSize\x18\x02 \x01(\x05\x12\x12\n\nrangeStart\x18\x03 \x01(\x04\x12\x10\n\x08rangeEnd\x18\x04 \x01(\x04\"*\n\x10\x44ownloadResponse\x12\x16\n\x04\x62lob\x18\x01 \x01(\x0b\x32\x08.pb.Blob\"=\n\x04\x42lob\x12\x0f\n\x07\x63ontent\x18\x01 \x01(\x0c\x12\x12\n\nrangeStart\x18\x02 \x01(\x04\x12\x10\n\x08rangeEnd\x18\x03 \x01(\x04\x32\xc2\x01\n\x07\x46ileAPI\x12\x34\n\nUploadFile\x12\x11.pb.UploadRequest\x1a\x0f.pb.PutResponse\"\x00(\x01\x12=\n\x0c\x44ownloadFile\x12\x13.pb.DownloadRequest\x1a\x14.pb.DownloadResponse\"\x00\x30\x01\x12\x42\n\x0fUploadDirectory\x12\x1a.pb.DirectoryUploadRequest\x1a\x0f.pb.PutResponse\"\x00(\x01\x62\x06proto3'
  ,
  dependencies=[util__pb2.DESCRIPTOR,])




_DIRECTORYUPLOADREQUEST = _descriptor.Descriptor(
  name='DirectoryUploadRequest',
  full_name='pb.DirectoryUploadRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='path', full_name='pb.DirectoryUploadRequest.path', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='hash', full_name='pb.DirectoryUploadRequest.hash', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='isDir', full_name='pb.DirectoryUploadRequest.isDir', index=2,
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
  serialized_start=30,
  serialized_end=97,
)


_UPLOADREQUEST = _descriptor.Descriptor(
  name='UploadRequest',
  full_name='pb.UploadRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='blob', full_name='pb.UploadRequest.blob', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='options', full_name='pb.UploadRequest.options', index=1,
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
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=99,
  serialized_end=174,
)


_UPLOADOPTIONS = _descriptor.Descriptor(
  name='UploadOptions',
  full_name='pb.UploadOptions',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='multiHash', full_name='pb.UploadOptions.multiHash', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='layout', full_name='pb.UploadOptions.layout', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='chunker', full_name='pb.UploadOptions.chunker', index=2,
      number=3, type=9, cpp_type=9, label=1,
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
  serialized_start=176,
  serialized_end=243,
)


_DOWNLOADREQUEST = _descriptor.Descriptor(
  name='DownloadRequest',
  full_name='pb.DownloadRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='hash', full_name='pb.DownloadRequest.hash', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='chunkSize', full_name='pb.DownloadRequest.chunkSize', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='rangeStart', full_name='pb.DownloadRequest.rangeStart', index=2,
      number=3, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='rangeEnd', full_name='pb.DownloadRequest.rangeEnd', index=3,
      number=4, type=4, cpp_type=4, label=1,
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
  serialized_start=245,
  serialized_end=333,
)


_DOWNLOADRESPONSE = _descriptor.Descriptor(
  name='DownloadResponse',
  full_name='pb.DownloadResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='blob', full_name='pb.DownloadResponse.blob', index=0,
      number=1, type=11, cpp_type=10, label=1,
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
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=335,
  serialized_end=377,
)


_BLOB = _descriptor.Descriptor(
  name='Blob',
  full_name='pb.Blob',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='content', full_name='pb.Blob.content', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='rangeStart', full_name='pb.Blob.rangeStart', index=1,
      number=2, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='rangeEnd', full_name='pb.Blob.rangeEnd', index=2,
      number=3, type=4, cpp_type=4, label=1,
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
  serialized_start=379,
  serialized_end=440,
)

_UPLOADREQUEST.fields_by_name['blob'].message_type = _BLOB
_UPLOADREQUEST.fields_by_name['options'].message_type = _UPLOADOPTIONS
_DOWNLOADRESPONSE.fields_by_name['blob'].message_type = _BLOB
DESCRIPTOR.message_types_by_name['DirectoryUploadRequest'] = _DIRECTORYUPLOADREQUEST
DESCRIPTOR.message_types_by_name['UploadRequest'] = _UPLOADREQUEST
DESCRIPTOR.message_types_by_name['UploadOptions'] = _UPLOADOPTIONS
DESCRIPTOR.message_types_by_name['DownloadRequest'] = _DOWNLOADREQUEST
DESCRIPTOR.message_types_by_name['DownloadResponse'] = _DOWNLOADRESPONSE
DESCRIPTOR.message_types_by_name['Blob'] = _BLOB
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

DirectoryUploadRequest = _reflection.GeneratedProtocolMessageType('DirectoryUploadRequest', (_message.Message,), {
  'DESCRIPTOR' : _DIRECTORYUPLOADREQUEST,
  '__module__' : 'file_pb2'
  # @@protoc_insertion_point(class_scope:pb.DirectoryUploadRequest)
  })
_sym_db.RegisterMessage(DirectoryUploadRequest)

UploadRequest = _reflection.GeneratedProtocolMessageType('UploadRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPLOADREQUEST,
  '__module__' : 'file_pb2'
  # @@protoc_insertion_point(class_scope:pb.UploadRequest)
  })
_sym_db.RegisterMessage(UploadRequest)

UploadOptions = _reflection.GeneratedProtocolMessageType('UploadOptions', (_message.Message,), {
  'DESCRIPTOR' : _UPLOADOPTIONS,
  '__module__' : 'file_pb2'
  # @@protoc_insertion_point(class_scope:pb.UploadOptions)
  })
_sym_db.RegisterMessage(UploadOptions)

DownloadRequest = _reflection.GeneratedProtocolMessageType('DownloadRequest', (_message.Message,), {
  'DESCRIPTOR' : _DOWNLOADREQUEST,
  '__module__' : 'file_pb2'
  # @@protoc_insertion_point(class_scope:pb.DownloadRequest)
  })
_sym_db.RegisterMessage(DownloadRequest)

DownloadResponse = _reflection.GeneratedProtocolMessageType('DownloadResponse', (_message.Message,), {
  'DESCRIPTOR' : _DOWNLOADRESPONSE,
  '__module__' : 'file_pb2'
  # @@protoc_insertion_point(class_scope:pb.DownloadResponse)
  })
_sym_db.RegisterMessage(DownloadResponse)

Blob = _reflection.GeneratedProtocolMessageType('Blob', (_message.Message,), {
  'DESCRIPTOR' : _BLOB,
  '__module__' : 'file_pb2'
  # @@protoc_insertion_point(class_scope:pb.Blob)
  })
_sym_db.RegisterMessage(Blob)



_FILEAPI = _descriptor.ServiceDescriptor(
  name='FileAPI',
  full_name='pb.FileAPI',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=443,
  serialized_end=637,
  methods=[
  _descriptor.MethodDescriptor(
    name='UploadFile',
    full_name='pb.FileAPI.UploadFile',
    index=0,
    containing_service=None,
    input_type=_UPLOADREQUEST,
    output_type=util__pb2._PUTRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='DownloadFile',
    full_name='pb.FileAPI.DownloadFile',
    index=1,
    containing_service=None,
    input_type=_DOWNLOADREQUEST,
    output_type=_DOWNLOADRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='UploadDirectory',
    full_name='pb.FileAPI.UploadDirectory',
    index=2,
    containing_service=None,
    input_type=_DIRECTORYUPLOADREQUEST,
    output_type=util__pb2._PUTRESPONSE,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_FILEAPI)

DESCRIPTOR.services_by_name['FileAPI'] = _FILEAPI

# @@protoc_insertion_point(module_scope)
