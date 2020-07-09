import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import {Button,Form,FormControl} from 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import image from "./car.png";
import EmbeddedVideo from '../EmbeddedVideo';
import Footer from '../Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header';
// import HeaderAdmin from './components/AdminComponents/HeaderAdmin';
import Team from '../Team';
import Share_Vehicle_Table from '../Share_Vehicle_Table';
class AdminLogin extends Component {
    render() { 
        return ( 
            <div>
                <BrowserRouter>
                <Navbar expand="lg">
                    <Navbar.Brand><img src={image} alt="logo"></img></Navbar.Brand>
                    <h3>CarPOOL</h3>
                    <h3 class="ml-6">Welcome Admin</h3>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            {/* <Nav.Link><Link to="/Login">Login</Link></Nav.Link>
                            <Nav.Link><Link to="/Signup">Signup</Link></Nav.Link> */}
                            {/* <Nav.Link><Link to="/Share">Share Your Vehicle</Link></Nav.Link> */}
                            <Nav.Link><Link to="/Team">Our Team</Link></Nav.Link>
                            <Nav.Link><Link to="/Share_Vehicle_Database">Our Customers</Link></Nav.Link>
                            <Nav.Link><Link to="/Share_Vehicle_Database">Available Database</Link></Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <EmbeddedVideo></EmbeddedVideo>
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
 
export default AdminLogin;