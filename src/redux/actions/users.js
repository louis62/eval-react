import constants from '../../app/app.constants'

export function getUser(user) {
  return {
    type: constants.ACTIONS.FETCH_USER,
    payload: {
      user
    }
  }
}