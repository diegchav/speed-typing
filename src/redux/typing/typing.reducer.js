import TypingActionTypes from './typing.types';

const INITIAL_STATE = {
  pressedKey: '',
  text: 'This is some sample text to practice your typing speed.'.split(''),
  textIndex: 0
};

const TypingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TypingActionTypes.PRESS_KEY:
      return {
        ...state,
        pressedKey: action.payload
      };
    case TypingActionTypes.UNPRESS_KEY:
      return {
        ...state,
        pressedKey: ''
      };
    default:
      return state;
  }
};

export default TypingReducer;