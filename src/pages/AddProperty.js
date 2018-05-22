import React from 'react';
import axios from 'axios';
import { Col, Row, Button, FormGroup, FormControl, ControlLabel, InputGroup } from "react-bootstrap";
import { connect } from 'react-redux';
import { hashHistory} from 'react-router';

const  urlP = "http://81.2.246.98:8000/api/advertisement/{id}/property";
const  urlI = "http://81.2.246.98:8000/api/advertisement/{id}/image";


class AddProperty extends React.Component {
    constructor(props){
        super(props);
        this.state = {
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
           postal_code: "",
           image: null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleImageChange = event =>{
        this.setState({image: event.target.files[0]})
    }

    uploadImgHandler(){
        const formData = new FormData()
        formData.append('image', this.state.image, this.state.image.name)
        axios.post(`http://81.2.246.98:8000/api/advertisement/${this.props.location.state.id}/image`, formData)
    }

   

    handleClick(){
         console.log(this.state);
         this.uploadImgHandler();
          axios.post(`http://81.2.246.98:8000/api/advertisement/${this.props.location.state.id}/property`, this.state)
          .then(response =>{
            console.log(response);
          })
          .catch(error => {   
            console.log(error);
        })
        this.uploadImgHandle();
    }
        
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
  

    render() {
        console.log(this.props.location);
        return (
            <main className="row">
            <h1>Dodawanie ogłoszenia 2/2</h1>
            <h2>ID ogłoszenia: {this.props.location.state.id}</h2>

              <form >
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="property_type" bsSize="xsmall">
                        <ControlLabel>Typ nieruchomości</ControlLabel>
                            <FormControl componentClass="select" placeholder="typ nieruchomości"
                            onChange={this.handleChange}
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
                        <FormControl type="date" placeholder="date_of_registration" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="property_area">
                        <ControlLabel>property_area</ControlLabel>
                        <FormControl type="number" placeholder="property_area" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="date_of_construction">
                        <ControlLabel>date_of_construction</ControlLabel>
                        <FormControl type="date" placeholder="date_of_construction" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="number_of_floors">
                        <ControlLabel>number_of_floors</ControlLabel>
                        <FormControl type="number" placeholder="number_of_floors" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                        <Col md={4} xs={6}>
                        <FormGroup controlId="number_of_rooms">
                        <ControlLabel>number_of_rooms</ControlLabel>
                        <FormControl type="number" placeholder="number_of_rooms" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="floor">
                        <ControlLabel>number_of_rooms</ControlLabel>
                        <FormControl type="number" placeholder="floor" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="balcony">
                        <ControlLabel>balcony</ControlLabel>
                        <FormControl type="number" placeholder="balcony" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                        <Col md={4} xs={6}>
                        <FormGroup controlId="garage">
                        <ControlLabel>number_of_rooms</ControlLabel>
                        <FormControl type="number" placeholder="garage" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="land_area">
                        <ControlLabel>number_of_rooms</ControlLabel>
                        <FormControl type="number" placeholder="land_area" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="country">
                        <ControlLabel>Panstwo</ControlLabel>
                        <FormControl type="text" placeholder="panstwo" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="city">
                        <ControlLabel>Miasto</ControlLabel>
                        <FormControl type="text" placeholder="miasto" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="street">
                        <ControlLabel>Ulica</ControlLabel>
                        <FormControl type="text" placeholder="ulica" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="street_number">
                        <ControlLabel>Adres</ControlLabel>
                        <FormControl type="text" placeholder="street_number" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="postal_code">
                        <ControlLabel>Kod pocztowy</ControlLabel>
                        <FormControl type="text" placeholder="kod pocztowy" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} xs={12}>
                        <FormGroup controlId="description">
                        <ControlLabel>description</ControlLabel>
                        <FormControl type="text" placeholder="description" 
                        onChange={this.handleChange}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="image">
                        <ControlLabel>Zdjęcie</ControlLabel>
                        <FormControl type="file" placeholder="image" 
                        onChange={this.handleImageChange}
                        />
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