import React, { Component } from "react";
import { Container } from "native-base";
import { Provider } from "react-redux";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import store from "./src/redux/store";
import Router from "./src/router";

export default class App extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Router></Router>
        </Container>
      </Provider>
    );
  }
}
