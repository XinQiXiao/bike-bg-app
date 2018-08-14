/**
 * create 07/23/18
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd'

// style
import './index.less'

// utils
import { utils } from '../../utils'

// axios
import axios from '../../axios'

class HeaderComponent extends Component{
	state = {}

	componentWillMount(){
		this.setState({
			userName: '河畔一角'
		})
		setInterval(()=>{
			let systemTime = utils.currentTimeStr()
			this.setState({
				systemTime
			})
		}, 1000)

		this._getWeatherAPIDate()
	}

	_getWeatherAPIDate = async ()=>{
		try{
			let city = '北京'
			const ret = await axios.jsonp({
				url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
			})
			const data = ret.results[0].weather_data[0]
			this.setState({
				dayPictureUrl: data.dayPictureUrl,
				weather: data.weather
			})
		} catch(e){
			console.log('_getWeatherAPIDate e=>', e)
		}
		
	}

	render(){
		const {
			userName = '', systemTime = '', weather = '', dayPictureUrl = ''
		} = this.state
		return (
			<div className="header">
				<Row className="header-top">
					<Col span="24">
						<span>欢迎，{userName}</span>
						<a href="javascript:void(0)">退出</a>
					</Col>
				</Row>
				<Row className="breadcrumb">
					<Col span="4" className="breadcrumb-title">
						首页
					</Col>
					<Col span="20" className="weather">
						<span className="date">{systemTime}</span>
						<span className="weather-img">
							<img src={dayPictureUrl} alt="weather-icon"/>
						</span>
						<span className="weather-detail">
							{weather}
						</span>
					</Col>
				</Row>
			</div>
		)
	}
}

export default HeaderComponent