/**
 * create at 08/17/18
 */
import React, { Component } from 'react'
import { Card, Table } from 'antd'
import _ from 'lodash'

// axios
import axiosApi from '../../axios'

// const 
import { 
	columnsConst, columnsLongConst, columnsSortColumns, columnsHandleColumns
} from './contants'

// utils
import { utils } from '../../utils'

class Page extends Component{
	state = {
		tableDataSource: [],
		sortOrder: null,
	}

	// 计算table width
	longColumnsWidth = utils.calculateTableWidth(columnsLongConst)

	componentDidMount(){
		this._requestData()
	}

	_requestData = async ()=>{
		try{
			const ret = await axiosApi.ajax({
				url: '/table/high/list',
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
		const sortColumns = _.cloneDeep(columnsSortColumns)
		const handleColumns = _.cloneDeep(columnsHandleColumns)
		const { tableDataSource } = this.state
		return (
			<div>
				<Card title="头部固定">
					<Table 
						bordered
						columns={columns}
						dataSource={tableDataSource}
						pagination={false}
						scroll={{y: 240}}
						rowKey={record =>  record.id}
					/>
				</Card>
				<Card title="左侧固定" style={{marginTop: 10}}>
					<Table 
						bordered
						columns={longColumns}
						dataSource={tableDataSource}
						pagination={false}
						scroll={{x: this.longColumnsWidth, y: 300}}
						rowKey={record =>  record.id}
					/>
				</Card>
				<Card title="表格排序" style={{marginTop: 10}}>
					<Table 
						bordered
						columns={sortColumns}
						dataSource={tableDataSource}
						pagination={false}
						rowKey={record =>  record.id}
					/>
				</Card>
				<Card title="操作按钮" style={{marginTop: 10}}>
					<Table 
						bordered
						columns={handleColumns}
						dataSource={tableDataSource}
						pagination={false}
						rowKey={record =>  record.id}
					/>
				</Card>
			</div>
		)
	}
}

export default Page