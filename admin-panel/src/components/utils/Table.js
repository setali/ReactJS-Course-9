import React, { useMemo } from 'react'
import { Table as AntTable } from 'antd'

export default function Table ({ columns, data, rowKey = 'id', ...props }) {
  const newColumns = useMemo(() => {
    return columns.map(column => ({
      dataIndex: column.key,
      ...column
    }))
  }, [columns])

  return (
    <AntTable
      columns={newColumns}
      dataSource={data}
      rowKey={rowKey}
      {...props}
    />
  )
}
