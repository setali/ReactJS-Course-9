import { EyeOutlined } from '@ant-design/icons'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import request from '../../tools/request'
import Table from '../utils/Table'
import { connect } from 'react-redux'

const columns = [
  { title: 'شناسه', key: 'id' },
  { title: 'عنوان', key: 'title' },
  {
    key: 'action',
    render: (f, record) => (
      <Link to={`/post/${record.id}`}>
        <EyeOutlined />
      </Link>
    )
  }
]

class List extends Component {
  componentDidMount () {
    request('/posts').then(({ data: posts }) => this.props.setItems(posts))
  }

  render () {
    return (
      <div>
        <Table columns={columns} data={this.props.posts} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = dispatch => ({
  setItems: data => dispatch({ type: 'POSTS', payload: data })
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
