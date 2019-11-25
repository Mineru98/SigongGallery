import React from 'react';
import {
	Image,
	Grid,
} from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Gallery.css';

const _2018_fall_images = [
	{
		original: '/SigongGallery/img/img_2019_spring_1.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_1.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_2.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_2.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_3.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_3.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_4.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_4.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_5.JPG',
		thumbnail: '/SigongGallery/img/img_2019_spring_5.JPG'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_6.JPG',
		thumbnail: '/SigongGallery/img/img_2019_spring_6.JPG'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_7.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_7.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_8.jpeg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_spring_8.jpeg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_10.jpg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_spring_10.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_1.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_1.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_2.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_2.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_3.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_3.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_4.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_4.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_5.JPG',
		thumbnail: '/SigongGallery/img/img_2019_spring_5.JPG'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_6.JPG',
		thumbnail: '/SigongGallery/img/img_2019_spring_6.JPG'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_7.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_7.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_8.jpeg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_spring_8.jpeg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_10.jpg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_spring_10.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_1.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_1.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_2.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_2.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_3.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_3.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_4.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_4.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_5.JPG',
		thumbnail: '/SigongGallery/img/img_2019_spring_5.JPG'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_6.JPG',
		thumbnail: '/SigongGallery/img/img_2019_spring_6.JPG'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_7.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_7.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_8.jpeg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_spring_8.jpeg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_10.jpg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_spring_10.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_1.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_1.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_2.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_2.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_3.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_3.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_4.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_4.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_5.JPG',
		thumbnail: '/SigongGallery/img/img_2019_spring_5.JPG'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_6.JPG',
		thumbnail: '/SigongGallery/img/img_2019_spring_6.JPG'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_7.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_7.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_38.jpeg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_spring_38.jpeg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_39.jpeg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_spring_39.jpeg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_40.jpg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_spring_40.jpg'
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

export default Gallery2018Fall;