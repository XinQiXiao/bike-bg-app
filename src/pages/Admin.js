/**
 * create at 07/23/18
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd'

// components
import { Header, Footer, NavLeft } from '../components'

// style
import '../style/common.less'

class AdminComponent extends Component{
	render(){
		return (
			<Row className="container">
				<Col span="4" className="nav-left">
					<NavLeft />
				</Col>
				<Col span="20" className="main">
					<Header/>
					<Row className="content">
						content
					</Row>
					<Footer/>
				</Col>
			</Row>
		)
	}
}

export default AdminComponent