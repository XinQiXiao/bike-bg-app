
import moment from 'moment'

function currentTimeStr(){
	return moment().format('YY-MM-DD HH:mm:ss')
}

export default {
	currentTimeStr,
}