import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'

export default function Dashboard () {
  const theme = useContext(ThemeContext)
  const { user } = useContext(UserContext)

  return (
    <div className='box' style={{ ...theme, width: '100%' }}>
      <h2>Dashboard</h2>
      <div> Name: {user.name}</div>
      <div>E-mail: {user.email}</div>
    </div>
  )
}
