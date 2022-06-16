import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { ConfigProvider } from 'antd'
import fa_IR from 'antd/lib/locale/fa_IR'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <ConfigProvider direction='rtl' locale={fa_IR}>
    <App />
  </ConfigProvider>
  // </React.StrictMode>
)
