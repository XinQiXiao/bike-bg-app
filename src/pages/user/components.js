/**
 * create at 09/13/18
 */

import React, { Component } from 'react'
import moment from 'moment'
import {Form, Input, Radio, Select, Switch, DatePicker, TimePicker} from 'antd'

// util
import { utils } from '../../utils'

// config 
import { ConstConfig } from '../../config'

// const 
const FormItem = Form.Item
const RadioGroup = Radio.Group
const SelectOption = Select.Option
const TextArea = Input.TextArea

class CreateForm extends Component{
	render(){
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
						getFieldDecorator('username', {
							initialValue: '',
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
						getFieldDecorator('sex', {
							initialValue: '1',
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
						getFieldDecorator('tel', {
							initialValue: '',
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
						getFieldDecorator('state', {
							initialValue: '1',
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
						getFieldDecorator('interest', {
							initialValue: '1',
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
						getFieldDecorator('isMarried', {
							valuePropName: 'checked',
							initialValue: false,
						})(
							<Switch />
						)
					}
				</FormItem>
				<FormItem label="生日" {...formItemLayout}>
					{
						getFieldDecorator('birthday', {
							initialValue: moment('2018-09-13')
						})(
							<DatePicker 
								showTime
								format='YYYY-MM-DD HH:mm:ss'
							/>
						)
					}
				</FormItem>
				<FormItem label="联系地址" {...formItemLayout}>
					{
						getFieldDecorator('address', {
							initialValue:''
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
						getFieldDecorator('registertime')(
							<TimePicker 
								format='HH:mm'
							/>
						)
					}
				</FormItem>
			</Form>
		)
	}
}

const CreateFormComponent = Form.create()(CreateForm)

export {
	CreateFormComponent
}