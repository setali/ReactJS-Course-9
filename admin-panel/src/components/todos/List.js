import { EyeOutlined } from '@ant-design/icons'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTodos } from '../../redux/slice/todo'
import Table from '../utils/Table'

const columns = [
  { title: 'شناسه', key: 'id' },
  { title: 'عنوان', key: 'title' },
  {
    title: 'وضعیت',
    key: 'completed',
    render: f => (f ? 'انجام شده' : 'در حال انجام')
  },
  {
    key: 'action',
    render: (f, record) => (
      <Link to={`/todo/${record.id}`}>
        <EyeOutlined />
      </Link>
    )
  }
]

class List extends Component {
  componentDidMount () {
    this.props.getItems()
  }

  render () {
    return (
      <div>
        <Table columns={columns} data={this.props.todos} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    todos: state.todos.list
  }
}

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(getTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
