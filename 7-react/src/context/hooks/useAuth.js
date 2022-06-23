import { useEffect, useState } from 'react'
import { getToken, removeToken, setToken } from '../tools/utils'
import request from '../tools/request'

export default function useAuth () {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (getToken()) {
      getUser()
    } else {
      setIsLoading(false)
    }
  }, [])

  function getUser () {
    request('/users/1')
      .then(({ data }) => {
        setUser(data)
        setIsLoggedIn(true)
      })
      .finally(() => setIsLoading(false))
  }

  function login () {
    request('/users/1').then(({ data }) => {
      setUser(data)
      setIsLoggedIn(true)
      setToken(data.email)
    })
  }

  function logout () {
    setUser({})
    setIsLoggedIn(false)
    removeToken()
  }

  return {
    user,
    isLoggedIn,
    isLoading,
    login,
    logout
  }
}
