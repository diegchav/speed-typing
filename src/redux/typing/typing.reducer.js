import TypingActionTypes from './typing.types';

const INITIAL_STATE = {
  pressedKey: null
};

const TypingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TypingActionTypes.PRESS_KEY:
      return {
        ...state,
        pressedKey: action.payload
      }
    default:
      return state;
  }
};

export default TypingReducer;