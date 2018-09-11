/**
 * create at 08/21/18
 */

import React, { Component } from 'react'
import { 
	Card, Button, Modal, message, Form, 
} from 'antd'
import _ from 'lodash'

// components
import { FilterForm, formConfig, ETable } from '../../components'

// axios
import axiosApi from '../../axios'

// utils
import {utils} from '../../utils'

// const 
import { orderColumns } from './constants'
const FormItem = Form.Item

class CurrentPage extends Component{
	state = {
		list: [],
		pagination: null,
		showFinishOrder: false,
		orderFinishData: null, 
		selectedRowKeys: [], // rowKeys 存储的即是选择 的 item ids 
	}

	tableWidth = utils.calculateTableWidth(orderColumns)+60 // 'radio' width 60

	params = {
		page: 1
	}
	formList = [
		{
			type: formConfig.BaseFormType.SELECT,
			field: 'city',
			label: '城市',
			placeholder: '全部',
			initialValue: 1,
			width: 80,
			list: [
				{id: 0, name: '全部'},
				{id: 1, name: '北京'},
				{id: 2, name: '上海'},
				{id: 3, name: '天津'},
			]
		},
		{
			type: formConfig.BaseFormType.QUERY_TIME,
			label: '订单时间',
			placeholder: '选择时间',
		},
		{
			type: formConfig.BaseFormType.SELECT,
			field: 'order_status',
			label: '订单状态',
			placeholder: '全部',
			initialValue: 1,
			width: 90,
			list: [
				{id: 0, name: '全部'},
				{id: 1, name: '进行中'},
				{id: 2, name: '行程结束'},
			]
		},
	]

	componentDidMount(){
		this._requestList()
	}

	// 请求订单列表数据
	_requestList = async ()=>{
		try{
			const _this = this
			const ret = await axiosApi.ajax({
				url: 'order/list',
				data: {
					isShowLoading: true,
					params: this.params
				}
			})

			this.setState({
				list: _.isArray(ret.list) ? ret.list : [],
				selectedRowKeys: [],
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

	// 点击订单详情
	_orderInfoClick = ()=>{
		try{
			const { selectedRowKeys } = this.state
			if(!_.isArray(selectedRowKeys) || selectedRowKeys.length===0){
				message.error('请选择要查看的订单')
				throw new Error('not select order item')
			}
			// 通过新窗口打开
			window.open(`/#/common/order/detail/${selectedRowKeys[0]}`, '_blank')
			// 通过 hash 路由跳转
			// window.location.href = `/#/common/order/detail/${selectedRowKeys[0]}`
		}catch(e){
			console.log('_orderInfoClick e=>', e)
		}
	}

	// 结束某些订单
	_orderFinishClick = async ()=>{
		try{
			const { selectedRowKeys } = this.state
			if(!_.isArray(selectedRowKeys)|| selectedRowKeys.length===0){
				message.error('请选择要结束的订单')
				throw new Error('not select order item')
			}
			const ret = await axiosApi.ajax({
				url: 'order/ebike_info',
				data: {
					isShowLoading: true,
					params: {
						ids: selectedRowKeys
					}
				}
			})
			this.setState({
				showFinishOrder: true,
				orderFinishData: ret,
			})
		}catch(e){
			console.log('_orderFinishClick e=>', e)
		}
	}
	// 关闭结束订单 Modal
	_closeFinishModal = ()=>{
		this.setState({
			showFinishOrder: false
		})
	}
	// 结束某些订单 确认
	_finishModalSubmit = async ()=>{
		try{
			const ret = await axiosApi.ajax({
				url: 'order/finish_order',
				data: {
					isShowLoading: true,
					params: {
						ids: this.state.selectedRowKeys
					}
				}
			})
			message.success(ret.info)
			this._closeFinishModal()
			// 刷新订单列表
			this._requestList()
		}catch(e){
			this._closeFinishModal()
			console.log('_finishModalSubmit e=>', e)
		}
	}

	// form 查询
	_queryClick = (params)=>{
		this.params = {
			...this.params,
			...params,
		}
		this._requestList()
	}
	// form 重置
	_resetClick = ()=>{
		this._requestList()
	}

	render(){
		const { 
			list, pagination, showFinishOrder, orderFinishData, selectedRowKeys,
		} = this.state
		return (
			<div>
				<Card >
					<FilterForm formList={this.formList}
						queryPress={this._queryClick} resetPress={this._resetClick}
					/>
				</Card>
				<Card style={{marginTop: 10}}>
					<Button type="primary" onClick={this._orderInfoClick}>订单详情</Button>
					<Button 
						type="primary" style={{marginLeft: 30}}
						onClick={this._orderFinishClick}
					>结束订单</Button>
				</Card>
				<div className="content-wrapper">
					<ETable 
						updateSelectedItem={(keys)=>utils.updateSelectedItem(this, keys)}
						columns={orderColumns}
						dataSource={list}
						pagination={pagination}
						rowSelection={'checkbox'}
						scroll={{x: this.tableWidth, y: 500}}
						selectedRowKeys={selectedRowKeys}
					/>
				</div>
				<Modal 
					title="结束订单"
					visible={showFinishOrder}
					onCancel={this._closeFinishModal}
					onOk={this._finishModalSubmit}
					width={600}
				>
					<FinishForm finishData={orderFinishData}/>
				</Modal>
			</div>
		)
	}
}

class FinishForm extends Component{
	render(){
		let formData = !_.isNil(this.props.finishData) ? this.props.finishData : {}
		const {
			bike_code = '', battery = 0, start_time = '', location = ''
		} = formData
		const formItemLayout = {
			labelCol: {span: 5},
			wrapperCol: {span: 19}
		}
		return (
			<Form layout="horizontal">
				<FormItem label='车辆编号' {...formItemLayout}>
					{bike_code}
				</FormItem>
				<FormItem label='剩余电量' {...formItemLayout}>
					{battery}
				</FormItem>
				<FormItem label='行程开始时间' {...formItemLayout}>
					{start_time}
				</FormItem>
				<FormItem label='当前位置' {...formItemLayout}>
					{location}
				</FormItem>
			</Form>
		)
	}
}
FinishForm = Form.create()(FinishForm)

export default CurrentPage