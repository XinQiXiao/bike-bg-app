/**
 * create at 08/01/18
 */
import React, { Component } from 'react'
import { 
	Card, Form, Input, Select, Radio, InputNumber, Switch, DatePicker, TimePicker,
	Upload, Icon, Checkbox, Button,
} from 'antd'
import moment from 'moment'

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
											<img src={this.state.userImg}/> : 
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
										我已经阅读过<a href="#">注册协议</a>
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