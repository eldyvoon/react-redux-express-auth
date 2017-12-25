import { FETCH_ADS, FETCH_AD } from '../constants'
import moment from 'moment'

const initState = {
	ads: [],
	ad: {}
}

export function ads(state=initState, action) {
	switch(action.type){
		case FETCH_ADS:
			return { 
				...state,
				ads: (action.payload || []).map(o => {
					return{
						...o,
						expiry_date: o.expiry_date && moment(o.expiry_date).format('DD-MM-YYYY')
					}
				})
			}
		case FETCH_AD:
			return { 
				...state,
				ad: action.payload
			}
		default:
			return state
	}
}