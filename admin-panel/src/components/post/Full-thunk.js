import { Divider } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getPost } from '../../redux/actions/post'

export default function Full () {
  const { id } = useParams()

  const dispatch = useDispatch()

  const post = useSelector(state => state.post)

  useEffect(() => {
    dispatch(getPost(id))
  }, [id])

  return (
    <div>
      <h3>نمایش مقاله</h3>
      <Divider />
      <label>عنوان مقاله</label>
      <Divider type='vertical' />
      <span>{post.title}</span>
      <Divider />
      <label>متن</label>
      <Divider type='vertical' />
      <span>{post.body}</span>
      <Divider />
      <Link to='/post'>بازگشت به لیست مقالات</Link>
    </div>
  )
}
