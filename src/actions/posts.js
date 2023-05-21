import * as api from '../api';
import { DELETE_BLOG, FETCH_ALL_BLOG, UPDATE_BLOG, CREATE_BLOG } from "../constants/types";
import { DELETE_PROJECT, FETCH_ALL_PROJECT, UPDATE_PROJECT, CREATE_PROJECT } from '../constants/types';
import { DELETE_QUESTION, FETCH_ALL_QUESTION, UPDATE_QUESTION, CREATE_QUESTION } from '../constants/types';
import { DELETE_QUOTE, FETCH_ALL_QUOTE, UPDATE_QUOTE, CREATE_QUOTE } from '../constants/types';

//AFTER RECEIVING FROM THE API YOU'LL CREATE AND EXPORT THESE FUNCTIONS AND GO TO REDUCERS TO CREATE CASES FOR THEM

//BLOGS ACTION CREATORS
export const getBlogs = () => async(dispatch) =>{
    try {
        const {data} = await api.fetchBlogs();

        dispatch({ type: FETCH_ALL_BLOG, payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createBlog = (blog) => async (dispatch) =>{
    try {
        const {data} = await api.createBlog(blog);
        dispatch({type: CREATE_BLOG, payload: data});
    } catch (error) {
        console.log(error);
    }
}
 
export const updateBlog = (id, blog) => async (dispatch) =>{
    try {
       const {data} = await api.updateBlog(id, blog);

       dispatch({type: UPDATE_BLOG, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteBlog = (id) => async (dispatch) =>{
    try {
        await api.deleteBlog(id);

        dispatch({type: DELETE_BLOG, payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const likeBlog = (id) => async (dispatch) =>{
    try {
        const {data} = await api.likeBlog(id);

        dispatch({type: 'UPDATE_BLOG', payload: data});
    } catch (error) {
       console.log(error); 
    }
}

export const downlikeBlog = (id) => async (dispatch) =>{
    try {
        const {data} = await api.downlikeBlog(id);

        dispatch({type: 'UPDATE_BLOG', payload: data});
    } catch (error) {
       console.log(error); 
    }
}

//////////////////////////////////////////////////////////////////

//PROJECTS ACTION CALLS


export const likeProject = (id) => async (dispatch) =>{
    try {
        const {data} = await api.likeProject(id);

        dispatch({type: 'UPDATE_PROJECT', payload: data});
    } catch (error) {
       console.log(error); 
    }
}

export const downlikeProject = (id) => async (dispatch) =>{
    try {
        const {data} = await api.downlikeProject(id);

        dispatch({type: 'UPDATE_PROJECT', payload: data});
    } catch (error) {
       console.log(error); 
    }
}


///////////////////////////////////////////////////////


//QUESTIONS ACTION CALLS
export const getQuestions = () => async(dispatch) =>{
    try {
        const {data} = await api.fetchQuestions();

        dispatch({ type: FETCH_ALL_QUESTION, payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createQuestion = (question) => async (dispatch) =>{
    try {
        const {data} = await api.createQuestion(question);
        dispatch({type: CREATE_QUESTION, payload: data});
    } catch (error) {
        console.log(error);
    }
}
 
export const updateQuestion = (id, question) => async (dispatch) =>{
    try {
       const {data} = await api.updateQuestion(id, question);

       dispatch({type: UPDATE_QUESTION, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteQuestion = (id) => async (dispatch) =>{
    try {
        await api.deleteQuestion(id);

        dispatch({type: DELETE_QUESTION, payload: id});
    } catch (error) {
        console.log(error);
    }
}


///////////////////////////////////////////////////////


//QUOTES ACTION CALLS
export const getQuotes = () => async(dispatch) =>{
    try {
        const {data} = await api.fetchQuotes();

        dispatch({ type: FETCH_ALL_QUOTE, payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createQuote = (quote) => async (dispatch) =>{
    try {
        const {data} = await api.createQuote(quote);
        dispatch({type: CREATE_QUOTE, payload: data});
    } catch (error) {
        console.log(error);
    }
}
 
export const updateQuote = (id, quote) => async (dispatch) =>{
    try {
       const {data} = await api.updateQuote(id, quote);

       dispatch({type: UPDATE_QUOTE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteQuote = (id) => async (dispatch) =>{
    try {
        await api.deleteQuote(id);

        dispatch({type: DELETE_QUOTE, payload: id});
    } catch (error) {
        console.log(error);
    }
}

//////////////
//ASK API CALLS
export const createAsk = (ask) => async (dispatch) =>{
    try {
        // const {data} = await api.createAsk(quote);
        await api.createAsk(ask);
        // dispatch({type: CREATE_QUOTE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

////
//HIRE API CALLS
export const createHire = (hire) => async (dispatch) =>{
    try {
        // const {data} = await api.createAsk(quote);
        await api.createHire(hire);
        // dispatch({type: CREATE_QUOTE, payload: data});
    } catch (error) {
        console.log(error);
    }
}