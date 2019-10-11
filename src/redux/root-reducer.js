import { combineReducers } from 'redux';

import TypingReducer from './typing/typing.reducer';

const rootReducer = combineReducers({
  typing: TypingReducer
});

export default rootReducer;