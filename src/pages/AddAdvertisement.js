import React from 'react';
import axios from 'axios';
import { Button, FormGroup, FormControl, ControlLabel, InputGroup } from "react-bootstrap";
import { connect } from 'react-redux';

const  url = "http://81.2.246.98:8000/api/advertisement";


class AddAdvertisement extends React.Component {
    constructor(props){
        super(props);
        this.state = {
               
        };
    }

  

    render() {
        return (
            <main className="row">
            <h1>Dodawanie ogłoszenia</h1>
              <form >
              <div className="col-md-8">
                <FormGroup controlId="type" bsSize="xsmall">
                <ControlLabel>Typ</ControlLabel>
                    <FormControl componentClass="select" placeholder="sprzedaż wynajem">
                        <option value="sprzedaż">Sprzedaż</option>
                        <option value="wynajem">Wynajem</option>
                    </FormControl>
                </FormGroup>
                <FormGroup controlId="description">
                    <ControlLabel>Opis</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Opis" />
                </FormGroup>
                </div>
                <FormGroup controlId="price" className="col-md-4">
                    <ControlLabel>Cena</ControlLabel>
                    <InputGroup>
                    <InputGroup.Addon>PLN</InputGroup.Addon>
                    <FormControl type="number" min="0.00" />
                    </InputGroup>
                </FormGroup>
                <div className></div>
                <Button className="btn btn col-md-4"
                type="submit"
                >OK</Button>
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