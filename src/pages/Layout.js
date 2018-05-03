import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component{

    render() {
        return (
            <div>
                <div class="container">
                <header>
                    <h1>Reagency</h1>
                    <nav>
                        <Link to="about" class="btn btn-info">About Us</Link>
                        <Link to="signIn" class="btn btn-danger">Sign In</Link>
                        <Link to="signUp"  class="btn btn-success">Sign Up</Link>
                    </nav>
                </header>
                <hr class="splitter"/>
                <main>
                <div>
                    {this.props.children}
                </div>
                </main>
                </div>
            </div>
        );
    }
}