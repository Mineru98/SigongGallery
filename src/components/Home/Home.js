import React from 'react';
import { Grid, Card, Image, Responsive } from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Home.css';

const images = [
	{
		original: '/SigongGallery/img/img_2019_spring_1.jpg',
		originalClass: 'square big',
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
		original: '/SigongGallery/img/img_2019_spring_9.jpg',
		thumbnail: '/SigongGallery/img/img_2019_spring_9.jpg'
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
		originalClass: 'square big',
		thumbnail: '/SigongGallery/img/img_2019_spring_12.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_13.jpg',
		originalClass: 'vertical big',
		thumbnail: '/SigongGallery/img/img_2019_spring_13.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_14.jpg',
		originalClass: 'square big',
		thumbnail: '/SigongGallery/img/img_2019_spring_14.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_15.jpg',
		originalClass: 'vertical',
		thumbnail: '/SigongGallery/img/img_2019_spring_15.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_16.jpg',
		originalClass: 'square big',
		thumbnail: '/SigongGallery/img/img_2019_spring_16.jpg'
	},
	{
		original: '/SigongGallery/img/img_2019_spring_17.jpg',
		originalClass: 'square big',
		thumbnail: '/SigongGallery/img/img_2019_spring_17.jpg'
	}
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
						showBullets={false}
						showFullscreenButton={false}
						slideDuration={450}
						slideInterval={5000}
					/>
				</div>
				{/*PC*/}
				<Responsive minWidth={769}>
					<Grid id="home_grid">
						<Grid.Row columns={4}>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_1.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_1.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_2.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_2.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_3.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_3.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_4.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_4.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row columns={4}>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_5.JPG" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_5.JPG" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_6.JPG" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_6.JPG" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_7.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_7.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_8.jpeg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_8.jpeg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row columns={4}>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_9.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_9.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_10.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_10.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_11.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_11.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_12.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_12.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row columns={4}>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_13.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_13.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_14.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_14.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_15.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_15.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_16.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_16.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Responsive>
				{/*모바일*/}
				<Responsive minWidth={1} maxWidth={768}>
					<Grid>
						<Grid.Row>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_1.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_1.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_2.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_2.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_3.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_3.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_4.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_4.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_5.JPG" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_5.JPG" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_6.JPG" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_6.JPG" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_7.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_7.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_8.jpeg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_8.jpeg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_9.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_9.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_10.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_10.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_11.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_11.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_12.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_12.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_13.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_13.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_14.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_14.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_15.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_15.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<Card href="/SigongGallery/img/img_2019_spring_16.jpg" id="home_card">
									<Image src="/SigongGallery/img/img_2019_spring_16.jpg" wrapped ui={false} />
									<Card.Content>
										<Card.Header id="default">제목</Card.Header>
										<Card.Meta>
											<span className="date">2019/10/30</span>
										</Card.Meta>
										<Card.Description id="default">설명</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Responsive>
			</div>
		);
	}
}

export default Home;