import { Layout } from 'antd'
import 'antd/dist/antd.css'
import '../assets/css/general.css'
import Footer from './generic/Footer'
import Header from './generic/Header'
import Sidebar from './generic/Sidebar'
import Dashboard from './generic/Dashboard'

const { Content } = Layout

function App () {
  return (
    <div className='App'>
      <Layout>
        <Header />
        <Layout>
          <Sidebar />
          <Content className='content'>
            <Dashboard />
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
