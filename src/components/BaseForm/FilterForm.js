/**
 * create at 08/29/18
 */

import React, { Component, Fragment } from 'react'
import { Form, Select, Input, Checkbox, Button, DatePicker } from 'antd'
import PropTypes from 'prop-types'

// form config 
import { BaseFormType } from './constants'

// const 
const FormItem = Form.Item 
const SelectOption = Select.Option

class FilterForm extends Component{

	// 初始化 
	_initFormList = ()=>{
		const { formList } = this.props
		let listCom = []
		if(formList.length > 0){
			formList.forEach((item, idx)=>{
				listCom.push(
					<FilterItem {...item} key={`${item.field}-${idx}`} form={this.props.form}/>
				)
			})
		}
		return listCom
	}

	_querySubmit = ()=>{
		const {queryPress} = this.props
		let { getFieldsValue } = this.props.form 
		let values = getFieldsValue()
		queryPress(values)
	}

	_resetForm = ()=>{
		const {resetPress} = this.props
		this.props.form.resetFields()
		resetPress()
	}

	render(){
		return (
			<Form layout="inline">
				{this._initFormList()}
				<FormItem>
					<Button type="primary" style={{margin: '0 20px'}} onClick={this._querySubmit}>查询</Button>
					<Button onClick={this._resetForm}>重置</Button>
				</FormItem>
			</Form>
		)
	}
}

const FilterItem = (props)=>{
	const {
		type, field, label, placeholder, initialValue = '', width, list = []
	} = props
	let { getFieldDecorator } = props.form
	switch(type){
		case BaseFormType.SELECT:
			return (
				<FormItem label={label} >
					{
						getFieldDecorator([field], {
							initialValue
						})(
							<Select placeholder={placeholder} style={{width}} >
								{
									list.map((item)=> 
										<SelectOption key={item.id} value={item.id}>{item.name}</SelectOption>
									)
								}
							</Select>
						)
					}
				</FormItem>
			)
		case BaseFormType.INPUT:
			return (
				<FormItem label={label}>
					{
						getFieldDecorator(field, {
							initialValue
						})(
							<Input type="text" placeholder={placeholder} />
						)
					}
				</FormItem>
			)
		case BaseFormType.CHECK_BOX:
			return (
				<FormItem label={label}>
					{
						getFieldDecorator([field], {
							valuePropsName: 'checked',
							initialValue: initialValue // true || false
						})(
							<Checkbox>
								{label}
							</Checkbox>
						)
					}
				</FormItem>
			)
		case BaseFormType.QUERY_TIME:
			return (
				<Fragment >
					<FormItem label={label}>
						{
							getFieldDecorator('start_time')(
								<DatePicker showTime format="YYYY-MM-DD HH:mm:ss"
									placeholder={placeholder}
								/>
							)
						}
					</FormItem>
					<FormItem label="~" colon={false}>
						{
							getFieldDecorator('end_time')(
								<DatePicker showTime format="YYYY-MM-DD HH:mm:ss"
									placeholder={placeholder}
								/>
							)
						}
					</FormItem>
				</Fragment>
			)
		default:
			return null
	}
}

FilterForm.propTypes = {
	formList: PropTypes.array,
	queryPress: PropTypes.func,
	resetPress: PropTypes.func,
}

FilterForm.defaultProps = {
	formList: [],
	queryPress: ()=> null,
	resetPress: ()=> null,
}

export default Form.create()(FilterForm)