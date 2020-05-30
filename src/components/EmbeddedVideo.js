import React, { Component } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
class EmbeddedVideo extends Component {
    render() {
        return (
            <Container>
                <center>
                    <Card>
                        <Card.Body><h3>VRide Is A Simple Carpooling Application Developed Inorder To Take A
                Step Towards A Better Environment</h3></Card.Body>
                    </Card></center>
                <center><iframe width="600" height="515" src="https://www.youtube.com/embed/pGzIicX3NOQ"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe></center>
                <center><Button variant="primary">Access The Databse</Button></center>
            </Container>
        );
    }
}

export default EmbeddedVideo;