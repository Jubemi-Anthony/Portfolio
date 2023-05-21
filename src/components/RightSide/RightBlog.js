import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';

import Loader from "../loader/Loader";

export default function RightBlog(){
    const blogs = useSelector((state) => state.blogs);
    const rand = Math.floor(Math.random() * blogs.length);
    let sample;
    let id;
    blogs.length > 0 ? sample = blogs[rand].blog : sample = null;
    blogs.length > 0 ? id = blogs[rand].id : id = null;
    
    return(
        <section className="R_Blog">
            {
                sample === null ? (<div className='load'><Loader/></div>) : (
                    <div>
                        <h4>Blog</h4>
                        <div className="blog">
                            <Link to={`/Post/${id}`}><img src={sample.image} alt={sample.title}/></Link>
                            <p>{sample.title}</p>
                            <p>{sample.author}</p>
                            <Link to='/Blog'><p className="linker">More Articles</p></Link>
                        </div>
                    </div>
                )
            }
        </section>
    )
}