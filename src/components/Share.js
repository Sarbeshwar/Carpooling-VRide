import React, { Component } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import Map from './Map';
class Share extends Component {
    render() {
        return (
            <div>

                <Map></Map>
                <Container>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Enter Name" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicStatus">
                            <Form.Label>Car Type</Form.Label>
                            <Form.Control name="status" type="text" placeholder="Mention Rider/Provider" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicStartingTime">
                            <Form.Label>Starting Time</Form.Label>
                            <Form.Control name="starting_time" type="text" placeholder="Starting Time" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicReturnTime">
                            <Form.Label>Returning Time</Form.Label>
                            <Form.Control name="returning_time" type="text" placeholder="Returning Time" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicOrigin">
                            <Form.Label>Origin</Form.Label>
                            <Form.Control name="origin" type="text" placeholder="Origin" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicDestination">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control name="destination" type="text" placeholder="Destination" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
</Button>
                    </Form>
                </Container>
            </div >
        );
    }
}

export default Share;