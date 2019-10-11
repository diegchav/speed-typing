import { createSelector } from 'reselect';

const selectTyping = state => state.typing;

export const selectPressedKey = createSelector(
  [selectTyping],
  typing => typing.pressedKey
);

export const selectText = createSelector(
  [selectTyping],
  typing => typing.text
);

export const selectTextIndex = createSelector(
  [selectTyping],
  typing => typing.textIndex
);