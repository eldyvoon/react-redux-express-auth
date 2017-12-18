import { ERROR_MSG } from '../constants'

export function errorMsg(msg){
	return { type:ERROR_MSG, payload:msg }
}