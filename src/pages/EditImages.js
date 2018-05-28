import React from 'react';
import { Col, Row, Button, FormGroup, FormControl, ControlLabel, Thumbnail } from "react-bootstrap";
import { connect } from 'react-redux';
import { hashHistory} from 'react-router';

import API from "../Api"


class EditImages extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           image: [],
           getImg:[]
        };
        this.addImg = this.addImg.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.getImg());
     }
    
    handleImageChange = event =>{
        console.log(event.target.files);
        const img = event.target.files;
        const image = [];
        
        Array.from(event.target.files).forEach(file =>{
            image.push(file);
        })

        this.setState({image});
        console.log(image);
    }
    back(){
        hashHistory.push({pathname: "myAdvertisements"});
      }

   getImg(){
    API.get(`advertisement/${this.props.location.query.advert_id}/image`).
    then(res =>{
        const getImg = res.data.data;
        this.setState({getImg});
        console.log(this.state.getImg);
    }) .catch(error => {
        console.log(error);
        this.setState({getImg: []});
    })   

   }

    addImg(){
         console.log(this.state);   
         if(this.state.image != null){      
            this.state.image.map(img =>{
                const formData = new FormData()
                console.log(img);
                formData.append('image', img, img.name) ;
                API.post(`advertisement/${this.props.location.query.advert_id}/image`, formData)
                .then(response =>{
                    this.resetForm();
                    console.log(response.status);
                    this.getImg();
                  })
                  .catch(error => {   
                    console.log(error);
                    this.getImg();
                })
            })  
         }
    }

    deleteImg(id){
        API.delete(`advertisement/${this.props.location.query.advert_id}/image/${id}`).
        then(res =>{
            console.log(res);
            this.getImg();
        }) 
        this.getImg();
    }
    resetForm = () => { 
        this.myFormRef.reset();
      }

    render() {
        return (
            <main className="row">
            <h1>Images</h1>
            <Row>
            <Col md={2} xs={6}>
              <form ref={(el) => this.myFormRef = el}>
                <FormGroup controlId="image">
                <ControlLabel>Add Images</ControlLabel>
                <FormControl type="file" placeholder="image" 
                onChange={this.handleImageChange}
                multiple/>
                </FormGroup>
              </form>
            </Col>
            </Row>
            <Row>
            <Col md={2} xs={6}>
            <Button className="col-md-12"
            onClick={this.addImg.bind(this)}
            >Submit</Button>
           
            </Col>
            <Col md={2} xs={6}>
            <Button className="col-md-12"
            onClick={() => this.back()}
            >Back</Button>
            </Col>
         </Row>
                {
                    this.state.getImg.map(img =>{
                        return(
                            <Col xs={6} md={4}>
                            <Thumbnail src={img.url} alt="242x200">
                                <p>
                                <Button onClick={() => this.deleteImg(img.id)}>Delete</Button>
                                </p>
                            </Thumbnail>
                            </Col>
                        )
                    })
                }
             
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
      auth: state
    };
  }

  export default connect(mapStateToProps )(EditImages);