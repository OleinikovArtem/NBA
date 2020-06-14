import { combineReducers } from "redux";
import { teamsReducer } from "./teamsReducer";
import { navReducer } from './navReducer'

export const rootReducer = combineReducers({
  teams: teamsReducer,
  nav: navReducer
})