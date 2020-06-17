import React, { useState } from 'react'
import './Teams.scss'
import { connect } from 'react-redux';
import { Slider } from './Slider';
import { useHistory } from 'react-router-dom';

const Teams = ({ teams, pickTeam }) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false)
  const history = useHistory()
  const handleOpenInfoTeam = (id) => {
    history.push('/teams/'+id)
  }

  return (
    <div className='Teams'>
      <div className="wrapper">
        <div className="Teams_box">
          <div className='Teams_Slider'>
            <Slider
              teams={teams}
              mousePosition={isMouseEnter}
              onMouseEnter={() => setIsMouseEnter(true)}
              onMouseOver={() => setIsMouseEnter(false)}
              actSlide={pickTeam ? pickTeam[0].tid : null}
              handleOpenInfoTeam={handleOpenInfoTeam}
            />

          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    teams: state.teams.teams,
    pickTeam: state.teams.pickTeam,

  }
}

export default connect(mapStateToProps, null)(Teams)