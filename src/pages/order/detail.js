/**
 * for 订单详情
 * create at 08/27/18
 */
import React, { Component } from 'react'
import { Card } from 'antd'
import _ from 'lodash'

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

	map = null 

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
			this._renderMap()
		}catch(e){
			console.log('_requestInfo e=>', e)
		}
	}

	// 初始化地图
	_renderMap = ()=>{
		try{
			// 初始化地图
			this.map = new window.BMap.Map('orderDetailMap')
			// 设置地图中心坐标点
			// this.map.centerAndZoom('北京', 11)
			// 添加控件
			this._addMapControl()
			// 添加路线图
			this._drawBikeRoute(this.state.orderInfo.position_list)
			// 添加服务区
			this._drawServerArea(this.state.orderInfo.area_list)
		} catch(e){
			console.log('_renderMap e=>', e)
		}
	}
	// 添加地图控件
	_addMapControl = ()=>{
		this.map.addControl(new window.BMap.ScaleControl({anchor: window.BMAP_ANCHOR_TOP_RIGHT}))
		this.map.addControl(new window.BMap.NavigationControl({anchor: window.BMAP_ANCHOR_TOP_RIGHT}))
	}
	// 绘制路线图
	_drawBikeRoute = (positionList)=>{
		// 添加起始坐标点
		let startPoint = ''
		let endPoint = ''
		if(_.isArray(positionList) && positionList.length > 0){
			const firstPosition = positionList[0]
			// 起始 坐标 、icon, 坐标依赖marker
			startPoint = new window.BMap.Point(firstPosition.lon, firstPosition.lat)
			let startIcon = new window.BMap.Icon('/assets/start_point.png', new window.BMap.Size(36, 42), {
				imageSize: new window.BMap.Size(36, 42),
				anchor: new window.BMap.Size(36, 42),
			})
			let startMarker = new window.BMap.Marker(startPoint, {icon: startIcon})
			this.map.addOverlay(startMarker)

			// 结束 坐标、icon, 坐标依赖marker
			const lastPosition = positionList[positionList.length-1]
			endPoint = new window.BMap.Point(lastPosition.lon, lastPosition.lat)
			let endIcon = new window.BMap.Icon('/assets/end_point.png', new window.BMap.Size(36, 42), {
				imageSize: new window.BMap.Size(36, 42),
				anchor: new window.BMap.Size(36, 42),
			})
			let endMarker = new window.BMap.Marker(endPoint, {icon: endIcon})
			this.map.addOverlay(endMarker)

			// 连接路线图
			let trackPoint = []
			positionList.forEach((item)=>{
				trackPoint.push(new window.BMap.Point(item.lon, item.lat))
			})
			let polylines = new window.BMap.Polyline(trackPoint, {
				strokeColor: '#1869AD', strokeWeight: 3, strokeOpacity: 1.0
			})
			this.map.addOverlay(polylines)

			// 重新设置 地图中间点坐标
			this.map.centerAndZoom(endPoint, 11)
		}
	}
	// 绘制服务区
	_drawServerArea = (areaList)=>{
		if(_.isArray(areaList) && areaList.length > 0){
			console.log('_drawServerArea areaList=>', areaList)
			// 连接服务区
			let trackPoint = []
			areaList.forEach((item)=>{
				trackPoint.push(new window.BMap.Point(item.lon, item.lat))
			})
			let polylines = new window.BMap.Polygon(trackPoint, {
				strokeColor: '#CE0000', strokeWeight: 4, strokeOpacity: 1.0, 
				fillColor: '#FF8605', fillOpacity: 0.3
			})
			this.map.addOverlay(polylines)
		}
	}

	render(){
		const info  = this.state.orderInfo || {}
		return (
			<div>
				<Card>
					<div id="orderDetailMap" className="order-map"></div>
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