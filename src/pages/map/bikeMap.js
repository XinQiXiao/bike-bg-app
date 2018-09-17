/**
 * create at 09/14/18
 */
import React, { Component } from 'react'
import { Card } from 'antd'
import _ from 'lodash'

// components
import { FilterForm, formConfig } from '../../components'

// axios
import axiosApi from '../../axios'

// const
const FORM_RESET = 'form_reset'
const FORM_QUERY = 'form_query'

class BikeMap extends Component{
	state = {
		bikeData: null
	}
	map = '' // 地区对象
	params = {}

	formList = [
		{
			type: formConfig.baseFormType.SELECT,
			field: 'city',
			label: '城市',
			placeholder: '全部',
			initialValue: 1,
			width: 80,
			list: [
				{id: 0, name: '全部'},
				{id: 1, name: '北京'},
				{id: 2, name: '上海'},
				{id: 3, name: '天津'},
			]
		},
		{
			type: formConfig.baseFormType.QUERY_TIME,
			placeholder: '选择时间',
		},
		{
			type: formConfig.baseFormType.SELECT,
			field: 'order_status',
			label: '订单状态',
			placeholder: '全部',
			initialValue: 1,
			width: 80,
			list: [
				{id: 0, name: '全部'},
				{id: 1, name: '进行中'},
				{id: 2, name: '行程结束'}
			]
		},
	]

	_queryClick = (code, values)=>{
		if(code === FORM_QUERY){
			this.params = {
				...this.params,
				...values,
			}
			// 刷新
			this._requestInfo()
		}
	}
	// form 重置
	_resetClick = (code)=>{
		if(code === FORM_RESET){
			// 刷新数据
			this._requestInfo()
		}
	}
	formOptions = [
		{
			type: formConfig.optionsBtnType.QUERY,
			code: FORM_QUERY,
			btnType: 'primary',
			style: {margin: '0 20px'},
			title: '查询',
			optionItemPress: this._queryClick,
		},
		{
			type: formConfig.optionsBtnType.RESET,
			code: FORM_RESET,
			title: '重置',
			optionItemPress: this._resetClick
		}
	]
	
	componentWillMount() {
		this._requestInfo()
	}
	
	_requestInfo = async ()=>{
		try{
			let ret = await axiosApi.ajax({
				url: 'map/bikeList',
				data: {
					isShowLoading: true,
					params: this.params
				}
			})
			this.setState({
				bikeData: ret
			})
			// 绘制地图
			this._renderMap()
		}catch(e){
			console.log('_requestInfo e=>', e)
		}
	}

	// 初始化地图
	_renderMap = ()=>{
		try{
			const {service_list, bike_list, route_list} = this.state.bikeData
			// 初始化地图
			this.map = new window.BMap.Map('bikeMap')
			// 设置地图中心坐标点
			// this.map.centerAndZoom('北京', 11)
			// 添加控件
			this._addMapControl()
			// 添加路线图
			this._drawBikeRoute(route_list)
			// 添加服务区
			this._drawServerArea(service_list)
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
	_drawBikeRoute = (list)=>{
		// 处理 list 
		let positionList = []
		list.forEach((item)=>{
			let posArr = item.split(',')
			positionList.push({
				lon: posArr[0],
				lat: posArr[1]
			})
		})
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
			// console.log('_drawServerArea areaList=>', areaList)
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
		const {bikeData} = this.state
		return (
			<div>
				<Card>
					<FilterForm formList={this.formList} options={this.formOptions}/>
				</Card>
				<Card style={{marginTop: 10}}>
					<div>共{bikeData && bikeData.total_count ? bikeData.total_count : 0}辆</div>
					<div id="bikeMap" style={{height: 500, marginTop: 10}}></div>
				</Card>
			</div>
		)
	}
}

export default BikeMap