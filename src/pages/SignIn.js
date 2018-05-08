import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';

import { connect } from 'react-redux';
import { signIn } from '../actions/index';

 class SignIn extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
    }
    handleClick(e){
        e.preventDefault();
          console.log(this.props);
         
          this.props.signIn(this.state);
    }


    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
    
      handleSubmit = event => {
        event.preventDefault();
      }

      
    


    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                    />
                    </FormGroup>
                    <Button
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                    onClick={this.handleClick.bind(this)}
                    >
                    Login
                    </Button>
                </form>
            </div>
        );
    }
}
export default connect(null, { signIn })(SignIn);