import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import {Table, Image, Carousel,Row, Col, PageHeader,Button,FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import API from "../../Api"


class PropertyVeryfication extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            user:{},
            advertisement:{},
            property:{},
            photos:[],
            note: ""
        }
        


    }

    componentDidMount() {
        window.addEventListener('load', this.getProperty());
     }


    getProperty(){
        const advertisement = JSON.parse(this.props.location.query.advert);
        this.setState({advertisement});
        this.setState({property: advertisement.property});
        this.setState({user: advertisement.user});
        this.setState({photos: advertisement.photos});
 
    }

    confirm(id){
        console.log(id);
        let status = {"status": 3 };

        API.post(`admin/${id}/verificate`, status)
        .then(response =>{
            console.log(response);
            hashHistory.push({pathname: "advertisementVeryfication" })
        })
        .catch(error => {
            console.log(error);
        })   
    }
    reject(id){
        console.log(id);
        if(this.state.note != ""){
            let status = { status : 2, admin_notes : this.state.note };
            console.log(status);
            API.post(`admin/${id}/verificate`, status)
            .then(response =>{
                console.log(response);
                hashHistory.push({pathname: "advertisementVeryfication" })
            })
            .catch(error => {
                console.log(error);
            }) 
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
            });
    }
    render(){

        return(
            <Row>
                <PageHeader>Property id:{this.state.advertisement.id}</PageHeader>
                <Row>
                <Col>
                   <h3> {this.state.advertisement.description}</h3>
                </Col>
                </Row>
                <Row>
                    <Col>
                      <Carousel>
                        {
                            this.state.photos.map((photo)=>{
                                return(
                                    <Carousel.Item>
                                    <Image responsive src={photo.url} />
                                    </Carousel.Item>
                                )
                            })
                        }
                      </Carousel>
                    </Col>
                </Row>
                {
                    this.props.auth.user.admin == true ? (
                        <Row>
                            <Col md={1} xs={4}>Admin</Col>
                            <Col md={2} xs={4}>  
                                <Button className="btn btn-success" onClick={() => this.confirm(this.state.advertisement.id)}>Accept</Button>
                                <Button className="btn btn-danger" onClick={() => this.reject(this.state.advertisement.id)}>Reject</Button>
                            </Col>
                            <Col md={8} xs={12}>
                                <FormGroup controlId="note">
                                <InputGroup>
                                <InputGroup.Addon>Note for owner</InputGroup.Addon>
                                <FormControl type="textarea" onChange={this.handleChange}/>
                                </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                    ): ""

                }
                <Row>
                    <Col>
                        <p>{this.state.property.description}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}  xs={6}>
                        <p>Price: {this.state.advertisement.price} $</p>
                    </Col>
                    <Col md={6} xs={6}>
                        <p>Type: {this.state.advertisement.type}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={10}>
                    <Table hover responsive>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Country</td>
                                <td>{this.state.property.country}</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>{this.state.property.city}</td>
                            </tr>
                            <tr>
                                <td>Postal code</td>
                                <td>{this.state.property.postal_code}</td>
                            </tr>
                            <tr>
                                <td>Steet</td>
                                <td>{this.state.property.street}</td>
                            </tr>
                            <tr>
                                <td>Street number</td>
                                <td>{this.state.property.street_number}</td>
                            </tr>
                            <tr>
                                <td>Date of construction</td>
                                <td>{this.state.property.date_of_construction}</td>
                            </tr>
                            <tr>
                                <td>Date of registration</td>
                                <td>{this.state.property.date_of_registration}</td>
                            </tr>
                            <tr>
                                <td>Floor</td>
                                <td>{this.state.property.floor}</td>
                            </tr>
                            <tr>
                                <td>Farage</td>
                                <td>{this.state.property.garage}</td>
                            </tr>
                            <tr>
                                <td>Land area</td>
                                <td>{this.state.property.land_area}</td>
                            </tr>
                            <tr>
                                <td>Number of rooms</td>
                                <td>{this.state.property.number_of_rooms}</td>
                            </tr>
                            <tr>
                                <td>Property area</td>
                                <td>{this.state.property.property_area}</td>
                            </tr>
                            <tr>
                                <td>Property type</td>
                                <td>{this.state.property.property_type}</td>
                            </tr>
                        </tbody>
                    </Table>
                    </Col>
                    <Col md={6} xs={10}>
                        <h3>Owner</h3>
                        <p>{this.state.user.name}</p>
                        <p>{this.state.user.email}</p>
                        
                    </Col>
                
                </Row>
                <Row>
                    <Col md={4} xs={10}><p>Date of announcement: {this.state.advertisement.date_of_announcement}</p></Col>
                    <Col md={4} xs={10}><p>Created at: {this.state.advertisement.created_at}</p></Col>
                    <Col md={4} xs={10}><p>Updated at: {this.state.advertisement.updated_at}</p></Col>
                </Row>
            </Row>
        )
    }

};

function mapStateToProps(state) {
    return {
      auth: state
    };
  }
  export default connect(mapStateToProps )(PropertyVeryfication);
