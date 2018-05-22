import React from 'react';
import { Link } from 'react-router';
import { logout, getUser, getQuery } from '../../actions/index';
import request from 'superagent';
import { connect } from 'react-redux';
import { DropdownMenu, MenuItem, DropdownButton, Glyphicon, Dropdown, Button} from 'react-bootstrap';

import Profile from './Nav/Profile';
import Admin from './Nav/Admin';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import SearchBar from './Nav/SearchBar';



class Nav extends React.Component{
    
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            estates: []
        }


    }

    handleTermChange(term) {
        const url = `http://81.2.246.98:8000/api/search?query=${term}`;
        console.log("tutaj jest nav" + term);
        request.get(url, function(err, res) {
            console.log(res.body.data[0]);
        });
    }

    handleChange = event => {
        this.setState({
          query: event
        });
      }

    componentDidMount() {
        console.log(this.props);
      }
    
      handleSubmit(){
          this.props.handleQuery(this.state.query);
      }

    handleClick(e){
        e.preventDefault();
        console.log(this.props);
        this.props.logout();
    }
    render() {
        const  { isAuthenticated }   = this.props.auth;
        const  { username }   = this.props.auth.user;
        const  { admin }   = this.props.auth.user;
        return (
            <nav class="navbar navbar-default" role="navigation">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">REagency</a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    
                    <SearchBar />
                    
                   
                    <ul class="nav navbar-nav navbar-right">
                    <li>
                       {admin ? 
                            <Dropdown id="dropdown-size-large" className="buttons">
                            <Dropdown.Toggle>
                                Admin
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Admin />
                            </Dropdown.Menu>
                        </Dropdown> : ""
                        }
                    
                    </li>
                    <li>
                        <Dropdown id="dropdown-size-large" className="buttons">
                            <Dropdown.Toggle>
                                Browse
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <MenuItem eventKey="1"><Link to="about">About Us</Link></MenuItem>
                            <MenuItem eventKey="2"><Link to="advertisements">Real Estates</Link></MenuItem>
                            <MenuItem eventKey="3">Something else here</MenuItem>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                    {isAuthenticated ? ("") :(
                        <Dropdown id="dropdown-size-large" className="buttons">
                            <Dropdown.Toggle>
                                <Glyphicon glyph="user"/> Sign In
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="sign">
                                <SignIn/>
                            </Dropdown.Menu>
                        </Dropdown>) }

                        {isAuthenticated ? 
                            (
                            <Dropdown id="dropdown-size-large" className="buttons">
                            <Dropdown.Toggle>
                                <Glyphicon glyph="user"/> {username}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="sign">
                                <Profile />
                                {isAuthenticated ? (
                                    <MenuItem onClick={this.handleClick.bind(this)}>Log Out</MenuItem>
                                ) :("")}

                            </Dropdown.Menu>
                            </Dropdown>
                            ) :( 
                        <Dropdown id="dropdown-size-large" className="buttons">
                            <Dropdown.Toggle>
                                <Glyphicon glyph="user"/> Sign Up
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="sign">
                                <SignUp/>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                    </li>
                    </ul>
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
export default connect(mapStateToProps, { logout, getQuery })(Nav);