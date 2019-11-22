import React, { Component } from "react";
import { Text } from "react-native";
import { Button, Content } from "native-base";
import RegisterForm from "../components/forms/RegisterForm";
import constants from "../app/app.constants";
import { Actions } from "react-native-router-flux";

export default class Register extends Component {
  goToLogin = () => {
    Actions[constants.ROUTES.LOGIN]();
  };
  render() {
    return (
      <Content>
        <RegisterForm />
        <Button onPress={this.goToLogin}>
          <Text>Se connecter</Text>
        </Button>
      </Content>
    );
  }
}
