/**
 * create at 07/25/18
 */
import React, { Component } from 'react'
import { Card, Button, notification} from 'antd'

// style
import '../ui.less'

class NotificationPage extends Component{

	_openNotification = ({type = 'info', placement = 'topRight'} = {} )=>{
		notification[type]({
			message: '消息 title',
			description: `消息描述 description  type 类型 ${type}`,
			placement,
		})
	}

	render(){
		return (
			<div>
				<Card title="通知提醒框" className="card-wrap">
					<Button type="primary" onClick={()=> this._openNotification({type: 'success'})}>Success</Button>
					<Button type="primary" onClick={()=> this._openNotification({type: 'info'})}>Info</Button>
					<Button type="primary" onClick={()=> this._openNotification({type: 'warning'})}>Warning</Button>
					<Button type="primary" onClick={()=> this._openNotification({type: 'error'})}>Error</Button>
				</Card>
				<Card title="控制提醒框" className="card-wrap">
					<Button type="primary" onClick={()=> this._openNotification({placement: 'topLeft'})}>控制topLeft</Button>
					<Button type="primary" onClick={()=> this._openNotification({placement: 'topRight'})}>控制topRight</Button>
					<Button type="primary" onClick={()=> this._openNotification({placement: 'bottomLeft'})}>控制bottomLeft</Button>
					<Button type="primary" onClick={()=> this._openNotification({placement: 'bottomRight'})}>控制bottomRight</Button>
				</Card>
			</div>
		)
	}
}

export default NotificationPage