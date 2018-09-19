/**
 * create at 09/18/18
 */
import React, { Component } from 'react'
import { Card } from 'antd'
import ReactEcharts from 'echarts-for-react'

// echarts 按需加载
import echarts from 'echarts/lib/echarts'
// 导入饼状图
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
// echarts 主题
import { echartTheme } from '../../config'

class LinePage extends Component{

	componentWillMount(){
		// 注入主题
		echarts.registerTheme('Imooc', echartTheme)
	}

	_getOption = ()=>{
		let option = {
			title: {
				text: '用户骑行订单',
			},
			tooltip: {
				trigger: 'axis'
			},
			xAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					type: 'line',
					data: [1000, 900, 800, 1100, 1200, 2000, 1900]
				}
			]
		}
		return option
	}
	_getOption2 = ()=>{
		let option = {
			title: {
				text: '用户骑行订单',
			},
			legend: {
				data: ['OFO', '摩拜', '小蓝']
			},
			tooltip: {
				trigger: 'axis'
			},
			xAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					name: 'OFO',
					type: 'line',
					data: [2100, 1900, 2300, 3000, 1500, 5000, 4200]
				},
				{
					name: '摩拜',
					type: 'line',
					data: [1000, 900, 800, 1100, 1200, 2000, 1900]
				},
				{
					name: '小蓝',
					type: 'line',
					data: [300, 400, 350, 600, 800, 1500, 1200]
				}
			]
		}
		return option
	}
	_getOption3 = ()=>{
		let option = {
			title: {
				text: '用户骑行订单',
			},
			tooltip: {
				trigger: 'axis'
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					type: 'line',
					data: [1000, 900, 800, 1100, 1200, 2000, 1900],
					areaStyle: {}
				}
			]
		}
		return option
	}

	render(){
		return (
			<div>
				<Card title="折线图一">
					<ReactEcharts option={this._getOption()} theme="Imooc"
						style={{height: 500}}
					/>
				</Card>
				<Card title="折线图二" style={{marginTop: 10}}>
					<ReactEcharts option={this._getOption2()} theme="Imooc"
						style={{height: 500}}
					/>
				</Card>
				<Card title="折线图三" style={{marginTop: 10}}>
					<ReactEcharts option={this._getOption3()} theme="Imooc"
						style={{height: 500}}
					/>
				</Card>
			</div>
		)
	}
}

export default LinePage