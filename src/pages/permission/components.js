/**
 * create at 09/26/18
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Form, Input, Select} from 'antd'

// const 
const FormItem = Form.Item
const SelectOption = Select.Option

class RoleForm extends Component{
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
				<FormItem label="角色名" {...formItemLayout}>
					{
						getFieldDecorator('role_name', {
							initialValue: '',
							rules: [{
								required: true,
								message: '角色名不能为空'
							}]
						})(
							<Input type="text" placeholder="请输入角色名称"/>
						) 
					}
				</FormItem>
				<FormItem label="状态" {...formItemLayout}>
					{
						getFieldDecorator('state', {
							initialValue: 1,
						})(
							<Select>
								<SelectOption value={0}>停用</SelectOption>
								<SelectOption value={1}>启用</SelectOption>
							</Select>
						)
					}
				</FormItem>
			</Form>
		)
	}
}

RoleForm.propTypes ={
	form: PropTypes.object,
}

RoleForm.defaultProps ={
	form: null,
}

const HandleRoleComponent = Form.create()(RoleForm)

export {
	HandleRoleComponent
}