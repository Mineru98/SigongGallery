import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Home.css';

const images = [
	{
		original: '/img/img_2019_spring_1.jpg',
		thumbnail: '/img/img_2019_spring_1.jpg'
	},
	{
		original: '/img/img_2019_spring_2.jpg',
		thumbnail: '/img/img_2019_spring_2.jpg'
	},
	{
		original: '/img/img_2019_spring_3.jpg',
		thumbnail: '/img/img_2019_spring_3.jpg'
	},
	{
		original: '/img/img_2019_spring_4.jpg',
		thumbnail: '/img/img_2019_spring_4.jpg'
	},
	{
		original: '/img/img_2019_spring_5.JPG',
		thumbnail: '/img/img_2019_spring_5.JPG'
	},
	{
		original: '/img/img_2019_spring_6.JPG',
		thumbnail: '/img/img_2019_spring_6.JPG'
	},
	// {
	// 	original: '/img/img_2019_spring_7.jpg',
	// 	thumbnail: '/img/img_2019_spring_7.jpg'
	// },
	// {
	// 	original: '/img/img_2019_spring_8.jpeg',
	// 	originalClass: 'vertical',
	// 	thumbnail: '/img/img_2019_spring_8.jpeg'
	// },
	// {
	// 	original: '/img/img_2019_spring_10.jpg',
	// 	originalClass: 'vertical',
	// 	thumbnail: '/img/img_2019_spring_10.jpg'
	// },
	// {
	// 	original: '/img/img_2019_spring_11.jpg',
	// 	thumbnail: '/img/img_2019_spring_11.jpg'
	// },
	// {
	// 	original: '/img/img_2019_spring_12.jpg',
	// 	thumbnail: '/img/img_2019_spring_12.jpg'
	// },
	// {
	// 	original: '/img/img_2019_spring_14.jpg',
	// 	thumbnail: '/img/img_2019_spring_14.jpg'
	// },
	// {
	// 	original: '/img/img_2019_spring_15.jpg',
	// 	originalClass: 'vertical',
	// 	thumbnail: '/img/img_2019_spring_15.jpg'
	// },
	// {
	// 	original: '/img/img_2019_spring_16.jpg',
	// 	thumbnail: '/img/img_2019_spring_16.jpg'
	// },
	// {
	// 	original: '/img/img_2019_spring_17.jpg',
	// 	thumbnail: '/img/img_2019_spring_17.jpg'
	// },
	// {
	// 	original: '/img/img_2019_spring_18.jpg',
	// 	thumbnail: '/img/img_2019_spring_18.jpg'
	// },
	// {
	// 	original: '/img/img_2019_spring_19.jpg',
	// 	originalClass: 'vertical',
	// 	thumbnail: '/img/img_2019_spring_19.jpg'
	// }
];

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { width: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
		return (
			<div style={{ width }} className="home_container">
				<div id="box">
					<ImageGallery
						items={images}
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

export default Home;