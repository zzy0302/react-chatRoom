import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
		  <Link to='/home'>Home</Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
		  <Link to='/roster'>Roster</Link>

          <Header />
		  <Main />

      </div>
    );
  }
}

const Main = () => (
	<div>
		<Switch>
			<Route path='/home' component={MainHome}/>
			<Route path='/roster' component={MainRoster}/>
		</Switch>
	</div>
)
const MainHome = () => (
	<div>
		<h2>This is a home page!</h2>
	</div>
)
const MainRoster = () => (
	<div>
		<h2>This is a roster page!</h2>
	</div>
)


const Header = () => (
	<div>
		<Switch>
			<Route path='/home' component={HeaderHome}/>
			<Route path='/roster' component={HeaderRoster}/>
		</Switch>
	</div>
)
const HeaderHome = () => (
	<div>
		<h2>This is a home Header!</h2>
	</div>
)
const HeaderRoster = () => (
	<div>
		<h2>This is a roster Header!</h2>
	</div>
)

export default App;
