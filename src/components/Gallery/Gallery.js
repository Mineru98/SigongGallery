import React from 'react';
// import {
// 	Menu,
// 	Responsive,
// 	Sidebar,
// 	Icon
// } from 'semantic-ui-react';
import './Gallery.css';

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