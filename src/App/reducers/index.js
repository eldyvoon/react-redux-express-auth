import { combineReducers } from 'redux'
import { user } from './userReducer'
import { ads } from './adReducer'
import { global } from './globalReducer'

export default combineReducers({
	global,
	user,
	ads
})