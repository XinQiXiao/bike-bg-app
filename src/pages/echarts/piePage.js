/**
 * create at 09/18/18
 */
import React, { Component } from 'react'
import { Card } from 'antd'
import ReactEcharts from 'echarts-for-react'

// echarts 按需加载
import echarts from 'echarts/lib/echarts'
// 导入饼状图
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
// echarts 主题
import { echartTheme } from '../../config'

class PiePage extends Component{

	componentWillMount(){
		// 注入主题
		echarts.registerTheme('Imooc', echartTheme)
	}

	_getOption = ()=>{
		let option = {
			title: {
				text: '用户骑行订单',
				subtext: '测试',
				x: 'center'
			},
			tooltip: {
				trigger: 'item',
				formatter: '{a}<br/>{b}:{c}({d}%)'
			},
			legend: {
				orient: 'vertical',
				right: 10,
				top: 20,
				bottom: 20,
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			},
			series: [
				{
					name: '订单量',
					type: 'pie',
					data: [
						{value: 1000, name: 'Mon'},
						{value: 900, name: 'Tue'},
						{value: 800, name: 'Wed'},
						{value: 1100, name: 'Thu'},
						{value: 1200, name: 'Fri'},
						{value: 2000, name: 'Sat'},
						{value: 1900, name: 'Sun'},
					]
				}
			]
		}
		return option
	}
	_getOption2 = ()=>{
		let option = {
			title: {
				text: '用户骑行订单',
				subtext: '测试',
				x: 'center'
			},
			tooltip: {
				trigger: 'item',
				formatter: '{a}<br/>{b}:{c}({d}%)'
			},
			legend: {
				orient: 'vertical',
				right: 10,
				top: 20,
				bottom: 20,
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			},
			series: [
				{
					name: '订单量',
					type: 'pie',
					radius: ['50%', '70%'],
					data: [
						{value: 1000, name: 'Mon'},
						{value: 900, name: 'Tue'},
						{value: 800, name: 'Wed'},
						{value: 1100, name: 'Thu'},
						{value: 1200, name: 'Fri'},
						{value: 2000, name: 'Sat'},
						{value: 1900, name: 'Sun'},
					]
				}
			]
		}
		return option
	}
	_getOption3 = ()=>{
		let option = {
			title: {
				text: '用户骑行订单',
				subtext: '测试',
				x: 'center'
			},
			tooltip: {
				trigger: 'item',
				formatter: '{a}<br/>{b}:{c}({d}%)'
			},
			legend: {
				orient: 'vertical',
				right: 10,
				top: 20,
				bottom: 20,
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			},
			series: [
				{
					name: '订单量',
					type: 'pie',
					radius: ['50%', '70%'],
					data: [
						{value: 1000, name: 'Mon'},
						{value: 900, name: 'Tue'},
						{value: 800, name: 'Wed'},
						{value: 1100, name: 'Thu'},
						{value: 1200, name: 'Fri'},
						{value: 2000, name: 'Sat'},
						{value: 1900, name: 'Sun'},
					]
				}
			]
		}
		return option
	}

	render(){
		return (
			<div>
				<Card title="饼形图标一">
				<ReactEcharts option={this._getOption()} theme="Imooc"
					style={{height: 500}}
				/>
				</Card>
				<Card title="饼形图标二" style={{marginTop: 10}}>
					<ReactEcharts option={this._getOption2()} theme="Imooc"
						style={{height: 500}}
					/>
				</Card>
				<Card title="饼形图标三" style={{marginTop: 10}}>
					<ReactEcharts option={this._getOption3()} theme="Imooc"
						style={{height: 500}}
					/>
				</Card>
			</div>
		)
	}
}

export default PiePage