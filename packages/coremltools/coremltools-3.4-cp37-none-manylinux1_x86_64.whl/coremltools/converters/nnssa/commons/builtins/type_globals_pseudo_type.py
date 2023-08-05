# -*- coding: utf-8 -*-
from __future__ import print_function as _
from __future__ import division as _
from __future__ import absolute_import as _
from .annotate import class_annotate, annotate, delay_type
from .type_spec import *


class globals_pseudo_type:
    @classmethod
    def __type_info__(cls):
        return Type("globals", python_class=cls)
