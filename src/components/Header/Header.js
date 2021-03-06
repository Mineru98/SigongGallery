import React, { createRef } from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react';
import Headeroom from 'react-headroom';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
	render() {
		const contextRef = createRef();
		return (
			<div>
				<div ref={contextRef} style={{ backgroundColor: '#000000' }}>
					<Headeroom
						wrapperStyle={{ height: '50px' }}
						style={{
							WebkitTransition: 'all .5s ease-in-out',
							MozTransition: 'all .5s ease-in-out',
							OTransition: 'all .5s ease-in-out',
							Transition: 'all .5s ease-in-out',
						}}
					>
						<Menu inverted stackable id="top">
							<Container>
								<Menu.Item header id="header">
									<Link to="/SigongGallery">시공 갤러리</Link>
								</Menu.Item>

								<Menu.Item header id="header" position="right">
									<Dropdown floating labeled text="전시회">
										<Dropdown.Menu>
											<Link to="/SigongGallery/2018fall">
												<Dropdown.Item id="selector" content="2018 가을 전시회" />
											</Link>
											<Link to="/SigongGallery/2019spring">
												<Dropdown.Item id="selector" content="2019 봄 전시회" />
											</Link>
											<Link to="/SigongGallery/2019fall">
												<Dropdown.Item id="selector" content="2019 가을 전시회" />
											</Link>
										</Dropdown.Menu>
									</Dropdown>
								</Menu.Item>
								<Menu.Item header id="header">
									<Link to="/SigongGallery/guest">방명록</Link>
								</Menu.Item>
								<Menu.Item header id="header">
									<Link to="/SigongGallery/goods">Goods(엽서)</Link>
								</Menu.Item>
								<Menu.Item header id="header">
									<Link to="/SigongGallery/member">올해 집부 명단</Link>
								</Menu.Item>
							</Container>
						</Menu>
					</Headeroom>
				</div>
			</div>
		);
	}
}

export default Header;