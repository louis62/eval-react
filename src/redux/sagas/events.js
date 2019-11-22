import constants from "../../app/app.constants";
import { takeLatest, put, call } from "redux-saga/effects";
import { database } from "../../firebase/firebase";
import { collections } from "../../firebase";

async function fetchMyEvents(uid) {
  let events = [];
  database.collection("events").onSnapshot(snapshot => {
    snapshot.forEach(docRef => {
      if (docRef.user == uid) {
        events.push({
          ...docRef.data(),
          id: docRef.id
        });
      }
    });
  });
  return events
}

async function fetchEvents() {
  const events = await collections.EventCollection.getEvents();
  return events.data();
}

function* fetchEventsSaga() {
  const events = yield call(fetchEvents);
  yield put({ type: constants.ACTIONS.SET_EVENT_LIST, payload: { events } });
}

function* fetchMyEventsSaga(action) {
  const events = yield call(fetchMyEvents(action.payload.uid));
  yield put({ type: constants.ACTIONS.SET_MY_EVENT_LIST, payload: { events } });
}

export default function* watch() {
  yield takeLatest(constants.ACTIONS.FETCH_EVENTS, fetchEventsSaga);
  // yield takeLatest(constants.ACTIONS.FETCH_MY_EVENTS, fetchMyEventsSaga);
}
