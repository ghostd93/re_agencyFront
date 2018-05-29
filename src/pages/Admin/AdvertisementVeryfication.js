import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Table, Button,Dropdown, FormGroup, ControlLabel, FormControl, InputGroup, MenuItem, Modal} from 'react-bootstrap';

import API from "../../Api"

class AdvertisementVeryfication extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            advertisements: [],
        }
    }

    componentDidMount(){
        window.addEventListener('load', this.getAdvertisements());
    }

 

    confirm(id){
        console.log(id);
        let status = {"status": 3 };
        API.post(`admin/${id}/verificate`, status)
        .then(response =>{
            console.log(response);
            this.getAdvertisements();
        })
        .catch(error => {
            console.log(error);
        })   
    }


    confirm(id){
        console.log(id);
        let status = {"status": 3 };
        API.post(`admin/${id}/verificate`, status)
        .then(response =>{
            console.log(response);
            this.getAdvertisements();
        })
        .catch(error => {
            console.log(error);
        })   
    }
    reject(id){
        console.log(id);
        let status = {"status": 2 };
        API.post(`admin/${id}/verificate`, status)
        .then(response =>{
            console.log(response);
            this.getAdvertisements();
        })
        .catch(error => {
            console.log(error);
        })   
    }

    getAdvertisements(){
        API.get(`admin/verification`)
        .then(response =>{
            console.log(response);
            const advertisements = response.data.data.data;
            this.setState({ advertisements });
            console.log(response);
        })
    }

    isDisabled(){
        this.state.disabled == true ? this.setState({disabled: false }): this.setState({disabled: true });
        console.log(this.state.disabled);
   }

    

    render(){
        return(
            
            <div className="row">
                <h1>Advertisements verification</h1>
                <Table hover responsive className="table-responsive">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Date of announcement</th>
                            <th>Price</th>
                            <th>Status</th>
                           {/* <th>Edit Status</th>*/}
                            <th>Property</th>
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
                          <td>{advert.status}</td>
                          
                         {/*} <td>
                            <Button className="btn btn-success" onClick={() => this.confirm(advert.id)}>Confirm</Button>
                            <Button className="btn btn-danger" onClick={() => this.reject(advert.id)}>Reject</Button>
                          </td>
                          */
                        }
                          <td>
                            <Link to={{pathname: "propertyVeryfication", query: { advert: JSON.stringify(advert) } }}><Button>Property details</Button></Link>
                          </td>
                          
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
export default connect(mapStateToProps)(AdvertisementVeryfication);