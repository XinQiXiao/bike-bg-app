/**
 * create at 07/24/18
 */
import React, { Component } from 'react'

class Info extends Component{
	render(){
		return (
			<div>
				{`动态路由参数 = ${this.props.match.params.value}`}
			</div>
		)
	}
}

export default Info