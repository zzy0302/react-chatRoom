import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import './App.css';

import LeftMenu from './common/components/LeftMenu.jsx'
import RightContent from './common/components/RightContent.jsx'

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<LeftMenu />
				<RightContent />
			</div>
		);
	}
}