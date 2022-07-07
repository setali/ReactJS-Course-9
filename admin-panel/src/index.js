import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import { ConfigProvider } from 'antd'
import fa_IR from 'antd/lib/locale/fa_IR'
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // <React.StrictMode>
  <ConfigProvider direction='rtl' locale={fa_IR}>
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  </ConfigProvider>
  // </React.StrictMode>
)
