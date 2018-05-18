import React from 'react';
import axios from 'axios';
import { Button, FormGroup, FormControl, ControlLabel, InputGroup } from "react-bootstrap";
import { connect } from 'react-redux';

const  url = "http://81.2.246.98:8000/api/advertisement";


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
          axios.post(url, this.state).then(response =>{
            console.log(response);
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
            <h1>Dodawanie ogłoszenia</h1>
              <form >
              <div className="col-md-8">
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
                <FormGroup controlId="description">
                    <ControlLabel>Opis</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Opis" 
                    onChange={this.handleChange}
                    />
                </FormGroup>
                </div>
                <FormGroup controlId="price" className="col-md-4">
                    <ControlLabel>Cena</ControlLabel>
                    <InputGroup>
                    <InputGroup.Addon>PLN</InputGroup.Addon>
                    <FormControl type="number" step="0.01" 
                    onChange={this.handleChange}
                    />
                    </InputGroup>
                </FormGroup>
                
              </form>    
              <Button className="btn col-md-4"
                onClick={this.handleClick.bind(this)}
                >OK</Button>
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