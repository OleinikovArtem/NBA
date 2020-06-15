import React, { useState } from 'react'
import './Teams.scss'
import { connect } from 'react-redux';
import { Team } from './Team';



const Teams = ({ teams }) => {
  const [activeSlide, setActiveSlide] = useState(1)
  const max = teams.length - 1
  const actIndex = activeSlide
  const prevIndex = actIndex !== 0 ? actIndex - 1 : max - 1
  const nextIndex = actIndex + 1 !== max ? actIndex + 1 : 0


  const handleChangeSlider = (inc = '+') => {

    switch (inc) {
      case '-':
        setActiveSlide(prevIndex)

        break
      default:
        setActiveSlide(nextIndex)

        break
    }
  }

  console.log('prevIndex', prevIndex)
  console.log('actIndex', actIndex)
  console.log('nextIndex', nextIndex)
  return (
    <div className='Teams'>
      <div className="wrapper">
        <div className="Teams_box">

          <div className="Teams_Slider">
            {teams.map((team, index) => {
              if (index === prevIndex) {
                return <Team {...team} key={team.name} index={index} />
              }
            })}
            {teams.map((team, index) => {
              if (index === actIndex) {
                return <Team {...team} key={team.name} index={index} active={true}/>
              }
            })}
            {teams.map((team, index) => {
              if (index === nextIndex) {
                return <Team {...team} key={team.name} index={index} />
              }
            })}
          </div>

          <button className='Teams_box-btn Teams_box-btn-prev '
            onClick={() => handleChangeSlider('-')} ></button>
          <button className='Teams_box-btn Teams_box-btn-next'
            onClick={() => handleChangeSlider('+')}></button>

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