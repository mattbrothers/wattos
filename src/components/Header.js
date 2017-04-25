import React from 'react';

const Header = (props) => {
	return (
		<header className="top">
			<h1 className="tagline">{props.tagline}</h1>
		</header>
	)
}

Header.propTypes = {
	tagline: React.PropTypes.string.isRequired
}

export default Header;