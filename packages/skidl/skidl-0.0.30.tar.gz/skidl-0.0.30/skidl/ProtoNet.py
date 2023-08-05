# -*- coding: utf-8 -*-

# MIT license
#
# Copyright (C) 2020 by XESS Corp.
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.
"""
Prototype of a net which can become a Net or a Bus depending upon what is connected to it.
"""

from __future__ import absolute_import, division, print_function, unicode_literals

from builtins import range, super

from future import standard_library

from .baseobj import SkidlBaseObject
from .logger import logger
from .Net import Net
from .Network import Network
from .Pin import Pin
from .utilities import *

standard_library.install_aliases()

try:
    import __builtin__ as builtins
except ImportError:
    import builtins


class ProtoNet(SkidlBaseObject):
    def __init__(self, name=None, circuit=None):
        super().__init__()
        self.name = name
        if not circuit:
            circuit = builtins.default_circuit
        self.circuit = circuit

    def __iadd__(self, *nets_pins_buses):
        from .Bus import Bus

        nets_pins = []
        for item in expand_buses(flatten(nets_pins_buses)):
            if isinstance(item, (Pin, Net)):
                nets_pins.append(item)
            else:
                log_and_raise(
                    logger,
                    ValueError,
                    "Can't make connections to a {} ({}).".format(
                        type(item), item.__name__
                    ),
                )

        sz = len(nets_pins)
        if sz == 0:
            log_and_raise(
                logger,
                ValueError,
                "Connecting empty set of pins, nets, busses to a {}".format(
                    self.__class__.__name__
                ),
            )
        else:
            if sz == 1:
                cnct = Net(self.name, circuit=self.circuit)
            else:
                cnct = Bus(self.name, sz, circuit=self.circuit)
            cnct.iadd_flag = True
            try:
                cnct.intfc_key = self.intfc_key
                self.intfc[self.intfc_key] = cnct
            except AttributeError:
                pass
            cnct += nets_pins
            return cnct

    def __len__(self):
        # ProtoNets never have attached pins because then they would become Nets.
        return 0

    def create_network(self):
        """Create a network from a single ProtoNet."""

        self += Net()  # Turn ProtoNet into a Net.
        ntwk = Network()
        ntwk.append(self)
        return ntwk

    def __and__(self, obj):
        """Attach a net and another part/pin/net in serial."""

        return Network(self) & obj

    def __rand__(self, obj):
        """Attach a net and another part/pin/net in serial."""

        return obj & Network(self)

    def __or__(self, obj):
        """Attach a net and another part/pin/net in parallel."""

        return Network(self) | obj

    def __ror__(self, obj):
        """Attach a net and another part/pin/net in parallel."""

        return obj | Network(self)

    def __iter__(self):
        """
        Return an iterator for stepping through the ProtoNet.
        """
        # You can only iterate a ProtoNet one time.
        return (self for _ in [self])  # Return generator expr.
