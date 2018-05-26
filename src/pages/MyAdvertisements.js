import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Table, Button } from 'react-bootstrap';


import API from "../Api"


class MyAdvertisements extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            advertisements: []
        }
    }

    componentDidMount(){
        window.addEventListener('load', this.getMyAdvertisements());
    }

 

    deleteAd(id){
        console.log(id);
        API.delete(`advertisement/${id}`)
        .then(response =>{
            console.log(response);
            this.getMyAdvertisements();
        })
        .catch(error => {
            console.log(error);
        })
        
    }
    getMyAdvertisements(){
        let userId = this.props.auth.user.id;
        API.get(`user/${userId}/advertisements`)
        .then(response =>{
            const advertisements = response.data.data;
            this.setState({ advertisements });
            console.log(response);
        })
    }
     getStatus(status){
       switch(status){
            case 0: 
            return"incorrect"
            break;
            case 1:
            return "veryfication"
            break;
            case 2:
            return "denied"
            break;
            case 3:
            return "accepted"
            break;
            default:
            return "hehe"
       }
    }

    

    render(){
        // console.log(this.state.advertisements);
        return(
           
            <div className="row">
                <h1>My advertisements</h1>
                <Table hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Date of announcement</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Admin notes</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Edit Property</th>
                            <th>Edit Images</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                {
                    this.state.advertisements.map(advert =>{
                        return(
                            <tr key={advert.id} >
                                <td>{advert.id}</td>
                                <td>{advert.type}</td>
                                <td>{advert.description}</td>
                                <td>{advert.date_of_announcement}</td>
                                <td>{advert.price}</td>
                                <td>{this.getStatus(advert.status)}</td>
                                <td>{advert.admin_notes}</td>
                                <td><Link to={{pathname: "editAdvertisement", query: { advert_id: advert.id} }}><Button className="btn btn-success">Edit</Button></Link></td>
                                <td><Button onClick={() =>this.deleteAd(advert.id)} className="btn btn-danger">Delete</Button></td>
                                <td><Link to={{pathname: "editProperty", query: { advert_id: advert.id} }}><Button className="btn">Edit Property</Button></Link></td>
                                <td><Link to={{pathname: "editImages", query: { advert_id: advert.id} }}><Button className="btn">Edit Images</Button></Link></td>
                            </tr> 
                            
                        )
                    })
                }
                    </tbody> 
                </Table>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        auth: state
    };
}
export default connect(mapStateToProps)(MyAdvertisements);