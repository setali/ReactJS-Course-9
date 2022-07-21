import React from 'react'
import { Space, Spin } from 'antd'

export default function Spinner () {
  return (
    <div>
      <Space>
        <Spin size='large' />
      </Space>
    </div>
  )
}
