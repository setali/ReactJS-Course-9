import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import '../assets/css/general.css'
import Footer from './generic/Footer'
import Header from './generic/Header'
import Sidebar from './generic/Sidebar'
import Dashboard from './generic/Dashboard'
import PersonRouter from './person/Router'
import PostRouter from './post/Router'
import TodoRouter from './todos/Router'
import Page404 from './generic/404'
import Login from './auth/Login'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUser } from '../redux/actions/user'
import Spinner from './utils/Spinner'

const { Content } = Layout

function App () {
  const dispatch = useDispatch()

  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const userIsLoading = useSelector(state => state.userIsLoading)

  useEffect(() => {
    dispatch(getUser())
  }, [])

  if (userIsLoading) {
    return <Spinner />
  }

  return (
    <div className='App'>
      {!isLoggedIn ? (
        <Login />
      ) : (
        <Layout>
          <Header />
          <Layout>
            <Sidebar />
            <Content className='content'>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/person/*' element={<PersonRouter />} />
                <Route path='/post/*' element={<PostRouter />} />
                <Route path='/todo/*' element={<TodoRouter />} />
                <Route path='*' element={<Page404 />} />
              </Routes>
            </Content>
          </Layout>
          <Footer />
        </Layout>
      )}
    </div>
  )
}

export default App
