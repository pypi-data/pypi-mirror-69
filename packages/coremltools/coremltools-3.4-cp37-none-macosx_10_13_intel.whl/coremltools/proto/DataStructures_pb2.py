# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: DataStructures.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from . import FeatureTypes_pb2 as FeatureTypes__pb2

from .FeatureTypes_pb2 import *

DESCRIPTOR = _descriptor.FileDescriptor(
  name='DataStructures.proto',
  package='CoreML.Specification',
  syntax='proto3',
  serialized_pb=_b('\n\x14\x44\x61taStructures.proto\x12\x14\x43oreML.Specification\x1a\x12\x46\x65\x61tureTypes.proto\"|\n\x10StringToInt64Map\x12<\n\x03map\x18\x01 \x03(\x0b\x32/.CoreML.Specification.StringToInt64Map.MapEntry\x1a*\n\x08MapEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x03:\x02\x38\x01\"|\n\x10Int64ToStringMap\x12<\n\x03map\x18\x01 \x03(\x0b\x32/.CoreML.Specification.Int64ToStringMap.MapEntry\x1a*\n\x08MapEntry\x12\x0b\n\x03key\x18\x01 \x01(\x03\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"~\n\x11StringToDoubleMap\x12=\n\x03map\x18\x01 \x03(\x0b\x32\x30.CoreML.Specification.StringToDoubleMap.MapEntry\x1a*\n\x08MapEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x01:\x02\x38\x01\"|\n\x10Int64ToDoubleMap\x12<\n\x03map\x18\x01 \x03(\x0b\x32/.CoreML.Specification.Int64ToDoubleMap.MapEntry\x1a*\n\x08MapEntry\x12\x0b\n\x03key\x18\x01 \x01(\x03\x12\r\n\x05value\x18\x02 \x01(\x01:\x02\x38\x01\"\x1e\n\x0cStringVector\x12\x0e\n\x06vector\x18\x01 \x03(\t\"\x1d\n\x0bInt64Vector\x12\x0e\n\x06vector\x18\x01 \x03(\x03\"\x1d\n\x0b\x46loatVector\x12\x0e\n\x06vector\x18\x01 \x03(\x02\"\x1e\n\x0c\x44oubleVector\x12\x0e\n\x06vector\x18\x01 \x03(\x01\"0\n\nInt64Range\x12\x10\n\x08minValue\x18\x01 \x01(\x03\x12\x10\n\x08maxValue\x18\x02 \x01(\x03\"\x1a\n\x08Int64Set\x12\x0e\n\x06values\x18\x01 \x03(\x03\"1\n\x0b\x44oubleRange\x12\x10\n\x08minValue\x18\x01 \x01(\x01\x12\x10\n\x08maxValue\x18\x02 \x01(\x01\x42\x02H\x03P\x00\x62\x06proto3')
  ,
  dependencies=[FeatureTypes__pb2.DESCRIPTOR,],
  public_dependencies=[FeatureTypes__pb2.DESCRIPTOR,])




_STRINGTOINT64MAP_MAPENTRY = _descriptor.Descriptor(
  name='MapEntry',
  full_name='CoreML.Specification.StringToInt64Map.MapEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='CoreML.Specification.StringToInt64Map.MapEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='value', full_name='CoreML.Specification.StringToInt64Map.MapEntry.value', index=1,
      number=2, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=_descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001')),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=148,
  serialized_end=190,
)

_STRINGTOINT64MAP = _descriptor.Descriptor(
  name='StringToInt64Map',
  full_name='CoreML.Specification.StringToInt64Map',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='map', full_name='CoreML.Specification.StringToInt64Map.map', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[_STRINGTOINT64MAP_MAPENTRY, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=66,
  serialized_end=190,
)


_INT64TOSTRINGMAP_MAPENTRY = _descriptor.Descriptor(
  name='MapEntry',
  full_name='CoreML.Specification.Int64ToStringMap.MapEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='CoreML.Specification.Int64ToStringMap.MapEntry.key', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='value', full_name='CoreML.Specification.Int64ToStringMap.MapEntry.value', index=1,
      number=2, type=9, cpp_type=9, label=1,
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
  options=_descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001')),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=274,
  serialized_end=316,
)

_INT64TOSTRINGMAP = _descriptor.Descriptor(
  name='Int64ToStringMap',
  full_name='CoreML.Specification.Int64ToStringMap',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='map', full_name='CoreML.Specification.Int64ToStringMap.map', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[_INT64TOSTRINGMAP_MAPENTRY, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=192,
  serialized_end=316,
)


_STRINGTODOUBLEMAP_MAPENTRY = _descriptor.Descriptor(
  name='MapEntry',
  full_name='CoreML.Specification.StringToDoubleMap.MapEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='CoreML.Specification.StringToDoubleMap.MapEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='value', full_name='CoreML.Specification.StringToDoubleMap.MapEntry.value', index=1,
      number=2, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=_descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001')),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=402,
  serialized_end=444,
)

_STRINGTODOUBLEMAP = _descriptor.Descriptor(
  name='StringToDoubleMap',
  full_name='CoreML.Specification.StringToDoubleMap',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='map', full_name='CoreML.Specification.StringToDoubleMap.map', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[_STRINGTODOUBLEMAP_MAPENTRY, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=318,
  serialized_end=444,
)


_INT64TODOUBLEMAP_MAPENTRY = _descriptor.Descriptor(
  name='MapEntry',
  full_name='CoreML.Specification.Int64ToDoubleMap.MapEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='CoreML.Specification.Int64ToDoubleMap.MapEntry.key', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='value', full_name='CoreML.Specification.Int64ToDoubleMap.MapEntry.value', index=1,
      number=2, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=_descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001')),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=528,
  serialized_end=570,
)

_INT64TODOUBLEMAP = _descriptor.Descriptor(
  name='Int64ToDoubleMap',
  full_name='CoreML.Specification.Int64ToDoubleMap',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='map', full_name='CoreML.Specification.Int64ToDoubleMap.map', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[_INT64TODOUBLEMAP_MAPENTRY, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=446,
  serialized_end=570,
)


_STRINGVECTOR = _descriptor.Descriptor(
  name='StringVector',
  full_name='CoreML.Specification.StringVector',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='vector', full_name='CoreML.Specification.StringVector.vector', index=0,
      number=1, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
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
  ],
  serialized_start=572,
  serialized_end=602,
)


_INT64VECTOR = _descriptor.Descriptor(
  name='Int64Vector',
  full_name='CoreML.Specification.Int64Vector',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='vector', full_name='CoreML.Specification.Int64Vector.vector', index=0,
      number=1, type=3, cpp_type=2, label=3,
      has_default_value=False, default_value=[],
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
  ],
  serialized_start=604,
  serialized_end=633,
)


_FLOATVECTOR = _descriptor.Descriptor(
  name='FloatVector',
  full_name='CoreML.Specification.FloatVector',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='vector', full_name='CoreML.Specification.FloatVector.vector', index=0,
      number=1, type=2, cpp_type=6, label=3,
      has_default_value=False, default_value=[],
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
  ],
  serialized_start=635,
  serialized_end=664,
)


_DOUBLEVECTOR = _descriptor.Descriptor(
  name='DoubleVector',
  full_name='CoreML.Specification.DoubleVector',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='vector', full_name='CoreML.Specification.DoubleVector.vector', index=0,
      number=1, type=1, cpp_type=5, label=3,
      has_default_value=False, default_value=[],
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
  ],
  serialized_start=666,
  serialized_end=696,
)


_INT64RANGE = _descriptor.Descriptor(
  name='Int64Range',
  full_name='CoreML.Specification.Int64Range',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='minValue', full_name='CoreML.Specification.Int64Range.minValue', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='maxValue', full_name='CoreML.Specification.Int64Range.maxValue', index=1,
      number=2, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
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
  ],
  serialized_start=698,
  serialized_end=746,
)


_INT64SET = _descriptor.Descriptor(
  name='Int64Set',
  full_name='CoreML.Specification.Int64Set',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='values', full_name='CoreML.Specification.Int64Set.values', index=0,
      number=1, type=3, cpp_type=2, label=3,
      has_default_value=False, default_value=[],
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
  ],
  serialized_start=748,
  serialized_end=774,
)


_DOUBLERANGE = _descriptor.Descriptor(
  name='DoubleRange',
  full_name='CoreML.Specification.DoubleRange',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='minValue', full_name='CoreML.Specification.DoubleRange.minValue', index=0,
      number=1, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='maxValue', full_name='CoreML.Specification.DoubleRange.maxValue', index=1,
      number=2, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
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
  ],
  serialized_start=776,
  serialized_end=825,
)

_STRINGTOINT64MAP_MAPENTRY.containing_type = _STRINGTOINT64MAP
_STRINGTOINT64MAP.fields_by_name['map'].message_type = _STRINGTOINT64MAP_MAPENTRY
_INT64TOSTRINGMAP_MAPENTRY.containing_type = _INT64TOSTRINGMAP
_INT64TOSTRINGMAP.fields_by_name['map'].message_type = _INT64TOSTRINGMAP_MAPENTRY
_STRINGTODOUBLEMAP_MAPENTRY.containing_type = _STRINGTODOUBLEMAP
_STRINGTODOUBLEMAP.fields_by_name['map'].message_type = _STRINGTODOUBLEMAP_MAPENTRY
_INT64TODOUBLEMAP_MAPENTRY.containing_type = _INT64TODOUBLEMAP
_INT64TODOUBLEMAP.fields_by_name['map'].message_type = _INT64TODOUBLEMAP_MAPENTRY
DESCRIPTOR.message_types_by_name['StringToInt64Map'] = _STRINGTOINT64MAP
DESCRIPTOR.message_types_by_name['Int64ToStringMap'] = _INT64TOSTRINGMAP
DESCRIPTOR.message_types_by_name['StringToDoubleMap'] = _STRINGTODOUBLEMAP
DESCRIPTOR.message_types_by_name['Int64ToDoubleMap'] = _INT64TODOUBLEMAP
DESCRIPTOR.message_types_by_name['StringVector'] = _STRINGVECTOR
DESCRIPTOR.message_types_by_name['Int64Vector'] = _INT64VECTOR
DESCRIPTOR.message_types_by_name['FloatVector'] = _FLOATVECTOR
DESCRIPTOR.message_types_by_name['DoubleVector'] = _DOUBLEVECTOR
DESCRIPTOR.message_types_by_name['Int64Range'] = _INT64RANGE
DESCRIPTOR.message_types_by_name['Int64Set'] = _INT64SET
DESCRIPTOR.message_types_by_name['DoubleRange'] = _DOUBLERANGE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

StringToInt64Map = _reflection.GeneratedProtocolMessageType('StringToInt64Map', (_message.Message,), dict(

  MapEntry = _reflection.GeneratedProtocolMessageType('MapEntry', (_message.Message,), dict(
    DESCRIPTOR = _STRINGTOINT64MAP_MAPENTRY,
    __module__ = 'DataStructures_pb2'
    # @@protoc_insertion_point(class_scope:CoreML.Specification.StringToInt64Map.MapEntry)
    ))
  ,
  DESCRIPTOR = _STRINGTOINT64MAP,
  __module__ = 'DataStructures_pb2'
  # @@protoc_insertion_point(class_scope:CoreML.Specification.StringToInt64Map)
  ))
_sym_db.RegisterMessage(StringToInt64Map)
_sym_db.RegisterMessage(StringToInt64Map.MapEntry)

Int64ToStringMap = _reflection.GeneratedProtocolMessageType('Int64ToStringMap', (_message.Message,), dict(

  MapEntry = _reflection.GeneratedProtocolMessageType('MapEntry', (_message.Message,), dict(
    DESCRIPTOR = _INT64TOSTRINGMAP_MAPENTRY,
    __module__ = 'DataStructures_pb2'
    # @@protoc_insertion_point(class_scope:CoreML.Specification.Int64ToStringMap.MapEntry)
    ))
  ,
  DESCRIPTOR = _INT64TOSTRINGMAP,
  __module__ = 'DataStructures_pb2'
  # @@protoc_insertion_point(class_scope:CoreML.Specification.Int64ToStringMap)
  ))
_sym_db.RegisterMessage(Int64ToStringMap)
_sym_db.RegisterMessage(Int64ToStringMap.MapEntry)

StringToDoubleMap = _reflection.GeneratedProtocolMessageType('StringToDoubleMap', (_message.Message,), dict(

  MapEntry = _reflection.GeneratedProtocolMessageType('MapEntry', (_message.Message,), dict(
    DESCRIPTOR = _STRINGTODOUBLEMAP_MAPENTRY,
    __module__ = 'DataStructures_pb2'
    # @@protoc_insertion_point(class_scope:CoreML.Specification.StringToDoubleMap.MapEntry)
    ))
  ,
  DESCRIPTOR = _STRINGTODOUBLEMAP,
  __module__ = 'DataStructures_pb2'
  # @@protoc_insertion_point(class_scope:CoreML.Specification.StringToDoubleMap)
  ))
_sym_db.RegisterMessage(StringToDoubleMap)
_sym_db.RegisterMessage(StringToDoubleMap.MapEntry)

Int64ToDoubleMap = _reflection.GeneratedProtocolMessageType('Int64ToDoubleMap', (_message.Message,), dict(

  MapEntry = _reflection.GeneratedProtocolMessageType('MapEntry', (_message.Message,), dict(
    DESCRIPTOR = _INT64TODOUBLEMAP_MAPENTRY,
    __module__ = 'DataStructures_pb2'
    # @@protoc_insertion_point(class_scope:CoreML.Specification.Int64ToDoubleMap.MapEntry)
    ))
  ,
  DESCRIPTOR = _INT64TODOUBLEMAP,
  __module__ = 'DataStructures_pb2'
  # @@protoc_insertion_point(class_scope:CoreML.Specification.Int64ToDoubleMap)
  ))
_sym_db.RegisterMessage(Int64ToDoubleMap)
_sym_db.RegisterMessage(Int64ToDoubleMap.MapEntry)

StringVector = _reflection.GeneratedProtocolMessageType('StringVector', (_message.Message,), dict(
  DESCRIPTOR = _STRINGVECTOR,
  __module__ = 'DataStructures_pb2'
  # @@protoc_insertion_point(class_scope:CoreML.Specification.StringVector)
  ))
_sym_db.RegisterMessage(StringVector)

Int64Vector = _reflection.GeneratedProtocolMessageType('Int64Vector', (_message.Message,), dict(
  DESCRIPTOR = _INT64VECTOR,
  __module__ = 'DataStructures_pb2'
  # @@protoc_insertion_point(class_scope:CoreML.Specification.Int64Vector)
  ))
_sym_db.RegisterMessage(Int64Vector)

FloatVector = _reflection.GeneratedProtocolMessageType('FloatVector', (_message.Message,), dict(
  DESCRIPTOR = _FLOATVECTOR,
  __module__ = 'DataStructures_pb2'
  # @@protoc_insertion_point(class_scope:CoreML.Specification.FloatVector)
  ))
_sym_db.RegisterMessage(FloatVector)

DoubleVector = _reflection.GeneratedProtocolMessageType('DoubleVector', (_message.Message,), dict(
  DESCRIPTOR = _DOUBLEVECTOR,
  __module__ = 'DataStructures_pb2'
  # @@protoc_insertion_point(class_scope:CoreML.Specification.DoubleVector)
  ))
_sym_db.RegisterMessage(DoubleVector)

Int64Range = _reflection.GeneratedProtocolMessageType('Int64Range', (_message.Message,), dict(
  DESCRIPTOR = _INT64RANGE,
  __module__ = 'DataStructures_pb2'
  # @@protoc_insertion_point(class_scope:CoreML.Specification.Int64Range)
  ))
_sym_db.RegisterMessage(Int64Range)

Int64Set = _reflection.GeneratedProtocolMessageType('Int64Set', (_message.Message,), dict(
  DESCRIPTOR = _INT64SET,
  __module__ = 'DataStructures_pb2'
  # @@protoc_insertion_point(class_scope:CoreML.Specification.Int64Set)
  ))
_sym_db.RegisterMessage(Int64Set)

DoubleRange = _reflection.GeneratedProtocolMessageType('DoubleRange', (_message.Message,), dict(
  DESCRIPTOR = _DOUBLERANGE,
  __module__ = 'DataStructures_pb2'
  # @@protoc_insertion_point(class_scope:CoreML.Specification.DoubleRange)
  ))
_sym_db.RegisterMessage(DoubleRange)


DESCRIPTOR.has_options = True
DESCRIPTOR._options = _descriptor._ParseOptions(descriptor_pb2.FileOptions(), _b('H\003'))
_STRINGTOINT64MAP_MAPENTRY.has_options = True
_STRINGTOINT64MAP_MAPENTRY._options = _descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001'))
_INT64TOSTRINGMAP_MAPENTRY.has_options = True
_INT64TOSTRINGMAP_MAPENTRY._options = _descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001'))
_STRINGTODOUBLEMAP_MAPENTRY.has_options = True
_STRINGTODOUBLEMAP_MAPENTRY._options = _descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001'))
_INT64TODOUBLEMAP_MAPENTRY.has_options = True
_INT64TODOUBLEMAP_MAPENTRY._options = _descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001'))
# @@protoc_insertion_point(module_scope)
