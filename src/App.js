import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { Responsive } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MobileHeader from './components/MobileHeader/MobileHeader';
import Home from './components/Home/Home';
import Gallery2018Fall from './components/Gallery/Gallery2018Fall';
import Gallery2019Spring from './components/Gallery/Gallery2019Spring';
import Gallery2019Fall from './components/Gallery/Gallery2019Fall';
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
						<Route path="/SigongGallery/2018fall" component={Gallery2018Fall}/>
						<Route path="/SigongGallery/2019spring" component={Gallery2019Spring}/>
						<Route path="/SigongGallery/2019fall" component={Gallery2019Fall}/>
						<Route path="/SigongGallery/guest" component={Guest}/>
						<Route path="/SigongGallery/goods" component={Goods}/>	
						<Route path="/SigongGallery/member" component={Member}/>
					</Switch>
				</Responsive>
				<Responsive minWidth={1} maxWidth={768}>
					<Switch>
						<Route exact path="/SigongGallery" component={({ location }) => <MobileHeader path={location} />}/>
						<Route path="/SigongGallery/2018fall" component={({ location }) => <MobileHeader path={location} />}/>
						<Route path="/SigongGallery/2019spring" component={({ location }) => <MobileHeader path={location} />}/>
						<Route path="/SigongGallery/2019fall" component={({ location }) => <MobileHeader path={location} />}/>
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