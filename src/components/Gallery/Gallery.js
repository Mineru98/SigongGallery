import React from 'react';
// import {
// 	Menu,
// 	Responsive,
// 	Sidebar,
// 	Icon,
//  Grid,
// } from 'semantic-ui-react';
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
		original: '/SigongGallery/img/img_2019_spring_11.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_11.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_12.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_12.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_14.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_14.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_15.jpg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_spring_15.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_16.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_16.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_17.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_17.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_18.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_18.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_19.jpg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_spring_19.jpg'
	}
];

const _2019_spring_images = [
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
		original: '/SigongGallery/img/img_2019_spring_11.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_11.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_12.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_12.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_14.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_14.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_15.jpg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_spring_15.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_16.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_16.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_17.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_17.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_18.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_18.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_19.jpg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_spring_19.jpg'
	}
];

const _2019_fall_images = [
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
		original: '/SigongGallery/img/img_2019_spring_11.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_11.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_12.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_12.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_14.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_14.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_15.jpg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_spring_15.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_16.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_16.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_17.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_17.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_18.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_18.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_19.jpg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_spring_19.jpg'
	}
];

let view = null;

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = { width: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		if(props.path.pathname === "/SigongGallery/2018/fall") {
			view = (<div></div>);
		} else if (props.path.pathname === "/SigongGallery/2019/spring") {
			view = (<div></div>);
		} else if (props.path.pathname === "/SigongGallery/2019/fall") {
			view = (<div></div>);
		}
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
	
	render() {
		const { width } = this.state;
		return(
			<div style={{ width }} className="gallery_container" >
				{view}
			</div>
		);
	}
}

export default Gallery;