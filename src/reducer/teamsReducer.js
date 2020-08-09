import { teams } from './db/teams'
import { players } from './db/players'

const initialState = {
  teams: teams,
  pickTeam: null,
  playersTeam: null
}

export const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PICK_TEAM':
      const pickTeam = state.teams.filter(team => team.tid === action.payload)
      console.log('pickteam', pickTeam)
      return { ...state, pickTeam }

    case 'GET_PLAYERS_TEAM':
      const teamPlayers = players.filter(player => player.tid === action.payload)
      return {
        ...state,
        playersTeam: teamPlayers
      }
    default:
      return state
  }
}