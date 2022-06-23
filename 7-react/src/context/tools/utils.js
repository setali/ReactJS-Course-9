import cookie from 'js-cookie'
import { TOKEN_NAME } from './constant'

export function getToken () {
  return cookie.get(TOKEN_NAME)
}

export function setToken (token) {
  cookie.set(TOKEN_NAME, token)
}

export function removeToken () {
  cookie.remove(TOKEN_NAME)
}
