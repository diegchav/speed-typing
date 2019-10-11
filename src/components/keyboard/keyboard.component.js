import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import KeyboardRow from '../keyboard-row/keyboard-row.component';

import { pressKey, unpressKey } from '../../redux/typing/typing.actions';

import KEYBOARD_DATA from './keyboard.data';

import KeyboardContainer from './keyboard.styles';


const Keyboard = ({ pressKey, unpressKey }) => {
  useEffect(() => {
    const handleKeyUp = e => unpressKey();
    const handleKeyDown = e => pressKey(e.key);

    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pressKey, unpressKey]);

  return (
    <KeyboardContainer>
      {
        KEYBOARD_DATA.rows.map((row, i) => <KeyboardRow key={i} row={row} />)
      }
    </KeyboardContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  pressKey: key => dispatch(pressKey(key)),
  unpressKey: () => dispatch(unpressKey())
});

export default connect(null, mapDispatchToProps)(Keyboard);