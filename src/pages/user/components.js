/**
 * create at 09/13/18
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {Form, Input, Radio, Select, Switch, DatePicker} from 'antd'

// util
import { utils } from '../../utils'

// config 
import { ConstConfig } from '../../config'

// const 
const FormItem = Form.Item
const RadioGroup = Radio.Group
const SelectOption = Select.Option
const TextArea = Input.TextArea

class HandleForm extends Component{
	render(){
		const {currentData, editAble} = this.props
		const {getFieldDecorator} = this.props.form
		const formItemLayout = {
			labelCol: {
				span: 4
			},
			wrapperCol: {
				span: 20
			},
		}
		return (
			<Form layout="horizontal">
				<FormItem label="姓名" {...formItemLayout}>
					{
						!editAble ? (currentData ? currentData['username'] : '') :
						getFieldDecorator('username', {
							initialValue: currentData ? currentData['username'] : null,
							rules: [{
								required: true,
								message: '用户名不能为空'
							}]
						})(
							<Input type="text" placeholder="请输入姓名"/>
						) 
					}
				</FormItem>
				<FormItem label="性别" {...formItemLayout}>
					{
						!editAble ? (currentData ? utils.transformSex(currentData['sex']) : '') :
						getFieldDecorator('sex', {
							initialValue: currentData ? currentData['sex'].toString() : null,
						})(
							<RadioGroup>
								<Radio value="1">{utils.transformSex(1)}</Radio>
								<Radio value="2">{utils.transformSex(2)}</Radio>
							</RadioGroup>
						)
					}
				</FormItem>
				<FormItem label="手机号" {...formItemLayout}>
					{
						!editAble ? (currentData ? currentData['tel'] : '') :
						getFieldDecorator('tel', {
							initialValue: currentData ?  currentData['tel'] : null,
							rules: [{
								required: true,
								message: '手机号不能为空'
							}, {
								len: 11,
								pattern: /^1\d{10}$/g,
								message: '手机号不符合规则'
							}]
						})(
							<Input type="text" placeholder="请输入手机号"/>
						)
					}
				</FormItem>
				<FormItem label="状态" {...formItemLayout}>
					{
						!editAble ? (currentData ? ConstConfig.stateCons[currentData['state']-1] : '') :
						getFieldDecorator('state', {
							initialValue: currentData ? currentData['state'].toString() : null,
						})(
							<Select>
								<SelectOption value='1'>{ConstConfig.stateCons[0]}</SelectOption>
								<SelectOption value='2'>{ConstConfig.stateCons[1]}</SelectOption>
								<SelectOption value='3'>{ConstConfig.stateCons[2]}</SelectOption>
								<SelectOption value='4'>{ConstConfig.stateCons[3]}</SelectOption>
								<SelectOption value='5'>{ConstConfig.stateCons[4]}</SelectOption>
							</Select>
						)
					}
				</FormItem>
				<FormItem label="兴趣" {...formItemLayout}>
					{
						!editAble ? (currentData ? ConstConfig.interestCons[currentData['interest']-1] : '') :
						getFieldDecorator('interest', {
							initialValue: currentData ? currentData['interest'].toString() : null,
						})(
							<Select>
								<SelectOption value='1'>{ConstConfig.interestCons[0]}</SelectOption>
								<SelectOption value='2'>{ConstConfig.interestCons[1]}</SelectOption>
								<SelectOption value='3'>{ConstConfig.interestCons[2]}</SelectOption>
								<SelectOption value='4'>{ConstConfig.interestCons[3]}</SelectOption>
								<SelectOption value='5'>{ConstConfig.interestCons[4]}</SelectOption>
								<SelectOption value='6'>{ConstConfig.interestCons[5]}</SelectOption>
								<SelectOption value='7'>{ConstConfig.interestCons[6]}</SelectOption>
								<SelectOption value='8'>{ConstConfig.interestCons[7]}</SelectOption>
							</Select>
						)
					}
				</FormItem>
				<FormItem label="是否结婚" {...formItemLayout}>
					{
						!editAble ? (currentData ? utils.transformMarry(currentData['isMarried']) : '') :
						getFieldDecorator('isMarried', {
							valuePropName: 'checked',
							initialValue: currentData ? Boolean(currentData['isMarried']) : false,
						})(
							<Switch />
						)
					}
				</FormItem>
				<FormItem label="生日" {...formItemLayout}>
					{
						!editAble ? (currentData ? currentData['birthday'] : '') :
						getFieldDecorator('birthday', {
							initialValue: currentData ? moment(currentData['birthday']) : null
						})(
							<DatePicker 
								showTime
								format='YYYY-MM-DD'
							/>
						)
					}
				</FormItem>
				<FormItem label="联系地址" {...formItemLayout}>
					{
						!editAble ? (currentData ? currentData['address'] : '') :
						getFieldDecorator('address', {
							initialValue: currentData ? currentData['address'] : null
						})(
							<TextArea 
								autosize={{
									minRows: 2, maxRows: 6
								}}
							/>
						)
					}
				</FormItem>
				<FormItem label="注册时间" {...formItemLayout}>
					{
						!editAble ? (currentData ? currentData['registertime'] : '') :
						getFieldDecorator('registertime', {
							initialValue: currentData ? moment(currentData['registertime']) : null
						})(
							<DatePicker 
								format='YYYY-MM-DD HH:mm'
							/>
						)
					}
				</FormItem>
			</Form>
		)
	}
}

HandleForm.propTypes ={
	currentData: PropTypes.object,
	editAble: PropTypes.bool,
	form: PropTypes.object,
}

HandleForm.defaultProps ={
	currentData: null,
	editAble: false,
	form: null,
}

const HandleFormComponent = Form.create()(HandleForm)

export {
	HandleFormComponent
}