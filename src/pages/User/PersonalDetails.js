import React from 'react';
import { Col, Row,Button, FormGroup, FormControl, ControlLabel, InputGroup } from "react-bootstrap";
import { connect } from 'react-redux';
import { hashHistory} from 'react-router';


import API from "../../Api"



class PersonalDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user : {
                name:"",
                surname:"",
                phone_number:"",
                country:"",
                city:"",
                street:"", 
                street_number:"",
                postal_code:"",
            },
           
            disabled: true
        };
    }
    updatePersonalDetails(){
        console.log(`user/${this.props.auth.user.id}/personaldata`);
        console.log(this.state);
            API.patch(`user/${this.props.auth.user.id}/personaldata`, this.state.user)
            .then(response =>{
            console.log(response);
            this.setState({disabled: true});
          })
          .catch(error => {
            console.log(error);
            alert(error);       
        })
    }
    
    handleChange = event => {
        this.setState({
            user:{[event.target.id]: event.target.value}
            });
    }

    componentDidMount() {
        window.addEventListener('load', this.getPersonalDetails());
     }


    getPersonalDetails(){
        API.get(`user/${this.props.auth.user.id}/personaldata`)
        .then(response =>{
            const user = response.data.data;
            this.setState({user})
            console.log(this.state.user);
        })
        .catch(error => {
            console.log(error);   
        })
    }
    isDisabled(){
         this.state.disabled == true ? this.setState({disabled: false }): this.setState({disabled: true });
         console.log(this.state.disabled);
    }
  

    render() {
        return (
            
            <main className="row">
            <h1>Personal Details</h1>
              <form >
                <Row>
                    <Col md={6} xs={10}>
                        <FormGroup controlId="name" >
                        <InputGroup>
                        <InputGroup.Addon>Name</InputGroup.Addon>
                        <FormControl type="text"
                        value={this.state.user.name}
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        />
                        </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={10}>
                        <FormGroup controlId="surname" >
                        <InputGroup>
                        <InputGroup.Addon>Surname</InputGroup.Addon>
                        <FormControl type="text"
                        value={this.state.user.surname}
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        editable 
                        />
                        </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={10}>
                        <FormGroup controlId="country" >
                        <InputGroup>
                        <InputGroup.Addon>Country</InputGroup.Addon>
                        
                        <FormControl type="text"
                        value={this.state.user.country}
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        />
                        </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={10}>
                        <FormGroup controlId="city" >
                        <InputGroup>
                        <InputGroup.Addon>City</InputGroup.Addon>
                        <FormControl type="text"
                        value={this.state.user.city}
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        />
                        </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={10}>
                        <FormGroup controlId="street" >
                        <InputGroup>
                        <InputGroup.Addon>Street</InputGroup.Addon>
                        <FormControl type="text"
                        value={this.state.user.street}
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        />
                        </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={10}>
                        <FormGroup controlId="street_number" >
                        <InputGroup>
                        <InputGroup.Addon>Street number</InputGroup.Addon>
                        <FormControl type="text"
                        value={this.state.user.street_number}
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        />
                        </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={10}>
                        <FormGroup controlId="postal_code" >
                        <InputGroup>
                        <InputGroup.Addon>Postal code</InputGroup.Addon>
                        <FormControl type="text"
                        value={this.state.user.postal_code}
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        />
                        </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={10}>
                        <FormGroup controlId="phone_number" >
                        <InputGroup>
                        <InputGroup.Addon>Phone number</InputGroup.Addon>
                        <FormControl type="text"
                        value={this.state.user.street_number}
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        />
                        </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                {this.state.disabled == false ?
                    <Col md={3} xs={10}>
                    <Button className="col-md-12"
                    onClick={() => this.updatePersonalDetails()}
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

  export default connect(mapStateToProps )(PersonalDetails);