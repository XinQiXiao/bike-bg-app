/**
 * create at 08/29/18
 */

import React, { Component } from 'react'
import { Form, Select, Input, Checkbox } from 'antd'
import PropTypes from 'prop-types'

// form config 
import { BaseFormType } from './constants'

// util
import {utils} from '../../utils'

// const 
const FormItem = Form.Item 

class FilterForm extends Component{

	_initFormList = ()=>{
		const { formList } = this.props
		let listCom = []
		if(formList.length > 0){
			formList.forEach((item, idx)=>{
				listCom.push(
					<FilterItem {...item} key={idx} form={this.props.form}/>
				)
			})
		}
		return listCom
	}

	render(){
		return (
			<Form>
				{this._initFormList()}
			</Form>
		)
	}
}

const FilterItem = (props)=>{
	const {
		type, field, label, placeholder, initialValue = '', width, list = []
	} = props
	const { getFieldDecorator } = props.form
	switch(type){
		case BaseFormType.SELECT:
			return (
				<FormItem label={label}>
					{
						getFieldDecorator([field], {
							initialValue
						})(
							<Select placeholder={placeholder} style={{width}}>
								{
									utils.getFormOptionList(list)
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
						getFieldDecorator([field], {
							initialValue
						})(
							<Input type="text" placeholder={placeholder}/>
						)
					}
				</FormItem>
			)
		case BaseFormType.CHECK_BOX:
			return (
				<FormItem label={label}>
					{
						getFieldDecorator([field], {
							initialValue
						})(
							<Checkbox>
								{label}
							</Checkbox>
						)
					}
				</FormItem>
			)
		default:
			return null
	}
}

FilterForm.propTypes = {
	formList: PropTypes.array
}

FilterForm.defaultProps = {
	formList: []
}

export default Form.create()(FilterForm)