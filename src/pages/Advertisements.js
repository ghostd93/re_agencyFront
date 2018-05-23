import React from 'react';
import { connect } from 'react-redux';
import {  Col, Button } from 'react-bootstrap';

import API from "../Api"



class Advertisements extends React.Component {
    constructor(props){
        super(props);
        this.getAllAdv =  this.getAllAdv.bind(this);
        this.state = {
            query: this.props.auth.query,
            advertisements: []      
        };
        this.handleQueryChange = this.handleQueryChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleQueryChange());
     }

     componentDidUpdate(prevProps){
        if(prevProps.auth.query !== this.props.auth.query) {
            window.addEventListener('load', this.handleQueryChange());
        }

     }
    
    getAllAdv(){
        API.get(`advertisement`)
        .then(res => {
            const advertisements = res.data.data;
            console.log(advertisements);
            this.setState({ advertisements });
        });
    }

    getImg(id){
        API.get(`advertisement/${id}/image`)
        .then((response) =>{
            var url2 = response.data.data[0].url;
            console.log("img1 " + url2);
            return url2;

        });
    }

    handleQueryChange() {
        if(this.props.auth.query === ""){
            this.getAllAdv();
        }else{
            API.get(`search?query=${this.props.auth.query}`)
            .then((response) => {
                console.log(response.data);
                this.setState({advertisements: response.data.data});
            });
        }
        

    }

      
    // componentWillReceiveProps(newProps){
    //     window.addEventListener('load', this.handleQueryChange());
    // }



    render() {

        console.log("query:" + this.props.auth.query);
        return (
            <main className="row">
            <h1>{this.props.auth.query}</h1>
                    {
                        this.state.advertisements.map((advert) => {  
                            return(
                                <Col className="card" xs={6} md={3} key={advert.id}>
                                    <img src={advert.photos[0].thumb_url} alt="" className="advPhoto"/>
                                    <div className="cardDesc">
                                        <p>Data dodania: {advert.date_of_announcement}</p>
                                        <p>Cena: {advert.price} zł</p>
                                        <p>Opis: {advert.description}</p>
                                        <p>Nieruchomość na {advert.type}</p>
                                        <Button>Wiecej</Button>
                                    </div>
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

  export default connect(mapStateToProps )(Advertisements);