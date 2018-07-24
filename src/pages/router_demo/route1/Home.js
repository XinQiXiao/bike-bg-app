/**
 * create at 07/24/18
 */
import React, { Component } from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'

// components
import Main from './Main'
import About from './About'
import Topics from './Topics'

class Home extends Component{
	render(){
		return (
			<HashRouter>
				<div>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/topics">Topics</Link>
						</li>
					</ul>
					<hr/>
					<Switch>
						<Route path="/" exact component={Main} />
						<Route path="/about" component={About} />
						<Route path="/topics" component={Topics} />
					</Switch>
				</div>
			</HashRouter>
		)
	}
}

export default Home