import { AUTH_SUCCESS } from '../constants'

const initState = {
	user: '',
	isAuth: false,
	redirectTo: '',
	msg: ''
}

export function user(state=initState, action) {
	switch(action.type){
		case AUTH_SUCCESS:
			return { ...state }
		default:
			return state
	}
}