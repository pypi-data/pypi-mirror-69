#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#   ZX Spectrum Emulator.
#   https://github.com/kosarev/zx
#
#   Copyright (C) 2017-2020 Ivan Kosarev.
#   ivan@kosarev.info
#
#   Published under the MIT license.

import time
from ._data import MachineSnapshot
from ._data import SoundFile
from ._device import DeviceEvent
from ._error import Error
from ._except import EmulationExit
from ._file import parse_file
from ._gui import ScreenWindow
from ._keyboard import KeyboardState
from ._keyboard import KEYS_INFO
from ._machine import RunEvents
from ._machine import Spectrum48
from ._rzx import RZXFile
from ._tape import TapePlayer
from ._time import Time
from ._z80snapshot import Z80SnapshotFormat
from ._zxb import ZXBasicCompilerProgram


# TODO: Rework to a time machine interface.
class PlaybackPlayer(object):
    def __init__(self, file):
        assert isinstance(file, RZXFile)
        self._recording = file

    def find_recording_info_chunk(self):
        for chunk in self._recording['chunks']:
            if chunk['id'] == 'info':
                return chunk
        assert 0  # TODO

    def get_chunks(self):
        return self._recording['chunks']


class Emulator(object):
    _SPIN_V0P5_INFO = {'id': 'info',
                       'creator': b'SPIN 0.5            ',
                       'creator_major_version': 0,
                       'creator_minor_version': 5}

    def __init__(self, speed_factor=1.0, profile=None, devices=None):
        # TODO: Double-underscore or make public.
        self._emulation_time = Time()
        self.__speed_factor = speed_factor

        self.__is_paused_flag = False
        self.__events_to_signal = RunEvents.NO_EVENTS

        # Don't even create the window on full throttle.
        self.__devices = devices if devices is not None else []
        if devices is None and self.__speed_factor is not None:
            self.__devices = [ScreenWindow(self)]

        self.__machine = Spectrum48()

        self.__keyboard_state = KeyboardState()
        self.__machine.set_on_input_callback(self.__on_input)

        # TODO: Double-underscore or make public.
        self._tape_player = TapePlayer()

        self.__playback_player = None
        self.__playback_samples = None

        self.__profile = profile
        if self.__profile:
            self.__machine.set_breakpoints(0, 0x10000)

    def __enter__(self):
        return self

    def destroy(self):
        for device in self.__devices:
            device.destroy()

    def __exit__(self, type, value, tb):
        self.destroy()

    # TODO: Double-underscore or make public.
    def _is_paused(self):
        return self.__is_paused_flag

    def __notify(self, id, *args):
        for device in self.__devices:
            device._on_emulator_event(id, *args)

    # TODO: Double-underscore or make public.
    def _pause(self, is_paused=True):
        self.__is_paused_flag = is_paused
        self.__notify(DeviceEvent.PAUSE_STATE_UPDATED)

    # TODO: Double-underscore or make public.
    def _toggle_pause(self):
        self._pause(not self._is_paused())

    # TODO: Double-underscore or make public.
    def _save_snapshot_file(self, format, filename):
        with open(filename, 'wb') as f:
            snapshot = format().make_snapshot(self.__machine)
            # TODO: make_snapshot() shall always return a snapshot object.
            if issubclass(type(snapshot), MachineSnapshot):
                image = snapshot.get_file_image()
            else:
                image = snapshot
            f.write(image)

    def stop(self):
        raise EmulationExit()

    # TODO: Double-underscore or make public.
    def _is_tape_paused(self):
        return self._tape_player.is_paused()

    def __pause_tape(self, is_paused=True):
        self._tape_player.pause(is_paused)
        self.__notify(DeviceEvent.TAPE_STATE_UPDATED)

    def __unpause_tape(self):
        self.__pause_tape(is_paused=False)

    def _toggle_tape_pause(self):
        self.__pause_tape(not self._is_tape_paused())

    def __load_tape_to_player(self, file):
        self._tape_player.load_tape(file)
        self.__pause_tape()

    def __is_end_of_tape(self):
        return self._tape_player.is_end()

    # TODO: Double-underscore or make public.
    def _handle_key_stroke(self, key_info, pressed):
        self.__keyboard_state.handle_key_stroke(key_info, pressed)

    def __translate_key_strokes(self, keys):
        for key in keys:
            if isinstance(key, int):
                yield from str(key)
            else:
                yield key

    def __generate_key_strokes(self, *keys):
        for key in self.__translate_key_strokes(keys):
            strokes = key.split('+')
            # print(strokes)

            for id in strokes:
                # print(id)
                self._handle_key_stroke(KEYS_INFO[id], pressed=True)
                self.__run(0.05)

            for id in reversed(strokes):
                # print(id)
                self._handle_key_stroke(KEYS_INFO[id], pressed=False)
                self.__run(0.05)

    def __on_input(self, addr):
        # Handle playbacks.
        if self.__playback_samples:
            sample = None
            for sample in self.__playback_samples:
                break

            if sample == 'END_OF_FRAME':
                raise Error(
                    'Too few input samples at frame %d of %d. '
                    'Given %d, used %d.' % (
                        self.playback_frame_count,
                        len(self.playback_chunk['frames']),
                        len(self.__playback_samples), sample_i),
                    id='too_few_input_samples')

            # print('__on_input() returns %d' % sample)
            return sample

        # Scan keyboard.
        n = 0xbf
        n &= self.__keyboard_state.read_port(addr)

        # TODO: Use the tick when the ear value is sampled
        #       instead of the tick of the beginning of the input
        #       cycle.
        tick = self.__machine.get_ticks_since_int()
        if self._tape_player.get_level_at_frame_tick(tick):
            n |= 0x40

        END_OF_TAPE = RunEvents.END_OF_TAPE
        if END_OF_TAPE in self.__events_to_signal and self.__is_end_of_tape():
            self.__machine.raise_events(END_OF_TAPE)
            self.__events_to_signal &= ~END_OF_TAPE

        # print('0x%04x 0x%02x' % (addr, n))

        return n

    def __save_crash_rzx(self, player, state, chunk_i, frame_i):
        snapshot = Z80SnapshotFormat().make(state)

        crash_recording = {
            'id': 'input_recording',
            'chunks': [
                player.find_recording_info_chunk(),
                {
                    'id': 'snapshot',
                    'image': snapshot,
                },
                {
                    'id': 'port_samples',
                    'first_tick': 0,
                    'frames': recording['chunks'][chunk_i]['frames'][frame_i:],
                },
            ],
        }

        with open('__crash.z80', 'wb') as f:
            f.write(snapshot)

        with open('__crash.rzx', 'wb') as f:
            f.write(make_rzx(crash_recording))

    def __enter_playback_mode(self):
        # Interrupts are supposed to be controlled by the
        # recording.
        self.__machine.suppress_int()
        self.__machine.allow_int_after_ei()
        # self.__machine.enable_trace()

    # TODO: Double-underscore or make public.
    def _quit_playback_mode(self):
        self.__playback_player = None
        self.__playback_samples = None

        self.__machine.suppress_int(False)
        self.__machine.allow_int_after_ei(False)

    def __get_playback_samples(self):
        # TODO: Have a class describing playback state.
        self.playback_frame_count = 0
        self.playback_chunk = 0
        self.playback_sample_values = []
        self.playback_sample_i = 0

        frame_count = 0
        for chunk_i, chunk in enumerate(self.__playback_player.get_chunks()):
            if isinstance(chunk, MachineSnapshot):
                self.__machine.install_snapshot(chunk)
                continue

            if chunk['id'] != 'port_samples':
                continue

            self.__machine.set_ticks_since_int(chunk['first_tick'])

            for frame_i, frame in enumerate(chunk['frames']):
                num_of_fetches, samples = frame
                # print(num_of_fetches, samples)

                self.__machine.set_fetches_limit(num_of_fetches)
                # print(num_of_fetches, samples, flush=True)

                # print('START_OF_FRAME', flush=True)
                yield 'START_OF_FRAME'

                for sample_i, sample in enumerate(samples):
                    # print(self.__machine.get_fetches_limit())
                    # fetch = num_of_fetches -
                    #         self.__machine.get_fetches_limit()
                    # print('Input at fetch', fetch, 'of', num_of_fetches)
                    # TODO: print('read_port 0x%04x 0x%02x' % (addr, n),
                    #             flush=True)

                    # TODO: Have a class describing playback state.
                    self.playback_frame_count = frame_count
                    self.playback_chunk = chunk
                    self.playback_sample_values = samples
                    self.playback_sample_i = sample_i
                    # print(frame_count, chunk_i, frame_i, sample_i, sample,
                    #       flush=True)

                    yield sample

                # print('END_OF_FRAME', flush=True)
                yield 'END_OF_FRAME'

                frame_count += 1

    def __run_quantum(self):
        if self.__playback_player:
            creator_info = self.__playback_player.find_recording_info_chunk()

        if True:  # TODO
            self.__notify(DeviceEvent.QUANTUM_RUN)

            # TODO: For debug purposes.
            '''
            frame_count += 1
            if frame_count == -12820:
                frame_state = self.__machine.clone()
                self.__save_crash_rzx(player, frame_state, chunk_i, frame_i)
                assert 0

            if frame_count == -65952 - 1000:
                self.__machine.enable_trace()
            '''

            if self._is_paused():
                # Give the CPU some spare time.
                if self.__speed_factor:
                    time.sleep((1 / 50) * self.__speed_factor)
                return

            events = RunEvents(self.__machine.run())
            # TODO: print(events)

            if RunEvents.BREAKPOINT_HIT in events:
                self.on_breakpoint()

                if self.__profile:
                    pc = self.__machine.get_pc()
                    self.__profile.add_instr_addr(pc)

                # SPIN v0.5 skips executing instructions
                # of the bytes-saving ROM procedure in
                # fast save mode.
                if (self.__playback_samples and
                        creator_info == self._SPIN_V0P5_INFO and
                        self.__machine.get_pc() == 0x04d4):
                    sp = self.__machine.get_sp()
                    ret_addr = self.__machine.read16(sp)
                    self.__machine.set_sp(sp + 2)
                    self.__machine.set_pc(ret_addr)

            if RunEvents.END_OF_FRAME in events:
                self.__machine.render_screen()

                pixels = self.__machine.get_frame_pixels()
                self.__notify(DeviceEvent.SCREEN_UPDATED, pixels)

                self._tape_player.skip_rest_of_frame()
                self._emulation_time.advance(1 / 50)

                if self.__speed_factor:
                    time.sleep((1 / 50) * self.__speed_factor)

            if (self.__playback_samples and
                    RunEvents.FETCHES_LIMIT_HIT in events):
                # Some simulators, e.g., SPIN, may store an interrupt
                # point in the middle of a IX- or IY-prefixed
                # instruction, so we continue until such
                # instruction, if any, is completed.
                if self.__machine.get_iregp_kind() != 'hl':
                    self.__machine.set_fetches_limit(1)
                    return

                # SPIN doesn't update the fetch counter if the last
                # instruction in frame is IN.
                if (self.__playback_samples and
                        creator_info == self._SPIN_V0P5_INFO and
                        self.playback_sample_i + 1 <
                        len(self.playback_sample_values)):
                    self.__machine.set_fetches_limit(1)
                    return

                sample = None
                for sample in self.__playback_samples:
                    break
                if sample != 'END_OF_FRAME':
                    raise Error(
                        'Too many input samples at frame %d of %d. '
                        'Given %d, used %d.' % (
                            self.playback_frame_count,
                            len(self.playback_chunk['frames']),
                            len(self.__playback_samples),
                            self.playback_sample_i + 1),
                        id='too_many_input_samples')

                sample = None
                for sample in self.__playback_samples:
                    break
                if sample is None:
                    self.stop()
                    return

                assert sample == 'START_OF_FRAME'
                self.__machine.on_handle_active_int()

    def __run(self, duration):
        end_time = self._emulation_time.get() + duration
        while self._emulation_time.get() < end_time:
            self.__run_quantum()

    def run(self):
        # TODO: Remove this 'try', and let the exception to
        # propagate further.
        try:
            while True:
                self.__run_quantum()

            self._quit_playback_mode()
        except EmulationExit:
            pass

    def __load_input_recording(self, file):
        self.__playback_player = PlaybackPlayer(file)
        creator_info = self.__playback_player.find_recording_info_chunk()

        # SPIN v0.5 alters ROM to implement fast tape loading,
        # but that affects recorded RZX files.
        if creator_info == self._SPIN_V0P5_INFO:
            self.__machine.set_memory_block(0x1f47, b'\xf5')

        # The bytes-saving ROM procedure needs special processing.
        self.__machine.set_breakpoint(0x04d4)

        # Process frames in order.
        self.__playback_samples = self.__get_playback_samples()
        sample = None
        for sample in self.__playback_samples:
            break
        assert sample == 'START_OF_FRAME'

    def __reset_and_wait(self):
        self.__machine.set_pc(0x0000)
        self.__run(1.8)

    def __load_zx_basic_compiler_program(self, file):
        assert isinstance(file, ZXBasicCompilerProgram)

        self.__reset_and_wait()

        # CLEAR <entry_point>
        entry_point = file['entry_point']
        self.__generate_key_strokes('X', entry_point, 'ENTER')

        self.__machine.set_memory_block(entry_point, file['program_bytes'])

        # RANDOMIZE USR <entry_point>
        self.__generate_key_strokes('T', 'CS+SS', 'L', entry_point, 'ENTER')

        # assert 0, list(file)

    # TODO: Double-underscore or make public.
    def _load_file(self, filename):
        file = parse_file(filename)

        if isinstance(file, MachineSnapshot):
            self.__machine.install_snapshot(file)
        elif isinstance(file, RZXFile):
            self.__load_input_recording(file)
            self.__enter_playback_mode()
        elif isinstance(file, SoundFile):
            self.__load_tape_to_player(file)
        elif isinstance(file, ZXBasicCompilerProgram):
            self.__load_zx_basic_compiler_program(file)
        else:
            raise Error("Don't know how to load file %r." % filename)

    # TODO: Double-underscore or make public.
    def _run_file(self, filename):
        self._load_file(filename)
        self.run()

    def load_tape(self, filename):
        tape = parse_file(filename)
        if not isinstance(tape, SoundFile):
            raise Error('%r does not seem to be a tape file.' % filename)

        # Let the initialization complete.
        self.__reset_and_wait()

        # Type in 'LOAD ""'.
        self.__generate_key_strokes('J', 'SS+P', 'SS+P', 'ENTER')

        # Load and run the tape.
        self.__load_tape_to_player(tape)
        self.__unpause_tape()

        # Wait till the end of the tape.
        self.__events_to_signal |= RunEvents.END_OF_TAPE
        while not self.__is_end_of_tape():
            self.__run_quantum()

    def set_breakpoint(self, addr):
        self.__machine.set_breakpoint(addr)

    def on_breakpoint(self):
        pass

    def get_memory_view(self, addr, size):
        return self.__machine.get_memory_block(addr, size)
