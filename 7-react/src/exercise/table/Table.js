import React, { Component } from 'react'

export default class Table extends Component {
  render () {
    const { data, columns, rowKey } = this.props

    return (
      <div>
        <table border='1' width={'100%'}>
          <thead>
            <tr>
              {columns.map(column => (
                <th key={column.key}>{column.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(record => (
              <tr
                key={
                  typeof rowKey === 'function' ? rowKey(record) : record[rowKey]
                }
              >
                {columns.map(column => (
                  <td key={column.key}>
                    {column.render
                      ? column.render(
                          record[column.dataIndex || column.key],
                          record,
                          column.key
                        )
                      : record[column.dataIndex || column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

Table.defaultProps = {
  rowKey: 'id'
}
