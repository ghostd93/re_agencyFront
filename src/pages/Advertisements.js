import React from 'react';
import { connect } from 'react-redux';
import { Pager, Col, Row, Button, Image  } from 'react-bootstrap';
import { Link } from 'react-router';

import {  getPage } from '../actions/index';


import API from "../Api"



class Advertisements extends React.Component {
    constructor(props){
        super(props);
        // this.getAllAdv =  this.getAllAdv.bind(this);
        this.state = {
            query: this.props.auth.query,
            advertisements: [],
            currentPage: 1,
            lastPage: ""      
        };
        // this.handleQueryChange = this.handleQueryChange.bind(this);
        // this.nextPage = this.nextPage.bind(this);
        this.getAd = this.getAd.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.getAd());
     }

     componentDidUpdate(prevProps, prevState){
        if((prevProps.auth.query !== this.props.auth.query) || (prevProps.auth.page !== this.props.auth.page)) {
            window.addEventListener('load', this.getAd());
        }
        
     }
     
    getAd(){
        if(this.props.auth.query === ""){
            API.get(`advertisement?page=${this.props.auth.page}`)
            .then(res => {
                console.log(res);

                this.setState({currentPage: res.data.current_page});

                this.setState({lastPage: res.data.last_page});
                const advertisements = res.data.data;
                console.log(advertisements);
                this.setState({ advertisements });
            });

        } else{
            API.get(`search?query=${this.props.auth.query}&page=${this.props.auth.page}`) 
            .then(res => {
                console.log(res);

                this.setState({currentPage: res.data.current_page});
                console.log(res.data.current_page);
                this.setState({lastPage: res.data.last_page});

                const advert = res.data.data;
                let advertisements = [];
                for( let key in advert) {
                    advertisements.push(advert[key]);
                }
                console.log(advertisements);
                console.log(this.state.advertisements);
                this.setState({ advertisements });
                console.log(this.state.advertisements);
            });
        }
    }

    // getAllAdv(){
    //     API.get(`advertisement`)
    //     .then(res => {
    //         console.log(res);
    //         const advertisements = res.data.data;
    //         this.setState({ advertisements });
    //     });
    // }


    prevPage(){
        if(this.state.currentPage > 1){
            this.props.getPage(this.props.auth.page - 1);

        }
    }
    nextPage(){
        if(this.state.currentPage < this.state.lastPage){
            this.props.getPage(this.props.auth.page +1);
        }
    }

    render() {

        // console.log(this.props);
        // console.log("query:" + this.props.auth.query);
        return (
           <div>
           <Row >
           <h1>{this.props.auth.query}</h1>
                   {
                       this.state.advertisements.map((advert) => {  
                           return(
                               <Col className="card" xs={12} md={12} key={advert.id}>
                                <Row>
                                    <Col  xs={12} md={4} >
                                        <Image src={advert.photos[0].thumb_url} alt="" className="advPhoto"/>
                                    </Col>
                                    <Col  xs={12} md={8} >
                                        <div className="cardDesc">
                                        <p>Data dodania: {advert.date_of_announcement}</p>
                                        <p>Cena: {advert.price} zł</p>
                                        <p>Opis: {advert.description}</p>
                                        <p>Nieruchomość na {advert.type}</p>
                                        <Link to={{pathname: "property", query: { id: advert.id } }}><Button>More...</Button></Link>
                                        </div>
                                    </Col>
                                </Row>
                               </Col>
                           )
                       })
                   }
           </Row>
           <Row>
               <Pager >
                { this.state.currentPage > 1 ?
               <Pager.Item onClick={() => {this.prevPage()}}>Previous</Pager.Item>: ""
                }
                   <span  style={{margin: '0 15px 0 15px'}}>{this.state.currentPage}/{this.state.lastPage}</span>
                {   this.state.currentPage <  this.state.lastPage ?
               <Pager.Item  onClick={() => {this.nextPage()}}>Next</Pager.Item>: ""
                }
               </Pager>
           </Row>
           </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      auth: state
    };
  }

  export default connect(mapStateToProps, {  getPage } )(Advertisements);