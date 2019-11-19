import React from 'react';
// import {
// 	Menu,
// 	Responsive,
// 	Sidebar,
// 	Icon
// } from 'semantic-ui-react';
import './Goods.css';

let view = null;

class Goods extends React.Component {
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
		return(
			<div style={{ width }} className="goods_container">
				{view}
			</div>
		);
	}
}

export default Goods;