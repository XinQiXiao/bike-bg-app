/**
 * create at 08/21/18
 */
import React from 'react'

// util
import { utils } from '../../utils'

const orderColumns = [
	{
		title: '订单编号',
		dataIndex: 'order_code',
		width: 120,
	},
	{
		title: '车辆编号',
		dataIndex: 'bike_code',
		width: 120,
	},
	{
		title: '用户名',
		dataIndex: 'user_name',
		width: 80,
	},
	{
		title: '手机号码',
		dataIndex: 'mobile',
		width: 120,
	},
	{
		title: '里程',
		dataIndex: 'distance',
		width: 80,
		render(target){
			return target/1000 + 'km'
		}
	},
	{
		title: '行程时长',
		dataIndex: 'total_time',
		width: 120,
		render(target){
			return target/1000 +'s'
		}
	},
	{
		title: '状态',
		dataIndex: 'status',
		width: 80,
	},
	{
		title: '开始时间',
		dataIndex: 'start_time',
		width: 200,
	},
	{
		title: '结束时间',
		dataIndex: 'end_time',
		width: 200,
	},
	{
		title: '订单金额',
		dataIndex: 'total_fee',
		width: 120,
		render(target){
			return utils.translateToRMB(target)
		}
	},
	{
		title: '实付金额',
		dataIndex: 'user_pay',
		width: 120,
		render(target){
			return utils.translateToRMB(target)
		}
	},
]

export {
	orderColumns
}