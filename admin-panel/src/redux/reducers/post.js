import { createReducer } from '@reduxjs/toolkit'
import { setPosts, setPost } from '../actions/post'

export const posts = createReducer([], {
  // POSTS: (state, { type, payload }) => payload
  // [setPosts]: (state, { type, payload }) => payload
  [setPosts]: (state, { payload }) => payload
})

export const post = createReducer(
  {},
  {
    [setPost]: (state, { payload }) => payload
  }
)

// export const anotherPost = createReducer(
//   { list: [], item: {} },
//   {
//     POSTS: (state, { payload }) => ({ ...state, list: payload }),
//     POST: (state, { payload }) => ({ ...state, item: payload })
//   }
// )

// const state = {
//   anotherPost: {
//     list: [],
//     item: {}
//   }
// }

// export function posts (state = [], action) {
//   switch (action.type) {
//     case 'POSTS':
//       return action.payload

//     default:
//       return state
//   }
// }

// export function post (state = {}, action) {
//   switch (action.type) {
//     case 'POST':
//       return action.payload

//     default:
//       return state
//   }
// }
