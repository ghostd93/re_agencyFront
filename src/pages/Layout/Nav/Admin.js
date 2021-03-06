import React from 'react';
import { Link } from 'react-router';

import { MenuItem} from 'react-bootstrap';
 
class Admin extends React.Component {
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
        <div style={{margin: '0 5px 0 15px'}}>
            <MenuItem eventKey="1"><Link to="advertisementVeryfication">Advertisements</Link></MenuItem>
            <MenuItem eventKey="2"><Link to="users">Users</Link></MenuItem>
        </div>
    );
  }
}
 
export default Admin;