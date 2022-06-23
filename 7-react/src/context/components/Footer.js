import React, { Component } from 'react'
import ThemeContext from '../contexts/ThemeContext'

export default class Footer extends Component {
  render () {
    return (
      <div className='box' style={{ ...this.context }}>
        <h2>Footer</h2>
      </div>
    )
  }
}

Footer.contextType = ThemeContext
