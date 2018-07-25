/**
 * create at 07/25/18
 */
import React, { Component } from 'react'
import { Card, Spin, Icon, Alert, Switch} from 'antd'

// style
import '../ui.less'

class LoadingPage extends Component{
	state = {
		alertLoading: false
	}

	_toggle = (value)=>{
		console.log('_toggle value=>', value)
		this.setState({
			alertLoading: value
		})
	}

	render(){
		const iconLoading = <Icon type="loading" style={{fontSize: 24}}/>
		const iconPlus = <Icon type="plus" style={{fontSize: 24}}/>

		const { alertLoading } = this.state

		return (
			<div>
				<Card title="Spin使用" className="card-wrap">
					<Spin size="small"/>
					<Spin style={{margin: '0 10px'}}/>
					<Spin size="large"/>
				</Card>
				<Card title="自定义Spin图片" className="card-wrap">
					<Spin indicator={iconLoading} style={{marginRight: 10}}/>
					<Spin indicator={iconPlus} style={{marginRight: 10}} spinning={true}/>
				</Card>
				<Card title="内容遮罩" className="card-wrap">
					<Spin spinning={alertLoading}>
						<Alert 
							message="Alert message title"
							description="Alert message content"
							type="info"
						/>
					</Spin>
					<div style={{marginTop: 16}}>
						Loading state: <Switch checked={alertLoading} onChange={this._toggle}/>
					</div>
				</Card>
				<Card title="自定义描述文案" className="card-wrap">
					<Spin tip="loading..."/>
				</Card>
			</div>
		)
	}
}

export default LoadingPage