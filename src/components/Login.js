import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Header from './Header';
class Login extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Container>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
    </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
    </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Login;