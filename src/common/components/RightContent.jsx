import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom'

export default class RightContent extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const RightContentStyle = {
			width: '100%',
			height: '100%',
		}
		const MessageContentStyle = {
			width: '100%',
			height: '100%',
			background: '#DDD'
		}
		const SendContentStyle = {
			width: '100%',
			height: 108,
			right: 0,
			bottom: 0,
			position: 'fixed',
			background: '#555',
			borderTop: '2px solid #888',
		}

		return (
			<div style={RightContentStyle}>
				<div style={MessageContentStyle}></div>
				<div style={SendContentStyle}></div>
			</div>
		);
	}
}