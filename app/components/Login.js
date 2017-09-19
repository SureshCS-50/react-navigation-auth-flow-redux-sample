import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { Routes } from "./../utils/Constants";

class Login extends Component {
  doLogin() {
    this.props.navigation.navigate(Routes.HOME);
  }
  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Hello Login!</Text>
        <TouchableHighlight
          onPress={this.doLogin.bind(this)}
          style={{ height: 56, justifyContent: "center" }}
        >
          <Text style={{ padding: 16, alignSelf: "stretch" }}>Login!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Login;
