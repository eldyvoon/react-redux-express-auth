import { AUTH_SUCCESS, LOGOUT } from '../constants'

const localStorageMiddleware = store => next => action => {
  if (action.type === AUTH_SUCCESS) {
      window.localStorage.setItem('token', action.payload)
  } else if (action.type === LOGOUT) {
    window.localStorage.removeItem('token')
  }
  next(action)
}

export { localStorageMiddleware }
