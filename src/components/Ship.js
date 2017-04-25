import React from 'react';

class Ship extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			'isAvailable': ''
		};
	}

	render() {
		const { index } = this.props;
		const shipName = this.props.details.name.toLowerCase().split(' ', 1);
		
		return (
			<div
				tabIndex="1" 
				aria-label={ this.props.details.name }
				className={`ship ${ shipName }`}
				onClick={() => this.props.goToShip(index)}
				onKeyPress={() => this.props.goToShip(index)}>
				<h2 className="ship-name">
					{ this.props.details.name }
				</h2>
				<h3 className="price">{
					this.props.details.price ? this.props.details.price : 'Call Watto'
				}</h3>
				
			</div>
		)
	}
}


Ship.propTypes = {
	details: React.PropTypes.array.isRequired,
	index: React.PropTypes.string.isRequired,
	goToShip: React.PropTypes.func.isRequired
}

export default Ship;