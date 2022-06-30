import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'
import { Navigate, useLocation } from 'react-router-dom'

export default function Login () {
  const theme = useContext(ThemeContext)
  const { login, isLoggedIn, isLoading } = useContext(UserContext)
  const location = useLocation()

  console.log(location)

  if (isLoading) {
    return 'Loading ...'
  }

  if (isLoggedIn) {
    return <Navigate to={location.state?.from || '/'} />
  }

  return (
    <div className='box' style={{ ...theme, width: '100%' }}>
      <h2>Login page</h2>
      <div>
        <input />
      </div>
      <div>
        <input />
      </div>
      <div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  )
}
