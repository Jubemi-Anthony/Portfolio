import { DELETE_QUESTION, FETCH_ALL_QUESTION, UPDATE_QUESTION, CREATE_QUESTION } from '../constants/types';

const reducer = (questions = [], action) =>{
    switch (action.type) {
        case DELETE_QUESTION:
            return questions.filter((question) => question._id !== action.payload);
        case FETCH_ALL_QUESTION:
            return action.payload;
        case CREATE_QUESTION:
            return [...questions, action.payload];
        case UPDATE_QUESTION:
            return questions.map((question) => question._id === action.payload._id ? action.payload : question)
            default:
            return questions;
    }
} 

export default reducer; 