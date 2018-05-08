import React from 'react';
import { Link } from 'react-router';
import { logout } from '../../actions/index';
import { connect } from 'react-redux';

import Profile from './Nav/Profile';


class Nav extends React.Component{
    handleClick(e){
        e.preventDefault();
        console.log(this.props);
        this.props.logout();
    }
    render() {
        const  { isAuthenticated }   = this.props.auth;
        const  { username }   = this.props.auth.user;
        return (
            <nav className="navbar navbar-default navbar-fixed-top" >
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle"data-toggle="collapse" data-target="#top-navbar">
                            <i className="fa fa-bars" aria-hidden="true"></i>  
                        </button>
                        <span class="navbar-brand">REagency</span>
                    </div>
                    <div class="collapse navbar-collapse" id="top-navbar">
                    <ul class="nav navbar-nav navbar-right">
                        <li><Link to="about" className="btn btn-info">About Us</Link></li>
                        {isAuthenticated ? (<li><button onClick={this.handleClick.bind(this)}  className="btn">{username} Log out</button></li>) :( <li><Link to="signIn" className="btn btn-danger">Sign In</Link></li>) }
                        {isAuthenticated ? (<li><Profile /></li>) :( <li> <Link to="signUp"  className="btn btn-success">Sign Up</Link></li>) }
                        
                    </ul>
                  </div>   
                </div>      
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
      auth: state
    };
  }
export default connect(mapStateToProps, { logout })(Nav);