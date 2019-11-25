import React from 'react';
// import {
// 	Image,
// 	Grid,
// } from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Gallery.css';

const _2018_fall_images = [
	{
		original: '/SigongGallery/img/img_2018_fall_1.jpg',
		originalClass: 'square',
		thumbnail: '/SigongGallery/img/img_2018_fall_1.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_2.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_2.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_3.jpg',
		originalClass: 'square',
		thumbnail: '/SigongGallery/img/img_2018_fall_3.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_4.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_4.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_5.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_5.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_6.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_6.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_7.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_7.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_8.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_8.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_9.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_9.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_10.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_10.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_11.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_11.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_12.jpg',
		originalClass: 'square',
		thumbnail: '/SigongGallery/img/img_2018_fall_12.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_13.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_13.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_14.jpg',
		originalClass: 'vertical big',
		thumbnail: '/SigongGallery/img/img_2018_fall_14.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_15.jpeg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2018_fall_15.jpeg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_16.jpg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2018_fall_16.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_17.jpg',
		originalClass: 'square',
		thumbnail: '/SigongGallery/img/img_2018_fall_17.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_18.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_18.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_19.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_19.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_20.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_20.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_21.png',
		thumbnail: '/SigongGallery/img/img_2018_fall_21.png'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_22.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_22.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_23.jpg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2018_fall_23.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_24.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_24.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_25.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_25.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_26.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_26.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_27.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_27.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_28.JPG',
		thumbnail: '/SigongGallery/img/img_2018_fall_28.JPG'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_29.jpg',
		originalClass: 'square',
		thumbnail: '/SigongGallery/img/img_2018_fall_29.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_30.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_30.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_31.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_31.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_32.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_32.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_33.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_33.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_34.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_34.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_35.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_35.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_36.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_36.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_37.jpg',
		originalClass: 'square',
		thumbnail: '/SigongGallery/img/img_2018_fall_37.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_38.png',
		originalClass: 'square',
		thumbnail: '/SigongGallery/img/img_2018_fall_38.png'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_39.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_39.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_40.jpg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2018_fall_40.jpg'
	},
	{
		original: '/SigongGallery/img/img_2018_fall_41.jpg',
		thumbnail: '/SigongGallery/img/img_2018_fall_41.jpg'
	}
];

class Gallery2018Fall extends React.Component {
	constructor(props) {
		super(props);
		this.state = { width: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	
	handleOnClick(e) {
		console.log(e.target.src);
	}

	render() {
		const { width } = this.state;
		return (
			<div style={{ width }} className="gallery_container">
				<div id="box">
					<ImageGallery
						items={_2018_fall_images}
						showNav={true}
						autoPlay
						showPlayButton={true}
						showThumbnails={true}
						showIndex={false}
						showBullets={false}
						showFullscreenButton={false}
						slideDuration={450}
						slideInterval={5000}
					/>
				</div>
			</div>
		);
	}
}

export default Gallery2018Fall;