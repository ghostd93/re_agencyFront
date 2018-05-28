import React from 'react';
import { Link } from 'react-router';

import {  MenuItem} from 'react-bootstrap';
 
class Profile extends React.Component {
  constructor() {
    super();
    this.deleteAccount = this.deleteAccount.bind(this);
    this.logout = this.logout.bind(this);
  }
 
  deleteAccount(e) {
    console.log("Deleting Account")
  }
 
  logout(e) {
    console.log("Logging out")
  }
 
  render() {
    return (
        <div style={{margin: '0 5px 5px 15px'}}>
        <MenuItem eventKey="1"><Link to="PersonalDetails">Personal Details</Link></MenuItem>
        <MenuItem eventKey="2"><Link to="addAdvertisement">Add advertisement</Link></MenuItem>
        <MenuItem eventKey="3"><Link to="myAdvertisements">My advertisement</Link></MenuItem>
        </div>
    );
  }
}
 
export default Profile;