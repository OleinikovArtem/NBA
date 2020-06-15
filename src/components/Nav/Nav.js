import React, { useState } from 'react'
import './Nav.scss'
import { pages } from './pages'
import { NavLink } from 'react-router-dom'

const Nav = ({ dbClick }) => {
  const [links] = useState(pages)
  return (
  
      <nav className='Nav'>
        <ul className='Nav_list'>
          {
            links.map(({ page, path, exact }) => {

              return (
                <li className='Nav_items' key={page}>
                  <NavLink
                    to={path}
                    exact={exact}
                    className='Nav_link'
                    onDoubleClick={dbClick}>
                    {page}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </nav>
  )
}


export default Nav