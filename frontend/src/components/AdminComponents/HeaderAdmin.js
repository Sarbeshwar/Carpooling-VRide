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
                    <h3>CarPOOL</h3>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/Share">Add Vehicle</Link></Nav.Link>
                            <Nav.Link><Link to="/Team">Our Team</Link></Nav.Link>
                            <Nav.link><Link to="">Our Customers</Link></Nav.link>
                            <Nav.Link><Link to="/Share_Vehicle_Database">Cars Available</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

}

export default HeaderAdmin;