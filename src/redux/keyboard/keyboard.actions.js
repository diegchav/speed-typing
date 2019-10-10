import KeyboardActionTypes from './keyboard.types';

export const pressKey = key => ({
  type: KeyboardActionTypes.PRESS_KEY,
  payload: key
});