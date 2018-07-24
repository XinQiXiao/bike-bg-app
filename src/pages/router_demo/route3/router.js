/**
 * create at 07/24/18
 */
import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

// components 
import { About, Topics } from '../route1'
import Main from './Main'
import Info from './Info'
import NoMatch from './NoMatch'

// router config
import Home from './Home'

class IRouter extends Component{
	render(){
		return(
			<Router>
				<Home>
					<Switch>
						<Route path="/main" render={()=>
							<Main>
								<Route path="/main/:value" component={Info}/>
							</Main>
						} />
						<Route path="/about" component={About} />
						<Route path="/topics" component={Topics} />
						<Route component={NoMatch} />
					</Switch>
				</Home>
			</Router>
		)
	}
}

export default IRouter