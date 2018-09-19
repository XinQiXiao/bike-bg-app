/**
 * create at 09/19/18
 */
import React, { Component } from 'react'
import { Card, Button, message } from 'antd'
import _ from 'lodash'

// components
import { ETable } from '../../components'

// axios
import axiosApi from '../../axios'

// util
import { utils } from '../../utils'

// const 
import { permissonColumns } from './constants'

const CREATE = 'option_create'
const SETTING = 'option_setting'
const AUTH = 'option_auth'

class CurrentPage extends Component{
	state = {
		list: [],
		pagination: null,
		selectedRowKeys: [], // rowKeys 存储的即是选择 的 item ids 
		selectedItems: [], // 选择的 list items
	}

	params = {
		page: 1
	}

	tableWidth = utils.calculateTableWidth(permissonColumns)+60 // 'radio' width 60

	componentDidMount(){
		this._requestList()
	}

	_requestList = async ()=>{
		try{
			const _this = this
			const ret = await axiosApi.ajax({
				url: 'role/list',
				data: {
					isShowLoading: true,
					params: this.params
				}
			})

			// 数据重置
			this.setState({
				list: _.isArray(ret.list) ? ret.list : [],
				selectedRowKeys: [],
				selectedItems: [],
				pagination: utils.pagination(ret, (current)=>{
					_this.params.page = current
					// 翻页请求数据
					_this._requestList()
				})
			})
		}catch(e){
			console.log('_requestList e=>', e)
		}
	}

	_btnClick = (code)=>{
		const {selectedRowKeys} = this.state
		if(code === SETTING || code === AUTH ){
			selectedRowKeys.length > 0 ? null : message.info('请选择一个员工')
		}
	}

	render(){
		const { 
			list, pagination, selectedRowKeys, 
		} = this.state
		return (
			<div>
				<Card>
					<Button type="primary" 
						onClick={()=> this._btnClick(CREATE)}
					>创建角色</Button>
					<Button type="primary" onClick={()=> this._btnClick(SETTING)} 
						style={{marginLeft: 10}}
					>设置权限</Button>
					<Button type="primary" onClick={()=> this._btnClick(AUTH)} 
						style={{marginLeft: 10}}
					>用户授权</Button>
					<div className="content-wrap" style={{marginTop: 20}}>
						<ETable 
							updateSelectedItem={(keys, items)=>utils.updateSelectedItem(this, keys, items)}
							columns={permissonColumns}
							dataSource={list}
							pagination={pagination}
							rowSelection={'radio'}
							scroll={{x: this.tableWidth, y: 500}}
							selectedRowKeys={selectedRowKeys}
						/>
					</div>
				</Card>
			</div>
		)
	}
}

export default CurrentPage