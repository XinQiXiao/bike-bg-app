/**
 * create at 08/20/18
 */

import React, { Component } from 'react'
import { Card, Button, Table } from 'antd'

// components
import FilterForm from './FilterForm'

// axios
import axiosApi from '../../axios'

// utils
import {utils} from '../../utils'

// const 
import { cityColumns } from './constants'

class CityPage extends Component{

	// 开通城市
	_openCity = ()=>{

	}

	render(){
		return (
			<div>
				<Card>
					<FilterForm />
				</Card>
				<Card >
					<Button type="primary" onClick={this._openCity}>开通城市</Button>
				</Card>
				<Table 
					columns={cityColumns}
				/>
			</div>
		)
	}
}

export default CityPage