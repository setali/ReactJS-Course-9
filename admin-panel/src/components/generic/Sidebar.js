import {
  DashboardOutlined,
  FormOutlined,
  SettingOutlined,
  UserOutlined,
  CopyOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/actions/user'

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
  getItem('کارها', 'todos', <CopyOutlined />, [
    getItem(<Link to='/todo'>لیست کارها</Link>, '20')
  ]),
  getItem('تنظیمات', 'settings', <SettingOutlined />, [
    getItem('Option', '10')
  ]),
  getItem('خروج', 'logout', <LogoutOutlined />)
] // submenu keys of first level

const rootSubmenuKeys = ['dashboard', 'users', 'posts', 'settings']

export default function Sidebar () {
  const dispatch = useDispatch()

  const [openKeys, setOpenKeys] = useState(['dashboard', 'users', 'posts'])

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys([latestOpenKey])
    }
  }

  function handleClick ({ item, key }) {
    console.log(key)
    if (key === 'logout') {
      dispatch(logout())
    }
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
          onClick={handleClick}
        />
      </Sider>
    </div>
  )
}
