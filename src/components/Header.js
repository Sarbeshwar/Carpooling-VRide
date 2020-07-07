import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from "./car.png";
import './Header.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            share_vehicle: []
        };
    }
    render() {
        return (
            <div>
                <Navbar expand="lg">
                    <Navbar.Brand><img src={image} alt="logo"></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link>CarPOOL</Nav.Link>
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/Login">Login</Link></Nav.Link>
                            <Nav.Link><Link to="/Signup">Signup</Link></Nav.Link>
                            <Nav.Link><Link to="/Share">Share Your Vehicle</Link></Nav.Link>
                            <Nav.Link><Link to="/Team">Our Team</Link></Nav.Link>
                            <Nav.Link><Link onClick={this.getData} to="/Share_Vehicle_Database">Available Database</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

    getData = async () => {
        console.log("Working");
        const url = 'http://localhost:1003/api/userdetails';
        const res = await fetch(url)
        await res.json()
            .then((shareObj) => {
                console.log(shareObj);
                this.props.setShareObject(shareObj);
                // this.setState({ 'shareObj': shareObj });
            });

    }
}

export default Header;