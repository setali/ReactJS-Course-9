import {
  DashboardOutlined,
  FormOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { useState } from 'react'

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
  getItem('داشبورد', 'dashboard', <DashboardOutlined />),
  getItem('مدیریت کاربران', 'users', <UserOutlined />, [
    getItem('لیست کاربران', '5'),
    getItem('افزودن کاربر', '6')
  ]),
  getItem('مقالات', 'posts', <FormOutlined />, [getItem('لیست مقالات', '9')]),
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
