/**
 * create at 07/23/18
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd'

// components
import { Header, Footer } from '../components'

class AdminComponent extends Component{
	render(){
		return (
			<Row>
				<Col span="3">
					left
				</Col>
				<Col span="21">
					<Header/>
					<Row>
						content
					</Row>
					<Footer/>
				</Col>
			</Row>
		)
	}
}

export default AdminComponent