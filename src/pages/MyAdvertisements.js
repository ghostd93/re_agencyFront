import React from 'react';
import { connect } from 'react-redux';
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

    

    render(){
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
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                {
                    this.state.advertisements.map(advert =>{
                        return(
                            <tr key={advert.id}>
                                <td>{advert.id}</td>
                                <td>{advert.type}</td>
                                <td>{advert.description}</td>
                                <td>{advert.date_of_announcement}</td>
                                <td>{advert.price}</td>
                                <td><Button className="btn btn-success">Edit</Button></td>
                                <td><Button onClick={() =>this.deleteAd(advert.id)} className="btn btn-danger">Delete</Button></td>
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