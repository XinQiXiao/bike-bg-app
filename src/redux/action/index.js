/**
 * create at 10/08/18
 */

/**
 * action type
 */
export const type = {
	SWITCH_MENU:'ACTION_SWITCH_MENU'
}

export function switchMenu(menuName){
	return {
		type: type.SWITCH_MENU,
		menuName
	}
}