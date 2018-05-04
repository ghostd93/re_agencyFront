import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component{

    render() {
        return (
            <div>
                <div className="container">
                <header>
                    <h1>Reagency</h1>
                    <nav>
                        <Link to="about" className="btn btn-info">About Us</Link>
                        <Link to="signIn" className="btn btn-danger">Sign In</Link>
                        <Link to="signUp"  className="btn btn-success">Sign Up</Link>
                    </nav>
                </header>
                <hr className="splitter"/>
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