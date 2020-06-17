import { combineReducers } from "redux";
import { teamsReducer } from "./teamsReducer";
import { navReducer } from './navReducer'
// import { playersReducer } from './playersReducer'

export const rootReducer = combineReducers({
  teams: teamsReducer,
  nav: navReducer,
  // players: playersReducer
})