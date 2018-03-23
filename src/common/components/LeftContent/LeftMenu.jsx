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
			padding: '60px 0 12px',
			position: 'fixed',
			boxSizing: 'border-box',
			boxShadow: '0 0 3px #555',
			background: '#FFF',
			zIndex: 9,
			overflow: 'auto'
		}

		return (
			<div style={LeftMenuStyle}>
				<div style={{
					width: 138,
					height: 50,
					top: 0,
					left: 0,
					position: 'fixed',
					boxShadow: '0 0 3px #555',
					zIndex: 9,
					background: '#FFF'
				}}>
					<img src={require('../../images/touxiang.jpg')} style={{
						width: 32,
						height: 32,
						margin: 7.5,
						float: 'left',
						borderRadius: 3,
						boxShadow: '0 0 2px #555'
					}}/>
				</div>
				<UseList/>
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