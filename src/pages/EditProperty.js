import React from 'react';
import { Col, Row, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from 'react-redux';
import { hashHistory} from 'react-router';
import { formatDate } from '../actions/index';

import API from "../Api"


class EditProperty extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            property_type: "",
            description: "",
            date_of_registration: "",
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
          disabled:true,
          empty: false
        };
    }
    

  

    componentDidMount(){
        window.addEventListener('load', this.getProperty());
    }

    updateProperty(){
        if(this.state.empty){
            API.post(`advertisement/${this.props.location.query.advert_id}/property`, this.state)
            .then(response =>{
            console.log(response);
            this.setState({disabled: true});
          })
          .catch(error => {
            console.log(error);
            alert(error);       
        })
        }else{
            API.patch(`advertisement/${this.props.location.query.advert_id}/property`, this.state)
            .then(response =>{
            console.log(response);
            this.setState({disabled: true});
          })
          .catch(error => {
            console.log(error);
            alert(error);       
        })
        }
          
    }

    getProperty(){
        API.get(`advertisement/${this.props.location.query.advert_id}/property`)
        .then(response =>{
            const property = response.data.data;
            this.setState({
                property_type: property.property_type,
                description: property.description,
                date_of_registration: property.date_of_registration,
                property_area: property.property_area,
                date_of_construction: property.date_of_construction,
                number_of_floors: property.number_of_floors,
                number_of_rooms: property.number_of_rooms,
                floor: property.floor,
                balcony: property.balcony,
                garage: property.garage,
                land_area: property.land_area,
                country: property.country,
                city: property.city,
                street: property.street,
                street_number:property.street_number,
                postal_code: property.postal_code,

            });
            console.log(this.state.property);

        })
        .catch(error => {
            this.setState({empty: true})
            console.log(error);
            alert(error.response);       
        })
    }
    isDisabled(){
         this.state.disabled == true ? this.setState({disabled: false }): this.setState({disabled: true });
         console.log(this.state.disabled);
    }
    
      handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
      }
      back(){
        hashHistory.push({pathname: "myAdvertisements"});
      }
  

    render() {
        // console.log(this.props.location);
        return (
            <main className="row">
            <h1>EditProperty</h1>

              <form >
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="property_type" bsSize="xsmall">
                        <ControlLabel>Type</ControlLabel>
                            <FormControl componentClass="select" 
                            onChange={this.handleChange}
                            disabled={this.state.disabled}
                            value={this.state.property_type}
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
                        <FormControl type="date"
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.date_of_registration}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="property_area">
                        <ControlLabel>Property area</ControlLabel>
                        <FormControl type="number" 
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.property_area}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="date_of_construction">
                        <ControlLabel>Date of construction</ControlLabel>
                        <FormControl type="date"
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.date_of_construction}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="number_of_floors">
                        <ControlLabel>Number of floors</ControlLabel>
                        <FormControl type="number" 
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.number_of_floors}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                        <Col md={4} xs={6}>
                        <FormGroup controlId="number_of_rooms">
                        <ControlLabel>Number of rooms</ControlLabel>
                        <FormControl type="number" 
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.number_of_rooms}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="floor">
                        <ControlLabel>Floor</ControlLabel>
                        <FormControl type="number"
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.floor}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="balcony">
                        <ControlLabel>Balcony</ControlLabel>
                        <FormControl type="number"
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.balcony}
                        />
                        </FormGroup>
                    </Col>
                        <Col md={4} xs={6}>
                        <FormGroup controlId="garage">
                        <ControlLabel>Garage</ControlLabel>
                        <FormControl type="number"
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.garage}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="land_area">
                        <ControlLabel>Land area</ControlLabel>
                        <FormControl type="number" 
                        disabled={this.state.disabled}
                        value={this.state.land_area}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="country">
                        <ControlLabel>Country</ControlLabel>
                        <FormControl type="text"  
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.country}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="city">
                        <ControlLabel>City</ControlLabel>
                        <FormControl type="text"
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.city}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="street">
                        <ControlLabel>Street</ControlLabel>
                        <FormControl type="text"
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.street}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="street_number">
                        <ControlLabel>Street number</ControlLabel>
                        <FormControl type="text" 
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.street_number}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="postal_code">
                        <ControlLabel>Postal code</ControlLabel>
                        <FormControl type="text" 
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.postal_code}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} xs={12}>
                        <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl type="text" 
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.description}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                {this.state.disabled == false ?
                    <Col md={3} xs={10}>
                    <Button className="col-md-12"
                    onClick={() => this.updateProperty()}
                    >Submit</Button>
                    </Col>
                    :
                    <Col md={3} xs={10}>
                    <Button className="col-md-12"
                    onClick={() => this.isDisabled()}
                    >edit</Button>
                    </Col>
                }
                <Col md={3} xs={10}>
                    <Button className="col-md-12"
                    onClick={() => this.back()}
                    >Back</Button>
                    </Col>
                </Row>
              </form>    
             
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
      auth: state
    };
  }

  export default connect(mapStateToProps )(EditProperty);