/**
 * create at 08/21/18
 */

import React, { Component } from 'react'
import { Card, Form, Select, Button, Table, DatePicker} from 'antd'
import _ from 'lodash'
import moment from 'moment'

// axios
import axiosApi from '../../axios'

// utils
import {utils} from '../../utils'

// const 
import { orderColumns } from './contants'
const FormItem = Form.Item
const SelectOption = Select.Option

class CurrentPage extends Component{
	state = {
		list: [],
		pagination: null,
	}

	params = {
		page: 1
	}

	componentDidMount(){
		this._requestList()
	}

	// 请求订单列表数据
	_requestList = async ()=>{
		try{
			const _this = this
			const ret = await axiosApi.ajax({
				url: 'order/list',
				date: {
					isShowLoading: true,
					params: {
						page: this.params.page
					}
				}
			})

			this.setState({
				list: _.isArray(ret.list) ? ret.list : [],
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

	render(){
		const { list, pagination, } = this.state
		return (
			<div>
				<Card >
					<HeaderFilterForm />
				</Card>
				<Card style={{marginTop: 10}}>
					<Button type="primary">订单详情</Button>
					<Button type="primary" style={{marginLeft: 30}}>结束订单</Button>
				</Card>
				<div className="content-wrapper">
					<Table 
						bordered
						columns={orderColumns}
						dataSource={list}
						pagination={pagination}
						rowKey={record =>  record.id}
					/>
				</div>
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
									<SelectOption value='0' >0</SelectOption>
									<SelectOption value='1' >1</SelectOption>
									<SelectOption value='2' >2</SelectOption>
									<SelectOption value='3' >3</SelectOption>
								</Select>
							)
						}
					</FormItem>
					<FormItem label='订单时间' >
						{
							getFieldDecorator('start_time', {
								initialValue: moment('2018-08-21')
							})(
								<DatePicker 
									showTime
									format='YYYY-MM-DD HH:mm:ss'
								/>
							)
						}
					</FormItem>
					<FormItem>
						{
							getFieldDecorator('end_time', {
								initialValue: moment('2018-08-21')
							})(
								<DatePicker 
									showTime
									format='YYYY-MM-DD HH:mm:ss'
								/>
							)
						}
					</FormItem>
					<FormItem label='订单状态' >
						{
							getFieldDecorator('status')(
								<Select placeholder='全部' style={{width: 80}}>
									<SelectOption value='0'>全部</SelectOption>
									<SelectOption value='1'>进行中</SelectOption>
									<SelectOption value='2'>行程结束</SelectOption>
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

export default CurrentPage