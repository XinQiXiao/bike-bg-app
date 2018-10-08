/**
 * create at 10/08/18
 */
import { type } from '../action'

const initialState = {
	menuName: '首页',
}

export default (state = initialState, action)=>{
	switch(action.type){
		case type.SWITCH_MENU:
			return {
				...state,
				menuName: action.menuName,
			}
		default:
			return state
	}
}