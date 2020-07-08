import React, { Component } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import Map from './Map';

class Share extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            cartype: '',
            starttime: '',
            returntime: '',
            origin: '',
            destination: ''
        }
    }

    render() {
        return (
            <div>
                <Map></Map>
                <Container>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Enter Name" onChange={this.handleInput} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicStatus">
                            <Form.Label>Car Type</Form.Label>
                            <Form.Control name="cartype" type="text" placeholder="Mention Rider/Provider" onChange={this.handleInput} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicStartingTime">
                            <Form.Label>Starting Time</Form.Label>
                            <Form.Control name="starttime" type="text" placeholder="Starting Time" onChange={this.handleInput} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicReturnTime">
                            <Form.Label>Returning Time</Form.Label>
                            <Form.Control name="returntime" type="text" placeholder="Returning Time" onChange={this.handleInput} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicOrigin">
                            <Form.Label>Origin</Form.Label>
                            <Form.Control name="origin" type="text" placeholder="Origin" onChange={this.handleInput} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicDestination">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control name="destination" type="text" placeholder="Destination" onChange={this.handleInput} required />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={this.sendFormVals}>Submit</Button>
                    </Form>
                </Container>
            </div >
        );
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
        const url = 'http://localhost:1003/api/user';
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await res.json()
            .then(() => alert("Data saved successfully!"))
            .catch(() => alert("Some issue occurred"))

    }
}

export default Share;