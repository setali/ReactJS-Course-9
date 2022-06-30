import React, { Component } from 'react'
import { EyeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import request from '../../tools/request'
import Table from '../utils/Table'

const columns = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
  { key: 'email', title: 'Email' },
  {
    key: 'address',
    title: 'Address',
    render: (field, record) => `${field.city} ${field.street} ${record.phone}`
  },
  {
    key: 'action',
    render: (f, record) => (
      <Link to={`/person/${record.id}`}>
        <EyeOutlined />
      </Link>
    )
  }
]

export default class PersonList extends Component {
  state = {
    users: [],
    loading: true
  }

  componentDidMount () {
    request('/users')
      .then(({ data }) => this.setState({ users: data }))
      .finally(() => this.setState({ loading: false }))
  }

  render () {
    return (
      <div>
        <Table
          columns={columns}
          data={this.state.users}
          loading={this.state.loading}
        />
      </div>
    )
  }
}
