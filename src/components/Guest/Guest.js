import React from 'react';
// import {
// 	Menu,
// 	Responsive,
// 	Sidebar,
// 	Icon
// } from 'semantic-ui-react';
import Disqus from 'disqus-react';
import './Guest.css';

let view = null;

class Guest extends React.Component {
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
		const disqusShortname = 'https-mineru98-github-io'; //found in your Disqus.com dashboard
		const disqusConfig = {
			url: 'https://mineru98.github.io/SigonGallery', //this.props.pageUrl
			identifier: 'article-id', //this.props.uniqueId
			title: 'Title of Your Article' //this.props.title
		};
		return(
			<div style={{ width }} className="guest_container">
				{view}
				<Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
			</div>
		);
	}
}

export default Guest;