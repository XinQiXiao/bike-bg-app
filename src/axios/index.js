/**
 * create at 07/23/18
 */
import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'

// const 
const baseApi = 'https://www.easy-mock.com/mock/5b6aeb1ca40bfb27425bbaee/mockapi'

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

	static ajax(options){
		let loading 
		if(options.data && options.data.isShowLoading !== false){
			loading = document.getElementById('ajaxLoading')
			loading.style.display = 'block'
		}
		return new Promise((resolve, reject)=>{
			axios({
				url: options.url,
				method: 'get',
				baseURL: baseApi,
				timeout: 5000,
				params: (options.data && options.data.params) || '',
			}).then((response)=>{
				if(options.data && options.data.isShowLoading !== false){
					loading = document.getElementById('ajaxLoading')
					loading.style.display = 'none'
				}
				if(response.status === 200){
					const res = response.data
					if(res.code === 0){
						resolve(res.data)
					} else {
						Modal.info({
							title: '提示',
							content: res.msg,
						})
					}
				} else {
					reject(response.data)
				}
			})
		})
	}
}

export default Axios