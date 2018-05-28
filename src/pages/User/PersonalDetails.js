import React from 'react';
import { Col, Row,Button, FormGroup, FormControl, ControlLabel, InputGroup } from "react-bootstrap";
import { connect } from 'react-redux';
import { hashHistory} from 'react-router';


import API from "../../Api"



class PersonalDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                name:"",
                surname:"",
                phone_number:"",
                country:"",
                city:"",
                street:"", 
                street_number:"",
                postal_code:"",
            empty: false,
            disabled: true
        };
    }
    updatePersonalDetails(){
        if(this.state.empty){
            console.log(this.state);
            API.post(`user/${this.props.auth.user.id}/personaldata`, this.state)
            .then(response =>{
            console.log(response);
            this.setState({disabled: true});
          })
          .catch(error => {
            console.log(error);
            alert(error);       
        })
        }else{
            console.log(`user/${this.props.auth.user.id}/personaldata`);
            console.log(this.state);
            API.patch(`user/${this.props.auth.user.id}/personaldata`, this.state)
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
    
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
            });
    }

    componentDidMount() {
        window.addEventListener('load', this.getPersonalDetails());
     }


    getPersonalDetails(){
        API.get(`user/${this.props.auth.user.id}/personaldata`)
        .then(response =>{
            console.log(response);
            const user = response.data.data;
            this.setState({
                name: user.name,
                surname:user.surname,
                phone_number:user.phone_number,
                country:user.country,
                city:user.city,
                street:user.street, 
                street_number:user.street_number,
                postal_code:user.postal_code

            })
            console.log(this.state.user);
        })
        .catch(error => {
            this.setState({empty: true});
            console.log(error.statusCode);   
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
              <form>
                <Row>
                    <Col md={6} xs={10}>
                        <FormGroup controlId="name" >
                        <InputGroup>
                        <InputGroup.Addon>Name</InputGroup.Addon>
                        <FormControl type="text"
                        value={this.state.name}
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
                        value={this.state.surname}
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
                        value={this.state.country}
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
                        value={this.state.city}
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
                        value={this.state.street}
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
                        value={this.state.street_number}
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
                        value={this.state.postal_code}
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
                        value={this.state.phone_number}
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