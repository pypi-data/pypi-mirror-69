#! /usr/bin/env python
# -*- coding: utf-8 -*-
# vim:fenc=utf-8
#
#  Copyright © 2020 The DeePray Authors. All Rights Reserved.
#
#  Distributed under terms of the GNU license.
#  ==============================================================================


"""
Author:
    Hailin Fu, hailinfufu@outlook.com
"""

from absl import flags

from deepray.base.layers.interactions import CrossNet
from deepray.model.model_ctr import BaseCTRModel

FLAGS = flags.FLAGS

flags.DEFINE_integer("cross_layers", 3, "number of cross layers")
flags.DEFINE_bool("cross_bias", False, "use_bias in cross")
flags.DEFINE_bool("sparse_cross", False, "sparse weights for cross")


class DeepCrossModel(BaseCTRModel):

    def __init__(self, flags):
        super().__init__(flags)
        self.NUM_POSITIONS = 100

    def build(self, input_shape):
        hidden = [int(h) for h in self.flags.deep_layers.split(',')]
        self.deep_block = self.build_deep(hidden=hidden)
        self.cross_block = self.build_cross(num_layers=self.flags.cross_layers)

    def build_network(self, features, is_training=None):
        """
        Deep & cross model

            cross: BN(log(dense)) + embedding

            deep: BN(log(dense)) + embedding
        """
        deep_out = self.deep_block(features, is_training=is_training)
        cross_out = self.cross_block(features, is_training=is_training)
        v = self.concat([deep_out, cross_out])
        return v

    def build_cross(self, num_layers=3):
        return CrossNet(num_layers,
                        use_bias=self.flags.cross_bias,
                        sparse=self.flags.sparse_cross, flags=self.flags)
