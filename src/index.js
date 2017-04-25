import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import './css/style.css';
import App from './components/App';
import ShipDetail from './components/ShipDetail';
import NotFound from './components/NotFound';

// Git pages
const repo = `/${window.location.pathname.split('/')[1]}`;
const Root = () => {
	return (
		<BrowserRouter basename={repo}>
			<div>
				<Match exactly pattern="/" ignoreScrollBehavior component={App} />
				<Match exactly pattern="/ship/:shipId" ignoreScrollBehavior component={ShipDetail} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(<Root />, document.querySelector('#main'));


