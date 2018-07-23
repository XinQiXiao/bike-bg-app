/**
 * create at 07/23/18
 */
import React, { Component } from 'react'
import { Row, Col,} from 'antd'

// components
import ConfigGrid from './ConfigGrid'

// style
import './index.less'

// 基础栅格
class BaseGrid extends Component{
	render(){
		return (
			<div>
				<Row>
					<Col span={12}>col-12</Col>
					<Col span={12}>col-12</Col>
				</Row>
				<Row>
					<Col span={8}>col-8</Col>
					<Col span={8}>col-8</Col>
					<Col span={8}>col-8</Col>
				</Row>
				<Row>
					<Col span={6}>col-6</Col>
					<Col span={6}>col-6</Col>
					<Col span={6}>col-6</Col>
					<Col span={6}>col-6</Col>
				</Row>
			</div>
		)
	}
}

// 间隔栅格
class IntervalGrid extends Component{
	render(){
		return (
			<div className="gutter-example">
				<Row gutter={16}>
					<Col className="gutter-row" span={6}>
						<div className="gutter-box">col-6</div>
					</Col>
					<Col className="gutter-row" span={6}>
						<div className="gutter-box">col-6</div>
					</Col>
					<Col className="gutter-row" span={6}>
						<div className="gutter-box">col-6</div>
					</Col>
					<Col className="gutter-row" span={6}>
						<div className="gutter-box">col-6</div>
					</Col>
				</Row>
			</div>
		)
	}
}

// 偏移栅格
class Excursion extends Component{
	render(){
		return (
			<div>
				<Row>
					<Col span={8}>
						<div className="gutter-box">col-8</div>
					</Col>
					<Col span={8} offset={8}>
						<div className="gutter-box">col-8</div>
					</Col>
				</Row>
				<Row>
					<Col span={6} offset={6}>
						<div className="gutter-box">col-6</div>
					</Col>
					<Col span={6} offset={6}>
						<div className="gutter-box">col-6</div>
					</Col>
				</Row>
				<Row>
					<Col span={12} offset={6}>
						<div className="gutter-box">col-12</div>
					</Col>
				</Row>
			</div>
		)
	}
}

// 栅格排序
class SortGrid extends Component{
	render(){
		return (
			<div>
				<Row>
					<Col span={18} push={6}>col-18 col-push-6</Col>
					<Col span={6} pull={18}>
						<div className="gutter-box">col-6 col-pull-18</div>
					</Col>
				</Row>
			</div>
		)
	}
}

// Flex 布局
class FlexJustify extends Component{
	render(){
		return (
			<div>
				<p>sub-element align left</p>
				<Row type="flex" justify="start">
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
				</Row>
				<p>sub-element align center</p>
				<Row type="flex" justify="center">
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
				</Row>
				<p>sub-element align right</p>
				<Row type="flex" justify="end">
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
				</Row>
				<p>sub-element monospaced arrangement</p>
				<Row type="flex" justify="space-between">
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
				</Row>
				<p>sub-element align full</p>
				<Row type="flex" justify="space-around">
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
				</Row>
			</div>
		)
	}
}

// Flex 对齐
const DemoBox = props => <div className={`height-${props.value}`} >
	<p>
		{props.children}
	</p>
</div>
class FlexAlign extends Component{
	render(){
		return (
			<div>
				<p>Align Top</p>
				<Row type="flex" justify="center" align="top">
					<Col span={4}>
						<DemoBox value={100}>col-4</DemoBox>
					</Col>
					<Col span={4}>
						<DemoBox value={50}>col-4</DemoBox>
					</Col>
					<Col span={4}>
						<DemoBox value={120}>col-4</DemoBox>
					</Col>
					<Col span={4}>
						<DemoBox value={80}>col-4</DemoBox>
					</Col>
				</Row>
				<p>Align Center</p>
				<Row type="flex" justify="space-around" align="middle">
					<Col span={4}>
						<DemoBox value={100}>col-4</DemoBox>
					</Col>
					<Col span={4}>
						<DemoBox value={50}>col-4</DemoBox>
					</Col>
					<Col span={4}>
						<DemoBox value={120}>col-4</DemoBox>
					</Col>
					<Col span={4}>
						<DemoBox value={80}>col-4</DemoBox>
					</Col>
				</Row>
				<p>Align Bottom</p>
				<Row type="flex" justify="space-between" align="bottom">
					<Col span={4}>
						<DemoBox value={100}>col-4</DemoBox>
					</Col>
					<Col span={4}>
						<DemoBox value={50}>col-4</DemoBox>
					</Col>
					<Col span={4}>
						<DemoBox value={120}>col-4</DemoBox>
					</Col>
					<Col span={4}>
						<DemoBox value={80}>col-4</DemoBox>
					</Col>
				</Row>
			</div>
		)
	}
}

// flex 排序
class FlexOrder extends Component{
	render(){
		return (
			<div>
				<Row type="flex">
					<Col span={6} order={4}>1 col-order-4</Col>
					<Col span={6} order={3}>2 col-order-3</Col>
					<Col span={6} order={2}>3 col-order-2</Col>
					<Col span={6} order={1}>4 col-order-1</Col>
				</Row>
			</div>
		)
	}
}

class GridComponent extends Component{
	render(){
		return (
			<div>
				<span>基础栅格</span>
				<BaseGrid />
				<span>区块间隔</span>
				<IntervalGrid />
				<span>左右偏移</span>
				<Excursion />
				<span>栅格排序</span>
				<SortGrid />
				<span>Flex布局</span>
				<FlexJustify />
				<span>Flex对齐</span>
				<FlexAlign />
				<span>Flex排序</span>
				<FlexOrder />
				<span>栅格配置器</span>
				<ConfigGrid />
			</div>
		)
	}
}

export {
	GridComponent
}