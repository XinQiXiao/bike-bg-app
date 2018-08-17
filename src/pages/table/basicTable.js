/**
 * create at 08/07/18
 */
import React, { Component } from 'react'
import { Card, Table, Modal, Button, message } from 'antd'
import _ from 'lodash'

// axios
import axiosApi from '../../axios'

// util
import { utils } from '../../utils'

// const 
import { dataSourceConst, columnsConst } from './contants'

class Page extends Component{
	state = {
		dataSource: [],
		dataSource2: [],
		selectedRowKeys: [],
		selectedRows: [],
		pagination: null,
	}

	params = {
		page: 1
	}

	componentDidMount(){
		this.setState({
			dataSource: dataSourceConst
		})
		this._request()
	}

	// 动态获取 mock 数据
	_request = async ()=> {
		try{
			let _this = this
			const ret = await axiosApi.ajax({
				url: '/table/list',
				data: {
					parmas: {
						page: this.params.page
					},
					isShowLoading: true,
				}
			})
			this.setState({
				dataSource2: _.isArray(ret.list) ? ret.list : [],
				selectedRowKeys: [],
				selectedRows: [],
				pagination: utils.pagination(ret, (current)=>{
					_this.params.page = current 
					this._request()
				})
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
		const columns = _.cloneDeep(columnsConst)
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
				<Card title="表格分页" style={{marginTop: 10}}>
					<Table 
						bordered
						columns={columns}
						dataSource={this.state.dataSource2}
						pagination={this.state.pagination}
						rowKey={record =>  record.id}
					/>
				</Card>
			</div>
		)
	}
}

export default Page