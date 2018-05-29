import React from 'react';
import { Link } from 'react-router';
import { logout, getQuery } from '../../actions/index';
import { connect } from 'react-redux';
import { Navbar,MenuItem,  Glyphicon, Dropdown} from 'react-bootstrap';

import Profile from './Nav/Profile';
import Admin from './Nav/Admin';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import SearchBar from './Nav/SearchBar';

import API from "../../Api"

class Nav extends React.Component{
    
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            estates: []
        }


    }

    handleTermChange(term) {
        API.get(`search?query=${term}`).then(response =>{
            console.log(response.body.data[0]);
        });
       
    }

    handleChange = event => {
        this.setState({
          query: event
        });
      }

    componentDidMount() {
        // console.log(this.props);
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
            <Navbar collapseOnSelect className="header">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="home"><span className="logo">REagency</span></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    
                    <SearchBar />
                    
                   
                    <ul className="nav navbar-nav navbar-right">
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
                            <MenuItem eventKey="1"><Link to="advertisements"onClick={() => this.props.getQuery("")}>Real Estates</Link></MenuItem>
                            <MenuItem eventKey="2"><Link to="about">About Us</Link></MenuItem>
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
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps(state) {
    return {
      auth: state
    };
  }
export default connect(mapStateToProps, { logout, getQuery })(Nav);