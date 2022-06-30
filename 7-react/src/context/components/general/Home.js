import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'

export default function Home () {
  const theme = useContext(ThemeContext)
  const { user, isLoggedIn } = useContext(UserContext)

  return (
    <div className='box' style={{ ...theme }}>
      <h2>Home Page</h2>
      {isLoggedIn && <p>Welcome {user.name}</p>}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  )
}
