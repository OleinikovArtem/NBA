import React from 'react'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import './Header.scss'

export const Header = () => {
  return (
    <header className='header wrapper'>
      <div className="logo">
        <Link to='/'>
          <img src={logo} alt="logo" /><span>Basketball</span>
        </Link>
      </div>
      <Nav />
    </header>
  )
}
