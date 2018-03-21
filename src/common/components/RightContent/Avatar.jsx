import React, {Component} from 'react';

export default class Avatar extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const AvatarContentStyle = {
			width: '100%',
			height: 42,
			top: 0,
			right: 0,
			position: 'absolute',
			background: 'lightblue',
			borderBottom: '2px solid #888',
		}
		return (
			<div style={AvatarContentStyle}>
				<img src={require('../../images/touxiang.jpg')} style={{
					width: 32,
					height: 32,
					top: '50%',
					left: '50%',
					marginLeft: 28,
					position: 'absolute',
					transform: 'translate(-50%, -50%)',
					display: 'inline-block',
					background: '#555',
					borderRadius: '50%'
				}} />
				<p style={{
					marginLeft: 158,
					lineHeight: 1
				}}>6666</p>
			</div>
		)
	}
}