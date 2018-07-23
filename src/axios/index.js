/**
 * create at 07/23/18
 */
import JsonP from 'jsonp'

class Axios{
	static jsonp(options){
		return new Promise((resolve, reject) => {
			JsonP(options.url, {
				param: 'callback'
			}, (err, response)=>{
				// TODO 
				// debugger
				if(response.status === 'success'){
					resolve(response)
				} else {
					reject(response.message)
				}
			})
		})
	}
}

export default Axios