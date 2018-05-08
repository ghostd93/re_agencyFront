import React from 'react';
import { Link } from 'react-router';

import Nav from './Layout/Nav';
import Footer from './Layout/Footer';

import './Layout/Layout.css';

export default class Layout extends React.Component{

    render() {
        return (
                <div >
                    <header>
                        <Nav />
                    </header>
                    <main className="container">
                        <div>
                            {this.props.children}
                        </div>
                    </main>
                    <Footer className="container" />
                </div>
        );
    }
}