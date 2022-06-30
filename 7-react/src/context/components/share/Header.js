import React, { Component } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render () {
    return (
      <UserContext.Consumer>
        {({ user, login, isLoggedIn, logout, isLoading }) => (
          <ThemeContext.Consumer>
            {theme => (
              <div
                className='box'
                style={{
                  ...theme,
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <h2>Header</h2>
                <div>
                  {!isLoading &&
                    (isLoggedIn ? (
                      <span>
                        <span>{user.name}</span>
                        <span onClick={logout} className='logout'>
                          Logout
                        </span>
                      </span>
                    ) : (
                      <span>
                        <Link to='/login'>Login</Link>
                      </span>
                    ))}
                </div>
              </div>
            )}
          </ThemeContext.Consumer>
        )}
      </UserContext.Consumer>
    )
  }
}
