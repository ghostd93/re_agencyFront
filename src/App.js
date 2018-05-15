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
<<<<<<< HEAD
  constructor(props){
    super(props);


  }
=======
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

>>>>>>> 7a78f798defc14e389e594fada6fda31d9d258ce


  render() {
    
    console.log("tutej" + this.state.query);
    return (
      <div>
      <Router history={hashHistory} >
        <Route path="/"  component={Layout} getQ={this.getQuery}>
            <IndexRoute component={About} />
            <Route path="about" component={About}></Route>
<<<<<<< HEAD
            <Route path="advertisements"  component={Advertisements}></Route>
=======
            <Route path="advertisements" query={this.state.query} component={Advertisements}></Route>
>>>>>>> 7a78f798defc14e389e594fada6fda31d9d258ce
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



