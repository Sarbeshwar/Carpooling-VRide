import React, { Component } from 'react';
import {Container,Button,Form} from 'react-bootstrap';
class Map extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            latitude:null,
            longitude:null
        };
    }
    getLocation=()=>
    {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates,this.handleErrors);
          } else {
            alert("Geolocation is not supported by this browser.");
          }
    }
    getCoordinates=(position)=>
    {
        this.setState(
            {
                latitude:position.coords.latitude,
                longitude:position.coords.longitude
            }
        )
    }
    handleErrors=(error)=>
    {
            switch(error.code) {
              case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.")
                break;
              case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.")
                break;
              case error.TIMEOUT:
                alert("The request to get user location timed out.")
                break;
              case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.")
                break;
              default:
                alert("An unknown error occurred.")
            }
    }
    render() { 
        return ( 
            <center>
            <div>
                <h4>USER COORDINATES</h4>
                <Button variant="primary" type="submit" onClick={this.getLocation}>Get Coordinates</Button>
                <p>Latitude: {this.state.latitude}</p>
                <p>Longitude: {this.state.longitude}</p>
                <h6>No GeoLocation Because Of Api Billing</h6>
            </div>
            </center>
         );
    }
}
 
export default Map;