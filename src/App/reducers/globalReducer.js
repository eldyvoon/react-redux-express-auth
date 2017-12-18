import { REQUEST_START, REQUEST_STOP } from '../constants'

const initState = {
	loading: false
}

export function global(state=initState, action) {
	switch(action.type){
		case REQUEST_START:
			return { 
				...state,
				loading: true
			}
		case REQUEST_STOP:
			return {
				...state,
				loading: false
			}
		default:
			return state
	}
}