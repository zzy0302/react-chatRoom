import React, {Component} from 'react';

import UseList from './UseList.jsx'

export default class LeftMenu extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const LeftMenuStyle = {
			width: 138,
			height: '100%',
			top: 0,
			left: 0,
			padding: '3px 0 12px',
			position: 'fixed',
			boxSizing: 'border-box',
			borderRight: '2px solid #888',
			background: '#FFF',
			zIndex: 9,
			overflow: 'auto'
		}

		return (
			<div style={LeftMenuStyle}>
				<UseList/>
				<UseList/>
				<UseList/>
				<UseList/>
				<UseList/>
				<UseList/>
				<UseList/>
			</div>
		)
	}
}