import jwtDecode from 'jwt-decode'

import { AUTH_SUCCESS, LOGOUT, GET_USER, ERROR_MSG } from '../constants'

const initState = {
	id: '',
	name: '',
	redirectTo: '',
	msg: '',
	isAuth: false
}

export function user(state=initState, action) {
	switch(action.type){
		case AUTH_SUCCESS:
			return { 
				...state,
				id: jwtDecode(action.payload)._id,
				name: jwtDecode(action.payload).fullName,
				role: jwtDecode(action.payload).role,
				redirectTo: '/dashboard',
				isAuth: true,
				msg: ''
			}
		case LOGOUT:
			return {
				...initState,
				redirectTo: '/login'
			}
		case GET_USER: {
			console.log(action.payload)
			console.log(jwtDecode(action.payload).fullName)
			return {
				...state,
				id: jwtDecode(action.payload)._id,
				name: jwtDecode(action.payload).fullName,
				role: jwtDecode(action.payload).role,
				isAuth: true
			}
		}
		case ERROR_MSG: {
			return {
				...state,
				msg: action.payload
			}
		}
		default:
			return state
	}
}