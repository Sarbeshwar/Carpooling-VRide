import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { withRouter } from "react-router";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    render() {
        return (
            <div>
                <Container>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.handleInput} required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleInput} required />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={this.sendVals}>
                            Login
                        </Button>
                    </Form>
                </Container>
            </div>
        );
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    sendVals = () => {
        if (this.checkCredentials()) {

            let name = 'admin@admin.com';
            let pass = 'admin';

            console.log(this.state);

            if (name == this.state.email && pass == this.state.password) {
                console.log("Logged in as admin");
                sessionStorage.setItem('loginStatus', 'admin');
                sessionStorage.setItem('username', 'admin');
                this.props.history.push('/');
            }
            else {
                this.loginUser();
            }

        } else {
            alert('Please fill all the required fields correctly');
        }
    }

    loginUser = async () => {

        const url = 'http://localhost:1003/api/employees';

        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                'name': '',
                'email_address': this.state.email,
                'password': this.state.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        await res.json()
            .then(() => {
                alert("Logged in successfully!");
                sessionStorage.setItem('loginStatus', 'user');
                sessionStorage.setItem('username', 'Pankaj');
                this.props.history.push('/');
            })
            .catch(() => alert("Invalid credentials"))

    }

    checkCredentials = () => {
        let { email, password } = this.state;

        let flag = true;

        if (email.length === 0 || password.length === 0) {
            return false;
        }
        // return flag;
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

}

export default withRouter(Login);