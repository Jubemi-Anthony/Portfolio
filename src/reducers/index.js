import { combineReducers } from "redux";
import blogs from './blogs';
import projects from './projects';
import quotes from './quotes';
import questions from './questions';
 

export const combinePosts = combineReducers({blogs, projects, quotes, questions});
// export const combineProjects = combineReducers({projects});