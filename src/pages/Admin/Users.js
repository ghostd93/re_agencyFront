import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Table, Button,Dropdown, FormGroup, ControlLabel, Pager, Row} from 'react-bootstrap';

import API from "../../Api"

class Users extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            users: [],
            currentPage:1,
            lastPage:""

        }
    }

    componentDidMount(){
        window.addEventListener('load', this.getUsers());
    }

 
    delete(id){
        console.log(id);
        API.delete(`user/${id}`)
        .then(response =>{
            console.log(response);
            this.getUsers();
        })
        .catch(error => {
            console.log(error);
        })   
    }

    getUsers(){
        API.get(`user`)
        .then(response =>{
            console.log(response);
            const users = response.data.data;
            this.setState({ users });
            console.log(response);
        });
    }


    // getUsers(){
    //     // if(this.props.auth.query === ""){
    //         API.get(`user?page=${this.state.currentPage}`)
    //         .then(res => {
    //             console.log(res);

    //             this.setState({currentPage: res.data.current_page});

    //             this.setState({lastPage: res.data.last_page});
    //             const users = res.data.data;
    //             this.setState({ users });
    //         });

        // } 
        // else{
        //     API.get(`search?query=${this.props.auth.query}&page=${this.props.auth.page}`) 
        //     .then(res => {
        //         console.log(res);

        //         this.setState({currentPage: res.data.current_page});
        //         console.log(res.data.current_page);
        //         this.setState({lastPage: res.data.last_page});

        //         const advert = res.data.data;
        //         let advertisements = [];
        //         for( let key in advert) {
        //             advertisements.push(advert[key]);
        //         }
        //         console.log(advertisements);
        //         console.log(this.state.advertisements);
        //         this.setState({ advertisements });
        //         console.log(this.state.advertisements);
        //     });
        // }
    // }

    // getAllAdv(){
    //     API.get(`advertisement`)
    //     .then(res => {
    //         console.log(res);
    //         const advertisements = res.data.data;
    //         this.setState({ advertisements });
    //     });
    // }


    // prevPage(){
    //     if(this.state.currentPage > 1){
    //         this.props.getPage(this.props.auth.page - 1);

    //     }
    // }
    // nextPage(){
    //     if(this.state.currentPage < this.state.lastPage){
    //         this.props.getPage(this.props.auth.page +1);
    //     }
    // }

    

    render(){
        return(
            
            <div className="row">
                <h1>Users</h1>
                <Table hover responsive className="table-responsive">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Emial</th>
                            <th>Active</th>
                            <th>Created</th>
                            <td>Delete</td>
                        </tr>
                        
                    </thead>
                    <tbody>
                    
                {
                    this.state.users.map(user =>{
                        return(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.active}</td>
                            <td>{user.created_at}</td> 
                            <td>  
                                <Button className="btn btn-danger" onClick={() => this.delete(user.id)}>Delete</Button>
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
export default connect(mapStateToProps)(Users);