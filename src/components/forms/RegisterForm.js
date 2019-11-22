import React, { Component } from "react";
import { Content, Form, Item, Input, Button } from "native-base";
import { Text } from "react-native";
import { AuthService, collections } from "../../firebase";
import { Actions } from "react-native-router-flux";

export default class RegisterForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };
  handleInputChange = (field, value) => {
    this.setState({
      [field]: value
    });
  };
  submitForm = async () => {
    const { email, password, firstName, lastName } = this.state;
    try {
      const response = await AuthService.createUser(email, password);
      await collections.UserCollection.addUserInfo(response.user.uid, {
        firstName,
        lastName
      });
      console.log(response);
      Actions.pop();
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    const { email, password, firstName, lastName } = this.state;
    return (
      <Form>
        <Item>
          <Input
            value={firstName}
            onChangeText={text => this.handleInputChange("firstName", text)}
            placeholder="Prénom"
          />
        </Item>
        <Item>
          <Input
            value={lastName}
            onChangeText={text => this.handleInputChange("lastName", text)}
            placeholder="Nom"
          />
        </Item>
        <Item>
          <Input
            keyboardType="email-address"
            value={email}
            onChangeText={text => this.handleInputChange("email", text)}
            placeholder="Email"
          />
        </Item>
        <Item last>
          <Input
            value={password}
            secureTextEntry
            onChangeText={text => this.handleInputChange("password", text)}
            placeholder="Mot de passe"
          />
        </Item>
        <Button onPress={this.submitForm}>
          <Text>Créer un compte</Text>
        </Button>
      </Form>
    );
  }
}
