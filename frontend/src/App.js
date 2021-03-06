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
import UpdateProfile from './components/UpdateProfile';
import UsersTable from './components/UsersTable';
import Payment from './components/Payment';
import Transactions from './components/Transactions';
class App extends Component {

	constructor() {
		super();
		this.state = {
			shareObj: null,
			searchTerm: '',
			price: ''
		}
	}

	render() {
		if (sessionStorage.getItem('loginStatus') === null)
			sessionStorage.setItem('loginStatus', 'false');

		return (
			<div>
				<BrowserRouter>
				<Route exact path="/Payment">
						<Header setSearchTerm={this.setSearchTerm} />
						<Payment price={this.state.price} />
					</Route>
				<Route exact path ="/Transactions">
						<Header setSearchTerm={this.setSearchTerm} />
						<Transactions />
				</Route>
				<Route exact path="/Users_Database">
						<Header setSearchTerm={this.setSearchTerm} />
						<UsersTable />
					</Route>
					<Route exact path="/Login">
						<Header setSearchTerm={this.setSearchTerm} />
						<Login />
					</Route>
					<Route exact path="/">
						<Header setSearchTerm={this.setSearchTerm} />
						<EmbeddedVideo />
					</Route>
					<Route exact path="/UpdateProfile">
						<Header setSearchTerm={this.setSearchTerm} />
						<UpdateProfile></UpdateProfile>
					</Route>
					<Route exact path="/Signup">
						<Header setSearchTerm={this.setSearchTerm} />
						<SignUp></SignUp>
					</Route>
					<Route exact path="/Share">
						<Header setSearchTerm={this.setSearchTerm} />
						<Share></Share>
					</Route>
					<Route exact path="/Team">
						<Header setSearchTerm={this.setSearchTerm} />
						<Team></Team>
					</Route>
					<Route exact path="/Share_Vehicle_Database">
						<Header setSearchTerm={this.setSearchTerm} />
						<Share_Vehicle_Table searchResults={false} setPrice={this.setPrice} searchTerm={this.state.searchTerm}></Share_Vehicle_Table>
					</Route>
					<Route exact path="/searchResults">
						<Header setSearchTerm={this.setSearchTerm} />
						<Share_Vehicle_Table searchResults={true} setPrice={this.setPrice} searchTerm={this.state.searchTerm}></Share_Vehicle_Table>
					</Route>
				</BrowserRouter>
				<Footer></Footer>
			</div>
		);
	}

	setSearchTerm = (searchTerm) => {
		this.setState({
			searchTerm: searchTerm
		});
		
	}

	setPrice =(price) => {
		this.setState({price: price});
	}

}

export default App;
