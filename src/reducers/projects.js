import { DELETE_PROJECT, FETCH_ALL_PROJECT, UPDATE_PROJECT, CREATE_PROJECT } from '../constants/types';

const reducer = (projects = [], action) =>{
    switch (action.type) {
        case DELETE_PROJECT:
            return projects.filter((project) => project._id !== action.payload);
        case FETCH_ALL_PROJECT:
            return action.payload;
        case CREATE_PROJECT:
            return [...projects, action.payload];
        case UPDATE_PROJECT:
            return projects.map((project) => project._id === action.payload._id ? action.payload : project)
            default:
            return projects;
    }
} 

export default reducer; 