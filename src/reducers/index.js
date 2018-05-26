
import { LOGON, QUERY, PAGE } from '../actions/types';

const defaultState = {  
        user: {
            username: "",
            admin: false,
            id:""
            
        },
        isAuthenticated: false,
        query: "",
        page: 1
    }
    
export default (state = defaultState, action = {}) =>{
    switch (action.type) {  
        case LOGON:
            return {
                ...state,
                user: action.user,
                isAuthenticated: action.success,
                admin: action.admin,
                query: "",
                page: 1
            };
        case QUERY:
            return {
                ...state,
                query: action.query
            };
        case PAGE:
            return {
                ...state,
                page: action.page
            };
        default:
            return state;
        }
        };
        



