import React, { useState } from 'react'
import './Teams.scss'
import { connect } from 'react-redux';
import { Team } from './Team';
import { Slider } from './Slider';



const Teams = ({ teams }) => {

  const [isMouseEnter, setIsMouseEnter] = useState(false)


  return (
    <div className='Teams'>
      <div className="wrapper">
        <div className="Teams_box">
          <Slider
            teams={teams}
            mousePosition={isMouseEnter}
            onMouseEnter={() => setIsMouseEnter(true)}
            onMouseOver={() => setIsMouseEnter(false)}
          />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    teams: state.teams
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams)