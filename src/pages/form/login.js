/**
 * create at 07/30/18
 */
import React, { Component } from 'react'
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd'

// const 
const FormItem = Form.Item

class FormLogin extends Component{
	_handleSubmit = ()=>{
		let userInfo = this.props.form.getFieldsValue()
		this.props.form.validateFields((err, values)=>{
			if(!err){
				message.success(`account=${userInfo.userName} password=${userInfo.password}`)
			}

		})
	}

	render(){
		const { getFieldDecorator } = this.props.form
		return (
			<div>
				<Card title="登录行内表单">
					<Form layout='inline'>
						<FormItem >
							<Input placeholder="请输入账号"/>
						</FormItem>
						<FormItem >
							<Input placeholder="请输入密码"/>
						</FormItem>
						<FormItem >
							<Button type="primary">登录</Button>
						</FormItem>
					</Form>
				</Card>
				<Card title="登录水平表单" style={{marginTop: 10}}>
					<Form layout='horizontal' style={{width: 300}}>
						<FormItem >
							{
								getFieldDecorator('userName', {
									initialValue: '',
									rules: [
										{
											required: true,
											message: '用户名不能为空'
										},
										{
											min: 5, max: 10,
											message: '长度不在范围内'
										},
										{
											pattern: /^\w+$/g,
											message: '用户名必须为字母或者数字'
										}
									]
								})(
									<Input prefix={<Icon type="user"/>} placeholder="请输入账号"/>
								)
							}
						</FormItem>
						<FormItem >
							{
								getFieldDecorator('password', {
									initialValue: '',
									rules: []
								})(
									<Input prefix={<Icon type="lock"/>} type="password" placeholder="请输入密码"/>
								)
							}
						</FormItem>
						<FormItem >
							{
								getFieldDecorator('remember', {
									valuePropName: 'checked',
									initialValue: true,
									rules: []
								})(
									<Checkbox>记住密码.</Checkbox>
								)
							}
							<a href="#" style={{float: 'right'}}>忘记密码</a>
						</FormItem>
						<FormItem >
							<Button type="primary" onClick={this._handleSubmit}>登录</Button>
						</FormItem>
					</Form>
				</Card>
			</div>
		)
	}
}

export default Form.create()(FormLogin)