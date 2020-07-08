import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmbeddedVideo from './components/EmbeddedVideo';
import Login from './components/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Share from './components/Share';
import Footer from './components/Footer';
import Team from './components/Team';
import Share_Vehicle_Table from './components/Share_Vehicle_Table';


class App extends Component {

	constructor() {
		super();
		this.state = {
			shareObj: null
		}
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<Route exact path="/Login">
						<Header />
						<Login />
						
					</Route>
					<Route exact path="/">
						<Header />
						<EmbeddedVideo />
					</Route>
					<Route exact path="/Signup">
						<Header />
						<SignUp />
					</Route>
					<Route exact path="/Share">
						<Header />
						<Share />
					</Route>
					<Route exact path="/Team">
						<Header />
						<Team />
					</Route>
					<Route exact path="/Share_Vehicle_Database">
						<Header />
						<Share_Vehicle_Table />
					</Route>
					
				</BrowserRouter>
				<Footer></Footer>
			</div>
		);
	}

}

export default App;
