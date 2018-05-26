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
          property: {
            property_type: "",
            description: "",
            date_of_registration: new Date().toLocaleDateString().toString(),
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
            postal_code: ""
          },
          disabled:true
        };
    }
    

  

    componentDidMount(){
        window.addEventListener('load', this.getProperty());
    }

    updateProperty(){
            this.setState({
                date_of_registration: formatDate(this.state.date_of_registration),
                date_of_construction: formatDate(this.state.date_of_construction)
            })
            console.log(this.state);
            const formData = new FormData()
            if(this.state.image != null){
               formData.append('image', this.state.image, this.state.image.name)
            }
           
        


            API.patch(`advertisement/${this.props.location.query.advert_id}/property`, this.state.property)
            .then(response =>{
            console.log(response);
            this.setState({disabled: true});
          })
          .catch(error => {
            console.log(error);
            alert(error);       
        })
    }
    getProperty(){
        API.get(`advertisement/${this.props.location.query.advert_id}/property`)
        .then(response =>{
            const property = response.data.data;
            this.setState({property});
            console.log(this.state.property);

        })
        .catch(error => {
            console.log(error);
            alert(error.response);       
        })
    }
    isDisabled(){
         this.state.disabled == true ? this.setState({disabled: false }): this.setState({disabled: true });
         console.log(this.state.disabled);
    }
    
      handleChange = event => {
        this.setState({property:{
            [event.target.id]: event.target.value
        }  
        });
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
                        <ControlLabel>Typ nieruchomości</ControlLabel>
                            <FormControl componentClass="select" 
                            onChange={this.handleChange}
                            disabled={this.state.disabled}
                            value={this.state.property.property_type}
                            >
                                <option ></option>
                                <option value="mieszkanie" >Mieszkanie</option>
                                <option value="dom">Dom</option>
                                <option value="lokal">Lokal</option>
                                <option value="dzialka">Działka</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                    
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="date_of_registration">
                        <ControlLabel>date_of_registration</ControlLabel>
                        <FormControl type="date"
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.property.date_of_registration}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="property_area">
                        <ControlLabel>property_area</ControlLabel>
                        <FormControl type="number" 
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.property.property_area}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="date_of_construction">
                        <ControlLabel>date_of_construction</ControlLabel>
                        <FormControl type="date"
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.property.date_of_construction}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="number_of_floors">
                        <ControlLabel>number_of_floors</ControlLabel>
                        <FormControl type="number" 
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.property.number_of_floors}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                        <Col md={4} xs={6}>
                        <FormGroup controlId="number_of_rooms">
                        <ControlLabel>number_of_rooms</ControlLabel>
                        <FormControl type="number" 
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.property.number_of_rooms}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="floor">
                        <ControlLabel>number_of_rooms</ControlLabel>
                        <FormControl type="number"
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.property.floor}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="balcony">
                        <ControlLabel>balcony</ControlLabel>
                        <FormControl type="number"
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.property.balcony}
                        />
                        </FormGroup>
                    </Col>
                        <Col md={4} xs={6}>
                        <FormGroup controlId="garage">
                        <ControlLabel>number_of_rooms</ControlLabel>
                        <FormControl type="number"
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.property.garage}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="land_area">
                        <ControlLabel>number_of_rooms</ControlLabel>
                        <FormControl type="number" 
                        disabled={this.state.disabled}
                        value={this.state.property.land_area}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="country">
                        <ControlLabel>Panstwo</ControlLabel>
                        <FormControl type="text"  
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.property.country}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="city">
                        <ControlLabel>Miasto</ControlLabel>
                        <FormControl type="text"
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.property.city}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="street">
                        <ControlLabel>Ulica</ControlLabel>
                        <FormControl type="text"
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.property.street}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="street_number">
                        <ControlLabel>Adres</ControlLabel>
                        <FormControl type="text" 
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.property.street_number}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="postal_code">
                        <ControlLabel>Kod pocztowy</ControlLabel>
                        <FormControl type="text" 
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.property.postal_code}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} xs={12}>
                        <FormGroup controlId="description">
                        <ControlLabel>description</ControlLabel>
                        <FormControl type="text" 
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        value={this.state.property.description}
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