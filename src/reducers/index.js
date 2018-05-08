
import { LOGON } from '../actions/types';

const defaultState = {  
        user: {
            username: "",
            admin: false
        },
        isAuthenticated: false
    }
    
export default (state = defaultState, action = {}) =>{
    switch (action.type) {  
        case LOGON:
            return {
                ...state,
                user: action.user,
                isAuthenticated: action.success
        };
            default:
            return state;
        }
}   


