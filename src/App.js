import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { Responsive } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MobileHeader from './components/MobileHeader/MobileHeader';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Goods from './components/Goods/Goods';
import Guest from './components/Guest/Guest';
import Member from './components/Member/Member';

class App extends React.Component {
	render() {
		return (
			<div>
				<Responsive minWidth={769}>
					<Header />
					<Switch>
						<Route exact path="/SigongGallery" component={Home} />
						<Route path={['/SigongGallery/2018/fall', '/SigongGallery/2019/spring', '/SigongGallery/2019/fall']} component={({ location }) => <Gallery path={location} />} />
						<Route path="/SigongGallery/guest" component={Guest}/>
						<Route path="/SigongGallery/goods" component={Goods}/>	
						<Route path="/SigongGallery/member" component={Member}/>
					</Switch>
				</Responsive>
				<Responsive minWidth={1} maxWidth={768}>
					<Switch>
						<Route exact path="/SigongGallery" component={({ location }) => <MobileHeader path={location} />}/>
						<Route path={['/SigongGallery/2018/fall', '/SigongGallery/2019/spring', '/SigongGallery/2019/fall']} component={({ location }) => <MobileHeader path={location} />}/>
						<Route path="/SigongGallery/guest" component={({ location }) => <MobileHeader path={location} />}/>
						<Route path="/SigongGallery/goods" component={({ location }) => <MobileHeader path={location} />}/>	
						<Route path="/SigongGallery/member" component={({ location }) => <MobileHeader path={location} />}/>
					</Switch>
				</Responsive>
			</div>
		);
	}
}

export default App;