/**
 * create at 09/26/18
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Form, Input, Select, Tree} from 'antd'
import _ from 'lodash'

// config
import { MenuConfig } from '../../config'

// const 
const FormItem = Form.Item
const SelectOption = Select.Option
const TreeNode = Tree.TreeNode

class FormComponent extends Component{

	_renderTreeNodes = (nodes)=>{
		return nodes.map((item, idx)=>{
			if(item.children){
				return (
					<TreeNode title={item.title} key={item.key}>
						{this._renderTreeNodes(item.children)}
					</TreeNode>
				)
			} else {
				return <TreeNode title={item.title} key={item.key}/>
			}
		})
	}

	_treeOnCheck = (checkedKeys)=>{
		const { updateCheckKeys } = this.props
		updateCheckKeys(checkedKeys)
	}

	render(){
		const { editRoleName, currentData, showTree } = this.props
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
							initialValue: currentData && currentData.role_name ? currentData.role_name : '',
							rules: [{
								required: true,
								message: '角色名不能为空'
							}]
						})(
							<Input type="text" placeholder="请输入角色名称"
								disabled={editRoleName}
							/>
						) 
					}
				</FormItem>
				<FormItem label="状态" {...formItemLayout}>
					{
						getFieldDecorator('status', {
							initialValue: currentData && currentData.status ? currentData.status : 1,
						})(
							<Select>
								<SelectOption value={0}>停用</SelectOption>
								<SelectOption value={1}>启用</SelectOption>
							</Select>
						)
					}
				</FormItem>
				{
					showTree ? (
						<Tree 
							checkable
							defaultExpandAll
							onCheck={this._treeOnCheck}
							checkedKeys={_.isArray(currentData.menus) ? currentData.menus : []}
						>
							<TreeNode title="平台权限" key="platform_all">
								{this._renderTreeNodes(MenuConfig)}
							</TreeNode>
						</Tree>
					) : null
				}
			</Form>
		)
	}
}

FormComponent.propTypes = {
	currentData: PropTypes.object,
	editRoleName: PropTypes.bool,
	showTree: PropTypes.bool,
	form: PropTypes.object,
	updateCheckKeys: PropTypes.func,
}

FormComponent.defaultProps = {
	currentData: null,
	editRoleName: false,
	showTree: false,
	form: null,
	updateCheckKeys: ()=> null,
}

const HandleFormComponent = Form.create()(FormComponent)

export {
	HandleFormComponent,
}