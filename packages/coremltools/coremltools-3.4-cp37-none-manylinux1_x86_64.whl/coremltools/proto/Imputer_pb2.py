# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: Imputer.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from . import DataStructures_pb2 as DataStructures__pb2
try:
  FeatureTypes__pb2 = DataStructures__pb2.FeatureTypes__pb2
except AttributeError:
  FeatureTypes__pb2 = DataStructures__pb2.FeatureTypes_pb2

from .DataStructures_pb2 import *

DESCRIPTOR = _descriptor.FileDescriptor(
  name='Imputer.proto',
  package='CoreML.Specification',
  syntax='proto3',
  serialized_pb=_b('\n\rImputer.proto\x12\x14\x43oreML.Specification\x1a\x14\x44\x61taStructures.proto\"\xf3\x03\n\x07Imputer\x12\x1c\n\x12imputedDoubleValue\x18\x01 \x01(\x01H\x00\x12\x1b\n\x11imputedInt64Value\x18\x02 \x01(\x03H\x00\x12\x1c\n\x12imputedStringValue\x18\x03 \x01(\tH\x00\x12@\n\x12imputedDoubleArray\x18\x04 \x01(\x0b\x32\".CoreML.Specification.DoubleVectorH\x00\x12>\n\x11imputedInt64Array\x18\x05 \x01(\x0b\x32!.CoreML.Specification.Int64VectorH\x00\x12J\n\x17imputedStringDictionary\x18\x06 \x01(\x0b\x32\'.CoreML.Specification.StringToDoubleMapH\x00\x12H\n\x16imputedInt64Dictionary\x18\x07 \x01(\x0b\x32&.CoreML.Specification.Int64ToDoubleMapH\x00\x12\x1c\n\x12replaceDoubleValue\x18\x0b \x01(\x01H\x01\x12\x1b\n\x11replaceInt64Value\x18\x0c \x01(\x03H\x01\x12\x1c\n\x12replaceStringValue\x18\r \x01(\tH\x01\x42\x0e\n\x0cImputedValueB\x0e\n\x0cReplaceValueB\x02H\x03P\x00\x62\x06proto3')
  ,
  dependencies=[DataStructures__pb2.DESCRIPTOR,],
  public_dependencies=[DataStructures__pb2.DESCRIPTOR,])




_IMPUTER = _descriptor.Descriptor(
  name='Imputer',
  full_name='CoreML.Specification.Imputer',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='imputedDoubleValue', full_name='CoreML.Specification.Imputer.imputedDoubleValue', index=0,
      number=1, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='imputedInt64Value', full_name='CoreML.Specification.Imputer.imputedInt64Value', index=1,
      number=2, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='imputedStringValue', full_name='CoreML.Specification.Imputer.imputedStringValue', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='imputedDoubleArray', full_name='CoreML.Specification.Imputer.imputedDoubleArray', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='imputedInt64Array', full_name='CoreML.Specification.Imputer.imputedInt64Array', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='imputedStringDictionary', full_name='CoreML.Specification.Imputer.imputedStringDictionary', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='imputedInt64Dictionary', full_name='CoreML.Specification.Imputer.imputedInt64Dictionary', index=6,
      number=7, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='replaceDoubleValue', full_name='CoreML.Specification.Imputer.replaceDoubleValue', index=7,
      number=11, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='replaceInt64Value', full_name='CoreML.Specification.Imputer.replaceInt64Value', index=8,
      number=12, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='replaceStringValue', full_name='CoreML.Specification.Imputer.replaceStringValue', index=9,
      number=13, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='ImputedValue', full_name='CoreML.Specification.Imputer.ImputedValue',
      index=0, containing_type=None, fields=[]),
    _descriptor.OneofDescriptor(
      name='ReplaceValue', full_name='CoreML.Specification.Imputer.ReplaceValue',
      index=1, containing_type=None, fields=[]),
  ],
  serialized_start=62,
  serialized_end=561,
)

_IMPUTER.fields_by_name['imputedDoubleArray'].message_type = DataStructures__pb2._DOUBLEVECTOR
_IMPUTER.fields_by_name['imputedInt64Array'].message_type = DataStructures__pb2._INT64VECTOR
_IMPUTER.fields_by_name['imputedStringDictionary'].message_type = DataStructures__pb2._STRINGTODOUBLEMAP
_IMPUTER.fields_by_name['imputedInt64Dictionary'].message_type = DataStructures__pb2._INT64TODOUBLEMAP
_IMPUTER.oneofs_by_name['ImputedValue'].fields.append(
  _IMPUTER.fields_by_name['imputedDoubleValue'])
_IMPUTER.fields_by_name['imputedDoubleValue'].containing_oneof = _IMPUTER.oneofs_by_name['ImputedValue']
_IMPUTER.oneofs_by_name['ImputedValue'].fields.append(
  _IMPUTER.fields_by_name['imputedInt64Value'])
_IMPUTER.fields_by_name['imputedInt64Value'].containing_oneof = _IMPUTER.oneofs_by_name['ImputedValue']
_IMPUTER.oneofs_by_name['ImputedValue'].fields.append(
  _IMPUTER.fields_by_name['imputedStringValue'])
_IMPUTER.fields_by_name['imputedStringValue'].containing_oneof = _IMPUTER.oneofs_by_name['ImputedValue']
_IMPUTER.oneofs_by_name['ImputedValue'].fields.append(
  _IMPUTER.fields_by_name['imputedDoubleArray'])
_IMPUTER.fields_by_name['imputedDoubleArray'].containing_oneof = _IMPUTER.oneofs_by_name['ImputedValue']
_IMPUTER.oneofs_by_name['ImputedValue'].fields.append(
  _IMPUTER.fields_by_name['imputedInt64Array'])
_IMPUTER.fields_by_name['imputedInt64Array'].containing_oneof = _IMPUTER.oneofs_by_name['ImputedValue']
_IMPUTER.oneofs_by_name['ImputedValue'].fields.append(
  _IMPUTER.fields_by_name['imputedStringDictionary'])
_IMPUTER.fields_by_name['imputedStringDictionary'].containing_oneof = _IMPUTER.oneofs_by_name['ImputedValue']
_IMPUTER.oneofs_by_name['ImputedValue'].fields.append(
  _IMPUTER.fields_by_name['imputedInt64Dictionary'])
_IMPUTER.fields_by_name['imputedInt64Dictionary'].containing_oneof = _IMPUTER.oneofs_by_name['ImputedValue']
_IMPUTER.oneofs_by_name['ReplaceValue'].fields.append(
  _IMPUTER.fields_by_name['replaceDoubleValue'])
_IMPUTER.fields_by_name['replaceDoubleValue'].containing_oneof = _IMPUTER.oneofs_by_name['ReplaceValue']
_IMPUTER.oneofs_by_name['ReplaceValue'].fields.append(
  _IMPUTER.fields_by_name['replaceInt64Value'])
_IMPUTER.fields_by_name['replaceInt64Value'].containing_oneof = _IMPUTER.oneofs_by_name['ReplaceValue']
_IMPUTER.oneofs_by_name['ReplaceValue'].fields.append(
  _IMPUTER.fields_by_name['replaceStringValue'])
_IMPUTER.fields_by_name['replaceStringValue'].containing_oneof = _IMPUTER.oneofs_by_name['ReplaceValue']
DESCRIPTOR.message_types_by_name['Imputer'] = _IMPUTER
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Imputer = _reflection.GeneratedProtocolMessageType('Imputer', (_message.Message,), dict(
  DESCRIPTOR = _IMPUTER,
  __module__ = 'Imputer_pb2'
  # @@protoc_insertion_point(class_scope:CoreML.Specification.Imputer)
  ))
_sym_db.RegisterMessage(Imputer)


DESCRIPTOR.has_options = True
DESCRIPTOR._options = _descriptor._ParseOptions(descriptor_pb2.FileOptions(), _b('H\003'))
# @@protoc_insertion_point(module_scope)
