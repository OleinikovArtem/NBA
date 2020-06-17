import React from 'react'
import './TeamInfo.scss'
import { connect } from 'react-redux'
import Team from '../../containers/Teams/Team'
import TeamPlayers from '../TeamPlayers/TeamPlayers'


const TeamInfo = ({ team }) => {

  return (
    <div className="wrapper">
      <div className='Team-info'>
        <div className="Team-info_cart">
          {team ? <Team {...team[0]} /> : null}
        </div>
        {/* <div className="Team-info_players"> */}
          <TeamPlayers/>
        {/* </div> */}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    team: state.teams.pickTeam
  }
}
const mapDispatchToProps = dispatch => {
  return {
    pickTeam: (payload) => dispatch({ type: 'PICK_TEAM', payload: payload })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TeamInfo)
