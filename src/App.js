import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';



import Layout from './pages/Layout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Advertisements from './pages/Advertisements';
import Property from './pages/Property';
import AddAdvertisement from './pages/AddAdvertisement';
import EditAdvertisement from './pages/EditAdvertisement';
import AddProperty from './pages/AddProperty';
import EditProperty from './pages/EditProperty';
import EditImages from './pages/EditImages';
import MyAdvertisements from './pages/MyAdvertisements';
import AdvertisementVeryfication from './pages/Admin/AdvertisementVeryfication';
import Users from './pages/Admin/Users';
import PropertyVeryfication from './pages/Admin/PropertyVeryfication';
import PersonalDetails from './pages/User/PersonalDetails';




export default class App extends Component {



  render() {
    
    return (
      <div>
      <Router history={hashHistory} >
        <Route path="/"  component={Layout} getQ={this.getQuery}>
            <IndexRoute component={About} />
            <Route path="about" component={About}></Route>
            <Route path="advertisements"  component={Advertisements}></Route>
            <Route path="property"  component={Property}></Route>
            <Route path="addAdvertisement"  component={AddAdvertisement}></Route>
            <Route path="editAdvertisement"  component={EditAdvertisement}></Route>
            <Route path="addProperty"  component={AddProperty}></Route>
            <Route path="editProperty"  component={EditProperty}></Route>
            <Route path="editImages"  component={EditImages}></Route>
            <Route path="myAdvertisements"  component={MyAdvertisements}></Route>
            <Route path="advertisementVeryfication"  component={AdvertisementVeryfication}></Route>
            <Route path="propertyVeryfication"  component={PropertyVeryfication}></Route>
            <Route path="users"  component={Users}></Route>
            <Route path="personalDetails"  component={PersonalDetails}></Route>
            <Route path="signIn" component={SignIn}></Route>
            <Route path="signUp" component={SignUp}></Route>
        </Route>
      </Router>
      
      </div>
    );
  }
}






