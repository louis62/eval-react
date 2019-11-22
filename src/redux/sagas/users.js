import constants from "../../app/app.constants";
import { takeLatest, put, call } from "redux-saga/effects";
import { collections } from "../../firebase";

async function fetchUser(user) {
  const userFull = await collections.UserCollection.getUserInfo(user.uid);
  const response = userFull.data();
  return { ui: user.uid, email: user.email, ...response };
}

function* fetchUserSaga(action) {
  const user = yield call(fetchUser, action.payload.user);
  yield put({ type: constants.ACTIONS.SET_USER, payload: { user } });
}

export default function* watch() {
  yield takeLatest(constants.ACTIONS.FETCH_USER, fetchUserSaga);
}
