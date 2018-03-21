import React, {Component} from 'react';

export default class Send extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const SendContentStyle = {
			width: '100%',
			right: 0,
			bottom: 0,
			position: 'fixed',
			background: '#555',
			borderTop: '2px solid #888',
		}

		return (
			<div style={SendContentStyle}>
				<div style={{
					width: '100%',
					height: 32,
					background: '#8cfffb'
				}}>
					<button style={{
						width: 88,
						height: '100%',
						float: 'right'
					}}>发送</button>
				</div>
				<textarea style={{
					width: '100%',
					height: 108,
					padding: '8px 8px 8px 138px',
					resize: 'none',
					boxSizing: 'border-box'
				}}></textarea>
			</div>
		)
	}
}