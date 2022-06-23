import axios from 'axios'
import { BASE_URL } from './constant'
import { getToken } from './utils'

const request = axios.create({
  baseURL: BASE_URL
})

request.interceptors.request.use(
  function (config) {
    const token = getToken()
    if (token) {
      config.headers.authorization = `Bearer ${getToken()}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  function (response) {
    console.log(response)
    response.data.name = 'Ali Mousavi'
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default request
