/**
 * create at 07/25/18
 */
import React, { Component } from 'react'
import { Card, Tabs, message, Icon, } from 'antd'

// style
import '../ui.less'

// const 
const TabPane = Tabs.TabPane

class TabsPage extends Component{
	constructor(props){
		super(props)

		this.newTabIndex = 0
		const panes = [
			{
				title: 'Tab A',
				content: 'Content of Tab Pane A.',
				key: '1'
			},
			{
				title: 'Tab B',
				content: 'Content of Tab Pane B.',
				key: '2'
			},
			{
				title: 'Tab C',
				content: 'Content of Tab Pane C.',
				key: '3', 
				closeable: false,
			},
		]
		this.state = {
			activeKey: panes[0].key,
			panes,
		}
	}

	_tabChange = (key)=>{
		message.info(`_tabChange key=${key}`)
	}

	_tabEditChange = (activeKey)=>{
		this.setState({
			activeKey
		})
	}

	_onEdit = (targetKey, action)=>{
		this[action](targetKey)
	}

	add = ()=>{
		const { panes } = this.state
		const activeKey = `newTab${this.newTabIndex++}`
		panes.push({
			title: 'new Tab'+activeKey, 
			content: 'Content of new Tab',
			key: activeKey
		})
		this.setState({panes, activeKey})
	}

	remove = (targetKey)=>{
		let { activeKey, panes } = this.state
		let lastIndex
		panes.forEach((pane, i)=>{
			if(pane.key === targetKey){
				lastIndex = i - 1
			}
		})
		const newPanes = panes.filter(pane => pane.key !== targetKey)
		if(lastIndex >= 0 && activeKey === targetKey){
			activeKey = newPanes[lastIndex].key
		}
		this.setState({
			panes: newPanes,
			activeKey
		})
	}

	render(){
		const { panes, activeKey } = this.state
		return (
			<div>
				<Card title="Tabs页签" className="card-wrap">
					<Tabs defaultActiveKey="1" onChange={this._tabChange}>
						<TabPane tab="Tab 1" key="1">
							Content of Tab Pane 1.
						</TabPane>
						<TabPane tab="Tab 2" key="2">
							Content of Tab Pane 2.
						</TabPane>
						<TabPane tab="Tab 3" key="3">
							Content of Tab Pane 3.
						</TabPane>
					</Tabs>
				</Card>
				<Card title="Tabs带图的页签" className="card-wrap">
					<Tabs defaultActiveKey="1">
						<TabPane tab={<span><Icon type="apple"/>apple</span>} key="1">
							Content of Tab Pane 1.
						</TabPane>
						<TabPane tab={<span><Icon type="android"/>android</span>} key="2">
							Content of Tab Pane 2.
						</TabPane>
						<TabPane tab={<span><Icon type="windows"/>windows</span>} key="3" disabled>
							Content of Tab Pane 2.
						</TabPane>
					</Tabs>
				</Card>
				<Card title="动态Tabs页签" className="card-wrap">
					<Tabs 
						activeKey={activeKey} 
						type="editable-card"
						onChange={this._tabEditChange}
						onEdit={this._onEdit}
					>
						{
							panes.map((panel)=>{
								return (
									<TabPane key={panel.key} tab={panel.title}>
										{panel.content}
									</TabPane>
								)
							})
						}
					</Tabs>
				</Card>
			</div>
		)
	}
}

export default TabsPage