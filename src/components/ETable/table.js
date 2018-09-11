/**
 * create at 09/04/18
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import _ from 'lodash'

class TableComponent extends Component{

	_onRowClick = (record)=>{
		let {rowSelection, selectedRowKeys, updateSelectedItem} = this.props
		if(rowSelection === 'checkbox'){
			let eleIndex = _.isArray(selectedRowKeys) ? selectedRowKeys.indexOf(record.id) : -1
			eleIndex === -1 ? ( selectedRowKeys.push(record.id)) : (selectedRowKeys.splice(eleIndex, 1))
		} else if(rowSelection === 'radio'){
			selectedRowKeys = [record.id]
		}
		updateSelectedItem(selectedRowKeys)
	}

	_tableInit = ()=>{
		const { 
			columns, dataSource, pagination, rowSelection, selectedRowKeys, scroll,
		} = this.props

		const defaultSection = {
			type: 'radio',
			selectedRowKeys,
		}
		let initSection = null
		if(rowSelection === 'checkbox' || rowSelection === 'radio'){
			defaultSection.type = rowSelection
			initSection = defaultSection
		}
		return (
			<Table 
				bordered
				columns={columns}
				dataSource={dataSource}
				pagination={pagination}
				rowSelection={initSection}
				rowKey={record =>  record.id}
				scroll={scroll}
				onRow={(record)=>{
					return {
						onClick: ()=>{
							this._onRowClick(record)
						}
					}
				}}
			/>
		)
	}

	render(){
		return (
			<div>
				{this._tableInit()}
			</div>
		)
	}
}

TableComponent.propTypes = {
	columns: PropTypes.array,
	dataSource: PropTypes.array,
	pagination: PropTypes.object,
	rowSelection: PropTypes.string,
	selectedRowKeys: PropTypes.array,
	updateSelectedItem: PropTypes.func,
}

TableComponent.defaultProps = {
	columns: [],
	dataSource: [],
	pagination: {},
	rowSelection: '', // 默认不选择
	selectedRowKeys: [],
	updateSelectedItem: ()=> null,
}

export default TableComponent