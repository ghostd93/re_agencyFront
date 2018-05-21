import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

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
                {
                    this.state.avertisements.map(advert =>{
                        return(
                            <div className="card" key={advert.id}>Advertisement id: {advert.id}</div>
                        )
                    })
                }
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