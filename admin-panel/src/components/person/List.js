import { EyeOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPersons, removePerson } from '../../redux/actions/person'
import Table from '../utils/Table'
import { Popconfirm } from 'antd'

class PersonList extends Component {
  columns = [
    { key: 'id', title: 'شناسه' },
    {
      key: 'name',
      title: 'نام',
      sorter: (a, b) => (a.name > b.name ? 1 : -1)
    },
    {
      key: 'username',
      title: 'نام کاربری',
      sorter: (a, b) => (a.name > b.name ? 1 : -1)
    },
    { key: 'email', title: 'ایمیل' },
    {
      key: 'address',
      title: 'آدرس',
      render: (field, record) => `${field.city} ${field.street} ${record.phone}`
    },
    {
      key: 'عملیات',
      render: (f, record) => (
        <>
          <Link to={`/person/${record.id}`}>
            <EyeOutlined />
          </Link>
          <Popconfirm
            title='آیا از حذف این رکورد مطمين هستید؟'
            onConfirm={() => this.props.removeItem(record.id)}
          >
            <DeleteOutlined
              style={{ marginRight: '10px', color: 'red', cursor: 'pointer' }}
            />
          </Popconfirm>
          <Link to={`/person/${record.id}/edit`}>
            <EditOutlined style={{ marginRight: '10px' }} />
          </Link>
        </>
      )
    }
  ]

  componentDidMount () {
    this.props.getItems()
  }

  render () {
    return (
      <div>
        آخرین کاربر مشاهده شده:
        {this.props.person.name}
        <hr />
        <Table columns={this.columns} data={this.props.persons} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  persons: state.persons,
  person: state.person
})

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(getPersons()),
  removeItem: id => dispatch(removePerson(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonList)
