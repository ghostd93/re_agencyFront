import React from 'react';
import { Col, Row,Button, FormGroup, FormControl, ControlLabel, InputGroup } from "react-bootstrap";
import { connect } from 'react-redux';
import { hashHistory} from 'react-router';


import API from "../Api"



class AddAdvertisement extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            type: "",
            date_of_announcement: new Date().toLocaleDateString().toString(),
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
            alert(error.response);       
        })
    }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
  

    render() {
        return (
            
            <main className="row">
            <h1>Dodawanie ogłoszenia 1/2</h1>
              <form >
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="type" bsSize="xsmall">
                        <ControlLabel>Typ</ControlLabel>
                            <FormControl componentClass="select" placeholder="sprzedaż wynajem"
                            onChange={this.handleChange}
                            >
                                <option ></option>
                                <option value="sprzedaz" >Sprzedaż</option>
                                <option value="wynajem">Wynajem</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="description">
                        <ControlLabel>Opis</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Opis" 
                        onChange={this.handleChange}
                        />
                </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>
                        <FormGroup controlId="price" >
                        <ControlLabel>Cena</ControlLabel>
                        <InputGroup>
                        <InputGroup.Addon>PLN</InputGroup.Addon>
                        <FormControl type="number" step="0.01" 
                        onChange={this.handleChange}
                        />
                        </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={6}>

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