import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom'
import ThemeContext from '../../contexts/ThemeContext'

export default class Sidebar extends Component {
  static contextType = ThemeContext

  render () {
    return (
      <div className='box' style={{ ...this.context }}>
        <h4>Sidebar</h4>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </div>
    )
  }
}
