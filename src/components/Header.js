import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from "./car.png";
import './Header.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar} from 'react-bootstrap';
class Header extends Component {

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
                            <Nav.Link>Available Database</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;