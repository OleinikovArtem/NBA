import React from 'react'
import { connect } from 'react-redux'
import './NavToggle.scss'

const NavToggle = ({ handleIsOpen }) => {
  return (
      <button className='Nav_toggle' onClick={handleIsOpen}>
        <span className='Nav_toggle-line' ></span>
      </button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    handleIsOpen: () => dispatch({ type: 'IS_OPEN' })
  }
}

export default connect(null, mapDispatchToProps)(NavToggle)

