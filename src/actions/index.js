import axios from 'axios';
import setAuthorizationToken from '../auth/setAuthToken';
import { LOGON, QUERY } from '../actions/types';

const url = "http://127.0.0.1:8000/api/auth/";

// export function getUser(){
//     return dispatch =>{
//          if((localStorage.getItem('user')) && (localStorage.getItem('token'))){
//             dispatch(logon(true,localStorage.getItem('user')));
//          }
//     }
// }

export function loadState() {
    try{
        const serializedState = localStorage.getItem('state');
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    }catch(error){
        return undefined;
    }
};


export function saveState(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState );
    }catch (err) {

    }
};

export function signIn(credentials) {
    return dispatch =>{
        console.log(credentials);
       return axios.post(url + "login", credentials)
        .then((response) => {
               if(response.status ===200){
                let { access_token } = response.data;
                console.log(access_token);
                localStorage.setItem('token', access_token);
                console.log(localStorage.getItem('token'))
                setAuthorizationToken(access_token);

                let user = {
                    username: credentials.email
                };
                dispatch(logon(true,user));
               }
               
        })
        .catch(error => {
            console.log("error",error);
            alert(error.response);
            dispatch(logon(false,{}))
        })
    }
}

export function logout() {
    return dispatch => {
        axios.post(url + "logout").then((response) =>{
            alert(response.data.message);
        }
    );
      localStorage.removeItem('token');
      localStorage.removeItem('state');
      setAuthorizationToken(false);
      dispatch(logon(false,{}));
    }
  }


export function signUp(credentials) {
    return dispatch =>{
        axios.post(url + "register", credentials)
        .then((response) => {
            console.log(response);
            if(response.status === 200){
                let { access_token } = response.data;
                localStorage.setItem("token", access_token);
                // dispatch(logon(success));
                alert("success");
                // this.setState({user:{
                //     token: response.data.access_token,
                //     expires_in: response.data.expires_in
                // }})
                console.log(response.data);
            }
            
        })
        .catch(error => {
            console.log("error",error.response.data.error);
            alert(error.response.data.error);
        })
    }
}

export function getQuery(query){
    return {
        type: QUERY,
        query
    }
}

export function logon(success, user) {  
    return {
        type: LOGON,
        user,
        success
    };
}