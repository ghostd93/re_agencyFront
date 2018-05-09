import React from 'react';
import axios from 'axios';

const  url = " http://81.2.246.98:8000/api/advertisement";

export default class Advertisements extends React.Component {
    constructor(props){
        super(props);
        this.getAllAdv =  this.getAllAdv.bind(this);
        this.state = {
            query: "",
            advertisements: []
            
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
         axios.get(url + "/"+ id + "/image").then((response) =>{
            var url2 = response.data.data[0].url;
            console.log("img1 " + url2);
            return url2;

        });
    }

      



    render() {
        if(this.state.query === ""){
            // this.getAllAdv();
        }
        
        return (
            <main className="row">
                <h1>Real Estate</h1>
                <h3></h3>
                    {
                        this.state.advertisements.map((advert) => {  
                            return(
                                <div className="col-sm-4 advertisement" key={advert.id}>
                                <p>Status: {advert.status}</p>
                                <p>Type:{advert.type}</p>
                                <p>date_of_announcement:{advert.date_of_announcement}</p>
                                <p>price:{advert.price}</p>
                                <p>description:{advert.description}</p>
                                <p>property_id:{advert.property_id}</p>
                               <img src={advert.photos[0].thumb_url} alt="" />
                                </div>
                            )
                        })
                    }
            </main>
        )
    }
}