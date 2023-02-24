import axios from 'axios'; 

const url = 'https://portfolio-backend-vlrp.onrender.com/routes';

//CREATE API CALLS HERE AND EXPORT THEM, YOU'LL LATER USE THEM IN THE ACTIONS

//API CALLS FOR BLOGS
export const fetchBlogs = () => axios.get(url);
export const createBlog = (newBlog) => axios.post(url, newBlog);
export const updateBlog = (id, updatedBlog) => axios.post(`${url}/${id}`, updatedBlog);
export const deleteBlog = (id) => axios.delete(`${url}/${id}`);
export const likeBlog = (id) => axios.post(`${url}/${id}/likeBlog`);
export const downlikeBlog = (id) => axios.post(`${url}/${id}/downlikeBlog`);

//API CALLS FOR PROJECTS
export const fetchProjects = () => axios.get(`${url}/project`);
export const createProject = (newProject) => axios.post(`${url}/project`, newProject);
export const updateProject = (id, updatedProject) => axios.post(`${url}/project${id}`, updatedProject);
export const deleteProject = (id) => axios.delete(`${url}/project${id}`);
export const likeProject = (id) => axios.post(`${url}/project${id}/likeProject`);
export const downlikeProject = (id) => axios.post(`${url}/project${id}/downlikeProject`);

//API CALLS FOR QUESTIONS
export const fetchQuestions = () => axios.get(`${url}/question`);
export const createQuestion = (newQuestion) => axios.post(`${url}/question`, newQuestion);
export const updateQuestion = (id, updatedQuestion) => axios.post(`${url}/updatequestion${id}`, updatedQuestion);
export const deleteQuestion = (id) => axios.delete(`${url}/question${id}`);

//API CALLS FOR QUOTES
export const fetchQuotes = () => axios.get(`${url}/quote`);
export const createQuote = (newQuote) => axios.post(`${url}/quote`, newQuote);
export const updateQuote = (id, updatedQuote) => axios.post(`${url}/quote${id}`, updatedQuote);
export const deleteQuote = (id) => axios.delete(`${url}/quote${id}`);

//API CALLS FOR 'ASK'
export const createAsk = (newAsk) => axios.post(`${url}/ask`, newAsk);

//API CALLS FOR 'HIRE'
export const createHire = (newHire) => axios.post(`${url}/hire`, newHire);
