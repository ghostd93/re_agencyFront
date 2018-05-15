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
  constructor(props) {
    super(props);

    this.state = {
        query: "",
    };
    this.getQuery = this.getQuery.bind(this);

}
getQuery(query){
  this.setState({query: query});
}

componentWillReceiveProps(newProps){
  if (this.state.query !== newProps.route.query) {
      this.setState({query: newProps.route.query});
    }

}



  render() {
    
    console.log("tutej" + this.state.query);
    return (
      <div>
      <Router history={hashHistory} >
        <Route path="/"  component={Layout} getQ={this.getQuery}>
            <IndexRoute component={About} />
            <Route path="about" component={About}></Route>
            <Route path="advertisements" query={this.state.query} component={Advertisements}></Route>
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



