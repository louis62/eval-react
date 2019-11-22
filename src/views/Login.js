import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { Button, Content } from "native-base";
import LoginForm from "../components/forms/LoginForm";
import constants from "../app/app.constants";
import { Actions } from "react-native-router-flux";

class Login extends Component {
  goToRegister = () => {
    Actions[constants.ROUTES.REGISTER]();
  };
  render() {
    return (
      <Content>
        <LoginForm />
        <Button onPress={this.goToRegister}>
          <Text>Je ne suis pas inscrit</Text>
        </Button>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  user: state.usersReducer.user
});

export default connect(mapStateToProps, null)(Login);
