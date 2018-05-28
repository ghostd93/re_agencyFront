import React from 'react';

import Nav from './Layout/Nav';

import './Layout/Layout.css';

export default class Layout extends React.Component{
    
        constructor(props) {
            super(props);
    
            this.state = {
                query: "",
                estates: []
            }

        }
 
    render() {
        // console.log(this.props);
        return (
                <div >
                    <header>
                        <Nav />
                    </header>

                    <main className="container" >
                        <div>
                            {this.props.children}
                        </div>
                    </main>
                </div>
        );
    }
}