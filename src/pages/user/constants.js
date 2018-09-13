/**
 * create at 09/13/18
 */
import React from 'react'

// config
import { ConstConfig } from '../../config'

// utils
import { utils } from '../../utils'


const userColumns = [
	{
		title: 'id',
		dataIndex: 'id',
		width: 60,
	},
	{
		title: '用户名',
		dataIndex: 'username',
		width: 100,
	},
	{
		title: '性别',
		dataIndex: 'sex',
		width: 80,
		render(sex){
			return utils.transformSex(sex)
		}
	},
	{
		title: '手机号',
		dataIndex: 'tel',
		width: 120,
	},
	{
		title: '状态',
		dataIndex: 'state',
		width: 160,
		render(state){
			return state <= ConstConfig.stateCons.length ? ConstConfig.stateCons[state-1] : ''
		}
	},
	{
		title: '爱好',
		dataIndex: 'interest',
		width: 100,
		render(interest){
			return interest <= ConstConfig.interestCons.length ? ConstConfig.interestCons[interest-1] : ''
		}
	},
	{
		title: '婚否',
		dataIndex: 'isMarried',
		width: 80,
		render(married){
			return utils.transformMarry(married)
		}
	},
	{
		title: '生日',
		dataIndex: 'birthday',
		width: 140,
	},
	{
		title: '联系地址',
		dataIndex: 'address',
		width: 160,
	},
	{
		title: '注册时间',
		dataIndex: 'registertime',
		width: 140,
	},
]

export {
	userColumns,
}