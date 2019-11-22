import React, { Component, Fragment } from "react";
import { Text } from "react-native";
import { Actions, ActionConst } from "react-native-router-flux";
import constants from "../../app/app.constants";
import * as EventsActions from "../../redux/actions/events";
import { collections } from "../../firebase";
import { connect } from "react-redux";
import {
  Form,
  Item,
  Input,
  Button,
  Content,
  Label,
  DatePicker
} from "native-base";

class EventAddForm extends Component {
  state = {
    form: {
      title: "",
      date: "",
      place: "",
      description: ""
    }
  };

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value
    });
  };
  submitForm = async () => {
    const { form } = this.state;
    const { user } = this.props;
    try {
      collections.EventCollection.addEvent({ ...form, ...user });
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    const { form } = this.state
    return (
      <Fragment>
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>Titre</Label>
              <Input
                onChangeText={title =>
                  this.setState({ form: { ...form, title } })
                }
              />
            </Item>
            <Item inlineLabel>
              <Label>Description</Label>
              <Input
                onChangeText={description =>
                  this.setState({ form: { ...form, description } })
                }
              />
            </Item>
            <DatePicker
              locale={"fr"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Choisissez une date"
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={date => this.setState({ form: { ...form, date } })}
              disabled={false}
            />
            <Button onPress={this.submitForm}>
              <Text>Add</Text>
            </Button>
          </Form>
        </Content>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.usersReducer
});

export default connect(mapStateToProps, { ...EventsActions })(EventAddForm);
