import React, { Component } from "react";
import { Modal, Button } from "react-materialize";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import TestData from "../../data_test/crisp"
// import RouteForm from "../RouteForm";
// import RouteMap from "../RouteMap";
//Map Function
function Map(props) {
  console.log(props);

  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat:41.9361111, lng:-87.6444389 }}
    >
      {TestData.map((place, i) => (
        <Marker
          key={place.candidates[0].name + i}
          position={{
            lat: place.candidates[0].geometry.location.lat,
            lng: place.candidates[0].geometry.location.lng,
          }}
        />
      ))}
    </GoogleMap>
  );
}

  //  mapTrigger = (props) => {
  // return(<Button modal="close" onClick={props.handleSubmit}></Button>)
  // }

//Route Form Component
class RouteForm extends Component {
  constructor() {
    super();
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
  }
  handleModalSubmit() {
    this.props.updateModal({
      modalPage: false,
    });
  }
  render() {
    return (
      <div>
        <h1>Form</h1>
        <Button onClick={this.handleModalSubmit}>Render Map</Button>
      </div>
    );
  }
}

//Our Route Map Component
class RouteMap extends Component {
  constructor() {
    super();
    this.state= {
      lat: 41.9361111, 
      lng: -87.6444389
    }
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({
      lat: this.props.lat,
      lng: this.props.lng,
    });
  }
  handleModalSubmit() {
    this.props.updateModal({
      modalPage: true,
    });
  }
  render() {
    const WrappedMap = withScriptjs(withGoogleMap(<GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat:41.9361111, lng:-87.6444389 }}
    >
    </GoogleMap>));
    return (
      <div>
        <h1>Map</h1>
        <Button onClick={this.handleModalSubmit}>Back to form</Button>
        <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCZGl5xRRXsZcx3O3C4-YyfYT9jZVP5AVw`}
        loadingElement={<div style={{ height: `100%`, width: `100%`}} />}
        containerElement={<div style={{ height: `100%`, width: `100%` }} />}
        mapElement={<div style={{ height: `100%`, width: `100%` }} />}
        lat={41.9361111}
        lng={-87.6444389}
      />
      </div>
    );
  }
}

//This is our single modal where we are rendering the other components onto
class RouteModal extends Component {
  state = {
    modalPage: true,
  };
  updateModal = (change) => {
    this.setState(change);
  };
  render() {
    const modalTrigger = <Button>New Route Map</Button>; //onClick={this.state.modalPage = true}
    return (
      <Modal trigger={modalTrigger}>
        {this.state.modalPage ? (
          <RouteForm
            updateModal={this.updateModal}
            modalstate={this.state.modalPage}
          />
        ) : (
          <RouteMap
            updateModal={this.updateModal}
            modalstate={this.state.modalPage}
            lat= {0}
            lng= {0}
          />
        )}
      </Modal>
    );
  }
}
export default RouteModal;

// options={{
//   dismissible: true,
//   endingTop: '10%',
//   inDuration: 250,
//   onCloseEnd: null,
//   onCloseStart: null,
//   onOpenEnd: null,
//   onOpenStart: this.updateModal({this.state.modalPage: true}),
//   opacity: 0.5,
//   outDuration: 250,
//   preventScrolling: true,
//   startingTop: '4%'
// }}
