import React, { Component, Fragment } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import * as UsersActions from "../../redux/actions/users";
import { Actions, ActionConst } from "react-native-router-flux";
import constants from "../../app/app.constants";
import { AuthService } from "../../firebase";
import { Form, Item, Input, Button } from "native-base";

class LoginForm extends Component {
  state = {
    email: "Didier.marcel@gmail.com",
    password: "didierm"
  };

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value
    });
  };
  submitForm = async () => {
    const { email, password } = this.state;
    try {
      const response = await AuthService.login(email, password);
      await this.props.getUser(response.user);
      Actions["tabBar"]({
        type: ActionConst.RESET
      });
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <Fragment>
        <Form>
          <Item>
            <Input
              keyboardType="email-address"
              onChangeText={text => this.handleInputChange("email", text)}
              placeholder="Email"
            />
          </Item>
          <Item last>
            <Input
              secureTextEntry
              onChangeText={text => this.handleInputChange("password", text)}
              placeholder="Password"
            />
          </Item>
        </Form>
        <Button onPress={this.submitForm}>
          <Text>Se connecter</Text>
        </Button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.usersReducer.user
});

export default connect(mapStateToProps, { ...UsersActions })(LoginForm);
