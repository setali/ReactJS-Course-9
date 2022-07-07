import { Divider } from 'antd'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import request from '../../tools/request'
import { useSelector, useDispatch } from 'react-redux'

export default function Full () {
  const { id } = useParams()

  const dispatch = useDispatch()

  const post = useSelector(state => state.post)

  function setItem (data) {
    dispatch({ type: 'POST', payload: data })
  }

  useEffect(() => {
    setItem({})
    request(`/posts/${id}`).then(({ data }) => setItem(data))
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
