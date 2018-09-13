/**
 * create at 08/17/18
 * 表格一些常量
 */
import React from 'react'
import { Badge, Button } from 'antd'

// utils
import { utils } from '../../utils'

// const 
import { ConstConfig } from '../../config'

const dataSourceConst = [
	{
		id: 0,
		userName: 'Jack',
		sex: 1,
		state: 1,
		interest: 1,
		birthday: '2000-1-1',
		address: '北京市朝阳区',
		getUpTime: '8:10'
	},
	{
		id: 1,
		userName: 'Tom',
		sex: 0,
		state: 2,
		interest: 2,
		birthday: '2006-6-3',
		address: '北京市海淀区',
		getUpTime: '9:10'
	},
	{
		id: 2,
		userName: 'Lisi',
		sex: 1,
		state: 3,
		interest: 3,
		birthday: '2002-10-1',
		address: '北京市通州区',
		getUpTime: '7:30'
	},
]

const columnsConst = [
	{
		title: 'id',
		dataIndex: 'id',
		width: 80,
	},
	{
		title: '用户姓名',
		dataIndex: 'userName',
		width: 80,
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
		title: '年龄',
		dataIndex: 'age',
		width: 80,
	},
	{
		title: '状态',
		dataIndex: 'state',
		width: 120,
		render(state){
			return state <= ConstConfig.stateCons.length ? ConstConfig.stateCons[state-1] : ''
		}
	},
	{
		title: '爱好',
		width: 100,
		dataIndex: 'interest',
		render(interest){
			return interest <= ConstConfig.interestCons.length ? ConstConfig.interestCons[interest-1] : ''
		}
	},
	{
		title: '生日',
		width: 100,
		dataIndex: 'birthday',
	},
	{
		title: '地址',
		width: 140,
		dataIndex: 'address',
	},
	{
		title: '早起时间',
		width: 80,
		dataIndex: 'getUpTime',
	},
]

const columnsLongConst = [
	{
		title: 'id',
		dataIndex: 'id',
		fixed: 'left',
		width: 80,
	},
	{
		title: '用户姓名',
		dataIndex: 'userName',
		fixed: 'left',
		width: 80,
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
		title: '年龄',
		dataIndex: 'age',
		width: 80,
	},
	{
		title: '婚否',
		dataIndex: 'isMarried',
		width: 80,
		render(isMarried){
			return utils.transformMarry(isMarried)
		}
	},
	{
		title: '状态',
		dataIndex: 'state',
		width: 120,
		render(state){
			return state <= ConstConfig.stateCons.length ? ConstConfig.stateCons[state-1] : ''
		}
	},
	{
		title: '爱好',
		width: 100,
		dataIndex: 'interest',
		render(interest){
			return interest <= ConstConfig.interestCons.length ? ConstConfig.interestCons[interest-1] : ''
		}
	},
	{
		title: '生日',
		width: 100,
		dataIndex: 'birthday',
	},
	{
		title: '地址',
		width: 140,
		dataIndex: 'address',
	},
	{
		title: '早起时间',
		width: 80,
		dataIndex: 'getUpTime',
	},
	{
		title: '就寝时间',
		width: 80,
		dataIndex: 'sleepTime',
	},
	{
		title: '省份',
		width: 80,
		dataIndex: 'province',
	},
	{
		title: '城市',
		width: 80,
		dataIndex: 'city',
		fixed: 'right',
	},
	{
		title: '区域',
		width: 80,
		dataIndex: 'area',
		fixed: 'right',
	},
]

const columnsSortColumns = [
	{
		title: 'id',
		dataIndex: 'id',
	},
	{
		title: '用户姓名',
		dataIndex: 'userName',
	},
	{
		title: '性别',
		dataIndex: 'sex',
		render(sex){
			return utils.transformSex(sex)
		}
	},
	{
		title: '年龄',
		dataIndex: 'age',
		sorter:(a, b)=> a.age - b.age,
		defaultSortOrder: 'ascend',
	},
	{
		title: '状态',
		dataIndex: 'state',
		render(state){
			return state <= ConstConfig.stateCons.length ? ConstConfig.stateCons[state-1] : ''
		}
	},
	{
		title: '爱好',
		dataIndex: 'interest',
		render(interest){
			return interest <= ConstConfig.interestCons.length ? ConstConfig.interestCons[interest-1] : ''
		}
	},
	{
		title: '生日',
		dataIndex: 'birthday',
	},
]

const columnsHandleColumns = [
	{
		title: 'id',
		dataIndex: 'id',
	},
	{
		title: '用户姓名',
		dataIndex: 'userName',
	},
	{
		title: '性别',
		dataIndex: 'sex',
		render(sex){
			return utils.transformSex(sex)
		}
	},
	{
		title: '年龄',
		dataIndex: 'age',
		sorter:(a, b)=> a.age - b.age,
		defaultSortOrder: 'ascend',
	},
	{
		title: '状态',
		dataIndex: 'state',
		render(state){
			let config = {
				'1': <Badge status="default" text={ConstConfig.stateCons[0]}/>,
				'2': <Badge status='error' text={ConstConfig.stateCons[1]}/>,
				'3': <Badge status='processing' text={ConstConfig.stateCons[2]}/>,
				'4': <Badge status='success' text={ConstConfig.stateCons[3]}/>,
				'5': <Badge status='warning' text={ConstConfig.stateCons[4]}/>,
			}
			return config[state]
		}
	},
	{
		title: '爱好',
		dataIndex: 'interest',
		render(interest){
			return interest <= ConstConfig.interestCons.length ? ConstConfig.interestCons[interest-1] : ''
		}
	},
	{
		title: '操作',
		render(){
			return (
				<Button size="small"  onClick={()=> null}>删除</Button>
			)
		}
	},
]

export {
	dataSourceConst,
	columnsConst,
	columnsLongConst,
	columnsSortColumns,
	columnsHandleColumns,
}
