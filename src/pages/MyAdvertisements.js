import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';

class MyAdvertisements extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            avertisements: []
        }
    }

    componentDidMount(){
        window.addEventListener('load', this.getMyAdvertisements());
    }

    getMyAdvertisements(){
        let userId = this.props.auth.user.id;
        axios.get(`http://81.2.246.98:8000/api/user/${userId}/advertisements`).then(response =>{
            const avertisements = response.data.data;
            this.setState({ avertisements });
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
                    this.state.avertisements.map(advert =>{
                        return(
                            <tr key={advert.id}>
                                <td>{advert.id}</td>
                                <td>{advert.type}</td>
                                <td>{advert.description}</td>
                                <td>{advert.date_of_announcement}</td>
                                <td>{advert.price}</td>
                                <td><Button className="btn btn-success">Edit</Button></td>
                                <td><Button className="btn btn-danger">Delete</Button></td>
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