import constants from "../../app/app.constants";

const initialState = {
  user: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload.user
      };
    default:
      return state;
  }
}