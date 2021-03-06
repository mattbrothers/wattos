import React from 'react';

class Ship extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			'isAvailable': ''
		};
	}

	scroll(e) {
	 	if(window.innerWidth >= 1400) {
	 		window.scrollBy(e.deltaY, 0);
	 	}
	}

	render() {
		const { index } = this.props;
		const shipName = this.props.details.name.toLowerCase().split(' ', 1);
		
		return (
			<div
				onWheel={this.scroll}
				tabIndex="0" 
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
	details: React.PropTypes.object.isRequired,
	index: React.PropTypes.string.isRequired,
	goToShip: React.PropTypes.func.isRequired
}

export default Ship;