/**
 * create at 07/24/18
 */
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Main extends Component{
	render(){
		return (
			<div>
				<div>
					Main
				</div>
				<Link to="/main/about">Main about</Link>
				<hr />
				{this.props.children}
			</div>
		)
	}
}

export default Main