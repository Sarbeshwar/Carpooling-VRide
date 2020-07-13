import React, { Component } from 'react';
import image from "./payment.jpeg";
import { Container, Button, Form } from 'react-bootstrap';
import './Payment.css';
class Payment extends Component {
    render() {
        return (
            <div>
                <center>
                    <img src={image} alt="logo" id="image-payment"></img>
                    <h3>Paytm Number:-9781037767</h3>
                    <Container>
                        <Form id="paymentForm">
                            <Form.Group controlId="formBasicPayment">
                                <Form.Label>Enter Transaction ID</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Enter Transaction ID" required />
                            </Form.Group>
                            <Button variant="primary" type="button">Submit</Button>
                        </Form>
                    </Container>
                </center>
            </div>);
    }
}

export default Payment;