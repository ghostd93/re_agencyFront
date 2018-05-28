import decode  from "jwt-decode";
import setAuthorizationToken from '../auth/setAuthToken';
import { LOGON, QUERY, PAGE } from '../actions/types';
import { hashHistory} from 'react-router';

import API from "../Api"


export function loadState() {
    try{
        const serializedState = localStorage.getItem('state');
        if(serializedState === null){
            return undefined;
        }
        const token = localStorage.getItem('token');
        setAuthorizationToken(token);
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
export function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

export function signIn(credentials) {
    return dispatch =>{
        console.log(credentials);
       return API.post('auth/login',credentials)
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
               hashHistory.push({pathname: "myAdvertisements" })
        })
        .catch(error => {
            
            console.log("error",error);
            alert(error.message);
            dispatch(logon(false,{}))
        })
    }
}

export function logout() {
    return dispatch => {
        API.post('auth/logout').then((response) =>{
            // alert(response.data.message);
        }
    );
      localStorage.removeItem('token');
      localStorage.removeItem('state');
      setAuthorizationToken(false);
      dispatch(logon(false,{}));
      hashHistory.push({pathname: "about" })
    }
  }


export function signUp(credentials) {
    return dispatch =>{
        API.post('auth/register',credentials)
        .then((response) => {
            console.log(response);
            if(response.status === 201){
                let { access_token } = response.data;
                localStorage.setItem("token", access_token);
                // alert(response.data.message);
                console.log(response.data);
            }
            
        })
        .catch(error => {
            console.log("error",error.response.data.error);
            alert(error.message);
        })
    }
}

export function getQuery(query){
    return {
        type: QUERY,
        query
    }
}

export function getPage(page){
    return {
        type: PAGE,
        page
    }
}

export function logon(success, user) {  
    return {
        type: LOGON,
        user,
        success
    };
}