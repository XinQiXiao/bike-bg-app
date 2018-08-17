/**
 * create at 08/17/18
 */
import React, { Component } from 'react'
import { Card, Table } from 'antd'
import _ from 'lodash'

// axios
import axiosApi from '../../axios'

// const 
import { columnsConst, columnsLongConst, } from './contants'

class Page extends Component{
	state = {
		tableDataSource: []
	}

	longColumnsWidth = 0

	componentDidMount(){
		this._requestData()

		this.longColumnsWidth = calculateColumnsWidth(columnsLongConst)
	}

	_requestData = async ()=>{
		try{
			const ret = await axiosApi.ajax({
				url: '/table/list',
				data: {
					parmas: {
						page: 1
					},
					isShowLoading: true,
				}
			})
			this.setState({
				tableDataSource: _.isArray(ret.list) ? ret.list : [],
			})
		}catch(e){
			console.log('_requestData e=>', e)
		}
	}

	render(){
		const columns = _.cloneDeep(columnsConst)
		const longColumns = _.cloneDeep(columnsLongConst)
		const { tableDataSource } = this.state
		return (
			<div>
				<Card title="头部固定">
					<Table 
						bordered
						columns={columns}
						dataSource={tableDataSource}
						pagination={false}
						scroll={{y: 300}}
						rowKey={record =>  record.id}
					/>
				</Card>
				<Card title="左侧固定" style={{marginTop: 10}}>
					<Table 
						bordered
						columns={longColumns}
						dataSource={tableDataSource}
						pagination={false}
						scroll={{x: this.longColumnsWidth}}
						rowKey={record =>  record.id}
					/>
				</Card>
			</div>
		)
	}
}

/**
 * 计算 columns 宽度
 */
function calculateColumnsWidth(targetColumns){
	let retWidth = 0
	for (const col of targetColumns) {
		retWidth += col.width
	}
	return retWidth
}

export default Page