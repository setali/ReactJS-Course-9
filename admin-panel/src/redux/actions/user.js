import { createAction } from '@reduxjs/toolkit'
import request from '../../tools/request'
import { message } from 'antd'
import { setToken, getToken, removeToken } from '../../tools/utils'

export const setUser = createAction('USER')
export const setIsLoggedIn = createAction('IS_LOGGED_IN')
export const setUserIsLoading = createAction('USER_IS_LOADING')

export function logon (user, saveToken = false) {
  return dispatch => {
    dispatch(setUser(user))
    dispatch(setIsLoggedIn(true))
    saveToken && setToken(user.email)
  }
}

export function login (authData) {
  return dispatch => {
    request('/users/1')
      .then(({ data, status }) => {
        if (status >= 400) {
          message.error('نام کاربری یا رمز عبور نادرست است')
        } else {
          dispatch(logon(data, true))
        }
      })
      .catch(() => message.error('نام کاربری یا رمز عبور نادرست است'))
  }
}

export function getUser () {
  return dispatch => {
    const token = getToken()
    if (token) {
      dispatch(setUserIsLoading(true))
      request('/users/2')
        .then(({ data }) => dispatch(logon(data)))
        .finally(() => dispatch(setUserIsLoading(false)))
    }
  }
}

export function logout () {
  return dispatch => {
    dispatch(setUser({}))
    dispatch(setIsLoggedIn(false))
    removeToken()
  }
}
