import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';

export default class SignIn extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
          hello: "",
          user: {
            token: "",
            expires_in: ""
          }
        };
    }
    handleClick(){
          console.log(this.state);
          let uri = 'http://127.0.0.1:8000/api/auth/login';
          
            axios.post(uri, this.state)
            .then((response) => {
                console.log(response);
                if(response.status === 200){
                    alert("success");
                    this.setState({user:{
                        token: response.data.access_token,
                        expires_in: response.data.expires_in
                    }})
                    console.log(this.state.user);
                }
                
            })
            .catch(error => {
                console.log("error",error.response.data.error);
                alert(error.response.data.error);
            });
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