import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import KeyboardRow from '../keyboard-row/keyboard-row.component';

import { pressKey } from '../../redux/keyboard/keyboard.actions';

import KEYBOARD_DATA from './keyboard.data';

import KeyboardContainer from './keyboard.styles';


const Keyboard = ({ pressKey }) => {
  const handleKeyUp = e => {
    pressKey('');
  };

  const handleKeyDown = e => {
    const key = e.key;
    pressKey(key);
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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