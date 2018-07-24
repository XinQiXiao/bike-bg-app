/**
 * create at 07/24/18
 */
import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

// components 
import { About, Topics } from '../route1'
import Main from './Main'

// router config
import Home from './Home'

class IRouter extends Component{
	render(){
		return(
			<Router>
				<Home>
					<Route path="/main" render={()=>
						<Main>
							<Route path="/main/about" component={About}/>
						</Main>
					} />
					<Route path="/about" component={About} />
					<Route path="/topics" component={Topics} />
				</Home>
			</Router>
		)
	}
}

export default IRouter