import React from 'react';
import { Col, Row, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from 'react-redux';
import { hashHistory} from 'react-router';

import API from "../Api"


class AddProperty extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           property_type: "",
           description: "",
           date_of_registration:"",
           property_area: "",
           date_of_construction: "",
           number_of_floors: "",
           number_of_rooms: "",
           floor: "",
           balcony: "",
           garage: "",
           land_area: "",
           country: "",
           city: "",
           street: "",
           street_number:"",
           postal_code: "",
           image: []
        };
        this.handleClick = this.handleClick.bind(this);
    }
    

    handleImageChange = event =>{
        console.log(event.target.files);
        const img = event.target.files;
        const image = [];
        
        Array.from(event.target.files).forEach(file =>{
            image.push(file);
        })

        this.setState({image});
        console.log(image);
    }


    imgUpload(){
        if(this.state.image != null){  
            this.state.image.map(img =>{
                const formData = new FormData()
                console.log(img);
                formData.append('image', img, img.name) ;
                API.post(`advertisement/${this.props.location.state.id}/image`, formData)
                .then(response =>{
                    console.log(response.status);
                    if(response.status ===  200){
                        hashHistory.push({pathname: "myAdvertisements" })
                    }
                  })
                  .catch(error => {   
                    console.log(error);
                })
            })  
         }
    }

    handleClick(){
         console.log(this.state);
         API.post(`advertisement/${this.props.location.state.id}/property`, this.state)
          .then(response =>{
            console.log(response.status);
            if(response.status ===  201){
                this.imgUpload();
            }
          })
          .catch(error => {   
            console.log(error.message);
        })
      
    }
        
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
  

    render() {
        // console.log(this.props.location);
        return (
            <main className="row">
            <h1>Advertisement 2/2</h1>
            <h2>Advertisement ID : {this.props.location.state.id}</h2>

              <form >
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="property_type" bsSize="xsmall">
                        <ControlLabel>Property type</ControlLabel>
                            <FormControl componentClass="select"
                            onChange={this.handleChange}
                            >
                                <option ></option>
                                <option value="Flat" >Flat</option>
                                <option value="House">House</option>
                                <option value="Premises">Premises</option>
                                <option value="Building land">Building land</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                    
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="date_of_registration">
                        <ControlLabel>Date of registration</ControlLabel>
                        <FormControl type="date" placeholder="Date of registration" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="property_area">
                        <ControlLabel>Property area</ControlLabel>
                        <FormControl type="number" placeholder="Property area" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="date_of_construction">
                        <ControlLabel>Date of construction</ControlLabel>
                        <FormControl type="date" placeholder="Date of construction" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="number_of_floors">
                        <ControlLabel>Number of floors</ControlLabel>
                        <FormControl type="number" placeholder="Number of floors" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                        <Col md={4} xs={6}>
                        <FormGroup controlId="number_of_rooms">
                        <ControlLabel>Number of rooms</ControlLabel>
                        <FormControl type="number" placeholder="Number of rooms" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="floor">
                        <ControlLabel>Floor</ControlLabel>
                        <FormControl type="number" placeholder="Floor" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="balcony">
                        <ControlLabel>Balcony</ControlLabel>
                        <FormControl type="number" placeholder="Balcony" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                        <Col md={4} xs={6}>
                        <FormGroup controlId="garage">
                        <ControlLabel>Garage</ControlLabel>
                        <FormControl type="number" placeholder="Garage" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="land_area">
                        <ControlLabel>Land area</ControlLabel>
                        <FormControl type="number" placeholder="Land area" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="country">
                        <ControlLabel>Country</ControlLabel>
                        <FormControl type="text" placeholder="Country" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="city">
                        <ControlLabel>City</ControlLabel>
                        <FormControl type="text" placeholder="City" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="street">
                        <ControlLabel>Street</ControlLabel>
                        <FormControl type="text" placeholder="Street" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="street_number">
                        <ControlLabel>Street number</ControlLabel>
                        <FormControl type="text" placeholder="Street number" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="postal_code">
                        <ControlLabel>Postal code</ControlLabel>
                        <FormControl type="text" placeholder="Postal code" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} xs={12}>
                        <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl type="text" placeholder="Description" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="image">
                        <ControlLabel>Image</ControlLabel>
                        <FormControl type="file" placeholder="image" 
                        onChange={this.handleImageChange}
                        multiple/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                    <Button className="col-md-4"
                    onClick={this.handleClick.bind(this)}
                    >Submit</Button>
                    </Col>
                </Row>
              </form>    
                <Row>
                    <Col>{this.state.error}</Col>
                </Row>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
      auth: state
    };
  }

  export default connect(mapStateToProps )(AddProperty);