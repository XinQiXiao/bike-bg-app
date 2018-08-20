/**
 * create at 08/20/18
 */

import React, { Component } from 'react'
import { Form, Select, Button } from 'antd'

// const 
const FormItem = Form.Item
const SelectOption = Select.Option

class FilterForm extends Component{
	render(){
		const { getFieldDecorator } = this.props.form
		return (
			<Form layout="inline">
					<FormItem label='城市' >
						{
							getFieldDecorator('city_id')(
								<Select placeholder='全部' style={{width: 100}}>
									<SelectOption value=''>全部</SelectOption>
									<SelectOption value='1'>北京市</SelectOption>
									<SelectOption value='2'>上海市</SelectOption>
									<SelectOption value='3'>深圳市</SelectOption>
								</Select>
							)
						}
					</FormItem>
					<FormItem label='用车模式' >
						{
							getFieldDecorator('mode')(
								<Select placeholder='全部' style={{width: 160}}>
									<SelectOption value=''>全部</SelectOption>
									<SelectOption value='1'>指定停车点模式</SelectOption>
									<SelectOption value='2'>禁停区模式</SelectOption>
								</Select>
							)
						}
					</FormItem>
					<FormItem label='运营模式' >
						{
							getFieldDecorator('op_mode')(
								<Select placeholder='全部' style={{width: 80}}>
									<SelectOption value=''>全部</SelectOption>
									<SelectOption value='1'>自营</SelectOption>
									<SelectOption value='2'>加盟</SelectOption>
								</Select>
							)
						}
					</FormItem>
					<FormItem label='加盟商授权状态' >
						{
							getFieldDecorator('auth_status')(
								<Select placeholder='全部' style={{width: 120}}>
									<SelectOption value=''>全部</SelectOption>
									<SelectOption value='1'>授权</SelectOption>
									<SelectOption value='2'>未授权</SelectOption>
								</Select>
							)
						}
					</FormItem>
					<FormItem>
						<Button type="primary" style={{margin: '0 20px'}}>查询</Button>
						<Button>重置</Button>
					</FormItem>
			</Form>
		)
	}
}

export default Form.create()(FilterForm)