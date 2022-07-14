import { Divider } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getTodo } from '../../redux/slice/todo'

export default function Full () {
  const { id } = useParams()

  const dispatch = useDispatch()

  const todo = useSelector(state => state.todos.item)

  useEffect(() => {
    dispatch(getTodo(id))
  }, [id])

  return (
    <div>
      <h3>نمایش کار</h3>
      <Divider />
      <label>عنوان کار</label>
      <Divider type='vertical' />
      <span>{todo.title}</span>
      <Divider />
      <label>وضعیت</label>
      <Divider type='vertical' />
      <span>{todo.completed ? 'انجام شده' : 'در انتظار انجام'}</span>
      <Divider />
      <Link to='/todo'>بازگشت به لیست کارها</Link>
    </div>
  )
}
