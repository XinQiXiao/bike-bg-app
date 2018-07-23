/**
 * create 07/23/18
 */
import React, { Component } from 'react'
import { Menu, Icon } from 'antd'

// config 
import { MenuConfig } from '../../config'

// style
import './index.less'

// const 
const SubMenu = Menu.SubMenu 
const MenuItem = Menu.Item

class NavLeftComponent extends Component{
	render(){
		return (
			<div >
				<div className="logo">
					<img src="/assets/logo-ant.svg" alt="logo-ant"/>
					<h1>Imooc MS</h1>
				</div>
				<Menu theme="dark">
					<SubMenu key="sub1" 
						title={
							<span><Icon type="mail"/><span>Navigation One</span></span>
						}
					>
						<MenuItem key="1">Option 1</MenuItem>
						<MenuItem key="2">Option 2</MenuItem>
						<MenuItem key="3">Option 3</MenuItem>
						<MenuItem key="4">Option 4</MenuItem>
					</SubMenu>
				</Menu>
			</div>
		)
	}
}

export default NavLeftComponent