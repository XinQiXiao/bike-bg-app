import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

// style
import './index.css'
// router
import Router from './router'
import registerServiceWorker from './registerServiceWorker'

// store
import {rootStore} from './redux'
const store = rootStore()

const RootApp = ()=>{
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	)
}

ReactDOM.render(<RootApp />, document.getElementById('root'))
registerServiceWorker();
