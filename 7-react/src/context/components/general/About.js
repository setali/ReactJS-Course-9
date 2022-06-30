import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

export default function About () {
  const theme = useContext(ThemeContext)

  return (
    <div className='box' style={{ ...theme }}>
      <h2>About us Page</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      </p>
    </div>
  )
}
