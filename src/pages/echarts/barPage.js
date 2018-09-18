/**
 * create at 09/18/18
 */
import React, { Component } from 'react'
import { Card } from 'antd'
import ReactEcharts from 'echarts-for-react'

// echarts 按需加载
import echarts from 'echarts/lib/echarts'
// 导入柱形图
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
// echarts 主题
import { echartTheme } from '../../config'

class BarPage extends Component{

	componentWillMount(){
		// 注入主题
		echarts.registerTheme('Imooc', echartTheme)
	}

	_getOption = ()=>{
		let option = {
			title: {
				text: '用户骑行订单'
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			xAxis: {
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					name: '订单量',
					type: 'bar',
					data: [1000, 900, 800, 1100, 1200, 2000, 1900]
				}
			]
		}
		return option
	}

	_getOption2 = ()=>{
		let option = {
			title: {
				text: '用户骑行订单'
			},
			legend: {
				data: ['OFO', '摩拜', '小蓝']
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			xAxis: {
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					name: 'OFO',
					type: 'bar',
					data: [2100, 1900, 2300, 3000, 1500, 5000, 4200]
				},
				{
					name: '摩拜',
					type: 'bar',
					data: [1000, 900, 800, 1100, 1200, 2000, 1900]
				},
				{
					name: '小蓝',
					type: 'bar',
					data: [300, 400, 350, 600, 800, 1500, 1200]
				}
			]
		}
		return option
	}

	render(){
		return (
			<div>
				<Card title="柱形图标一">
					<ReactEcharts option={this._getOption()} theme="Imooc"
						style={{height: 500}}
					/>
				</Card>
				<Card title="柱形图标二" style={{marginTop: 10}}>
					<ReactEcharts option={this._getOption2()} theme="Imooc"
						style={{height: 500}}
					/>
				</Card>
			</div>
		)
	}
}

export default BarPage