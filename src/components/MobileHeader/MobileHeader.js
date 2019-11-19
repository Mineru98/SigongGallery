import React from 'react';
import {
	Menu,
	Responsive,
	Sidebar,
	Icon
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import Gallery from '../Gallery/Gallery';
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
		
		console.log(props.path.pathname);
		if (props.path.pathname === '/') {
			view = <Home />;
		} else if(props.path.pathname === '/2018/fall'){
			view = <Gallery path="/2018/fall"/>;
		} else if(props.path.pathname === '/2019/spring'){
			view = <Gallery path="/2019/spring"/>;
		} else if(props.path.pathname === '/2019/fall'){
			view = <Gallery path="/2019/fall"/>;
		} else if(props.path.pathname === '/goods'){
			view = <Goods/>;
		} else if(props.path.pathname === '/guest'){
			view = <Guest/>;
		} else if(props.path.pathname === '/member'){
			view = <Member/>;
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
									<Link to="/">
										<Menu.Item as="p" onClick={this.handleHideClick}>
											<Icon name="home" />
											{'Home'}
										</Menu.Item>
									</Link>
									<Link to="/2018/fall">
										<Menu.Item as="p" onClick={this.handleHideClick}>
											<Icon name="home" />
											{'전시회'}
										</Menu.Item>
									</Link>
									<Link to="/guest">
										<Menu.Item as="p" onClick={this.handleHideClick}>
											<Icon name="home" />
											{'방명록'}
										</Menu.Item>
									</Link>
									<Link to="/goods">
										<Menu.Item as="p" onClick={this.handleHideClick}>
											<Icon name="home" />
											{'Goods엽서'}
										</Menu.Item>
									</Link>
									<Link to="/member">
										<Menu.Item as="p" onClick={this.handleHideClick}>
											<Icon name="home" />
											{'올해 집부 명단'}
										</Menu.Item>
									</Link>
								</Sidebar>
								<Sidebar.Pusher dimmed={visible}>
									{view}
								</Sidebar.Pusher>
							</Sidebar.Pushable>
						</div>
					</div>
				</Responsive>
			</div>
		);
	}
}

export default MobileHeader;