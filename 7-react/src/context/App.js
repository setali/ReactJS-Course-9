import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import ThemeContext, { themes } from './contexts/ThemeContext'
import UserContext from './contexts/UserContext'
import useAuth from './hooks/useAuth'
import './assets/styles/style.css'

export default function App () {
  const [theme, setTheme] = useState(themes.light)

  const { user, isLoggedIn, login, logout, isLoading } = useAuth()

  return (
    <div>
      <UserContext.Provider
        value={{ user, isLoggedIn, login, logout, isLoading }}
      >
        <ThemeContext.Provider value={theme}>
          {theme === themes.dark ? (
            <button onClick={() => setTheme(theme.light)}>Light</button>
          ) : (
            <button onClick={() => setTheme(themes.dark)}>Dark</button>
          )}
          <Header />
          <section style={{ display: 'flex' }}>
            <Sidebar />
            <Home />
          </section>
          <Footer />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  )
}
