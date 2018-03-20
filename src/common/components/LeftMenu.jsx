import React, {Component} from 'react';

export default class LeftMenu extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const LeftMenuStyle = {
			width: 128,
			height: '100%',
			top: 0,
			left: 0,
			position: 'fixed',
			borderRight: '2px solid #888',
			background: 'lightgreen',
			zIndex: 9
		}

		return (
			<div style={LeftMenuStyle}>
				666
			</div>
		)
	}
}