import React from 'react';
import axios from 'axios';
import { Button, FormGroup, FormControl, ControlLabel, InputGroup } from "react-bootstrap";
import { connect } from 'react-redux';
import { hashHistory} from 'react-router';

const  url = "";


class AddProperty extends React.Component {
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
            hashHistory.push('about');
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
        console.log(this.props.location);
        return (
            <main className="row">
            <h1>Dodawanie ogłoszenia 2/2</h1>
            <h2>ID ogłoszenia: {this.props.location.state.id}</h2>
              <form >
              
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

  export default connect(mapStateToProps )(AddProperty);