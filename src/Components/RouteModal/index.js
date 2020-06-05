import React, { Component } from "react";
import { Modal, Button } from "react-materialize";
// import RouteForm from "../RouteForm";
// import RouteMap from "../RouteMap";

const modalTrigger= <Button>New Route Map</Button>

class RouteForm extends Component {
    constructor(){
        super()
        this.handleModalSubmit= this.handleModalSubmit.bind(this);
    }
    handleModalSubmit(){
        this.props.updateModal({
            modalPage: false 
        })
      }
    render() {
      return (
      <div>
      <h1>Form</h1>
      <Button onClick={this.handleModalSubmit}>Render Map</Button>
      </div>
      )
    }
  }


  class RouteMap extends Component {
    render() {
      return (
      <div>
      <h1>Map</h1>
      </div>
      )
    }
  }

  

class RouteModal extends Component {
  state = {
      modalPage: true
  }
  updateModal= (change) =>{
    this.setState(change)
  }
  render() {
    return (
    <Modal trigger={modalTrigger}>
        {this.state.modalPage ? (
            <RouteForm 
                updateModal={this.updateModal} 
                modalstate={this.state.modalPage}
            />) 
            : ( 
            <RouteMap 
                updateModal={this.updateModal} 
                modalstate={this.state.modalPage}
            />)}
    </Modal>
    )
  }
}
export default RouteModal



