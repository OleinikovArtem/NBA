import React from 'react'
import img from '../../img/player.png'
import './Home.scss'

export const Home = () => {
  return (
    <div className='Home'>
      <div className="wrapper">
        <div className="Home_header">
          <div className="Home_title-box">
            <h1 className="Home_title">Your next interactive experience</h1>
            <button className="Home_button btn">next</button>
          </div>
          <div className="Home_box-img">
            <img src={img} alt="Jordan" className="Home_img" />
          </div>
        </div>

        <div className="Home_footer">
          <ul className="Home_footer-list">
            <li className="Home_footer-item">
              <h3 className="Home_footer-title">Metiew & Smith</h3>
              <p className="Home_footer-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
            </li>
            <li className="Home_footer-item">
              <h3 className="Home_footer-title">Fantasy interactive</h3>
              <p className="Home_footer-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
            </li>
            <li className="Home_footer-item">
              <h3 className="Home_footer-title">Paul & shark</h3>
              <p className="Home_footer-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
