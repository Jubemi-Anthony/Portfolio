import { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useSelector} from 'react-redux';
import { likeBlog, downlikeBlog } from '../../actions/posts';
import { shuffle } from 'lodash';


import './Blog.css'; 
import Left from './Left';
import Loader from '../../components/loader/Loader';

export default function Blog({setChange, change}){
    const scatteredBlogs = useSelector((state) => state.blogs);
    const blogs = shuffle(scatteredBlogs);
    const [searchBlog, setsearchBlog] = useState('');
    
    let loaded;
    blogs.length === 0 ? loaded = false : loaded = true; 

    return(
        <section className="Blog">
            <div className="search">
                <input 
                    type="text"
                    placeholder='Search by Tag or Author'
                    onChange={(e) =>{
                        setsearchBlog(e.target.value);
                    }}
                    value={searchBlog === '' ? '' : searchBlog}
                />
                <img className='icon' src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-64.png" alt="search"/>
            </div>
            <div className="filters">
                <h4>Tap to filter.</h4>
                <div>
                    <button onClick={() => setsearchBlog('Web Development')}>Web Development</button>
                    <button onClick={() => setsearchBlog('Geology')}>Geology</button>
                    <button onClick={() => setsearchBlog('Anatomy')}>Anatomy</button>
                    <button onClick={() => setsearchBlog('Technology')}>Technology</button>
                    <button onClick={() => setsearchBlog('General')}>General</button>
                    <button onClick={() => setsearchBlog('')}>CLEAR</button>
                </div>
            </div>
            <div className="grided">
                {loaded === false ? (<div className='load'><Loader/></div>) : 
                    blogs.filter((blogP) =>{
                        if(searchBlog === ""){
                            return blogP
                        }else if(blogP.blog.title.toLowerCase().includes(searchBlog.toLowerCase()) || blogP.blog.tag.toLowerCase().includes(searchBlog.toLowerCase())){
                            return blogP
                        }
                    }).map((blogP) =>(
                        <div key={blogP.id} className="box">
                            <div className='blogs' key={blogP.id}>
                            <Link to={`/Post/${blogP.id}`}>
                                <img src={blogP.blog.image} alt={blogP.blog.title} />
                            </Link>
                                <div className="details">
                                    <div className="TndD">
                                        <p className={blogP.blog.tag === 'anatomy' ? 'red tag' : blogP.blog.tag === 'web development' ? 'orange tag' : blogP.blog.tag === 'geology' ? 'lemon tag' : blogP.blog.tag === 'technology' ? 'brown tag' : 'general tag'}>{blogP.blog.tag}</p>
                                        <p className='time'>{moment(blogP.blog.date).fromNow()}</p>
                                    </div>
                                    <p className='title'>{blogP.blog.title}</p>
                                </div>
                            </div>
                            <div className="actions">
                            <div id='bnb' className="left">
                                <Left id={blogP.id} post={blogP.blog} setChange={setChange} change={change} upVote={likeBlog} downVote={downlikeBlog}/>
                            </div>
                                <p className="author-11" >{blogP.blog.author}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}