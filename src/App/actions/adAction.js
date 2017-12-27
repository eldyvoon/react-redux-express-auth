import { FETCH_ADS, FETCH_AD, APPLY_AD, SUBMIT_AD } from '../constants'
import axios from 'axios'
import { errorMsg } from '../utils'

export function fetchAds() {
	return dispatch=>{
		axios.get('/ads')
		.then(res=>{
			if(res.status===200 && res.data.status===1){
				dispatch({
					type: FETCH_ADS,
					payload: res.data.data
				})
			}
		})
		.catch(res => { 
			dispatch(errorMsg(res.data.msg))
		})
	}
}

export function fetchAd(id) {
	return dispatch=>{
		axios.get(`/ad/${id}`)
		.then(res=>{
			if(res.status===200 && res.data.status===1){
				dispatch({
					type: FETCH_AD,
					payload: res.data.data
				})
			}
		})
		.catch(res => { 
			dispatch(errorMsg(res.data.msg))
		})
	}
}

export function applyAd(id, userId) {
	return dispatch=>{
		axios.put(`/ad/apply`, {id, userId})
		.then(res=>{
			if(res.status===200 && res.data.status===1){
				dispatch({
					type: APPLY_AD,
					payload: res.data.data
				})
			}
		})
		.catch(res => {
			dispatch(errorMsg(res.data.msg))
		})
	}
}

export function submitAd(id, userId, content) {
	return dispatch=>{
		axios.put(`/ad/submit`, {id, userId, content})
		.then(res=>{
			if(res.status===200 && res.data.status===1){
				dispatch({
					type: SUBMIT_AD,
					payload: res.data.data
				})
			}
		})
		.catch(res => {
			dispatch(errorMsg(res.data.msg))
		})
	}
}