import { DELETE_QUOTE, FETCH_ALL_QUOTE, UPDATE_QUOTE, CREATE_QUOTE } from '../constants/types';

const reducer = (quotes = [], action) =>{
    switch (action.type) {
        case DELETE_QUOTE:
            return quotes.filter((quote) => quote._id !== action.payload);
        case FETCH_ALL_QUOTE:
            return action.payload;
        case CREATE_QUOTE:
            return [...quotes, action.payload];
        case UPDATE_QUOTE:
            return quotes.map((quote) => quote._id === action.payload._id ? action.payload : quote)
            default:
            return quotes;
    }
} 

export default reducer; 