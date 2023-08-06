# -*- coding: utf-8 -*-

#   ZX Spectrum Emulator.
#   https://github.com/kosarev/zx
#
#   Copyright (C) 2017-2019 Ivan Kosarev.
#   ivan@kosarev.info
#
#   Published under the MIT license.

from ._utils import tupilize


class KeyInfo(object):
    def __init__(self, id, index):
        self.ID = id
        self.INDEX = index  # Left to right, then top to bottom.
        halfrow_index = index // 5
        index_in_halfrow = index % 5
        is_leftside = halfrow_index % 2 == 0

        # Compute port address lines and bit positions.
        if is_leftside:
            self.ADDRESS_LINE = 11 - halfrow_index // 2
            self.PORT_BIT = index_in_halfrow
        else:
            self.ADDRESS_LINE = halfrow_index // 2 + 12
            self.PORT_BIT = 4 - index_in_halfrow


_KEY_IDS = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'ENTER',
    ('CAPS SHIFT', 'CS'), 'Z', 'X', 'C', 'V',
    'B', 'N', 'M', ('SYMBOL SHIFT', 'SS'), ('BREAK SPACE', 'SPACE')]

KEYS_INFO = dict()
for index, ids in enumerate(_KEY_IDS):
    ids = tupilize(ids)
    id, *aliases = ids
    info = KeyInfo(id, index)
    for i in ids:
        KEYS_INFO[i] = info


class KeyboardState(object):
    _state = [0xff] * 8

    def read_port(self, addr):
        n = 0xff
        addr ^= 0xffff

        if addr & (1 << 8):
            n &= self._state[0]
        if addr & (1 << 9):
            n &= self._state[1]
        if addr & (1 << 10):
            n &= self._state[2]
        if addr & (1 << 11):
            n &= self._state[3]
        if addr & (1 << 12):
            n &= self._state[4]
        if addr & (1 << 13):
            n &= self._state[5]
        if addr & (1 << 14):
            n &= self._state[6]
        if addr & (1 << 15):
            n &= self._state[7]

        return n

    def handle_key_stroke(self, key_info, pressed):
        # print(key_info.id)
        addr_line = key_info.ADDRESS_LINE
        mask = 1 << key_info.PORT_BIT

        if pressed:
            self._state[addr_line - 8] &= mask ^ 0xff
        else:
            self._state[addr_line - 8] |= mask
