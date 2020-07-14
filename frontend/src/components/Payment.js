import React, { Component } from 'react';
import image from "./payment.jpeg";
import { Container, Button, Form } from 'react-bootstrap';
import { withRouter } from 'react-router';
import './Payment.css';
class Payment extends Component {
    constructor() {
        super();
        this.state = {
            transactionid: '',
            name: sessionStorage.getItem("username")
        }
    }
    render() {

        return (
            <div>
                <center>
                    <img src={image} alt="logo" id="image-payment"></img>
                    <h3>Paytm Number:-9781037767</h3>
                    <Container>
                        <Form id="paymentForm">
                            <Form.Group controlId="formBasicPayment">
                            <Form.Label>Pay Rupees : {this.props.price} and Enter Transaction Id</Form.Label>
                                <Form.Control name="transactionid" type="text" placeholder="Enter Transaction ID" onChange={this.handleInput} required />
                            </Form.Group>
                            <Button variant="primary" type="button" onClick={this.sendFormVals}>Submit</Button>
                        </Form>
                    </Container>
                </center>
            </div>);
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    sendFormVals = () => {
        let isFieldEmpty = false;

        console.log(this.state);

        let keys = Object.keys(this.state);

        for (let i = 0; i < keys.length; i++) {
            if (this.state[keys[i]].length === 0) {
                isFieldEmpty = true;
                break;
            }
        }

        if (isFieldEmpty) {
            alert('Please fill all the required fields before submitting.');
        } else {
            console.log('Sending data');
            this.sendData(this.state);
        }
    }

    sendData = async () => {
        // console.log("Working");
        const url = 'http://localhost:1003/api/sendTransData';
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                    name : this.state.name,
                    transactionid: this.state.transactionid
               
            }),
            // body :JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await res.json()
            .then(() => alert("Data saved successfully! Thank You for riding with us."))
            .catch(() => alert("Some issue occurred"))

            document.getElementById("paymentForm").reset();
    }
}

export default withRouter(Payment);