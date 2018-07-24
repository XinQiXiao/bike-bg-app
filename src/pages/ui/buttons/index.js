/**
 * create at 07/24/18
 */
import React, { Component } from 'react'
import { Card, Button } from 'antd'

// style
import '../ui.less'

class ButtonsPage extends Component{
	state = {
		btnLoading: false
	}

	_closeLoading = ()=>{
		this.setState((preState)=>({
			btnLoading: !preState.btnLoading
		}))
	}

	render(){
		const { btnLoading } = this.state
		return(
			<div>
				<Card title="基础按钮" className="card">
					<Button type="primary">imooc</Button>
					<Button >imooc</Button>
					<Button type="dashed">imooc</Button>
					<Button type="danger">imooc</Button>
					<Button disabled>imooc</Button>
				</Card>

				<Card title="图形按钮" className="card">
					<Button icon="plus">创建</Button>
					<Button icon="edit">编辑</Button>
					<Button icon="delete">删除</Button>
					<Button shape="circle" icon="search"/>
					<Button type="primary" icon="search">搜索</Button>
					<Button type="primary" icon="download">下载</Button>
				</Card>

				<Card title="Loading按钮" className="card">
					<Button type="primary" loading={btnLoading}>确定</Button>
					<Button type="primary" shape="circle" loading={btnLoading}/>
					<Button loading={btnLoading}>点击加载</Button>
					<Button shape="circle" loading={btnLoading}/>
					<Button type="primary" onClick={this._closeLoading}>{ !btnLoading ? '开启' : '关闭' }</Button>
				</Card>
			</div>
		)
	}
}

export default ButtonsPage