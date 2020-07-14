import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import image from "./car.png";
import './Header.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Button, Nav, Navbar } from 'react-bootstrap';
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            share_vehicle: [],
            searchTerm: ''
        };
    }

    render() {
        // for displaying header when user is not logged in
        if (sessionStorage.getItem('loginStatus') === 'false') {

            return (
                <div>
                    <Navbar expand="lg">
                        <Navbar.Brand><img src={image} alt="logo"></img></Navbar.Brand>
                        <h3>CarPOOL</h3>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/Login">Login</Link></Nav.Link>
                                <Nav.Link><Link to="/Signup">Signup</Link></Nav.Link>
                                <Nav.Link><Link to="/Team">About Us</Link></Nav.Link>
                                <Form inline>
                                    <FormControl
                                        type="text"
                                        placeholder="Search for your Destination"
                                        className="mr-sm-2"
                                        name="searchTerm"
                                        onChange={this.handleSearchInput}
                                    />
                                    <Button variant="primary" onClick={this.searchDestination}>Search</Button>
                                </Form>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            );

        } else if (sessionStorage.getItem('loginStatus') === 'user') {

            return (
                <div>
                    <Navbar expand="lg">
                        <Navbar.Brand><img src={image} alt="logo"></img></Navbar.Brand>
                        <h3>CarPOOL</h3>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/UpdateProfile">Update your profile</Link></Nav.Link>
                                <Nav.Link><Link to="/Team">About Us</Link></Nav.Link>
                                <Nav.Link><Link to="/Share_Vehicle_Database">View all Rides</Link></Nav.Link>
                                <Form inline>
                                    <FormControl
                                        type="text"
                                        placeholder="Search for your Destination"
                                        className="mr-sm-2"
                                        name="searchTerm"
                                        onChange={this.handleSearchInput}
                                    />
                                    <Button variant="primary" onClick={this.searchDestination}>Search</Button>
                                </Form>
                                <Button variant="danger" onClick={this.signOut}>Sign out</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <p style={{ float: 'right', marginRight: 20, fontWeight: 900 }}>Logged in as {sessionStorage.getItem('username')}</p>
                </div>
            );

        } else if (sessionStorage.getItem('loginStatus') === 'admin') {

            return (
                <div>
                    <Navbar expand="lg">
                        <Navbar.Brand><img src={image} alt="logo"></img></Navbar.Brand>
                        <h3>CarPOOL</h3>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/Share">Add Vehicle</Link></Nav.Link>
                                <Nav.Link><Link to="/Users_Database">Users</Link></Nav.Link>
                                <Nav.Link><Link to="/Transactions">User Transactions</Link></Nav.Link>
                                <Nav.Link><Link to="/Share_Vehicle_Database">View all Rides</Link></Nav.Link>
                                <Nav.Link><Link to="/Team">About Us</Link></Nav.Link>
                                <Form inline>
                                    <FormControl
                                        type="text"
                                        placeholder="Search for your Destination"
                                        className="mr-sm-2"
                                        name="searchTerm"
                                        onChange={this.handleSearchInput}
                                    />
                                    <Button variant="primary" onClick={this.searchDestination}>Search</Button>
                                </Form>
                                <Button variant="danger" onClick={this.signOut}>Sign out</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <p style={{ float: 'right', marginRight: 20, fontWeight: 900 }}>Logged in as {sessionStorage.getItem('username')}</p>
                </div>
            );

        }

    }

    signOut = () => {
        sessionStorage.setItem('loginStatus', 'false');
        sessionStorage.setItem('username', '');
        this.props.history.push('/');
        this.forceUpdate();
    }

    handleSearchInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    searchDestination = () => {
        if (this.state.searchTerm.length > 0) {
            // console.log('searchDest called');
            // console.log(this.state.searchTerm);
            this.props.setSearchTerm(this.state.searchTerm);
            this.props.history.push('/searchResults');
        }
    }

}

export default withRouter(Header);