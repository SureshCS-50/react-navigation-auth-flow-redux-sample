import React, { Component } from "react";
import { addNavigationHelpers } from "react-navigation";
import { Provider, connect } from "react-redux";
import { AppNavigator } from "./config/routes";
import getStore from "./config/store";

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

const mapStateToProps = state => ({
  nav: state.nav
});

class Root extends Component {
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    );
  }
}

const AppWithNavigationState = connect(mapStateToProps)(Root);

const store = getStore(navReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
