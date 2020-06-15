import React from 'react'
import './App.scss'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { Header } from '../Header/Header'
import { NavIndecator } from '../NavIndecator/NavIndecator'
import { Home } from '../../containers/Home/Home'
import Teams from '../../containers/Teams/Teams'
import Nav from '../Nav/Nav'
import { CSSTransition } from 'react-transition-group'


const App = ({ isOpen, handleIsOpen }) => {

  const openNavStyle = {
    transform: 'translateZ(-1800px) translateX(-50%) rotateY(45deg)',
    outline: '30px solid #0f33ff'
  }

  const nav = (
    <CSSTransition
      in={!!isOpen}
      appear={true}
      unmountOnExit
      classNames="Nav"
      timeout={400}
    >
      <Nav dbClick={handleIsOpen} isOpen={isOpen} />
    </CSSTransition>
  )

  return (
    <div className='container_App'>
      {isOpen && nav}
      <main
        className='App'
        style={isOpen ? openNavStyle : null}
        onClick={() => {
          return isOpen ? handleIsOpen() : null
        }}
      >
        <Header />
        <NavIndecator />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/teams' component={Teams} />
        </Switch>
      </main>
    </div>
  )
}

const mapStateToProps = ({ nav }) => {
  return {
    isOpen: nav.isOpenNavigation
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleIsOpen: () => dispatch({ type: 'IS_OPEN'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)