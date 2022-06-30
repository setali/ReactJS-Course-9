import {
  DashboardOutlined,
  FormOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const { Sider } = Layout

function getItem (label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  }
}

const items = [
  getItem(<Link to='/'>داشبورد</Link>, 'dashboard', <DashboardOutlined />),
  getItem('مدیریت کاربران', 'users', <UserOutlined />, [
    getItem(<Link to='/person'>لیست کاربران</Link>, '5'),
    getItem(<Link to='/person/new'>افزودن کاربر</Link>, '6')
  ]),
  getItem('مقالات', 'posts', <FormOutlined />, [
    getItem(<Link to='/post'>لیست مقالات</Link>, '9')
  ]),
  getItem('تنظیمات', 'settings', <SettingOutlined />, [getItem('Option', '10')])
] // submenu keys of first level

const rootSubmenuKeys = ['dashboard', 'users', 'posts', 'settings']

export default function Sidebar () {
  const [openKeys, setOpenKeys] = useState(['dashboard', 'users', 'posts'])

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys([latestOpenKey])
    }
  }

  function handleClick (e) {
    console.log('click')
  }

  return (
    <div>
      <Sider>
        <Menu
          mode='inline'
          openKeys={openKeys}
          //   onClick={handleClick}
          onOpenChange={onOpenChange}
          style={{
            width: 256
          }}
          items={items}
        />
      </Sider>
    </div>
  )
}
