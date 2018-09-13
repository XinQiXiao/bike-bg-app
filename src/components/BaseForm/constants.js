/**
 * create at 08/29/18
 */

/**
 * 表单 类型
 * 现支持类型有 Select/Input/CheckBox/(自定义)QueryTime
 */
const baseFormType = {
	SELECT: 'FORM_SELECT',
	QUERY_TIME: 'FORM_QUERY_TIME',
	DATE_PICKER: 'FORM_DATE_PICKER',
	INPUT: 'FORM_INPUT',
	CHECK_BOX: 'FORM_CHECK_BOX'
}

/**
 * option button 类型
 * 现支持 query(查询、提交表单)、reset(重置表单)
 */
const optionsBtnType = {
	QUERY: 'OPTION_BUTTON_TYPE_QUERY',
	RESET: 'OPTION_BUTTON_TYPE_RESET'
}

export {
	baseFormType,
	optionsBtnType,
}
