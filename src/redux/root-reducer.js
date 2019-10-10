import { combineReducers } from 'redux';

import keyboardReducer from './keyboard/keyboard.reducer';

const rootReducer = combineReducers({
  keyboard: keyboardReducer
});

export default rootReducer;