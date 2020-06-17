import React from 'react'
import { connect } from 'react-redux'
import { useLocation, useRouteMatch } from 'react-router-dom'


const Team = ({ name, region, imgURL, colors, abbrev, active, tid, pickTeam, handleOpenInfoTeam, getPlayers}) => {
  const st = { backgroundImage: `url(${imgURL})` }
  const location = useLocation()
  const mathc = useRouteMatch()

  if (!name && !region && !imgURL && !colors) return null
  return (
    <div className={`Teams_item ${active ? 'Teams_item-active' : ''}`}  >
      <div className="Teams_item-img" style={st}></div>
      <div className="Teams_item-name" onClick={
        () => {
          if (mathc.params.id) return null
          handleOpenInfoTeam(tid)
          pickTeam(tid)
          getPlayers(tid)
        }}>
          <span>{region}</span> {name}
      </div>
      
      <Flag arr={colors} abbrev={abbrev} />
    </div>
  )
}

const Flag = ({ arr, abbrev }) => {

  return (
    <div className='item-flag'
      style={{
        height: '99px',
        width: '99px',
        borderRadius: '50%',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <span style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        fontSize: '25px',
        fontWeight: 700,
        textShadow: '1px 1px 3px #000'
      }}
      >
        {abbrev}
      </span>
      {arr.map((color, i) => {
        return (
          <span
            style={{
              height: 100 / 3 + '%',
              display: 'block',
              background: color
            }}
            key={i}>
          </span>)
      })
      }
    </div>
  )
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    pickTeam: (payload) => dispatch({ type: 'PICK_TEAM',  payload}) ,
    getPlayers: (payload) => dispatch({ type: 'GET_PLAYERS_TEAM', payload})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Team)