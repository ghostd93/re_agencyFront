import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from 'react-redux';
import { signUp } from '../actions/index';


class SignUp extends React.Component{
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

      handleClick(e){
        e.preventDefault();
        console.log(this.state);
        this.props.signUp(this.state);
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
export default connect(null, { signUp })(SignUp);