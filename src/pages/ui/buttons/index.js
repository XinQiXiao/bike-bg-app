/**
 * create at 07/24/18
 */
import React, { Component } from 'react'
import { Card, Button, Icon, Radio } from 'antd'

// style
import '../ui.less'

// const
const ButtonGroup = Button.Group
const RadioGroup = Radio.Group

class ButtonsPage extends Component{
	state = {
		btnLoading: true,
		btnSize: 'default'
	}

	_btnControlClick = ()=>{
		this.setState((preState)=>({
			btnLoading: !preState.btnLoading
		}))
	}

	_radioChange = (e)=>{
		this.setState({
			btnSize: e.target.value
		})
	}

	render(){
		const { btnLoading, btnSize } = this.state
		return(
			<div>
				<Card title="基础按钮" className="card-wrap">
					<Button type="primary">imooc</Button>
					<Button >imooc</Button>
					<Button type="dashed">imooc</Button>
					<Button type="danger">imooc</Button>
					<Button disabled>imooc</Button>
				</Card>
				<Card title="图形按钮" className="card-wrap">
					<Button icon="plus">创建</Button>
					<Button icon="edit">编辑</Button>
					<Button icon="delete">删除</Button>
					<Button shape="circle" icon="search"/>
					<Button type="primary" icon="search">搜索</Button>
					<Button type="primary" icon="download">下载</Button>
				</Card>
				<Card title="Loading按钮" className="card-wrap">
					<Button type="primary" loading={btnLoading}>确定</Button>
					<Button type="primary" shape="circle" loading={btnLoading}/>
					<Button loading={btnLoading}>点击加载</Button>
					<Button shape="circle" loading={btnLoading}/>
					<Button type="primary" onClick={this._btnControlClick}>{ !btnLoading ? '开启' : '关闭' }</Button>
				</Card>
				<Card title="按钮组" className="card-wrap-group">
					<ButtonGroup>
						<Button type="primary">
							<Icon type="left"/>返回
						</Button>
						<Button type="primary">
							前进<Icon type="right"/>
						</Button>
					</ButtonGroup>
				</Card>
				<Card title="按钮大小" className="card-wrap">
					<RadioGroup value={btnSize} onChange={this._radioChange}>
						<Radio value="small">小</Radio>
						<Radio value="default">中</Radio>
						<Radio value="large">大</Radio>
					</RadioGroup>
					<Button type="primary" size={btnSize}>imooc</Button>
					<Button size={btnSize}>imooc</Button>
					<Button type="dashed" size={btnSize}>imooc</Button>
					<Button type="danger" size={btnSize}>imooc</Button>
				</Card>
			</div>
		)
	}
}

export default ButtonsPage