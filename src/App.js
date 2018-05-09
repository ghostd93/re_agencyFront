import React, { Component } from 'react';

import { Router, Route, IndexRoute, hashHistory} from 'react-router';


import Layout from './pages/Layout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Advertisements from './pages/Advertisements';



class App extends Component {
  render() {
    return (
      <div>
      <Router history={hashHistory} >
        <Route path="/" component={Layout}>
            <IndexRoute component={About} />
            <Route path="about" component={About}></Route>
            <Route path="advertisements" component={Advertisements}></Route>
            <Route path="signIn" component={SignIn}></Route>
            <Route path="signUp" component={SignUp}></Route>
        </Route>
      </Router>
      
      </div>
    );
  }
}

export default App;





