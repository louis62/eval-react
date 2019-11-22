import constants from "../../app/app.constants";

const initialState = {
  events: [],
  myEvents: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.ACTIONS.SET_EVENT_LIST:
      return {
        ...state,
        events: action.payload.events
      };
    case constants.ACTIONS.SET_MY_EVENT_LIST:
      return {
        ...state,
        myEvents: action.payload.events
      };
    case constants.ACTIONS.ADD_EVENT:
        return {
          ...state,
          myEvents: [...state.myEvents, action.payload.event]
        };
    default:
      return state;
  }
}