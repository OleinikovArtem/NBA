import React, { useState } from 'react'
import './NavIndecator.scss'
import { pages } from '../Nav/pages'
import { NavLink } from 'react-router-dom'

export const NavIndecator = () => {
  const [links] = useState(pages)

  return (
    <div className="wrapper">
      <nav className='NavIndecator'>
        <ul className='NavIndecator_list'>
          {links.map(({ path, page, exact }, index) => {
            return (
              <li className='NavIndecator_item' key={page}>
                <NavLink
                  className='NavIndecator_link'
                  to={path}
                  exact={exact} >
                  <span className='NavIndecator_link-number'>
                    {'0' + (index + 1)}
                  </span>
                  <span className='NavIndecator_link-page'>{page}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
