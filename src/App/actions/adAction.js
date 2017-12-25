import { FETCH_ADS, FETCH_AD } from '../constants'
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