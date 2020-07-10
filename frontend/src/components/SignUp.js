import React, { Component } from 'react';
import { Form, Container, Button } from 'react-bootstrap';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Enter Name" onChange={this.handleInput} required />
                        </Form.Group>
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
                        <Button variant="primary" type="submit" onClick={this.sendSignupDetails}>
                            Submit
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

    sendSignupDetails = () => {

        if (this.checkCredentials()) {
            console.log('Sending data');
            this.sendData();

        } else {
            alert('Please fill all the required fields before submitting.');
        }
    }

    checkCredentials = () => {
        let { name, email, password } = this.state;

        let flag = true;

        if (name.length === 0 || email.length === 0 || password.length === 0) {
            return false;
        }

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    sendData = async () => {
        // console.log("Working");
        const url = 'http://localhost:1003/api/signUp';
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                email_address: this.state.email,
                password: this.state.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await res.json()
            .then((res) => {
                console.log(res);
                alert(res.status);
                // alert("Data saved successfully!")
            })
            .catch(() => alert("Some issue occurred"))

        // document.getElementById("riderDetails").reset();
    }
}
export default SignUp;