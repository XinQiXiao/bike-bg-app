/**
 * create at 07/26/18
 */
import React, { Component } from 'react'
import { Card, Row, Col, Modal} from 'antd'

// style
import '../ui.less'

// const 
const { Meta } = Card

class GallaryPage extends Component{
	state = {
		currentImg: '',
		modalShow: false
	}

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

	_cardClick = (cardPath)=>{
		this.setState({
			currentImg: '/gallery/'+cardPath,
			modalShow: true,
		})
	}

	render(){
		const imgs = this._initImgs()
		const imgsList = imgs.map((row) => row.map((item) => 
			<Card 
				style={{marginBottom: 10}} 
				cover={<img src={'/gallery/'+item} alt="画廊图片"/>}
				onClick={()=> this._cardClick(item)}
			>
				<Meta title="example" description={`icon path /gallery/${item}`}/>
			</Card>
		))
		return (
			<div className="card-wrap">
				<Row gutter={10}>
					<Col md={5}>
						{imgsList[0]}
					</Col>
					<Col md={5}>
						{imgsList[1]}
					</Col>
					<Col md={5}>
						{imgsList[2]}
					</Col>
					<Col md={5}>
						{imgsList[3]}
					</Col>
					<Col md={4}>
						{imgsList[4]}
					</Col>
				</Row>
				<Modal
					title="图片画廊"
					visible={this.state.modalShow}
					onCancel={()=> {this.setState({modalShow: false})}}
					footer={null}
				>
					<img src={this.state.currentImg} alt="大图"
						style={{width: '100%', height: '90%'}}
					/>
				</Modal>
			</div>
		)
	}
}

export default GallaryPage