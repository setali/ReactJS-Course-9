import React, { Component } from 'react'
import { EyeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import request from '../../tools/request'
import Table from '../utils/Table'
import { connect } from 'react-redux'

const columns = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name', sorter: (a, b) => (a.name > b.name ? 1 : -1) },
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

class PersonList extends Component {
  componentDidMount () {
    request('/users').then(({ data }) => this.props.setItems(data))
  }

  render () {
    return (
      <div>
        آخرین کاربر مشاهده شده:
        {this.props.person.name}
        <hr />
        <Table columns={columns} data={this.props.persons} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  persons: state.persons,
  person: state.person
})

const mapDispatchToProps = dispatch => ({
  setItems: data => dispatch({ type: 'PERSONS', payload: data })
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonList)
