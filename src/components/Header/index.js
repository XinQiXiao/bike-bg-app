/**
 * create 07/23/18
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'

// style
import './index.less'

// utils
import { utils } from '../../utils'

// axios
// import axios from '../../axios'

const mapStateToProps = state => ({
	menuName: state.menuName
})

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
			// let city = '北京'
			// TODO 天气接口有问题 暂时显示静态的
			// const ret = await axios.jsonp({
			// 	url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
			// })
			// const data = ret.results[0].weather_data[0]
			// this.setState({
			// 	dayPictureUrl: data.dayPictureUrl,
			// 	weather: data.weather
			// })
			this.setState({
				dayPictureUrl: '',
				weather: '多云转晴'
			})
		} catch(e){
			console.log('_getWeatherAPIDate e=>', e)
		}
		
	}

	render(){
		const {
			userName = '', systemTime = '', weather = '', dayPictureUrl = ''
		} = this.state
		const { menuType, menuName } = this.props
		return (
			<div className="header">
				<Row className="header-top">
					{
						menuType === 'second' ? (
							<Col span="6" className="logo">
								<img src="/assets/logo-ant.svg" alt="ant-logo"/>
								<span >单车 通用信息页面</span>
							</Col>
						) : null
					}
					<Col span={menuType === 'second' ? 18 : 24}>
						<span>欢迎，{userName}</span>
						<a href="javascript:void(0)">退出</a>
					</Col>
				</Row>
				{
					menuType === 'second' ? null : (
						<Row className="breadcrumb">
							<Col span="4" className="breadcrumb-title">
								{menuName ? menuName : ''}
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
					)
				}
			</div>
		)
	}
}

export default connect(mapStateToProps)(HeaderComponent)