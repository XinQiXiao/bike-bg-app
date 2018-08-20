/**
 * create at 08/20/18
 */

import React, { Component } from 'react'
import { Card, Button, Table } from 'antd'
import _ from 'lodash'

// components
import FilterForm from './FilterForm'

// axios
import axiosApi from '../../axios'

// utils
import {utils} from '../../utils'

// const 
import { cityColumns } from './constants'

class CityPage extends Component{
	state = {
		list: [],
		pagination: null
	}

	params = {
		page: 1
	}

	componentDidMount(){
		this._requestList()
	}

	// 请求接口数据
	_requestList = async ()=>{
		try{
			let _this = this
			let ret = await axiosApi.ajax({
				url: '/open_city',
				data: {
					params: {
						page: this.params.page,
					}
				}
			})
			console.log('_requestList ret=>', ret)
			this.setState({
				list: _.isArray(ret.item_list) ? ret.item_list : [],
				pagination: utils.pagination(ret, (current)=>{
					// 翻页时，设置页码，重新请求列表
					_this.params.page = current
					_this._requestList()
				})
			})
		} catch(e){
			console.log('_requestList e=>', e)
		}
	}

	// 开通城市
	_openCity = ()=>{

	}

	render(){
		console.log('state=>', this.state)
		return (
			<div>
				<Card>
					<FilterForm />
				</Card>
				<Card style={{marginTop: 10}}>
					<Button type="primary" onClick={this._openCity}>开通城市</Button>
				</Card>
				<div className="content-wrap">
					<Table 
						bordered
						columns={cityColumns}
						dataSource={this.state.list}
						pagination={this.state.pagination}
						rowKey={record =>  record.id}
					/>
				</div>
			</div>
		)
	}
}

export default CityPage