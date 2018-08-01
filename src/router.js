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
	// UI
	ButtonPage, ModalPage, LoadingPage, NotificationPage, MessagePage, 
	TabsPage, GallaryPage, CarouselPage,
	// Form
	FormLogin, FormRegister,
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
								{/* UI */}
								<Route path="/admin/ui/buttons" component={ButtonPage} />
								<Route path="/admin/ui/modals" component={ModalPage} />
								<Route path="/admin/ui/loadings" component={LoadingPage} />
								<Route path="/admin/ui/notification" component={NotificationPage} />
								<Route path="/admin/ui/messages" component={MessagePage} />
								<Route path="/admin/ui/tabs" component={TabsPage} />
								<Route path="/admin/ui/gallery" component={GallaryPage} />
								<Route path="/admin/ui/carousel" component={CarouselPage} />
								{/* Form */}
								<Route path="/admin/form/login" component={FormLogin} />
								<Route path="/admin/form/reg" component={FormRegister} />
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