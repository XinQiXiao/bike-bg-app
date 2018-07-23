/**
 * create at 07/20/18
 */
import React, { Component, /*PureComponent*/ } from 'react'

import './index.less'

class ChildComponent extends Component{
	componentWillMount(){
		console.log('Child willMount')
	}

	componentDidMount(){
		console.log('Child didMount')
	}

	componentWillReceiveProps(nextProps){
		console.log('Child willReceiveProps nextProps=>', nextProps)
	}

	shouldComponentUpdate(){
		console.log('Child shouldComponentUpdate')
		return true
	}

	componentWillUpdate(){
		console.log('Child willUpdate')
	}

	componentDidUpdate(){
		console.log('Child didUpdate')
	}

	render(){
		const { name = '' } = this.props
		console.log('Child render props=>', this.props)
		return (
			<div className="child-content">
				<p>child 组件 name: {name}</p>
			</div>
		)
	}
}

export default ChildComponent