/**
 * create at 08/01/18
 */
import React, { Component } from 'react'
import { 
	Card, Form, Input, Select, Radio, InputNumber,
} from 'antd'

// const 
const FormItem = Form.Item
const RadioGroup = Radio.Group
const SelectOption = Select.Option

class FormRegister extends Component{

	render(){
		const { getFieldDecorator } = this.props.form
		const formItemLayout = {
			labelCol: {
				xs: 24,
				sm: 4
			},
			wrapperCol: {
				xs: 24,
				sm: 8
			}
		}
		return (
			<div>
				<Card title="注册表单">
					<Form layout="horizontal">
						<FormItem label="用户名" {...formItemLayout}>
							{
								getFieldDecorator('userName', {
									initialValue: '',
									rules: [
										{
											required: true,
											message: '用户名不能为空'
										},
									]
								})(
									<Input placeholder="请输入账号"/>
								)
							}
						</FormItem>
						<FormItem label="密码" {...formItemLayout}>
							{
								getFieldDecorator('password', {
									initialValue: ''
								})(
									<Input type="password" placeholder="请输入密码"/>
								)
							}
						</FormItem>
						<FormItem label="性别" {...formItemLayout}>
							{
								getFieldDecorator('sex', {
									initialValue: '1'
								})(
									<RadioGroup >
										<Radio value='1'>男</Radio>
										<Radio value='2'>女</Radio>
									</RadioGroup>
								)
							}
						</FormItem>
						<FormItem label="年龄" {...formItemLayout}>
							{
								getFieldDecorator('age', {
									initialValue: 18
								})(
									<InputNumber />
								)
							}
						</FormItem>
						<FormItem label="当前状态" {...formItemLayout}>
							{
								getFieldDecorator('state', {
									initialValue: '2'
								})(
									<Select>
										<SelectOption value='1'>咸鱼一枚</SelectOption>
										<SelectOption value='2'>风华浪子</SelectOption>
										<SelectOption value='3'>北大才子一枚</SelectOption>
										<SelectOption value='4'>百度FE</SelectOption>
										<SelectOption value='5'>创业者</SelectOption>
									</Select>
								)
							}
						</FormItem>
						<FormItem label="爱好" {...formItemLayout}>
							{
								getFieldDecorator('interest', {
									initialValue: []
								})(
									<Select mode='multiple'>
										<SelectOption value='1'>游泳</SelectOption>
										<SelectOption value='2'>打篮球</SelectOption>
										<SelectOption value='3'>踢足球</SelectOption>
										<SelectOption value='4'>跑步</SelectOption>
										<SelectOption value='5'>爬山</SelectOption>
										<SelectOption value='6'>骑行</SelectOption>
										<SelectOption value='7'>桌球</SelectOption>
										<SelectOption value='8'>麦霸</SelectOption>
									</Select>
								)
							}
						</FormItem>
					</Form>
				</Card>
			</div>
		)
	}
}

export default Form.create()(FormRegister)