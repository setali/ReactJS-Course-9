import React, { Component } from 'react'
import Table from './Table'

export default class App extends Component {
  state = {
    users: []
  }

  columns = [
    { title: 'ID', key: 'id' },
    { title: 'Name', key: 'name' },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (field, record, index) => {
        return `${field.street} ${field.suite} ${record.phone}`
      }
    }
  ]

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
  }

  render () {
    console.log(this.state.users)
    return (
      <div>
        <Table
          data={this.state.users}
          columns={this.columns}
          rowKey={record => `${record.username}${record.email}`}
        />
      </div>
    )
  }
}
