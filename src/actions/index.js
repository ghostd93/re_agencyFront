import axios from 'axios';
import decode  from "jwt-decode";
import setAuthorizationToken from '../auth/setAuthToken';
import { LOGON, QUERY } from '../actions/types';

const url = "http://81.2.246.98:8000/api/auth/";

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
            console.log(response);
               if(response.status === 200){
                let { access_token } = response.data;
                let decodedToken = decode(access_token);
                console.log(access_token);
                console.log(decodedToken);
                localStorage.setItem('token', access_token);
                console.log(localStorage.getItem('token'))
                setAuthorizationToken(access_token);

                let user = {
                    username: credentials.email,
                    id: decodedToken.user_id,
                    admin: decodedToken.user_roles[0].role_name === 'administrator' ? true : false
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
            if(response.status === 201){
                let { access_token } = response.data;
                localStorage.setItem("token", access_token);
                alert(response.data.message);
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