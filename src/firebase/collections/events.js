import { database } from "../firebase";

export function addEvent(event) {
  return database
    .collection(`events`)
    .add(event);
}

export function getEvent(uid) {
  return database
    .collection("events")
    .doc(uid)
    .get();
}

export function getEvents() {
  return database
    .collection("events")
    .get();
}
