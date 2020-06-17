import { players } from './db/players'

export const playersReducer = (state = players, action) => {
  switch (action.type) {
    case 'OUT_TEAMS':

      break;

    default:
      return state
  }
}