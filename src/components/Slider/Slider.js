import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Slider extends Component {
  constructor() {
    super()
    this.clsName = this.props.clsName
    this.state = {
      

      prevIndex = 0,
      activeIndex = 1,
      nextIndex = 2
    }
  }

  nextSlide() {
    this.setState(()=>{
      const index = this.activeIndex + 1
      return {
        prevIndex : index - 1 ,
        activeIndex = index ,
        nextIndex = index +1
      }
    })
  }


  render() {
    return (
      <div className={this.clsName}>
        {this.props.children}
      </div>
    )
  }
}

export default Slider
