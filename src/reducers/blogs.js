import { DELETE_BLOG, FETCH_ALL_BLOG, UPDATE_BLOG, CREATE_BLOG } from "../constants/types";
 
const reducer = (blogs = [], action) =>{
    switch (action.type) {
        case DELETE_BLOG:
            return blogs.filter((blog) => blog._id !== action.payload);
        case FETCH_ALL_BLOG:
            return action.payload;
        case CREATE_BLOG:
            return [...blogs, action.payload];
        case UPDATE_BLOG:
            return blogs.map((blog) => blog._id === action.payload._id ? action.payload : blog)
            default:
            return blogs;
    }
} 

export default reducer; 