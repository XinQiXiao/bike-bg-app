/**
 * create at 08/29/18
 */

import React, { Component, Fragment } from 'react'
import { Form, Select, Input, Checkbox, Button, DatePicker } from 'antd'
import PropTypes from 'prop-types'

// form config 
import { baseFormType, optionsBtnType, } from './constants'

// const 
const FormItem = Form.Item 
const SelectOption = Select.Option

class FilterForm extends Component{

	// 初始化 Form
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

	// 初始化 option btn
	_initOptionBtn = ()=>{
		const { options } = this.props
		return options.map((item, index)=>{
			const { optionItemPress} = item
			// btnPress 改用 optionItemPress 外传 并单独处理
			return (
				<OptionBtn key={index} {...item}
					btnPress={(type, code)=>{this._optionItemClick(type, code, optionItemPress)}}
				/>
			)
		})
	}
	_optionItemClick = (type, code, pressFunc)=>{
		const {getFieldsValue, validateFields, resetFields} = this.props.form
		switch(type){
			case optionsBtnType.QUERY:
				{
					// 查询、提交
					let formValues = getFieldsValue()
					validateFields((err, values)=>{
						if(!err){
							pressFunc(code, formValues)
						} 
					})
				}
				break
			case optionsBtnType.RESET: 
				{
					// 重置
					resetFields()
					pressFunc(code)
				}
				break
		}
	}

	render(){
		return (
			<Form layout="inline">
				{this._initFormList()}
				<FormItem>
					{this._initOptionBtn()}
				</FormItem>
			</Form>
		)
	}
}

class OptionBtn extends Component{
	_btnClick = ()=>{
		const {btnPress, code, type} = this.props
		btnPress(type, code)
	}
	render(){
		const { btnType = 'default', style = null, title = '' } = this.props
		return (
			<Button type={btnType} style={style} onClick={this._btnClick}>
				{title}
			</Button>
		)
	}
}

const FilterItem = (props)=>{
	const {
		type, field, label, placeholder, initialValue = '', width, list = [], rules = [],
	} = props
	let { getFieldDecorator } = props.form
	switch(type){
		case baseFormType.SELECT:
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
		case baseFormType.INPUT:
			return (
				<FormItem label={label}>
					{
						getFieldDecorator(field, {
							initialValue,
							rules,
						})(
							<Input type="text" placeholder={placeholder} />
						)
					}
				</FormItem>
			)
		case baseFormType.CHECK_BOX:
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
		case baseFormType.QUERY_TIME:
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
		case baseFormType.DATE_PICKER:
			return (
				<FormItem label={label}>
					{
						getFieldDecorator([field])(
							<DatePicker showTime format="YYYY-MM-DD HH:mm:ss"
								placeholder={placeholder}
							/>
						)
					}
				</FormItem>
			)
		default:
			return null
	}
}

FilterForm.propTypes = {
	formList: PropTypes.array,
	options: PropTypes.array, // [{btnType, style, title, optionItemPress, code, type}, ...]
}

FilterForm.defaultProps = {
	formList: [],
	options: [],
}

export default Form.create()(FilterForm)