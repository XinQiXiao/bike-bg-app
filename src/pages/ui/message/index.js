/**
 * create at 07/25/18
 */
import React, { Component } from 'react'
import { Card, Button, message} from 'antd'

// style
import '../ui.less'

class MessagePage extends Component{

	_handleMessage = (type)=>{
		message[type]('This is a normal message.')
	}

	render(){
		return (
			<div>
				<Card title="全局提示框" className="card-wrap">
					<Button type="primary" onClick={()=> this._handleMessage('success')}>Success</Button>
					<Button type="primary" onClick={()=> this._handleMessage('info')}>Info</Button>
					<Button type="primary" onClick={()=> this._handleMessage('warning')}>Warning</Button>
					<Button type="primary" onClick={()=> this._handleMessage('error')}>Error</Button>
					<Button type="primary" onClick={()=> this._handleMessage('loading')}>Loading</Button>
				</Card>
			</div>
		)
	}
}

export default MessagePage