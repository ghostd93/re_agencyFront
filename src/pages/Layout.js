import React from 'react';

import Nav from './Layout/Nav';
import Footer from './Layout/Footer';

import './Layout/Layout.css';

export default class Layout extends React.Component{
    
        constructor(props) {
            super(props);
    
            this.state = {
                query: "",
                estates: []
            }
            this.getQuery = this.getQuery.bind(this);
        }
    
        getQuery(term) {       
            this.setState({query: term});
            this.props.route.getQ(this.state.query);

        }

    constructor(props){
        super(props);
        this.state ={
            query: ''
        }
        


    
    }

    render() {
        // console.log(this.props);
        return (
                <div >
                    <header>
                        <Nav handleQuery={this.getQuery} />

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