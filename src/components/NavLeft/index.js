/**
 * create 07/23/18
 */
import React, { Component } from 'react'
import { Menu } from 'antd'

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
		console.log('will mount MenuConfig=>', MenuConfig)
		const menuTreeNode = this._renderMenu(MenuConfig)
		this.setState({
			menuTreeNode
		})
	}

	_renderMenu = (data)=>{
		return data.map((item)=>{
			console.log('_renderMenu item=>', item)
			if(item.children){
				return (
					<SubMenu title={item.title} key={item.key}>
						{this._renderMenu(item.children)}
					</SubMenu>
				)
			}
			return (
				<MenuItem key={item.key}>
					{item.title}
				</MenuItem>
			)
		})
	}

	render(){
		console.log('navLeft state=>', this.state)
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