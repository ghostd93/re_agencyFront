import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import { logon } from './actions/index';


import Layout from './pages/Layout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Advertisements from './pages/Advertisements';
import AddAdvertisement from './pages/AddAdvertisement';
import AddProperty from './pages/AddProperty';
import MyAdvertisements from './pages/MyAdvertisements';




export default class App extends Component {
  constructor(props){
    super(props);


  }


  render() {
    
    return (
      <div>
      <Router history={hashHistory} >
        <Route path="/"  component={Layout} getQ={this.getQuery}>
            <IndexRoute component={About} />
            <Route path="about" component={About}></Route>
            <Route path="advertisements"  component={Advertisements}></Route>
            <Route path="addAdvertisement"  component={AddAdvertisement}></Route>
            <Route path="addProperty"  component={AddProperty}></Route>
            <Route path="myAdvertisements"  component={MyAdvertisements}></Route>
            <Route path="signIn" component={SignIn}></Route>
            <Route path="signUp" component={SignUp}></Route>
        </Route>
      </Router>
      
      </div>
    );
  }
}






