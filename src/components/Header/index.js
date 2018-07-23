/**
 * create 07/23/18
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd'

// style
import './index.less'

// utils
import { utils } from '../../utils'

class HeaderComponent extends Component{
	constructor(props){
		super(props)

		this.state = {
			userName: '',
			systemTime: ''
		}
	}

	componentWillMount(){
		this.setState({
			userName: '河畔一角'
		})
		setInterval(()=>{
			let systemTime = utils.formatDate(new Date().getTime())
			this.setState({
				systemTime
			})
		}, 1000)
	}

	render(){
		const {userName, systemTime} = this.state
		return (
			<div className="header">
				<Row className="header-top">
					<Col span="24">
						<span>欢迎，{userName}</span>
						<a href="#">退出</a>
					</Col>
				</Row>
				<Row className="breadcrumb">
					<Col span="4" className="breadcrumb-title">
						首页
					</Col>
					<Col span="20" className="weather">
						<span className="date">{systemTime}</span>
						<span className="weather-detail">阴转多云</span>
					</Col>
				</Row>
			</div>
		)
	}
}

export default HeaderComponent