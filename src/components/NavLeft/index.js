/**
 * create 07/23/18
 */
import React, { Component } from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

// config 
import { MenuConfig } from '../../config'

// style
import './index.less'

// redux action
import { switchMenu } from '../../redux'

// const 
const SubMenu = Menu.SubMenu 
const MenuItem = Menu.Item

class NavLeftComponent extends Component{
	state = {
		menuTreeNode: [],
		currentKey: ''
	}

	componentWillMount(){
		const menuTreeNode = this._renderMenu(MenuConfig)
		this.setState({
			menuTreeNode,
			currentKey: window.location.hash.replace(/#|\?.*$/g, '')
		})
	}

	_renderMenu = (data)=>{
		return data.map((item)=>{
			if(item.children){
				return (
					<SubMenu title={item.title} key={item.key}>
						{this._renderMenu(item.children)}
					</SubMenu>
				)
			}
			return (
				<MenuItem key={item.key} title={item.title}>
					<NavLink to={item.key}>{item.title}</NavLink>
				</MenuItem>
			)
		})
	}

	_menuClick = (item)=>{
		const {dispatch} = this.props
		if(item.item && item.item.props){
			dispatch(switchMenu(item.item.props.title))
		}
		console.log('item=>', item)
		this.setState({
			currentKey: item.key
		})
	}

	render(){
		const { currentKey } = this.state
		return (
			<div >
				<div className="logo">
					<img src="/assets/logo-ant.svg" alt="logo-ant"/>
					<h1>Imooc MS</h1>
				</div>
				<Menu theme="dark" selectedKeys={[currentKey]} onClick={this._menuClick}>
					{this.state.menuTreeNode}
				</Menu>
			</div>
		)
	}
}

export default connect()(NavLeftComponent)