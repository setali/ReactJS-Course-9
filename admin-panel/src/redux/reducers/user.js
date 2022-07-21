import { createReducer } from '@reduxjs/toolkit'
import { setUser, setIsLoggedIn, setUserIsLoading } from '../actions/user'

export const user = createReducer(
  {},
  {
    [setUser]: (state, { payload }) => payload
  }
)

export const isLoggedIn = createReducer(false, {
  [setIsLoggedIn]: (state, { payload }) => payload
})

export const userIsLoading = createReducer(false, {
  [setUserIsLoading]: (state, { payload }) => payload
})
