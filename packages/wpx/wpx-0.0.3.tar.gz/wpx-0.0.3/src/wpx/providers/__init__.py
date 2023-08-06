# -*- coding: utf8 -*-
# Copyright (c) 2020 Niklas Rosenstein
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to
# deal in the Software without restriction, including without limitation the
# rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
# sell copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
# FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
# IN THE SOFTWARE.

from nr.interface import attr, Interface
from nr.databind.core import SerializeAs, UnionType
from typing import BinaryIO, ContextManager

ENTRYPOINT = 'wpx.providers'


class IImage(Interface):
  """ Represents an image from an #IImageProvider. """

  filename = attr(str)

  def open(self) -> ContextManager[BinaryIO]:
    pass


@SerializeAs(UnionType.with_entrypoint_resolver(ENTRYPOINT))
class IImageProvider(Interface):
  """ An interface that describes a provider for images. Image providers must
  be deserializable with the #nr.databind.json module and thus are typically
  subclasses of #nr.databind.core.Struct. """

  def get_daily_image(self) -> IImage:
    pass

  def get_random_image(self) -> IImage:
    pass
