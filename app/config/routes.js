import Landing from "./../components/Landing";
import Login from "./../components/Login";
import ForgotPassword from "./../components/ForgotPassword";
import Home from "./../components/Home";
import { StackNavigator, NavigationActions } from "react-navigation";

const navConfig = {
  landing: {
    screen: Landing
  },
  login: {
    screen: Login
  },
  forgot_password: {
    screen: ForgotPassword
  },
  home: {
    screen: Home
  }
};

export const AppNavigator = StackNavigator(navConfig);

export const resetNavigationAction = (props, componentName) => {
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: componentName })]
  });

  props.navigation.dispatch(resetAction);
};
