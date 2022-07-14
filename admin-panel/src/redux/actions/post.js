import { createAction } from '@reduxjs/toolkit'
import request from '../../tools/request'

export const setPosts = createAction('POSTS')
export const setPost = createAction('POST')

export const getPosts = () => dispatch =>
  request('/posts').then(({ data }) => dispatch(setPosts(data)))

export const getPost = id => dispatch => {
  setPost({})
  request(`/posts/${id}`).then(({ data }) => dispatch(setPost(data)))
}
