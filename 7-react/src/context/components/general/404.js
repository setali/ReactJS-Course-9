import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

export default function Page404 () {
  const theme = useContext(ThemeContext)

  return (
    <div className='box' style={{ ...theme, width: '100%' }}>
      <h2>Page 404</h2>
      <p>Page not found</p>
    </div>
  )
}
