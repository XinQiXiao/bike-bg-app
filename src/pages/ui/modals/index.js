/**
 * create at 07/24/18
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
const Info1 = 'infoModal1'
const Info2 = 'infoModal2'
const Info3 = 'infoModal3'
const Info4 = 'infoModal4'
const Info5 = 'infoModal5'

class ModalPage extends Component{
	state = { 
		[Base1]: false,
		[Base2]: false,
		[Base3]: false,
		[Base4]: false,
		[Info1]: false,
		[Info2]: false,
		[Info3]: false,
		[Info4]: false,
		[Info5]: false,
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

	render(){
		const { baseModal1, baseModal2 } = this.state
		return (
			<div>
				<Card title="基础模态框" className="card-wrap">
					<Button type="primary" onClick={()=> this._handleModal(Base1)}>open</Button>
					<Button type="primary" onClick={()=> this._handleModal(Base2)}>自定义页脚</Button>
					<Button type="primary" onClick={()=> this._handleModal(Base3)}>顶部20px弹框</Button>
					<Button type="primary" onClick={()=> this._handleModal(Base4)}>水平垂直居中</Button>
				</Card>
				<Card title="信息确认框" className="card-wrap">
					<Button type="primary" onClick={()=> this._handleModal(Info1)}>Confirm</Button>
					<Button type="primary" onClick={()=> this._handleModal(Info2)}>Info</Button>
					<Button type="primary" onClick={()=> this._handleModal(Info3)}>Success</Button>
					<Button type="primary" onClick={()=> this._handleModal(Info4)}>Error</Button>
					<Button type="primary" onClick={()=> this._handleModal(Info5)}>Warning</Button>
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
				>
					<p>Basic 自定义页脚</p>
				</Modal>
			</div>
		)
	}
}

export default ModalPage