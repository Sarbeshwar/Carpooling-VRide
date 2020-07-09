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
                                    <Button variant="outline-success" onClick={this.searchDestination}>Search</Button>
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
                                {/* <Nav.Link><Link to="/Share">Share Your Vehicle</Link></Nav.Link> */}
                                <Nav.Link><Link to="/">Update your profile</Link></Nav.Link>
                                <Nav.Link><Link to="/Team">About Us</Link></Nav.Link>
                                <Nav.Link><Link to="/Share_Vehicle_Database">Available Database</Link></Nav.Link>
                                <Form inline>
                                    <FormControl
                                        type="text"
                                        placeholder="Search for your Destination"
                                        className="mr-sm-2"
                                        name="searchTerm"
                                        onChange={this.handleSearchInput}
                                    />
                                    <Button variant="outline-success" onClick={this.searchDestination}>Search</Button>
                                </Form>
                                <p>Logged in as {sessionStorage.getItem('username')}!</p>
                                <Nav.Link onClick={this.signOut}>Signout</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
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
                                <Nav.Link><Link to="/Team">About Us</Link></Nav.Link>
                                <Nav.Link><Link to="/Share_Vehicle_Database">Available Database</Link></Nav.Link>
                                <Form inline>
                                    <FormControl
                                        type="text"
                                        placeholder="Search for your Destination"
                                        className="mr-sm-2"
                                        name="searchTerm"
                                        onChange={this.handleSearchInput}
                                    />
                                    <Button variant="outline-success" onClick={this.searchDestination}>Search</Button>
                                </Form>
                                <p>Logged in as {sessionStorage.getItem('username')}!</p>
                                <Nav.Link onClick={this.signOut}>Signout</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
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
            console.log('searchDest called');
            console.log(this.state.searchTerm);
            this.props.setSearchTerm(this.state.searchTerm);
            this.props.history.push('/searchResults');
        }
    }

}

export default withRouter(Header);