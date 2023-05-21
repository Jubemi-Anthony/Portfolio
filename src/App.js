import './App.css';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom"

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Quotes from './pages/Quotes/Quotes';
import Questions from './pages/Questions/Questions';
import Projects from './pages/Projects/Projects';
import Imagine from './pages/Imagine/Imagine';
import Post from './pages/Blog/Post/Post';
import Answer from './pages/Questions/Answer';

import StaticDisplay from './components/RightSide/StaticDisplay';

import Register from './admin/Register';
import Login from './admin/Login';
import Create from './admin/Create';
import CreateBlog from './admin/Blog';

import {getBlogs, getProjects, getQuotes, getQuestions} from './actions/posts'

function App() {
  const [change, setChange] = useState(true);

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getBlogs());
    dispatch(getProjects());
    dispatch(getQuotes());
    dispatch(getQuestions());
  }, [dispatch, change]);

  return (
    <main>
      <div className="dynamic">
        <header><Header/></header>
        <Routes>
          <Route path= "/" element = {<Home/>}/>
          <Route path= "Blog" element = {<Blog setChange={setChange} change={change}/>}/>
          <Route path= {`Post/:id`} element = {<Post/>}/>
          <Route path= "Quotes" element = {<Quotes/>}/>
          <Route path= "Questions" element = {<Questions/>}/>
          <Route path= "Imagine" element = {<Imagine/>}/>
          <Route path= {`Answer/:id`} element = {<Answer/>}/>
          <Route path= "Projects" element = {<Projects  setChange={setChange} change={change}/>}/>
          <Route path='R1E2G3I4S5T6E7R8-mecury' element={<Register/>}/>
          <Route path='L1O2G3I4N5-venus' element={<Login/>}/>
          <Route path='C1R2E3A4T5I6O7N8-mecury' element={<Create/>}/>
          <Route path='C1R2E3A4T5E6B7L8O9G0-mecury' element={<CreateBlog/>}/>
        </Routes>
      </div>
      <div className="static">
        <StaticDisplay/>
      </div>
    </main>
  );
}

export default App;
