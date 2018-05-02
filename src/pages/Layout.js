import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component{

    render() {
        return (
            <div>
            <Link to="signIn" class="btn btn-danger">Sign In</Link>
            <Link to="signUp"  class="btn btn-success">Sign Up</Link>
            {this.props.children}
           

         </div>
        );
    }
}