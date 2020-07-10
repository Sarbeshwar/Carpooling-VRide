import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
class UpdateProfile extends Component {
    constructor() {
        super();
        this.state = {
            name: sessionStorage.getItem("username"),
            email: sessionStorage.getItem("email"),
            password: ''
        }
    }
    render() {
        return (
            <div>
                <center><h3>Update Profile</h3></center>
                <Container>
                    <Form>
                        <Form.Group controlId="formBasicUpdateProfileName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name="name"
                                type="text"
                                placeholder="Enter new Name"
                                onChange={this.handleInput}
                                defaultValue={sessionStorage.getItem("username")}
                                required />
                        </Form.Group>
                        <Form.Group controlId="formBasicUpdateProfileEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Enter new Email"
                                onChange={this.handleInput}
                                defaultValue={sessionStorage.getItem("email")}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicUpdateProfilePassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                placeholder="Enter new Password"
                                onChange={this.handleInput}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={this.sendVals}>
                            Update
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
        const url = 'http://localhost:1003/api/update';
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
                if (res.name === "null") {
                    alert("Entered password doesn't match, please enter correct password to update your info");
                } else {
                    alert("Data updated successfully!")
                }

                console.log(res);
            })
            .catch(() => alert("Some issue occurred"))

        // document.getElementById("riderDetails").reset();
    }
}

export default UpdateProfile;