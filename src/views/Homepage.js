import React, { Component } from "react";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import constants from "../app/app.constants";
import { View, Text } from "react-native";

class Homepage extends Component {
  componentDidMount() {
    if (!this.props.user){
      Actions[constants.ROUTES.LOGIN]()
    }
  }
  render() {
    return (
      <View>
        <Text>Page d'accueil</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.usersReducer.user
});

export default connect(mapStateToProps, null)(Homepage);
