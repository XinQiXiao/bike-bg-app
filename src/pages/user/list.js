/**
 * create at 09/12/18
 */
import React, { Component } from 'react'
import { Card, Button} from 'antd'
import _ from 'lodash'

// components
import { FilterForm, ETable, formConfig } from '../../components'

// axios
import axiosApi from '../../axios'

// utils
import {utils} from '../../utils'

// const 
import { userColumns } from './constants'
const FORM_LOGIN = 'form_option_login'

class UserListComponent extends Component{
	state = {
		list: [],
		pagination: null,
		selectedRowKeys: [], // rowKeys 存储的即是选择 的 item ids 
	}

	tableWidth = utils.calculateTableWidth(userColumns)+60 // 'radio' width 60

	params = {
		page: 1
	}

	componentWillMount(){
		this._requestList()
	}

	formList = [
		{
			type: formConfig.baseFormType.INPUT,
			field: 'tel',
			label: '',
			placeholder: '请输入手机号',
			rules: [
				{
					required: true,
					message: '手机号码不能为空'
				},
				{
					len: 11,
					pattern: /^1\d{10}$/g,
					message: '手机号不符合规则'
				}
			]
		},
		{
			type: formConfig.baseFormType.INPUT,
			field: 'password',
			label: '',
			placeholder: '请输入密码',
			rules: [
				{
					required: true,
					message: '密码不能为空'
				},
				{
					min: 6,
					max: 20,
					message: '密码为6~20位'
				}
			]
		}
	]

	_loginClick = (code, values)=>{
		if(code === FORM_LOGIN){
			this.params = {
				...this.params,
				...values,
			}
			this._requestList()
		}
	}
	formOptions = [
		{
			type: formConfig.optionsBtnType.QUERY,
			code: FORM_LOGIN,
			btnType: 'primary',
			title: '登录',
			optionItemPress: this._loginClick
		}
	]

	_requestList = async()=>{
		try{
			const _this = this
			const ret = await axiosApi.ajax({
				url: 'user/list',
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

	_createClick = ()=>{

	}
	_editClick = ()=>{

	}
	_infoClick = ()=>{

	}
	_deleteClick = ()=>{

	}

	render(){
		const { list, pagination, selectedRowKeys } = this.state
		return (
			<div>
				<Card>
					<FilterForm formList={this.formList} options={this.formOptions}/>
				</Card>
				<Card style={{marginTop: 10}}>
					<Button type="primary" onClick={this._createClick}>创建员工</Button>
					<Button type="primary" style={{marginLeft: 30}} onClick={this._editClick}>编辑员工</Button>
					<Button type="primary" style={{marginLeft: 30}} onClick={this._infoClick}>员工闲情</Button>
					<Button style={{marginLeft: 30, color: '#f00'}} onClick={this._deleteClick}>删除员工</Button>
				</Card>
				<div className="content-wrapper">
					<ETable 
						updateSelectedItem={(keys)=>utils.updateSelectedItem(this, keys)}
						columns={userColumns}
						dataSource={list}
						pagination={pagination}
						rowSelection={'radio'}
						scroll={{x: this.tableWidth, y: 500}}
						selectedRowKeys={selectedRowKeys}
					/>
				</div>
			</div>
		)
	}
}

export default UserListComponent