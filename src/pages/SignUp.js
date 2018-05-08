import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';


export default class SesignUp extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          name: "",
          password: ""
        };
    }
    validateForm() {
        return this.state.email.length > 0 && this.state.name.length > 0 && this.state.password.length > 0;
      }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
    
      handleSubmit = event => {
        event.preventDefault();
      }

      handleClick(){
        console.log(this.state);
        let uri = 'http://127.0.0.1:8000/api/auth/register';
          axios.post(uri, this.state).then((response) => {        
        });
        }
    


    render() {
        return (
            <div>
                <h4>Sign Up</h4>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="xsmall">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    </FormGroup>
                    <FormGroup controlId="name" bsSize="xsmall">
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="xsmall">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                    />
                    </FormGroup>
                    <Button
                    block
                    bsSize="xsmall"
                    disabled={!this.validateForm()}
                    type="submit"
                    onClick={this.handleClick.bind(this)}
                    >
                    Submit
                    </Button>
                </form>
            </div>
        );
    }
}