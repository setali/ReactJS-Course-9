import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import '../assets/css/general.css'
import Footer from './generic/Footer'
import Header from './generic/Header'
import Sidebar from './generic/Sidebar'
import Dashboard from './generic/Dashboard'
import PersonRouter from './person/Router'
import Page404 from './generic/404'

const { Content } = Layout

function App () {
  return (
    <div className='App'>
      <Layout>
        <Header />
        <Layout>
          <Sidebar />
          <Content className='content'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/person/*' element={<PersonRouter />} />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
