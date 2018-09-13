/**
 * create at 08/01/18
 */
import React, { Component } from 'react'
import { 
	Card, Form, Input, Select, Radio, InputNumber, Switch, DatePicker, TimePicker,
	Upload, Icon, Checkbox, Button,
} from 'antd'
import moment from 'moment'

import { ConstConfig } from '../../config'

// const 
const FormItem = Form.Item
const RadioGroup = Radio.Group
const SelectOption = Select.Option
const TextArea = Input.TextArea

class FormRegister extends Component{
	state ={}

	getBase64(img, callback) {
		const reader = new FileReader()
		reader.addEventListener('load', () => callback(reader.result))
		reader.readAsDataURL(img)
	}

	_handleChange = (info)=>{
		if (info.file.status === 'uploading') {
      this.setState({ loading: true })
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        userImg: imageUrl,
        loading: false,
      }))
    }
	}

	_registerClick = ()=>{
		let userInfo = this.props.form.getFieldsValue()
		console.log('_registerClick userInfo=>', userInfo)
	}

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
		const offsetLayout = {
			wrapperCol: {
				xs: 24,
				sm: {
					span: 8,
					offset: 4	
				}
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
										<SelectOption value='1'>{ConstConfig.stateCons[0]}</SelectOption>
										<SelectOption value='2'>{ConstConfig.stateCons[1]}</SelectOption>
										<SelectOption value='3'>{ConstConfig.stateCons[2]}</SelectOption>
										<SelectOption value='4'>{ConstConfig.stateCons[3]}</SelectOption>
										<SelectOption value='5'>{ConstConfig.stateCons[4]}</SelectOption>
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
						<FormItem label="是否已婚" {...formItemLayout}>
							{
								getFieldDecorator('isMarried', {
									valuePropName: 'checked',
									initialValue: true
								})(
									<Switch />
								)
							}
						</FormItem>
						<FormItem label="生日" {...formItemLayout}>
							{
								getFieldDecorator('birthday', {
									initialValue: moment('2018-08-08')
								})(
									<DatePicker 
										showTime
										format='YYYY-MM-DD HH:mm:ss'
									/>
								)
							}
						</FormItem>
						<FormItem label="地址" {...formItemLayout}>
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
						<FormItem label="早起时间" {...formItemLayout}>
							{
								getFieldDecorator('getUpTime')(
									<TimePicker 
										format='HH:mm'
									/>
								)
							}
						</FormItem>
						<FormItem label="头像" {...formItemLayout}>
							{
								getFieldDecorator('userImg', {
									initialValue: ''
								})(
									<Upload 
										listType="picture-card"
										showUploadList={false}
										action="//jsonplaceholder.typicode.com/posts/"
										onChange={this._handleChange}
									>
										{
											this.state.userImg ? 
											<img src={this.state.userImg} alt="添加头像"/> : 
											<Icon type='plus'/>
										}
									</Upload>
								)
							}
						</FormItem>
						<FormItem {...offsetLayout}>
							{
								getFieldDecorator('contract', {
									valuePropName: 'checked',
									initialValue: false
								})(
									<Checkbox >
										我已经阅读过<a href="javascript:void(0)">注册协议</a>
									</Checkbox>
								)
							}
						</FormItem>
						<FormItem {...offsetLayout}>
							<Button type='primary' onClick={this._registerClick}>注册</Button>
						</FormItem>
					</Form>
				</Card>
			</div>
		)
	}
}

export default Form.create()(FormRegister)