import React from 'react';
// import {
// 	Header
// } from 'semantic-ui-react';
import Disqus from 'disqus-react';
import './Guest.css';

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
		const disqusShortname = 'https-mineru98-github-io-sigonggallery'; //found in your Disqus.com dashboard
		const disqusConfig = {
			url: 'https://mineru98.github.io/SigonGallery', //this.props.pageUrl
			identifier: 'article-id', //this.props.uniqueId
			title: 'Title of Your Article' //this.props.title
		};
		return(
			<div style={{ width }} className="guest_container">
				<div className="guest_header"><span>방명록_ </span><span className="guest_small"> 낙서장</span></div>
				<Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
			</div>
		);
	}
}

export default Guest;