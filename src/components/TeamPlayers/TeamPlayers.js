import React from 'react'
import './TeamPlayers.scss'
import { connect } from 'react-redux'

const TeamPlayers = ({ players }) => {
  if (!players) return null

  return (
    <ul className='TeamPlayers'>
      {
        players && players.map((player, i) => {
          const { name,
            imgURL,
            // pos,
            // injury,
            // college,
            // born,
            // draft,
            // contract,
            // weight,
            // transactions,
            // stats,
            // ratings 
          } = player
          return (
            <li className='TeamPlayers_player' key={name + i + ''}>
              <div className="TeamPlayers_player_img-box">
                <img src={imgURL} alt={name} />
              </div>
              <div className="TeamPlayers_player_name">
                {name}
              </div>
              <div></div>
            </li>
          )
        })
      }
    </ul>
  )
}
const mapStateToProps = state => {
  return {
    players: state.teams.playersTeam
  }
}
export default connect(mapStateToProps)(TeamPlayers)
