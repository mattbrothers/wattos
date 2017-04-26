import React from 'react';
import Header from './Header';
import Ship from './Ship';
import ships from '../ships';

class App extends React.Component {
	constructor() {
		super();

		this.goToShip = this.goToShip.bind(this);

		this.state = {
			ships: ships,
			cart: {}
		};
	}

	goToShip(key) {
		const shipId = key;
		this.context.router.transitionTo(`/ship/${shipId}`);
		window.scrollTo(0, 0);
		this.setState({ 'shipId': shipId} );
	}

	render() {
		const shipNode = Object.keys(this.state.ships.products).map(key => 
			<Ship
				key={key} 
				index={key} 
				details={this.state.ships.products[key]} 
				goToShip={this.goToShip}
			/>
		);

		return (
			<div>
				<Header tagline="Watto's Spaceship Emporium"/>
				<div className="ships">
					{shipNode}
				</div>

			</div>
		)
	}
}

App.propTypes = {
	params: React.PropTypes.object.isRequired
}

App.contextTypes = {
	router: React.PropTypes.object
}

export default App;