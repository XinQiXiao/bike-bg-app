/**
 * create at 07/24/18
 */
import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

// app admin
import App from './App'
import Admin from './Admin'

// router
import { 
	Login, NoMatchPage,
	ButtonPage, ModalPage, LoadingPage,
} from './pages'

class IRouter extends Component{
	render(){
		return(
			<HashRouter>
				<App>
					<Route path="/login" component={Login} />
					<Route path="/admin" render={() => 
						<Admin>
							<Switch>
								<Route path="/admin/ui/buttons" component={ButtonPage} />
								<Route path="/admin/ui/modals" component={ModalPage} />
								<Route path="/admin/ui/loadings" component={LoadingPage} />
								<Route component={NoMatchPage} />
							</Switch>
						</Admin>
					} />
					<Route path="/order/detail" component={Login} />
				</App>
			</HashRouter>
		)
	}
}

export default IRouter