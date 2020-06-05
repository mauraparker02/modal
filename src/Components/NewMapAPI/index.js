import React, { Component } from 'react';
import { GoogleMap, LoadScript, DirectionsRenderer, DirectionsService } from '@react-google-maps/api';
import Directions from "../MapWithForm"

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

class NewMapAPI extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyCZGl5xRRXsZcx3O3C4-YyfYT9jZVP5AVw"
      >
        {/* <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        > */}
        <Directions></Directions> 
          <></>
        {/* </GoogleMap> */}
      </LoadScript>
    )
  }
}

export default NewMapAPI; 