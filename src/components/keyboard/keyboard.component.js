import React from 'react';

import KeyboardRow from '../keyboard-row/keyboard-row.component';

import KEYBOARD_DATA from './keyboard.data';

import KeyboardContainer from './keyboard.styles';


const Keyboard = () => (
  <KeyboardContainer>
    {
      KEYBOARD_DATA.rows.map((row, i) => <KeyboardRow key={i} row={row} />)
    }
  </KeyboardContainer>
);

export default Keyboard;