import React from 'react';
import { Col, Row,Button, FormGroup, FormControl, ControlLabel, InputGroup } from "react-bootstrap";
import { connect } from 'react-redux';
import { hashHistory} from 'react-router';



import API from "../Api"



class EditAdvertisement extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            type: "",
            description:"",
            price: "",     
            disabled: true 
        };
    }
    componentDidMount(){
        window.addEventListener('load', this.getAdvertisements());
    }

    updateAdvertisement(){
            console.log(this.state);
            API.patch(`advertisement/${this.props.location.query.advert_id}`, this.state)
            .then(response =>{
            console.log(response);
            this.setState({disabled: true});
          })
          .catch(error => {
            console.log(error);
            alert(error);       
        })
    }
    getAdvertisements(){
        API.get(`advertisement/${this.props.location.query.advert_id}`)
        .then(response =>{
            const advertisement = response.data.data;
            this.setState({
                type: advertisement.type,
                description: advertisement.description,
                price: advertisement.price
            })
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
        this.setState({
          [event.target.id]: event.target.value
        });
      }
  

    render() {
        return (
            
            <main className="row">
            <h1> Edit Advertisement id:{this.props.location.query.advert_id}</h1>
              <form >
                <Row>
                    <Col md={6} xs={10}>
                        <FormGroup controlId="type" bsSize="xsmall">
                        <ControlLabel>Typ</ControlLabel>
                            <FormControl componentClass="select" placeholder="sprzedaż wynajem"
                            value={this.state.type}
                            onChange={this.handleChange}
                            disabled={this.state.disabled}
                            >
                                <option ></option>
                                <option value="sprzedaz" >Sprzedaż</option>
                                <option value="wynajem">Wynajem</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={10}>
                        <FormGroup controlId="price" >
                        <ControlLabel>Cena</ControlLabel>
                        <InputGroup>
                        <InputGroup.Addon>PLN</InputGroup.Addon>
                        <FormControl type="number" step="0.01" 
                        value={this.state.price}
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        />
                        </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={10}>
                        <FormGroup controlId="description">
                        <ControlLabel>Opis</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Opis"           
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
                    onClick={() => this.updateAdvertisement()}
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

  export default connect(mapStateToProps )(EditAdvertisement);