/**
 * create at 08/07/18
 */
import React, { Component } from 'react'
import { Card, Table } from 'antd'
import _ from 'lodash'

// axios
import axiosApi from '../../axios'

// const 
const dataSource = [
	{
		id: 0,
		userName: 'Jack',
		sex: 1,
		state: 1,
		interest: 1,
		birthday: '2000-1-1',
		address: '北京市朝阳区',
		getUpTime: '8:10'
	},
	{
		id: 1,
		userName: 'Tom',
		sex: 0,
		state: 2,
		interest: 2,
		birthday: '2006-6-3',
		address: '北京市海淀区',
		getUpTime: '9:10'
	},
	{
		id: 2,
		userName: 'Lisi',
		sex: 1,
		state: 3,
		interest: 3,
		birthday: '2002-10-1',
		address: '北京市通州区',
		getUpTime: '7:30'
	},
]

const columns = [
	{
		title: 'id',
		dataIndex: 'id',
	},
	{
		title: '用户姓名',
		dataIndex: 'userName',
	},
	{
		title: '性别',
		dataIndex: 'sex',
	},
	{
		title: '状态',
		dataIndex: 'state',
	},
	{
		title: '爱好',
		dataIndex: 'interest',
	},
	{
		title: '生日',
		dataIndex: 'birthday',
	},
	{
		title: '地址',
		dataIndex: 'address',
	},
	{
		title: '早起时间',
		dataIndex: 'getUpTime',
	},
]

class Page extends Component{
	state = {
		dataSource: [],
		dataSource2: [],
	}

	componentDidMount(){
		this.setState({
			dataSource: dataSource
		})
		this._request()
	}

	// 动态获取 mock 数据
	_request = async ()=> {
		try{
			const ret = await axiosApi.ajax({
				url: '/table/list',
				data: {
					parmas: {
						page: 1
					}
				}
			})
			this.setState({
				dataSource2: _.isArray(ret.list) ? ret.list : []
			})
		} catch(e){
			console.log('_request e=>', e)
		}
	}

	render(){
		return (
			<div >
				<Card title="基础表格">
					<Table 
						bordered
						columns={columns}
						dataSource={this.state.dataSource}
						pagination={false}
						rowKey={record =>  record.id}
					/>
				</Card>
				<Card title="数据动态渲染表格" style={{marginTop: 10}}>
					<Table 
						bordered
						columns={columns}
						dataSource={this.state.dataSource2}
						pagination={false}
						rowKey={record =>  record.id}
					/>
				</Card>
			</div>
		)
	}
}

export default Page