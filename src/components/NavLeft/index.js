/**
 * create 07/23/18
 */
import React, { Component } from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'

// config 
import { MenuConfig } from '../../config'

// style
import './index.less'

// const 
const SubMenu = Menu.SubMenu 
const MenuItem = Menu.Item

class NavLeftComponent extends Component{
	constructor(props){
		super(props)

		this.state = {
			menuTreeNode: []
		}
	}

	componentWillMount(){
		const menuTreeNode = this._renderMenu(MenuConfig)
		this.setState({
			menuTreeNode
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
				<MenuItem key={item.key}>
					<NavLink to={item.key}>{item.title}</NavLink>
				</MenuItem>
			)
		})
	}

	render(){
		return (
			<div >
				<div className="logo">
					<img src="/assets/logo-ant.svg" alt="logo-ant"/>
					<h1>Imooc MS</h1>
				</div>
				<Menu theme="dark">
					{this.state.menuTreeNode}
				</Menu>
			</div>
		)
	}
}

export default NavLeftComponent