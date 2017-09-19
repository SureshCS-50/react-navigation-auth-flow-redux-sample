import { combineReducers } from "redux";

const reducers = navReducer =>
  combineReducers({
    nav: navReducer
  });

export default reducers;
