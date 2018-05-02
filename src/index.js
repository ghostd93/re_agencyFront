import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Bootstrap from 'react-bootstrap';

import './index.css';
import App from './App';
import Layout from './pages/Layout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';



ReactDOM.render(
    <Router history={hashHistory} >
        <Route path="/" component={Layout}>
            <Route path="signIn" component={SignIn}></Route>
            <Route path="signUp" component={SignUp}></Route>
        </Route>
    </Router>,
    document.getElementById('root'));

