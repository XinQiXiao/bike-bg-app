/**
 * create at 07/24/18
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component{
	render(){
		return (
			<div>
				<ul>
					<li>
						<Link to="/main">Home3</Link>
					</li>
					<li>
						<Link to="/about">About3</Link>
					</li>
					<li>
						<Link to="/topics">Topics3</Link>
					</li>
					<li>
						<Link to="/imooc">imooc</Link>
					</li>
				</ul>	
				<hr/>
				{this.props.children}
			</div>
		)
	}
}

export default Home