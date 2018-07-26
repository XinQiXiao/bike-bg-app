/**
 * create at 07/26/18
 */
import React, { Component } from 'react'
import { Card, Row, Col,} from 'antd'

// style
import '../ui.less'

// const 
const { Meta } = Card

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
			<Card cover={<img src={'/gallery/'+item} />}>
				<Meta title="example" description={`icon path /gallery/${item}`}/>
			</Card>
		))
		return (
			<div className="card-wrap">
				<Row >
					<Col md={5}>
						{imgsList[0]}
					</Col>
				</Row>
				<Row >
					<Col md={5}>
						{imgsList[1]}
					</Col>
				</Row>
				<Row >
					<Col md={5}>
						{imgsList[2]}
					</Col>
				</Row>
				<Row >
					<Col md={5}>
						{imgsList[3]}
					</Col>
				</Row>
				<Row >
					<Col md={5}>
						{imgsList[4]}
					</Col>
				</Row>
			</div>
		)
	}
}

export default GallaryPage