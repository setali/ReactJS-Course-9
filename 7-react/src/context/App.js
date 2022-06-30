import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './assets/styles/style.css'
import Login from './components/auth/Login'
import Page404 from './components/general/404'
import About from './components/general/About'
import Contact from './components/general/Contact'
import Dashboard from './components/general/Dashboard'
import Home from './components/general/Home'
import Profile from './components/general/Profile'
import PostDetail from './components/posts/Detail'
import PostsList from './components/posts/List'
import ProductsList from './components/products/List'
import Footer from './components/share/Footer'
import Header from './components/share/Header'
import Sidebar from './components/share/Sidebar'
import RequireAuth from './components/utils/RequireAuth'
import ThemeContext, { themes } from './contexts/ThemeContext'
import UserContext from './contexts/UserContext'
import useAuth from './hooks/useAuth'

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
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/posts' element={<PostsList />} />
              <Route path='/posts/:id' element={<PostDetail />} />
              <Route path='/login' element={<Login />} />
              <Route path='/products' element={<ProductsList />} />
              <Route
                path='/dashboard'
                element={<RequireAuth component={<Dashboard />} />}
              />
              <Route
                path='/profile'
                element={<RequireAuth component={<Profile />} />}
              />
              {/* <Route
                path='/dashboard'
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              /> */}
              <Route path='*' element={<Page404 />} />
            </Routes>
          </section>
          <Footer />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  )
}
