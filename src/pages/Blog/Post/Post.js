import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { likeBlog, downlikeBlog } from '../../../actions/posts';

import './Post.css';
import Loader from '../../../components/loader/Loader';

const Post = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const blogs = useSelector((state) => state.blogs);
  let post;

  let loaded;
  blogs.length === 0 ? loaded = false : loaded = true;

  blogs.filter((blog) => {
    if (blog.id === id){
      post = blog.blog;
    }
  })

  if(post === null){
    loaded = false;
  }
  
  return (
    <section className="Post">
        <div className="container">
         {loaded === false ? (<Loader/>) : (
            <div>
              <div className="top-part">
                <h2>{post.title}</h2>
                <p>By &nbsp; <span className='author-11'>{post.author}</span></p>
              </div>
              <div className="middle-part">
                  <p>{post.post}</p>
              </div>
              <div className="down-part">
              <div id='bnb' className="left">
                  <button onClick={()=> dispatch(likeBlog(post._id))}><img className='icon' src="https://cdn1.iconfinder.com/data/icons/arrows-447/64/1_arrow_arrows_up_direction_arrow_up-11-64.png" alt="up" /> {post.upVote}</button>
                  <button onClick={()=> dispatch(downlikeBlog(post._id))}><img className='icon-2' src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/42-64.png" alt="down" /> {post.downVote}</button>
              </div>
                  <p className={post.tag === 'Web Dev' ? 'orange tag' : 'lemon tag'}>{post.tag}</p>
              </div>
            </div>
         )}
        </div>
    </section>
  )
}

export default Post