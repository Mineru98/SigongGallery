import React from 'react';
import {
	Image,
	Grid,
} from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Gallery.css';

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

class Gallery2019Spring extends React.Component {
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
							items={_2019_spring_images}
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
					<div id="grid_box">
						<Grid>
							<Grid.Row columns={3}>
								<Grid.Column verticalAlign="middle">
									<Image src="/SigongGallery/img/img_2019_spring_1.jpg" onClick={this.handleOnClick}/>
								</Grid.Column>
								<Grid.Column verticalAlign="middle">
									<Image src="/SigongGallery/img/img_2019_spring_2.jpg" onClick={this.handleOnClick}/>
								</Grid.Column>
								<Grid.Column verticalAlign="middle">
									<Image src="/SigongGallery/img/img_2019_spring_3.jpg" onClick={this.handleOnClick}/>
								</Grid.Column>
							</Grid.Row>

							<Grid.Row columns={4}>
								<Grid.Column>
									<Image src="/SigongGallery/img/img_2019_spring_4.jpg" onClick={this.handleOnClick}/>
								</Grid.Column>
								<Grid.Column>
									<Image src="/SigongGallery/img/img_2019_spring_5.JPG" onClick={this.handleOnClick}/>
								</Grid.Column>
								<Grid.Column>
									<Image src="/SigongGallery/img/img_2019_spring_6.JPG" onClick={this.handleOnClick}/>
								</Grid.Column>
								<Grid.Column>
									<Image src="/SigongGallery/img/img_2019_spring_7.jpg" onClick={this.handleOnClick}/>
								</Grid.Column>
							</Grid.Row>

							<Grid.Row columns={4}>
								<Grid.Column>
									<Image src="/SigongGallery/img/img_2019_spring_8.jpeg" onClick={this.handleOnClick}/>
								</Grid.Column>
								<Grid.Column>
									<Image src="/SigongGallery/img/img_2019_spring_10.jpg" onClick={this.handleOnClick}/>
								</Grid.Column>
								<Grid.Column width="8">
									<Image src="/SigongGallery/img/img_2019_spring_11.jpg" onClick={this.handleOnClick}/>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</div>
			</div>
		);
	}
}

export default Gallery2019Spring;