import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

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
    


    render() {
        return (
            <div>
                <h1>Sign Up</h1>
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
                    <FormGroup controlId="name" bsSize="large">
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={this.state.name}
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
                    >
                    Submit
                    </Button>
                </form>
            </div>
        );
    }
}