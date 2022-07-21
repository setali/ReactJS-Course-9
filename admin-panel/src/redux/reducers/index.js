import { combineReducers } from 'redux'
import { persons, person } from './person'
import { posts, post } from './post'
import { todos } from '../slice/todo'
import { user, userIsLoading, isLoggedIn } from './user'

const reducer = combineReducers({
  persons,
  person,
  posts,
  post,
  todos,
  user,
  userIsLoading,
  isLoggedIn
})

export default reducer

// function reducer (state = { persons: [], posts: [] }, action) {
//     switch (action.type) {
//       case 'PERSONS':
//         return { ...state, persons: action.payload }

//       case 'POSTS':
//         return { ...state, posts: action.payload }

//       default:
//         return state
//     }
//   }

//   export default reducer
