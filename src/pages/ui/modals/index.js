/**
 * create at 07/25/18
 */
import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'

// style
import '../ui.less'

// const 
const Base1 = 'baseModal1'
const Base2 = 'baseModal2'
const Base3 = 'baseModal3'
const Base4 = 'baseModal4'

class ModalPage extends Component{
	state = { 
		[Base1]: false,
		[Base2]: false,
		[Base3]: false,
		[Base4]: false,
	}

	_handleModal = (type) => {
		this.setState({
			[type]: true
		})
	}
	_handleModalOk = (type) => {
		this.setState({
			[type]: false
		})
	}
	_handleModalCancel = (type) => {
		this.setState({
			[type]: false
		})
	}

	_modalConfirm = (type)=>{
		Modal[type]({
			title: '确认',
			content: `${type} content`,
			onOk(){
				console.log('modal confirm ok.')
			},
			onCancel(){
				console.log('modal confirm cancel')
			}
		})
	}

	render(){
		const { 
			baseModal1, baseModal2, baseModal3, baseModal4,
		} = this.state
		return (
			<div>
				<Card title="基础模态框" className="card-wrap">
					<Button type="primary" onClick={()=> this._handleModal(Base1)}>open</Button>
					<Button type="primary" onClick={()=> this._handleModal(Base2)}>自定义页脚</Button>
					<Button type="primary" onClick={()=> this._handleModal(Base3)}>顶部20px弹框</Button>
					<Button type="primary" onClick={()=> this._handleModal(Base4)}>水平垂直居中</Button>
				</Card>
				<Card title="信息确认框" className="card-wrap">
					<Button type="primary" onClick={()=> this._modalConfirm('confirm')}>Confirm</Button>
					<Button type="primary" onClick={()=> this._modalConfirm('info')}>Info</Button>
					<Button type="primary" onClick={()=> this._modalConfirm('success')}>Success</Button>
					<Button type="primary" onClick={()=> this._modalConfirm('error')}>Error</Button>
					<Button type="primary" onClick={()=> this._modalConfirm('warning')}>Warning</Button>
				</Card>
				<Modal 
					title="Basic open"
					visible={baseModal1}
					onOk={()=> this._handleModalOk(Base1)}
					onCancel={()=> this._handleModalCancel(Base1)}
				>
					<p>Basic open content</p>
				</Modal>
				<Modal 
					title="Basic 自定义页脚"
					visible={baseModal2}
					onOk={()=> this._handleModalOk(Base2)}
					onCancel={()=> this._handleModalCancel(Base2)}
					okText="确认"
					cancelText="取消"
				>
					<p>Basic 自定义页脚 content</p>
				</Modal>
				<Modal 
					style={{top: 20}}
					title="Basic 顶部20px弹框"
					visible={baseModal3}
					onOk={()=> this._handleModalOk(Base3)}
					onCancel={()=> this._handleModalCancel(Base3)}
				>
					<p>Basic 顶部20px弹框 content</p>
				</Modal>
				<Modal 
					title="Basic 水平垂直居中"
					visible={baseModal4}
					wrapClassName="vertical-center-modal"
					onOk={()=> this._handleModalOk(Base4)}
					onCancel={()=> this._handleModalCancel(Base4)}
				>
					<p>Basic 水平垂直居中 content</p>
				</Modal>
			</div>
		)
	}
}

export default ModalPage