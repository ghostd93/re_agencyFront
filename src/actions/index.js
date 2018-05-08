import axios from 'axios';
import setAuthorizationToken from '../auth/setAuthToken';
import { LOGON } from '../actions/types';

const url = "http://127.0.0.1:8000/api/auth/";

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
            console.log("error",error.response.data.error);
            alert(error.response.data.error);
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

export function logon(success, user) {  
    return {
        type: LOGON,
        user,
        success
    };
}