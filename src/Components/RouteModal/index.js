import React, { Component } from "react";
import { Modal, Button } from "react-materialize";
import Directions from "../NewMapAPI"
import TestData from "../../data_test/crisp"
import NewMapAPI from "../NewMapAPI";
// import RouteForm from "../RouteForm";
// import RouteMap from "../RouteMap";


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
    return (
      <div>
        <h1>Map</h1>
        <Button onClick={this.handleModalSubmit}>Back to form</Button>
       <NewMapAPI></NewMapAPI>
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
