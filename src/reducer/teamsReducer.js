import { teams } from './db/teams'

export const teamsReducer = (state = teams, action) => {
  switch (action.type) {
    case 'OUT_TEAMS':

      break;

    default:
      return state
  }
}