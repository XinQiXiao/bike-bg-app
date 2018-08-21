
import moment from 'moment'

function currentTimeStr(){
	return moment().format('YYYY-MM-DD HH:mm:ss')
}

function transformTime(timeNum){
	let result = moment(timeNum).format('YYYY-MM-DD HH:mm:ss')
	return result
}

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

export default {
	currentTimeStr,
	pagination,
	transformTime,
}