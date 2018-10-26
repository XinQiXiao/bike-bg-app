/**
 * create at 08/20/18
 */

import React, { Component } from 'react'
import { Card, Button, Table, Modal, Form, Select, message, notification } from 'antd'
import _ from 'lodash'

// axios
import axiosApi from '../../axios'

// utils
import {utils} from '../../utils'

// const 
import { cityColumns, cityConfig } from './constants' 
const FormItem = Form.Item
const SelectOption = Select.Option

class CityPage extends Component{
	state = {
		list: [],
		pagination: null,
		isShowOpenCity: false,
	}

	openForm = ''
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
				url: '/city/list',
				data: {
					params: {
						page: this.params.page,
					}
				}
			})
			let retList = []
			if(_.isArray(ret.item_list)){
				ret.item_list.forEach((item)=>{
					item.update_time = utils.transformTime(item.update_time)
					retList.push(item)
				})	
			}
			
			// console.log('_requestList ret=>', ret)
			this.setState({
				list: retList,
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
		this.setState({
			isShowOpenCity: true
		})
	}

	// 城市开通 提交
	_addOneCityRequest = async ()=>{
		try{
			this.setState({isShowOpenCity: false})
			const { getFieldsValue } = this.openForm.props.form
			let cityInfo = getFieldsValue()
			notification.info({
				message: '添加城市内容',
				description: `城市=${cityInfo.city_id} 用车模式=${cityInfo.mode} 运营模式=${cityInfo.op_mode}`
			})
			const ret = await axiosApi.ajax({
				url: 'city/open',
				data: {
					isShowLoading: true,
					params: cityInfo
				}
			})
			message.info(ret.result)
			// 请求列表刷新
			this._requestList()
		}catch(e){
			console.log('_addOneCityRequest e=>', e)
		}
	}

	render(){
		// console.log('state=>', this.state)
		const {list, pagination, isShowOpenCity} = this.state
		return (
			<div>
				<Card>
					<HeaderFilterForm />
				</Card>
				<Card style={{marginTop: 10}}>
					<Button type="primary" onClick={this._openCity}>开通城市</Button>
				</Card>
				<div className="content-wrap">
					<Table 
						bordered
						columns={cityColumns}
						dataSource={list}
						pagination={pagination}
						rowKey={record =>  record.id}
					/>
				</div>
				<Modal 
					title="开通城市"
					visible={isShowOpenCity}
					onCancel={()=>{
						this.setState({isShowOpenCity: false})
					}}
					onOk={this._addOneCityRequest}
				>
					<OpenCityForm wrappedComponentRef={(form)=>{ this.openForm = form }}/>
				</Modal>
			</div>
		)
	}
}

// 头部筛选表单
class FilterForm extends Component{
	render(){
		const { getFieldDecorator } = this.props.form
		return (
			<Form layout="inline">
					<FormItem label='城市' >
						{
							getFieldDecorator('city_id')(
								<Select placeholder='全部' style={{width: 100}}>
									<SelectOption value='0' >{cityConfig['0']}</SelectOption>
									<SelectOption value='1' >{cityConfig['1']}</SelectOption>
									<SelectOption value='2' >{cityConfig['2']}</SelectOption>
									<SelectOption value='3' >{cityConfig['3']}</SelectOption>
								</Select>
							)
						}
					</FormItem>
					<FormItem label='用车模式' >
						{
							getFieldDecorator('mode')(
								<Select placeholder='全部' style={{width: 160}}>
									<SelectOption value=''>全部</SelectOption>
									<SelectOption value='1'>指定停车点模式</SelectOption>
									<SelectOption value='2'>禁停区模式</SelectOption>
								</Select>
							)
						}
					</FormItem>
					<FormItem label='运营模式' >
						{
							getFieldDecorator('op_mode')(
								<Select placeholder='全部' style={{width: 80}}>
									<SelectOption value=''>全部</SelectOption>
									<SelectOption value='1'>自营</SelectOption>
									<SelectOption value='2'>加盟</SelectOption>
								</Select>
							)
						}
					</FormItem>
					<FormItem label='加盟商授权状态' >
						{
							getFieldDecorator('auth_status')(
								<Select placeholder='全部' style={{width: 120}}>
									<SelectOption value=''>全部</SelectOption>
									<SelectOption value='1'>授权</SelectOption>
									<SelectOption value='2'>未授权</SelectOption>
								</Select>
							)
						}
					</FormItem>
					<FormItem>
						<Button type="primary" style={{margin: '0 20px'}}>查询</Button>
						<Button>重置</Button>
					</FormItem>
			</Form>
		)
	}
}
const HeaderFilterForm = Form.create()(FilterForm)

class CityForm extends Component{
	render(){
		const { getFieldDecorator } = this.props.form
		const formItemLayout = {
			labelCol: {
				span: 5
			},
			wrapperCol: {
				span: 10
			},
		}
		return(
			<Form layout="horizontal">
				<FormItem label="选择城市" {...formItemLayout}>
					{
						getFieldDecorator('city_id', {
							initialValue: '1'
						})(
							<Select >
								<SelectOption value="0">{cityConfig['0']}</SelectOption>
								<SelectOption value="1">{cityConfig['1']}</SelectOption>
								<SelectOption value="2">{cityConfig['2']}</SelectOption>
								<SelectOption value="3">{cityConfig['3']}</SelectOption>
							</Select>
						)
					}
				</FormItem>
				<FormItem label="营业模式"  {...formItemLayout}>
					{
						getFieldDecorator('op_mode', {
							initialValue: '1'
						})(
							<Select placeholder="自营">
								<SelectOption value="1">自营</SelectOption>
								<SelectOption value="2">加盟</SelectOption>
							</Select>
						)
					}
				</FormItem>
				<FormItem label="用车模式"  {...formItemLayout}>
					{
						getFieldDecorator('mode', {
							initialValue: '1'
						})(
							<Select placeholder="指定停车点">
								<SelectOption value="1">指定停车点</SelectOption>
								<SelectOption value="2">禁停区</SelectOption>
							</Select>
						)
					}
				</FormItem>
			</Form>
		)
	}
}
const OpenCityForm = Form.create()(CityForm)

export default CityPage