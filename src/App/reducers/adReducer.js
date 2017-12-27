import { FETCH_ADS, FETCH_AD, APPLY_AD, SUBMIT_AD } from '../constants'
import moment from 'moment'

const initState = {
	ads: [],
	ad: {},
	redirectTo: ''
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
				}),
				redirectTo: ''
			}
		case FETCH_AD:
			return { 
				...state,
				ad: action.payload,
				redirectTo: ''
			}
		case APPLY_AD:
			return {
				...state,
				redirectTo: action.payload.status === 'applied' && `/dashboard/ad/${action.payload._id}/applied`
			}
		case SUBMIT_AD:
			return {
				...state,
				redirectTo: action.payload.status === 'submitted' && `/dashboard`
			}
		default:
			return state
	}
}