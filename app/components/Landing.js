import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";
import { resetNavigationAction } from "./../config/routes";
import { Routes } from "./../utils/Constants";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.loadScreen = this.loadScreen.bind(this);
    this.checkSignedIn = this.checkSignedIn.bind(this);
  }

  async isSignedIn() {
    let agentLoginToken = await AsyncStorage.getItem("AGENT_LOGIN_TOKEN");
    let companyName = await AsyncStorage.getItem("COMPANY_NAME");
    return agentLoginToken && companyName;
  }

  checkSignedIn() {
    this.isSignedIn()
      .then(res => {
        this.loadScreen(res);
      })
      .catch(ex => {
        console.log(ex);
      });
  }

  componentDidMount() {
    setTimeout(this.checkSignedIn, 1500);
  }

  loadScreen(isSignedIn) {
    const routeName = isSignedIn ? Routes.HOME : Routes.LOGIN;
    resetNavigationAction(this.props, routeName);
  }

  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Hello Landing!</Text>
      </View>
    );
  }
}

export default Landing;
