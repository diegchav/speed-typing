import { createSelector } from 'reselect';

const selectKeyboard = state => state.keyboard;

export const selectPressedKey = createSelector(
  [selectKeyboard],
  keyboard => keyboard.pressedKey
);