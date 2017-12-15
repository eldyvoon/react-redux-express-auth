import { AUTH_SUCCESS, AUTH_FAIL, GET_USER } from '../constants'
import axios from 'axios'
import { errorMsg } from '../utils'

export function login({user,pwd}){
	if(!user) {
		return errorMsg('Username cannot be blank!')
	}

	if(!pwd) {
		return errorMsg('Password cannot be blank!')
	}

	return dispatch=>{
		axios.post('/auth/user/login', {user,pwd})
			.then(res=>{
				if(res.status===200 && res.data.status===1){
					dispatch({
						type: AUTH_SUCCESS,
						payload: res.data.data
					})
				}else{
					dispatch(errorMsg(res.data.msg))
				}
			})
	}
}

export function getUser() {
	return dispatch=>{
		return axios.get('/auth/user')
			.then(res=>{
				if(res.status===200 && res.data.status===1){
					return dispatch({
						type: GET_USER,
						payload: res.data.data
					})
				}else{
					dispatch({type: AUTH_FAIL})
				}
			})
	}
}