/**
 * create at 08/07/18
 */
import React, { Component } from 'react'
import { Card, Table, Modal, Button, message } from 'antd'
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
		render(sex){
			return sex === 1 ? '男' : '女'
		}
	},
	{
		title: '状态',
		dataIndex: 'state',
		render(state){
			let config = {
				'1': '咸鱼一枚',
				'2': '风华浪子',
				'3': '北大才子一枚',
				'4': '百度FE',
				'5': '创业者',
			}
			return config[state]
		}
	},
	{
		title: '爱好',
		dataIndex: 'interest',
		render(interest){
			let config = {
				'1': '游泳',
				'2': '打篮球',
				'3': '踢足球',
				'4': '跑步',
				'5': '爬山',
				'6': '骑行',
				'7': '桌球',
				'8': '麦霸',
			}
			return config[interest]
		}
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
		selectedRowKeys: [],
		selectedRows: []
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
					},
					isShowLoading: true,
				}
			})
			this.setState({
				dataSource2: _.isArray(ret.list) ? ret.list : [],
				selectedRowKeys: [],
				selectedRows: []
			})
		} catch(e){
			console.log('_request e=>', e)
		}
	}

	_onRowClick = (record, index)=>{
		let selectedKeys = [index]
		Modal.info({
			title: '选中的用户信息',
			content: `用户名：${record.userName}  用户爱好：${record.interest}`
		})
		this.setState({
			selectedRowKeys: selectedKeys,
			selectedItem: record
		})
	}

	_handleDelete = ()=>{
		const {selectedRows} = this.state 
		let ids = []
		selectedRows.forEach((item)=>{
			ids.push(item.id)
		})
		Modal.confirm({
			title: '删除内容',
			content: `确定要删除这些数据吗？${ids.join(',')}`,
			onOk: ()=>{
				message.success('删除成功')
				// 重新请求数据
				this._request()
			},
		})
	}

	render(){
		const {selectedRowKeys} = this.state
		const rowSelection = {
			type: 'radio',
			selectedRowKeys,
		}
		const rowCheckSelection = {
			type: 'checkbox',
			selectedRowKeys,
			onChange: (selectedRowKeys, selectedRows)=>{
				this.setState({
					selectedRowKeys,
					selectedRows,
				})
			}
		}
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
				<Card title="数据动态渲染表格-Mock" style={{marginTop: 10}}>
					<Table 
						bordered
						columns={columns}
						dataSource={this.state.dataSource2}
						pagination={false}
						rowKey={record =>  record.id}
					/>
				</Card>
				<Card title="Mock-单选" style={{marginTop: 10}}>
					<Table 
						rowSelection={rowSelection}
						onRow={(record, idx)=>{
							return {
								onClick:()=>{
									this._onRowClick(record, idx)
								} 
							}
						}}
						bordered
						columns={columns}
						dataSource={this.state.dataSource2}
						pagination={false}
						rowKey={record =>  record.id}
					/>
				</Card>
				<Card title="Mock-复选" style={{marginTop: 10}}>
					<div style={{marginBottom: 10}}>
						<Button type="primary" onClick={this._handleDelete}>删除</Button>
					</div>
					<Table 
						rowSelection={rowCheckSelection}
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