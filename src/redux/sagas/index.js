import { all, fork } from "redux-saga/effects";
import eventsSaga from "./events";
import usersSaga from "./users";

const sagas = [eventsSaga, usersSaga];

export default function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
