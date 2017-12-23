import axios from 'axios'
import store from '../store'
import { REQUEST_START, REQUEST_STOP } from '../constants'

axios.interceptors.request.use(config => {
	store.dispatch({type: REQUEST_START})

	config.headers.authorization = localStorage.getItem('token')

	return config
}, err => {
	store.dispatch({type: REQUEST_STOP})
    throw err.response
})

axios.interceptors.response.use(config => {
	store.dispatch({type: REQUEST_STOP})
	return config
}, err => {
	store.dispatch({type: REQUEST_STOP})
    throw err.response
})