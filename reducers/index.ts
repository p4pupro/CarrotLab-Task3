import { combineReducers } from "redux";
import * as characterReducer from './charactersReducer';
import * as epidoseReducer from './epidoseReducer';

const rootReducer = combineReducers({
  ...characterReducer,
  ...epidoseReducer,

});

export default rootReducer;