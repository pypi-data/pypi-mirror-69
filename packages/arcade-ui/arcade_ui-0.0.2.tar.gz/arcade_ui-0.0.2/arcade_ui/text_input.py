from typing import Optional, Tuple, Union

import arcade

from arcade_ui.widgets import InteractiveWidget, _widgets


class TextInput(InteractiveWidget):
    __widget_name__ = 'text_input'

    def __init__(
        self,
        center_x: float,
        center_y: float,
        width: float = 300,
        height: float = 25,
        fill_color: Union[Tuple[int, int, int], Tuple[int, int, int, int]] = arcade.color.WHITE,
        border_color: Union[Tuple[int, int, int], Tuple[int, int, int, int]] = arcade.color.BLACK,
        border_width: float = 1,
        text_color: Union[Tuple[int, int, int], Tuple[int, int, int, int]] = arcade.color.BLACK,
        bold: bool = False,
        italic: bool = False,
        font_name: Union[str, Tuple[str, ...]] = ('calibri', 'arial'),
        font_size: float = 12,
        horizontal_margin: float = 5,
        vertical_margin: float = 5,
        cursor_color: Union[Tuple[int, int, int], Tuple[int, int, int, int]] = arcade.color.BLACK,
        protected: bool = False
    ) -> None:
        self.center_x = center_x
        self.center_y = center_y

        self.width = width
        self.height = height

        self.fill_color = fill_color
        self.border_color = border_color
        self.border_width = border_width

        self.text = ''
        self.text_color = text_color
        self.bold = bold
        self.italic = italic
        self.font_name = font_name
        self.font_size = font_size

        self.horizontal_margin = horizontal_margin
        self.vertical_margin = vertical_margin

        self.shapes = arcade.ShapeElementList()
        self.shapes.append(
            arcade.create_rectangle_filled(
                center_x=center_x,
                center_y=center_y,
                width=width,
                height=height,
                color=fill_color
            ),
        )
        self.shapes.append(
            arcade.create_rectangle_outline(
                center_x=center_x,
                center_y=center_y,
                width=width,
                height=height,
                color=border_color,
                border_width=border_width
            )
        )

        self.text_sprites = arcade.SpriteList()
        self.text_sprites.append(
            arcade.draw_text(
                text='',
                start_x=center_x - (width / 2) + horizontal_margin,
                start_y=center_y - (height / 2) + vertical_margin,
                color=text_color,
                font_name=self.font_name,
                font_size=font_size,
                bold=bold,
                italic=italic
            )
        )

        self.cursor = arcade.create_rectangle_filled(
            center_x=center_x - (width / 2) + horizontal_margin,
            center_y=center_y - (height / 2) + vertical_margin + self.text_sprites[0].height / 2,
            width=1,
            height=self.text_sprites[0].height,
            color=self.fill_color
        )

        self.cursor_color = cursor_color
        self.prev_cursor_idx = 0
        self.cursor_idx = 0

        self.cursor_is_active = False
        self._cursor_blink_delta = 0

        self.active = False

        self._current_key_pressed = None
        self._key_hold_delta = 0

        self.protected = protected

        self.caps_lock = False

        self.KEY_SHIFTS = {
            arcade.key.GRAVE: arcade.key.ASCIITILDE,
            arcade.key.KEY_2: arcade.key.AT,
            arcade.key.KEY_6: arcade.key.ASCIICIRCUM,
            arcade.key.KEY_7: arcade.key.AMPERSAND,
            arcade.key.KEY_8: arcade.key.ASTERISK,
            arcade.key.KEY_9: arcade.key.PARENLEFT,
            arcade.key.KEY_0: arcade.key.PARENRIGHT,
            arcade.key.MINUS: arcade.key.UNDERSCORE,
            arcade.key.EQUAL: arcade.key.PLUS,
            arcade.key.BRACKETLEFT: arcade.key.BRACELEFT,
            arcade.key.BRACKETRIGHT: arcade.key.BRACERIGHT,
            arcade.key.BACKSLASH: arcade.key.BAR,
            arcade.key.SEMICOLON: arcade.key.COLON,
            arcade.key.APOSTROPHE: arcade.key.DOUBLEQUOTE,
            arcade.key.COMMA: arcade.key.LESS,
            arcade.key.PERIOD: arcade.key.GREATER,
            arcade.key.SLASH: arcade.key.QUESTION
        }

        self.KEY_NUMS = {
            arcade.key.NUM_1: arcade.key.KEY_1,
            arcade.key.NUM_2: arcade.key.KEY_2,
            arcade.key.NUM_3: arcade.key.KEY_3,
            arcade.key.NUM_4: arcade.key.KEY_4,
            arcade.key.NUM_5: arcade.key.KEY_5,
            arcade.key.NUM_6: arcade.key.KEY_6,
            arcade.key.NUM_7: arcade.key.KEY_7,
            arcade.key.NUM_8: arcade.key.KEY_8,
            arcade.key.NUM_9: arcade.key.KEY_9,
            arcade.key.NUM_0: arcade.key.KEY_0,
            arcade.key.NUM_DIVIDE: arcade.key.SLASH,
            arcade.key.NUM_MULTIPLY: arcade.key.ASTERISK,
            arcade.key.NUM_SUBTRACT: arcade.key.MINUS,
            arcade.key.NUM_ADD: arcade.key.PLUS,
            arcade.key.NUM_DECIMAL: arcade.key.PERIOD
        }

    @property
    def cursor_pos(self) -> Tuple[float, float]:
        center_x = self.center_x - (self.width / 2) + self.horizontal_margin + \
                sum(text_sprite.width for text_sprite in self.text_sprites[:self.cursor_idx]) + 1

        center_y = self.center_y - (self.height / 2) + self.vertical_margin + \
            self.text_sprites[0].height / 2

        return center_x, center_y

    def set_cursor(self, center_x: float, center_y: float, alpha: int) -> None:
        color = self.cursor_color if len(self.cursor_color) == 3 else self.cursor_color[:-1]
        self.cursor = arcade.create_rectangle_filled(
            center_x=center_x,
            center_y=center_y,
            width=1,
            height=self.text_sprites[self.cursor_idx].height,
            color=(*color, alpha)
        )

    def draw_text_at_cursor(self, text: str) -> None:
        display_text = '*' if self.protected else text

        start_x = self.center_x - (self.width / 2) + self.horizontal_margin + \
            sum(text_sprite.width for text_sprite in self.text_sprites[:self.cursor_idx])

        start_y = self.center_y - (self.height / 2) + self.vertical_margin

        text_sprite = arcade.draw_text(
            text=display_text,
            start_x=start_x,
            start_y=start_y,
            color=self.text_color,
            font_name=self.font_name,
            font_size=self.font_size,
            bold=self.bold,
            italic=self.italic
        )

        if (
            sum(sprite.width for sprite in self.text_sprites) + text_sprite.width >
            self.width - self.horizontal_margin * 2
        ):
            return

        self.text = self.text[:self.cursor_idx] + text + self.text[self.cursor_idx:]

        for sprite in self.text_sprites[self.cursor_idx:]:
            sprite.center_x += text_sprite.width

        self.text_sprites.insert(self.cursor_idx, text_sprite)
        self.cursor_idx += 1

        # Prevent the use of the same instance
        # A new version of Arcade will be released with a caching parameter
        # for arcade.draw_text to set caching on/off
        arcade.text.draw_text_cache.clear()

    def clear_text(self) -> None:
        self.text = ''

        for _ in range(len(self.text_sprites)):
            self.text_sprites.pop()

        self.cursor_idx = 0
        self.draw_text_at_cursor('')
        self.cursor_idx = 0

    def delete_text(self, idx: int) -> None:
        self.text = self.text[:idx] + self.text[idx + 1:]
        old_sprite = self.text_sprites.pop(idx)

        for sprite in self.text_sprites[idx:]:
            sprite.center_x -= old_sprite.width

    def move_cursor(self) -> bool:
        if self.prev_cursor_idx != self.cursor_idx:
            self.set_cursor(*self.cursor_pos, 255)
            self.prev_cursor_idx = self.cursor_idx

            return True

        return False

    def on_mouse_press(self, x: float, y: float, button: int, modifiers: int) -> None:
        if (
            self.center_x - self.width / 2 < x < self.center_x + self.width / 2 and
            self.center_y - self.height / 2 < y < self.center_y + self.height / 2
        ):
            for idx, text_sprite in enumerate(self.text_sprites):
                if text_sprite.left <= x <= text_sprite.right:
                    self.cursor_idx = idx
                    break

            self.active = True

        else:
            self.active = False

    def on_key_press(self, key: int, modifiers: int) -> Optional[StopIteration]:
        if not self.active:
            return

        if key == arcade.key.TAB:
            self.active = False
            widgets = _widgets[self.widget_name]

            idx = widgets.index(self)
            widgets[(idx + 1) % len(widgets)].active = True
            return StopIteration

        self._current_key_pressed = (key, modifiers)
        self.process_key(key, modifiers)

    def on_key_release(self, key: int, modifiers: int) -> None:
        self._current_key_pressed = None

    def process_key(self, key: int, modifiers: int) -> None:
        if key == arcade.key.CAPSLOCK:
            self.caps_lock = not self.caps_lock

        elif arcade.key.SPACE <= key <= arcade.key.ASCIITILDE:
            if modifiers & 1 == arcade.key.MOD_SHIFT:
                key_shift = self.KEY_SHIFTS.get(key)

                if key_shift is not None:
                    key = key_shift
                elif 97 <= key <= 122:
                    if not self.caps_lock:
                        key -= 32
                else:
                    if not self.caps_lock:
                        key -= 16

            elif self.caps_lock:
                if 97 <= key <= 122:
                    key -= 32
                else:
                    key -= 16

            self.draw_text_at_cursor(chr(key))

        elif arcade.key.NUM_MULTIPLY <= key <= arcade.key.NUM_9:
            self.draw_text_at_cursor(chr(self.KEY_NUMS[key]))

        elif key == arcade.key.BACKSPACE:
            if len(self.text) > 0:
                self.delete_text(self.cursor_idx - 1)
                self.cursor_idx -= 1

        elif key == arcade.key.DELETE:
            if self.cursor_idx < len(self.text):
                self.delete_text(self.cursor_idx)

        elif key == arcade.key.LEFT:
            if self.cursor_idx > 0:
                self.cursor_idx -= 1

        elif key == arcade.key.RIGHT:
            if self.cursor_idx < len(self.text):
                self.cursor_idx += 1

        elif key == arcade.key.ENTER:
            self.on_enter(self.text)

    def on_enter(self, text: str) -> None:
        pass

    def move(self, delta_x: float, delta_y: float) -> None:
        self.center_x += delta_x
        self.center_y += delta_y

        self.shapes.move(delta_x, delta_y)
        self.text_sprites.move(delta_x, delta_y)

    def draw(self) -> None:
        self.shapes.draw()
        self.text_sprites.draw()

        if self.active:
            self.cursor.draw()

    def on_update(self, delta_time: float = 1/60) -> None:
        if not self.active:
            return

        if self.move_cursor():
            return

        self._cursor_blink_delta += delta_time
        self._key_hold_delta += delta_time

        if self._cursor_blink_delta > 0.5:

            if self.cursor_is_active:
                alpha = 0
                self.cursor_is_active = False

            else:
                alpha = 255
                self.cursor_is_active = True

            self.set_cursor(*self.cursor_pos, alpha)
            self._cursor_blink_delta = 0

        if self._current_key_pressed is not None:

            if self._key_hold_delta > 0.25:

                if self._key_hold_delta > 0.3:
                    self.process_key(*self._current_key_pressed)
                    self._key_hold_delta = 0.25

        else:
            self._key_hold_delta = 0
