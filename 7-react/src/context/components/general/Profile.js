import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'

export default function Profile () {
  const theme = useContext(ThemeContext)
  const { user } = useContext(UserContext)

  return (
    <div className='box' style={{ ...theme, width: '100%' }}>
      <h2>Profile</h2>
      <div> Name: {user.name}</div>
      <div>E-mail: {user.email}</div>
    </div>
  )
}
