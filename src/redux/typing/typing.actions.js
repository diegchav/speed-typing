import TypingActionTypes from './typing.types';

export const pressKey = key => ({
  type: TypingActionTypes.PRESS_KEY,
  payload: key
});