import React, { useState } from 'react'
import './Nav.scss'
import { pages } from './pages'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = ({ handleIsOpen }) => {
  const [links] = useState(pages)
  const [isShow] = useState(false)


  const Ul = (<ul className='Nav_list'>
    {
      links.map(({ page, path, exact }) => {

        return (
          <li className='Nav_items' key={page}>
            <NavLink to={path} exact={exact} className='Nav_link' >{page} </NavLink>
          </li>
        )
      })
    }
  </ul>)
  
  return (
    <nav className='Nav'>
      <button className='Nav_toggle' onClick={handleIsOpen}>
        <span className='Nav_toggle-line' ></span>
      </button>

      {isShow ? Ul : null}
    </nav>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    isOpen: state.isOpenNavigation
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleIsOpen: () => dispatch({ type: 'IS_OPEN' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)