import React from 'react';
import { Col, Row,Button, FormGroup, FormControl, ControlLabel, InputGroup } from "react-bootstrap";
import { connect } from 'react-redux';
import { hashHistory} from 'react-router';
import { formatDate } from '../actions/index';


import API from "../Api"



class AddAdvertisement extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            type: "",
            date_of_announcement: formatDate(new Date()),
            description:"",
            price: ""    
        };
    }

    handleClick(){
        // console.log(this.state);
            API.post('advertisement', this.state)
            .then(response =>{
            console.log(response.data.advertisement_id);
            if(response.status === 201){
                hashHistory.push({pathname: "addProperty", state: {id : response.data.advertisement_id} })
            }
            // hashHistory.push('about');
            
          })
          .catch(error => {
            console.log(error);
            alert(error);       
        })
    }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
  

    render() {
        console.log();
        return (
            
            <main className="row">
                <h1>Advertisement 1/2</h1>
                <form >
                    <Row>
                        <Col md={6} xs={10}>
                            <FormGroup controlId="type" bsSize="xsmall">
                            <ControlLabel>Type</ControlLabel>
                                <FormControl componentClass="select"
                                onChange={this.handleChange}
                                >
                                    <option ></option>
                                    <option value="sale" >Sale</option>
                                    <option value="rent">Rent</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} xs={10}>
                            <FormGroup controlId="price" >
                            <ControlLabel>Price</ControlLabel>
                            <InputGroup>
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <FormControl type="number" step="0.01" 
                            onChange={this.handleChange}
                            />
                            </InputGroup>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} xs={10}>
                            <FormGroup controlId="description">
                            <ControlLabel>Description</ControlLabel>
                            <FormControl componentClass="textarea" placeholder="description" 
                            onChange={this.handleChange}
                            />
                    </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} xs={10}>
                        <Button className="col-md-12"
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

  export default connect(mapStateToProps )(AddAdvertisement);