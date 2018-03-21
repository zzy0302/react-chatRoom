import React, {Component} from 'react';

export default class Message extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const MessageContentStyle = {
			width: '100%',
			height: '100%',
			background: '#DDD'
		}
		return (
			<div style={MessageContentStyle}></div>
		)
	}
}