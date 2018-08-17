/**
 * create at 08/17/18
 * 表格一些常量
 */
import React from 'react'
import { Badge, Button } from 'antd'

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
			return sex === 1 ? '男' : '女'
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
			let config = {
				'1': '咸鱼一枚',
				'2': '风华浪子',
				'3': '北大才子一枚',
				'4': '百度FE',
				'5': '创业者',
			}
			return config[state]
		}
	},
	{
		title: '爱好',
		width: 100,
		dataIndex: 'interest',
		render(interest){
			let config = {
				'1': '游泳',
				'2': '打篮球',
				'3': '踢足球',
				'4': '跑步',
				'5': '爬山',
				'6': '骑行',
				'7': '桌球',
				'8': '麦霸',
			}
			return config[interest]
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
			return sex === 1 ? '男' : '女'
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
			return isMarried === 1 ? '已婚' : '未婚'
		}
	},
	{
		title: '状态',
		dataIndex: 'state',
		width: 120,
		render(state){
			let config = {
				'1': '咸鱼一枚',
				'2': '风华浪子',
				'3': '北大才子一枚',
				'4': '百度FE',
				'5': '创业者',
			}
			return config[state]
		}
	},
	{
		title: '爱好',
		width: 100,
		dataIndex: 'interest',
		render(interest){
			let config = {
				'1': '游泳',
				'2': '打篮球',
				'3': '踢足球',
				'4': '跑步',
				'5': '爬山',
				'6': '骑行',
				'7': '桌球',
				'8': '麦霸',
			}
			return config[interest]
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
			return sex === 1 ? '男' : '女'
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
				'1': '咸鱼一枚',
				'2': '风华浪子',
				'3': '北大才子一枚',
				'4': '百度FE',
				'5': '创业者',
			}
			return config[state]
		}
	},
	{
		title: '爱好',
		dataIndex: 'interest',
		render(interest){
			let config = {
				'1': '游泳',
				'2': '打篮球',
				'3': '踢足球',
				'4': '跑步',
				'5': '爬山',
				'6': '骑行',
				'7': '桌球',
				'8': '麦霸',
			}
			return config[interest]
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
			return sex === 1 ? '男' : '女'
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
				'1': <Badge status="default" text='咸鱼一枚'/>,
				'2': <Badge status='error' text='风华浪子'/>,
				'3': <Badge status='processing' text='北大才子一枚'/>,
				'4': <Badge status='success' text='百度FE'/>,
				'5': <Badge status='warning' text='创业者'/>,
			}
			return config[state]
		}
	},
	{
		title: '爱好',
		dataIndex: 'interest',
		render(interest){
			let config = {
				'1': '游泳',
				'2': '打篮球',
				'3': '踢足球',
				'4': '跑步',
				'5': '爬山',
				'6': '骑行',
				'7': '桌球',
				'8': '麦霸',
			}
			return config[interest]
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
