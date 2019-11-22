import constants from '../../app/app.constants'

export function getEvents() {
  return {
    type: constants.ACTIONS.FETCH_EVENTS
  }
}

export function getMyEvents(uid) {
  return {
    type: constants.ACTIONS.FETCH_MY_EVENTS,
    payload: {
      uid
    }
  }
}

export function addEvent(form) {
  return {
    type: constants.ACTIONS.ADD_EVENT,
    payload: {
      form
    }
  }
}

export function getEvent(id) {
  return {
    type: constants.ACTIONS.FETCH_EVENT,
    payload: {
      id
    }
  }
}