/**
 * create at 07/20/18
 */
import React, { Component } from 'react'

// component
import ChildComponent from './Child'

class LifeComponent extends Component{
	constructor(props){
		super(props)

		this.state = {
			count: 0
		}
	}

	_btnClick = ()=>{
		this.setState((preState, props)=>({
			count: preState.count+1
		}))
	}

	render(){
		const {count = 0} = this.state
		return (
			<div sytle={{padding: 50}}>
				<p>React 生命周期介绍</p>
				<button onClick={this._btnClick}>点击一下</button>
				<p>count: {count}</p>
				<ChildComponent name="child name"/>
			</div>
		)
	}
}

export default LifeComponent