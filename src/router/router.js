/**
 * create at 07/24/18
 */
import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect, } from 'react-router-dom'

// app 
import App from './App'
import Admin from './AdminRoute'
import Common from './CommonRoute'

// router
import { 
	Login, NoMatchPage,
	HomePage,
	// UI
	ButtonPage, ModalPage, LoadingPage, NotificationPage, MessagePage, 
	TabsPage, GallaryPage, CarouselPage,
	// Form
	FormLogin, FormRegister,
	// table
	BasicTablePage, HighTablePage,
	// city
	CityPage,
	// order
	OrderListPage, OrderDetailPage,
	// user
	UserListPage,
	// bike map 
	BikeMapPage,
	// charts
	BarPage, PiePage, LinePage,
	// rich
	RichPage,
	// permisson
	PermissonPage,
} from '../pages'

class IRouter extends Component{
	render(){
		return(
			<HashRouter>
				<App>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/common" render={()=> 
							<Common>
								<Switch>
									{/* order detail */}
									<Route path="/common/order/detail/:orderId" component={OrderDetailPage}/>
								</Switch>
							</Common>	
						} />
						<Route path="/" render={() => 
							<Admin>
								<Switch>
									<Route path="/home" component={HomePage} />
									{/* UI */}
									<Route path="/ui/buttons" component={ButtonPage} />
									<Route path="/ui/modals" component={ModalPage} />
									<Route path="/ui/loadings" component={LoadingPage} />
									<Route path="/ui/notification" component={NotificationPage} />
									<Route path="/ui/messages" component={MessagePage} />
									<Route path="/ui/tabs" component={TabsPage} />
									<Route path="/ui/gallery" component={GallaryPage} />
									<Route path="/ui/carousel" component={CarouselPage} />
									{/* Form */}
									<Route path="/form/login" component={FormLogin} />
									<Route path="/form/reg" component={FormRegister} />
									{/* Table */}
									<Route path="/table/basic" component={BasicTablePage} />
									<Route path="/table/high" component={HighTablePage} />
									{/* City */}
									<Route path="/city" component={CityPage} />
									{/* order */}
									<Route path="/order" component={OrderListPage} />
									{/* user list */}
									<Route path="/user" component={UserListPage} />
									{/* bike map */}
									<Route path="/bikeMap" component={BikeMapPage} />
									{/* charts */}
									<Route path="/charts/bar" component={BarPage} />
									<Route path="/charts/pie" component={PiePage} />
									<Route path="/charts/line" component={LinePage} />
									{/* rich */}
									<Route path="/rich" component={RichPage} />
									{/* permisson */}
									<Route path="/permission" component={PermissonPage} />
									<Redirect to="/home"/>
									<Route component={NoMatchPage} />
								</Switch>
							</Admin>
						} />
					</Switch>
				</App>
			</HashRouter>
		)
	}
}

export default IRouter