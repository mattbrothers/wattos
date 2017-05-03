import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import ships from '../ships';
// import base from '../base';

class ShipDetail extends React.Component {
	constructor(props) {
		super(props);

		// this.authHandler = this.authHandler.bind(this);

		this.state = {
			'ships': ships,
			'cart;': '',
			'isAvailable': true
		}
	}

	componentWillMount() {
		const localStorageRef = localStorage.getItem(`ship-${this.props.params.shipId}`);
		if(localStorageRef) {
			this.setState({
				'isAvailable': false
			})
		}
	}

	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem(`ship-${this.props.params.shipId}`,
			JSON.stringify(this.state.isAvailable)
		)
	}

	addToCart(key) {
		// const cart = {...this.state.cart};
		// base.authWithOAuthPopup('google', this.authHandler);
		this.setState({'isAvailable': false });
		// cart[key] = cart[key] + 1 || 1;
		// this.setState({ cart, 'isAvailable': false })
	}

	// authHandler(err, authData) {
	// 	if(err) {
	// 		console.log(err);
	// 		return
	// 	}
		
	// 	// grab the store info
	// 	const shipRef = base.database().ref(this.props.shipId)

	// 	// query once for store data
	// 	shipRef.once('value', (snapshot) => {
	// 		const data = snapshot.val() || [];

	// 		// claim as our own if no other owner
	// 		if(!data.owner) {
	// 			shipRef.set({
	// 				owner: authData.user.uid
	// 			})
	// 		}

	// 		this.setState({
	// 			uid: authData.user.uid,
	// 			owner: data.owner || authData.user.uid
	// 		})
	// 	});
	// }

	render() {
		const shipId = this.props.params.shipId;
		const ships = this.state.ships.products[shipId];
		const specs = {
			name: ships.name,
			class: ships.class,
			price: ships.price,
			manufacturer: ships.manufacturer,
			MGLT: ships.techspecs.MGLT,
			armament: ships.techspecs.armament,
			communications: ships.techspecs.communications,
			hull: ships.techspecs.hull,
			length: ships.techspecs.length,
			maxaccel: ships.techspecs.maxaccel,
			maxatmosphericspeed: ships.techspecs.maxatmosphericspeed,
			sensor: ships.techspecs.sensor,
			targeting: ships.techspecs.targeting
		}
		const shipClass = specs.name.toLowerCase().split(' ', 1);
		const isAvailable = this.state.isAvailable;
		const buttonText = isAvailable ? 'Buy Now' : 'Sold!';
		
		return (
			<CSSTransitionGroup
				component="div"
				className="ship-detail"
				transitionName="ship-detail"
				transitionAppear={true}
				transitionLeave={true}
				transitionAppearTimeout={300}
				transitionEnterTimeout={300}
				transitionLeaveTimeout={300}>

				<div className={`ship-image ${shipClass}`}>
					<Link className="back" to="/"><span className="arrow">&#x2190;</span> back</Link>
				</div>
				<div className="ship-specs">
					<h4>{specs.name}</h4>
					<div className="line"></div>

					<p>Class</p>
					<h5>{specs.class}</h5>
					<p>Manufacturer</p>
					<h5>{specs.manufacturer}</h5>
					<p>MGLT</p>
					<h5>{specs.MGLT}</h5>
					<p>Armament</p>
					<h5>{specs.armament}</h5>
					<p>Communications</p>
					<h5>{specs.communications}</h5>
					<p>Hull</p>
					<h5>{specs.hull}</h5>
					<p>Length</p>
					<h5>{specs.length}</h5>
					<p>Max Acceleration</p>
					<h5>{specs.maxaccel}</h5>
					<p>Max Atmospheric Speed</p>
					<h5>{specs.maxatmosphericspeed}</h5>
					<p>Sensor</p>
					<h5>{specs.sensor}</h5>
					<p>Targeting</p>
					<h5>{specs.targeting}</h5>
					<p>Price</p>
					<h5>{
						specs.price ? specs.price : 'Call Watto'
					}</h5>
					<button className="buy" onClick={() => this.addToCart(shipId)} disabled={!isAvailable}>{buttonText}</button> 
				</div>
			</CSSTransitionGroup>
		)
	}
}

export default ShipDetail;