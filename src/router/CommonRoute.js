/**
 * create at 08/23/18
 */
import React, { Component } from 'react'
import { Row } from 'antd'

// components
import { Header,} from '../components'

// style
import '../style/common.less'

class CommonComponent extends Component{
	render(){
		return (
			<div >
				<Row className="simple-page">
					<Header menuType="second"/>
				</Row>
				<Row style={{position: 'relative', padding: 20}}>
					{this.props.children}
				</Row>
			</div>
			
		)
	}
}

export default CommonComponent