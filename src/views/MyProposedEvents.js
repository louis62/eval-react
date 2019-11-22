import React, { Component } from "react";
import { Button, Text, Content, List, ListItem } from "native-base";
import { Actions } from "react-native-router-flux";
import constants from "../app/app.constants";
import { database } from "../firebase/firebase";
import { connect } from "react-redux";
import * as EventsActions from "../redux/actions/events";

class MyProposedEvents extends Component {
  state = {
    myEvents: []
  };
  componentDidMount() {
    const self = this
    this.unsubscribeFirebase = database
      .collection("events")
      .onSnapshot(snapshot => {
        const events = [];
        snapshot.forEach(docRef => {
          console.log(docRef.data(), self.props.user.uid)
          console.log(docRef.data().user.uid === self.props.user.uid)
          if (docRef.data().user.uid === self.props.user.uid) {
            events.push({
              ...docRef.data(),
              id: docRef.id
            });
          }
        });
        this.setState(state => ({ ...state, myEvents: events }));
      });
  }
  componentWillUnmount() {
    if (this.unsubscribeFirebase) {
      this.unsubscribeFirebase();
    }
  }

  goToAddEvent() {
    Actions[constants.ROUTES.EVENT_ADD]();
  }

  render() {
    const { myEvents } = this.state;
    return (
      <>
        <Content>
          <Button onPress={this.goToAddEvent}>
            <Text>Ajouter un évenement</Text>
          </Button>
          {myEvents.map((event, index) => (
            <ListItem key={index}>
              <Text>{event.title}</Text>
            </ListItem>
          ))}
        </Content>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.usersReducer.user
});

export default connect(mapStateToProps, { ...EventsActions })(MyProposedEvents);
