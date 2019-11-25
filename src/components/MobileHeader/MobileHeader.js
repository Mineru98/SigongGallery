import React from 'react';
import { Menu, Responsive, Sidebar, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import Gallery2018Fall from '../Gallery/Gallery2018Fall';
import Gallery2019Spring from '../Gallery/Gallery2019Spring';
import Gallery2019Fall from '../Gallery/Gallery2019Fall';
import Goods from '../Goods/Goods';
import Guest from '../Guest/Guest';
import Member from '../Member/Member';
import './MobileHeader.css';

let view = null;

class MobileHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
		this.handleHideClick = this.handleHideClick.bind(this);
		this.handleSidebarHide = this.handleSidebarHide.bind(this);
		this.handleShowClick = this.handleShowClick.bind(this);

		if (props.path.pathname === '/SigongGallery/') {
			view = <Home />;
		} else if (props.path.pathname === '/SigongGallery/2018fall') {
			view = <Gallery2018Fall />;
		} else if (props.path.pathname === '/SigongGallery/2019spring') {
			view = <Gallery2019Spring />;
		} else if (props.path.pathname === '/SigongGallery/2019fall') {
			view = <Gallery2019Fall />;
		} else if (props.path.pathname === '/SigongGallery/goods') {
			view = <Goods />;
		} else if (props.path.pathname === '/SigongGallery/guest') {
			view = <Guest />;
		} else if (props.path.pathname === '/SigongGallery/member') {
			view = <Member />;
		}
	}

	handleShowClick() {
		this.setState(() => ({ visible: true }));
	}

	handleHideClick() {
		this.setState(() => ({ visible: false }));
	}

	handleSidebarHide() {
		this.setState(() => ({ visible: false }));
	}

	render() {
		const { visible } = this.state;
		return (
			<div>
				{/* 모바일 화면 */}
				<Responsive minWidth={1} maxWidth={768}>
					<div>
						<div id={visible ? 'sidebar_open' : 'sidebar_close'}>
							{visible ? null : (
								<Icon id="menu-button" size="big" name="list" onClick={this.handleShowClick} />
							)}
							<Sidebar.Pushable>
								<Sidebar
									as={Menu}
									animation="overlay"
									icon="labeled"
									inverted
									onHide={this.handleSidebarHide}
									vertical
									direction="right"
									visible={visible}
									width="thin"
								>
									<Link to="/SigongGallery/">
										<Menu.Item as="p" onClick={this.handleHideClick}>
											<Icon name="home" />
											{'시공 갤러리'}
										</Menu.Item>
									</Link>
									<Link to="/SigongGallery/2018fall">
										<Menu.Item as="p" onClick={this.handleHideClick}>
											<Icon name="home" />
											{'2018 가을 전시회'}
										</Menu.Item>
									</Link>
									<Link to="/SigongGallery/2019spring">
										<Menu.Item as="p" onClick={this.handleHideClick}>
											<Icon name="home" />
											{'2019 봄 전시회'}
										</Menu.Item>
									</Link>
									<Link to="/SigongGallery/2019fall">
										<Menu.Item as="p" onClick={this.handleHideClick}>
											<Icon name="home" />
											{'2019 가을 전시회'}
										</Menu.Item>
									</Link>
									<Link to="/SigongGallery/guest">
										<Menu.Item as="p" onClick={this.handleHideClick}>
											<Icon name="home" />
											{'방명록'}
										</Menu.Item>
									</Link>
									<Link to="/SigongGallery/goods">
										<Menu.Item as="p" onClick={this.handleHideClick}>
											<Icon name="home" />
											{'Goods엽서'}
										</Menu.Item>
									</Link>
									<Link to="/SigongGallery/member">
										<Menu.Item as="p" onClick={this.handleHideClick}>
											<Icon name="home" />
											{'올해 집부 명단'}
										</Menu.Item>
									</Link>
								</Sidebar>
								<Sidebar.Pusher dimmed={visible}>{view}</Sidebar.Pusher>
							</Sidebar.Pushable>
						</div>
					</div>
				</Responsive>
			</div>
		);
	}
}

export default MobileHeader;