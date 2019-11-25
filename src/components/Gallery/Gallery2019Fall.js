 import React from 'react';
import {
	Image,
	Grid,
} from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Gallery.css';

// originalClass: 'vertical',

const _2019_fall_images = [
	{
		original: '/SigongGallery/img/img_2019_fall_1.jpg',
		thumbnail: '/SigongGallery/img/img_2019_fall_1.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_2.jpg',
		thumbnail: '/SigongGallery/img/img_2019_fall_2.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_3.png',
		thumbnail: '/SigongGallery/img/img_2019_fall_3.png'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_4.png',
		thumbnail: '/SigongGallery/img/img_2019_fall_4.png'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_5.jpg',
		thumbnail: '/SigongGallery/img/img_2019_fall_5.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_6.png',
		thumbnail: '/SigongGallery/img/img_2019_fall_6.png'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_7.jpg',
		thumbnail: '/SigongGallery/img/img_2019_fall_7.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_8.jpg',
		thumbnail: '/SigongGallery/img/img_2019_fall_8.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_9.jpg',
		thumbnail: '/SigongGallery/img/img_2019_fall_9.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_10.png',
		thumbnail: '/SigongGallery/img/img_2019_fall_10.png'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_11.jpg',
		thumbnail: '/SigongGallery/img/img_2019_fall_11.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_12.png',
		thumbnail: '/SigongGallery/img/img_2019_fall_12.png'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_13.png',
		thumbnail: '/SigongGallery/img/img_2019_fall_13.png'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_14.jpg',
		thumbnail: '/SigongGallery/img/img_2019_fall_14.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_15.jpg',
		thumbnail: '/SigongGallery/img/img_2019_fall_15.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_16.jpg',
		thumbnail: '/SigongGallery/img/img_2019_fall_16.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_17.jpg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_fall_17.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_18.jpg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_fall_18.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_19.jpeg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_fall_19.jpeg'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_20.jpg',
		thumbnail: '/SigongGallery/img/img_2019_fall_20.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_21.jpg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_fall_21.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_22.jpg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_fall_22.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_23.png',
		thumbnail: '/SigongGallery/img/img_2019_fall_23.png'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_24.jpg',
		thumbnail: '/SigongGallery/img/img_2019_fall_24.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_25.png',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_fall_25.png'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_26.png',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_fall_26.png'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_27.png',
		thumbnail: '/SigongGallery/img/img_2019_fall_27.png'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_28.jpg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_fall_28.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_fall_29.png',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_fall_29.png'
	}
];

class Gallery2019Fall extends React.Component {
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
						items={_2019_fall_images}
						showNav={true}
						autoPlay
						showPlayButton={true}
						showThumbnails={true}
						showIndex={false}
						showBullets={true}
						showFullscreenButton={true}
						slideDuration={450}
						slideInterval={5000}
					/>
				</div>
			</div>
		);
	}
}

export default Gallery2019Fall;