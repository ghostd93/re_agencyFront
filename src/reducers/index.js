
import { LOGON, QUERY } from '../actions/types';

const defaultState = {  
        user: {
            username: "",
            admin: false,
            
        },
        isAuthenticated: false,
        query: "asdas"
    }
    
export default (state = defaultState, action = {}) =>{
    switch (action.type) {  
        case LOGON:
            return {
                ...state,
                user: action.user,
                isAuthenticated: action.success,
                query: ""
            };
        case QUERY:
            return {
                ...state,
                query: action.query
            };
        default:
            return state;
        }
        };
        



