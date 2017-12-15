import { ERROR_MSG } from '../constants'

export function errorMsg(msg){
	return { msg, type:ERROR_MSG }
}