import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import { logon } from './actions/index';


import Layout from './pages/Layout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Advertisements from './pages/Advertisements';




class App extends Component {
  constructor(props){
    super(props);


  }


  render() {
    return (
      <div>
      <Router history={hashHistory} >
        <Route path="/" component={Layout}>
            <IndexRoute component={About} />
            <Route path="about" component={About}></Route>
            <Route path="advertisements"  component={Advertisements}></Route>
            <Route path="signIn" component={SignIn}></Route>
            <Route path="signUp" component={SignUp}></Route>
        </Route>
      </Router>
      
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
      auth: state
    };
  }
export default connect(mapStateToProps, { logon })(App);



