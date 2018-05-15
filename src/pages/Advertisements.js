import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const  url = "http://81.2.246.98:8000/api/advertisement";


class Advertisements extends React.Component {
    constructor(props){
        super(props);
        this.getAllAdv =  this.getAllAdv.bind(this);
        this.state = {
            query: this.props.auth.query,
            advertisements: []
            
        };
<<<<<<< HEAD
        this.handleQueryChange = this.handleQueryChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleQueryChange);
     }

     componentDidUpdate(){
         this.handleQueryChange();
=======
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.getAllAdv);
        
>>>>>>> 7a78f798defc14e389e594fada6fda31d9d258ce
     }
    
    getAllAdv(){
        axios.get(url).then((response) => {
            const ad  = response.data;
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
<<<<<<< HEAD

    handleQueryChange() {
        if(this.state.query === ""){
            this.getAllAdv();
        }else{
            const url = `http://81.2.246.98:8000/api/search?query=${this.state.query}`;
            axios.get(url).then((response) => {
                console.log(response.data);
                this.setState({advertisements: response.data.data});
            });
        }
        

    }

=======
    handleClick(){
        console.log("propsy" + this.props);
    }
>>>>>>> 7a78f798defc14e389e594fada6fda31d9d258ce
      
    componentWillReceiveProps(newProps){
        if (this.state.query !== newProps.route.query) {
            this.setState({query: newProps.route.query});
          }

    }



    render() {
<<<<<<< HEAD
        this.handleQueryChange
        console.log(this.props.auth.query);
        return (
            <main className="row">
            <h1>{this.props.auth.query}</h1>
=======
        console.log(this.props);
        return (
            <main className="row">
            <div>Query:{this.props.route.query}</div>
            
>>>>>>> 7a78f798defc14e389e594fada6fda31d9d258ce
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

function mapStateToProps(state) {
    return {
      auth: state
    };
  }

  export default connect(mapStateToProps )(Advertisements);