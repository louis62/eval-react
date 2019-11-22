import React, { Component } from "react";
import { Text, Content, List, ListItem } from "native-base";
import { database } from "../firebase/firebase";
import { connect } from "react-redux";
import * as EventsActions from "../redux/actions/events";

class Events extends Component {
  state = {
    events: []
  };
  componentDidMount() {
    this.unsubscribeFirebase = database
      .collection("events")
      .onSnapshot(snapshot => {
        const events = [];
        snapshot.forEach(docRef => {
          events.push({
            ...docRef.data(),
            id: docRef.id
          });
        });
        this.setState(state => ({ ...state, events }));
      });
  }
  componentWillUnmount() {
    if (this.unsubscribeFirebase) {
      this.unsubscribeFirebase();
    }
  }
  render() {
    const { events } = this.state;
    return (
      <>
        <Content>
          <List>
            {events.map((event, index) => (
              <ListItem key={index}>
                <Text>{event.title}</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.usersReducer.user
});

export default connect(mapStateToProps, { ...EventsActions })(Events);
