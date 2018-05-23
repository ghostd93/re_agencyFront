
import { LOGON, QUERY } from '../actions/types';

const defaultState = {  
        user: {
            username: "",
            admin: false,
            id:""
            
        },
        isAuthenticated: false,
        query: ""
    }
    
export default (state = defaultState, action = {}) =>{
    switch (action.type) {  
        case LOGON:
            return {
                ...state,
                user: action.user,
                isAuthenticated: action.success,
                id: action.id,
                admin: action.admin,
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
        



