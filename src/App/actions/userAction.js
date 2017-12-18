import { AUTH_SUCCESS, LOGOUT, GET_USER } from '../constants'
import axios from 'axios'
import { errorMsg } from '../utils'

export function loginUser(email,password){
	return dispatch=>{

		if(!email) {
			return dispatch(errorMsg('Email cannot be blank!'))
		}

		if(!password) {
			return dispatch(errorMsg('Password cannot be blank!'))
		}

		axios.post('auth/login', {email,password})
			.then(res=>{
				if(res.status===200 && res.data.status===1){
					dispatch({
						type: AUTH_SUCCESS,
						payload: res.data.data
					})
				}
			})
			.catch(res => { 
				dispatch(errorMsg(res.data.msg))
			})
	}
}

export function signupUser({fullName, email, password, passwordAgain}){
	return dispatch=>{

		if(!fullName) {
			return dispatch(errorMsg('Full Name cannot be blank!'))
		}

		if(!email) {
			return dispatch(errorMsg('Email cannot be blank!'))
		}

		if(/\S+@\S+\.\S+/.test(email) === false) {
			return dispatch(errorMsg('Email entered is not valid!'))
		}

		if(!password || !passwordAgain) {
			return dispatch(errorMsg('Password is required!'))
		}

		if(password.length < 6) {
			return dispatch(errorMsg('Password must be at least 6 characters!'))
		}

		if(password !== passwordAgain) {
			return dispatch(errorMsg('Password entered is not equal!'))
		}

		axios.post('auth/signup', {fullName, email, password})
			.then(res=>{
				if(res.status===200 && res.data.status===1){
					dispatch({
						type: AUTH_SUCCESS,
						payload: res.data.data
					})
				}
			})
			.catch(res=>{
				dispatch(errorMsg(res.data.msg))
			})
	}
}

export function logout() {
	return dispatch=>{
		dispatch({type: LOGOUT})
	}
}

export function getUser(userId) {
	return dispatch=>{
		return axios.get(`auth/user?id=${userId}`)
			.then(res=>{
				if(res.status===200 && res.data.status===1){
					return dispatch({
						type: GET_USER,
						payload: res.data.data
					})
				}
			})
			.catch(res=>{
				dispatch(errorMsg(res.data.msg))
			})
	}
}