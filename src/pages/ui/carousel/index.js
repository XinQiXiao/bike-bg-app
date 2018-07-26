/**
 * create at 07/26/18
 */
import React, { Component } from 'react'
import { Card, Carousel} from 'antd'

// style
import '../ui.less'

class CarouselPage extends Component{

	render(){
		
		return (
			<div >
				<Card title="文字轮播" className="card-wrap">
					<Carousel autoplay effect="fade">
						<div><h3>Antd carousel banner - React</h3></div>
						<div><h3>Antd carousel banner - Vue</h3></div>
						<div><h3>Antd carousel banner - Augular</h3></div>
					</Carousel>
				</Card>
				<Card title="图片背景轮播" className="slider-wrap">
					<Carousel autoplay effect="fade">
						<div><img src='/carousel/carousel-1.jpg' alt='carousel-1'/></div>
						<div><img src='/carousel/carousel-2.jpg' alt='carousel-2'/></div>
						<div><img src='/carousel/carousel-3.jpg' alt='carousel-3'/></div>
					</Carousel>
				</Card>
			</div>
		)
	}
}

export default CarouselPage