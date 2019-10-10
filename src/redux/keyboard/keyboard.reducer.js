import KeyboardActionTypes from './keyboard.types';

const INITIAL_STATE = {
  pressedKey: null
};

const keyboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case KeyboardActionTypes.PRESS_KEY:
      return {
        ...state,
        pressedKey: action.payload
      }
    default:
      return state;
  }
};

export default keyboardReducer;