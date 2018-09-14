
import moment from 'moment'

/**
 * 获取当前时间
 * return YYYY-MM-DD HH:mm:ss
 */
function currentTimeStr(){
	return moment().format('YYYY-MM-DD HH:mm:ss')
}

/**
 * 转换时间戳
 * @param {*} timeNum [number]
 */
function transformTime(timeNum){
	let result = moment(timeNum).format('YYYY-MM-DD HH:mm:ss')
	return result
}

/**
 * 自定义翻页
 * @param {*} data 翻页数据 固定格式 {page, page_size, total}
 * @param {*} callback 翻页function
 */
function pagination(data, callback){
	return {
		onChange: (current)=>{
			callback(current)
		},
		current: data.page,
		pageSize: data.page_size,
		total: data.total,
		showTotal: ()=>{
			return `共${data.total}条`
		},
		showQuickJumper: true,
	}
}

/**
 * 计算table width
 * @param {*} targetColumns [table columns]
 */
function calculateTableWidth(targetColumns){
	let retWidth = 0
	for (const col of targetColumns) {
		retWidth += col.width
	}
	return retWidth
}

/**
 *  money translate
 */
function translateToRMB(target){
	let moneyNum = Number.parseInt(target/100, 10).toFixed(2)
	return '￥' + moneyNum
}

/**
 * translate distance
 */
function translateDistance(target){
	return target/1000 + 'km'
}

/**
 * update selected item
 * @param {*} target (this)
 * @param {*} selectedRowKeys 
 * @param {*} selectedItem 
 */
function updateSelectedItem(target, selectedRowKeys, selectedItems){
	target.setState({
		selectedRowKeys,
		selectedItems
	})
}

/**
 * 性别转换
 * @param {number} num 
 */
function transformSex(num){
	let reSex = '未知'
	switch(num){
		case 1:
			reSex = '男'
			break
		case 2: 
			reSex = '女'
			break
		default:
			break
	}
	return reSex
}

/**
 * 婚否转换
 * @param {number} num 
 */
function transformMarry(num){
	let reMarry = '未知'
	switch(num){
		case 0:
			reMarry = '未婚'
			break
		case 1: 
			reMarry = '已婚'
			break 
		default:
			break
	}
	return reMarry
}

export default {
	currentTimeStr,
	pagination,
	transformTime,
	calculateTableWidth,
	translateToRMB,
	translateDistance,
	transformSex,
	transformMarry,
	updateSelectedItem,
}