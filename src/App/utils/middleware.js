import { AUTH_SUCCESS, LOGOUT } from '../constants'
import jwtDecode from 'jwt-decode'

const localStorageMiddleware = store => next => action => {
  if (action.type === AUTH_SUCCESS) {
    window.localStorage.setItem('token', action.payload)
    window.localStorage.setItem('userId', jwtDecode(action.payload)._id)
  } else if (action.type === LOGOUT) {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('userId')
  }
  next(action)
}

export { localStorageMiddleware }
