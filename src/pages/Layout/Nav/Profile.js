import React from 'react';

import { DropdownMenu, MenuItem, DropdownButton, Glyphicon, Dropdown, Button} from 'react-bootstrap';
 
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
        <div>
        <MenuItem eventKey="1">1</MenuItem>
        <MenuItem eventKey="2">2</MenuItem>
        <MenuItem eventKey="3">Something else here</MenuItem>    
        </div>
    );
  }
}
 
export default Profile;