import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPost } from '../redux/actions/post'
import request from '../tools/request'

export function usePost (id) {
  const dispatch = useDispatch()

  const post = useSelector(state => state.post)

  useEffect(() => {
    setPost({})
    request(`/posts/${id}`).then(({ data }) => dispatch(setPost(data)))
  }, [id])

  return post
}
