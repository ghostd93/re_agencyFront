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
        this.handleClick = this.handleClick.bind(this);
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
    handleClick(){
        console.log("propsy" + this.props);
    }
      
    componentWillReceiveProps(newProps){
        if (this.state.query !== newProps.route.query) {
            this.setState({query: newProps.route.query});
          }

    }



    render() {
        console.log(this.props);
        return (
            <main className="row">
            <div>Query:{this.props.route.query}</div>
            
                    {
                        this.state.advertisements.map((advert) => {  
                            return(
                                <div className="card" key={advert.id}>
                                    <img src={advert.photos[0].thumb_url} alt="" className="advPhoto"/>
                                    <div className="cardDesc">
                                        <p>Data dodania: {advert.date_of_announcement}</p>
                                        <p>Cena: {advert.price} zł</p>
                                        <p>Opis: {advert.description}</p>
                                        <p>Nieruchomość na {advert.type}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
            </main>
        )
    }
}