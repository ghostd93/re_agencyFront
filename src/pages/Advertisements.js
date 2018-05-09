import React from 'react';
import axios from 'axios';

const  url = "http://127.0.0.1:8000/api/advertisement";

export default class Advertisements extends React.Component {
    constructor(props){
        super(props);
        this.getAllAdv =  this.getAllAdv.bind(this);
        this.state = {
            query: "",
            advertisements: [],
            
        };
    }

    componentDidMount() {
        window.addEventListener('load', this.getAllAdv);
     }
    
    getAllAdv(){
        axios.get(url).then((response) => {
            const ad  = response.data.data;
            console.log(ad);
            this.setState({advertisements: ad});
      });
    }

    getImg(id){
        return axios.get(url+"/"+ id + "/image").then((response) =>{
            let url = response.data.data[0].url;
            console.log(url);
        });
    }

      



    render() {
        return (
            <main className="row">
                <h1>Real Estate</h1>
                <button onClick={this.getImg.bind(this)}>click</button>
                <h3></h3>
                <div className="col-sm-3">
                    {
                        this.state.advertisements.map((advert) => {
                            let imgurl = this.getImg(advert.id);
                            return(
                                <div className="advertisements" key={advert.type}>
                                <p>Status: {advert.status}</p>
                                <p>{advert.admin_notes}</p>
                                <p>{advert.date_of_announcement}</p>
                                <p>{advert.price}</p>
                                <p>{advert.description}</p>
                                <p>{advert.property_id}</p>
                               <img src={imgurl} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </main>
        )
    }
}