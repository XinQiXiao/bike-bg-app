/**
 * for 订单详情
 * create at 08/27/18
 */
import React, { Component } from 'react'
import { Card } from 'antd'

// axios
import axiosApi from '../../axios'

// utils
import {utils} from '../../utils'

// style
import './detail.less'

class DetailPage extends Component{
	state = {
		orderInfo: null
	}

	componentDidMount(){
		this._requestInfo()
	}

	_requestInfo = async ()=>{
		try{
			// 取路由参数
			const {orderId} = this.props.match.params
			if(!orderId)
				throw new Error('orderId is null')
			const ret = await axiosApi.ajax({
				url: 'order/detail',
				data: {
					isShowLoading: true,
					params: {
						order_id: orderId
					}
				}
			})
			this.setState({
				orderInfo: ret
			})
		}catch(e){
			console.log('_requestInfo e=>', e)
		}
	}

	render(){
		const info  = this.state.orderInfo || {}
		return (
			<div>
				<Card>
					<div id="orderDetailMap"></div>
					<div className="detail-items">
						<div className="item-title">基础信息</div>
						<ul className="detail-form">
							<li>
								<div className="detail-form-left">用车模式</div>
								<div className="detail-form-content">{
									info.mode ? (info.mode === 1 ? '服务区' : '停车点') : ''
								}</div>
							</li>
							<li>
								<div className="detail-form-left">订单编号</div>
								<div className="detail-form-content">{
									info.order_code ? info.order_code : ''
								}</div>
							</li>
							<li>
								<div className="detail-form-left">车辆编号</div>
								<div className="detail-form-content">{
									info.bike_code ? info.bike_code : ''
								}</div>
							</li>
							<li>
								<div className="detail-form-left">用户姓名</div>
								<div className="detail-form-content">{
									info.user_name ? info.user_name : ''
								}</div>
							</li>
							<li>
								<div className="detail-form-left">手机号码</div>
								<div className="detail-form-content">{
									info.mobile ? info.mobile : ''
								}</div>
							</li>
						</ul>
					</div>
					<div className="detail-items">
						<div className="item-title">行驶轨迹</div>
						<ul className="detail-form">
							<li>
								<div className="detail-form-left">行程起点</div>
								<div className="detail-form-content">{
									info.start_location ? info.start_location : ''
								}</div>
							</li>
							<li>
								<div className="detail-form-left">行程终点</div>
								<div className="detail-form-content">{
									info.end_location ? info.end_location : ''
								}</div>
							</li>
							<li>
								<div className="detail-form-left">行程里程</div>
								<div className="detail-form-content">{
									info.distance ? utils.translateDistance(info.distance) : ''
								}</div>
							</li>
						</ul>
					</div>
				</Card>
			</div>
		)
	}
}

export default DetailPage