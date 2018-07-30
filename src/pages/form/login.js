/**
 * create at 07/30/18
 */
import React, { Component } from 'react'
import { Card, Form, Input, Button } from 'antd'

// const 
const FormItem = Form.Item

class FormLogin extends Component{
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
									initialValue: 'Jack',
									rules: []
								})(
									<Input placeholder="请输入账号"/>
								)
							}
						</FormItem>
						<FormItem >
							{
								getFieldDecorator('password', {
									initialValue: '123456',
									rules: []
								})(
									<Input placeholder="请输入密码"/>
								)
							}
						</FormItem>
						<FormItem >
							<Button type="primary">登录</Button>
						</FormItem>
					</Form>
				</Card>
			</div>
		)
	}
}

export default Form.create()(FormLogin)