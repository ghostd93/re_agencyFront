import React from 'react';
import { Link } from 'react-router';
import { logout } from '../../actions/index';
import { connect } from 'react-redux';
import { DropdownMenu, MenuItem, DropdownButton, Glyphicon, Dropdown} from 'react-bootstrap';
import Profile from './Nav/Profile';
import SignUp from '../SignUp';
import SignIn from '../SignIn';




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
                       <li> <Dropdown id="dropdown-size-large" className="buttons">
                       <Dropdown.Toggle>
                           Browse
                       </Dropdown.Toggle>
                       <Dropdown.Menu>
                           <MenuItem eventKey="1"><Link to="about">About Us</Link></MenuItem>
                           <MenuItem eventKey="2"><Link to="advertisements">Real Estates</Link></MenuItem>
                           <MenuItem eventKey="3">Something else here</MenuItem>
                       </Dropdown.Menu>
                   </Dropdown></li>

                        {isAuthenticated ? (<li><button onClick={this.handleClick.bind(this)}  className="btn buttons">{username} Log out</button></li>) :( 
                        <Dropdown id="dropdown-size-large" className="buttons">
                            <Dropdown.Toggle>
                                <Glyphicon glyph="user"/> Sign In
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="sign">
                                <SignIn/>
                            </Dropdown.Menu>
                        </Dropdown>) }

                        {isAuthenticated ? (<li><Profile /></li>) :( 
                        <Dropdown id="dropdown-size-large" className="buttons">
                            <Dropdown.Toggle>
                                <Glyphicon glyph="user"/> Sign Up
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="sign">
                                <SignUp/>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
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