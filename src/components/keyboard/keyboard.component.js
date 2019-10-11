import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import KeyboardRow from '../keyboard-row/keyboard-row.component';

import { pressKey } from '../../redux/keyboard/keyboard.actions';

import KEYBOARD_DATA from './keyboard.data';

import KeyboardContainer from './keyboard.styles';


const Keyboard = ({ pressKey }) => {
  useEffect(() => {
    const handleKeyUp = e => pressKey('');
    const handleKeyDown = e => pressKey(e.key);

    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pressKey]);

  return (
    <KeyboardContainer>
      {
        KEYBOARD_DATA.rows.map((row, i) => <KeyboardRow key={i} row={row} />)
      }
    </KeyboardContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  pressKey: key => dispatch(pressKey(key))
});

export default connect(null, mapDispatchToProps)(Keyboard);