import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
class UpdateProfile extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
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
                            <Form.Control name="name" type="text" placeholder="Enter new Name" onChange={this.handleInput} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicUpdateProfileEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter new Email" onChange={this.handleInput} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicUpdateProfilePassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Enter new Password" onChange={this.handleInput} required />
                        </Form.Group>
                        <Button variant="primary" type="button">
                            Update
                        </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default UpdateProfile;