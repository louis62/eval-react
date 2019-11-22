import { database } from "../firebase";

export function addUserInfo(uid, info) {
  return database
    .collection(`users`)
    .doc(uid)
    .set(info);
}

export function getUserInfo(uid) {
  return database
    .collection("users")
    .doc(uid)
    .get();
}
