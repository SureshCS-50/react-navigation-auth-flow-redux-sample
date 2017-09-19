import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import reducers from "./../reducers/index";

// middleware that logs actions
const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});

function getInitialState() {
  const _initState = {};
  console.log("intial_state", _initState);
  return _initState;
}

const enhancer = compose(applyMiddleware(loggerMiddleware));

export default function configureStore(navReducer, state = getInitialState()) {
  const store = createStore(reducers(navReducer), state, enhancer);
  return store;
}
