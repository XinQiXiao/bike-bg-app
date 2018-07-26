/**
 * create at 07/26/18
 */
import React, { Component } from 'react'
import { Card, Row, Col,} from 'antd'

// style
import '../ui.less'

class GallaryPage extends Component{

	_initImgs(){
		let images = []
		for(let i=0; i<5; i++){
			let imagesItem = []
			for(let j=1; j<=5; j++){
				imagesItem.push(`${i*5+j}.png`)
			}
			images.push(imagesItem)
		}
		return images
	}

	render(){
		const imgs = this._initImgs()
		const imgsList = imgs.map((row) => row.map((item) => 
			<Card>
			</Card>
		))
		return (
			<div>
				<Card title="图片画廊" className="card-wrap">
					
				</Card>
			</div>
		)
	}
}

export default GallaryPage