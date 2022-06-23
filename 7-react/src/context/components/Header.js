import React, { Component } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import UserContext from '../contexts/UserContext'

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
                      <span onClick={login}>Login</span>
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
