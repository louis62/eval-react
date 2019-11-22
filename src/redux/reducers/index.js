import { combineReducers } from "redux";
import eventsReducer from "./events";
import usersReducer from "./users";

export default combineReducers({ eventsReducer, usersReducer });
