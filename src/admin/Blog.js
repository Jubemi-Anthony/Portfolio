import {useState} from 'react'
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createBlog } from '../actions/posts';
// import { useSelector } from 'react-redux';

const CreateBlog = () => {
  const [blogData, setBlogData] = useState({ author: '', title: '', post: '', tag: '', image: '', upVote: 0, downVote: 0, date: new Date()});
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();

      setBlogData({...blogData, date: new Date()})
      dispatch(createBlog(blogData));

      clear();
  }

  const clear = () =>{
    setBlogData({ author: '', title: '', post: '', tag: '', image: '', date: new Date()});
  }
  
  return (
    <section className="createProject">
        <h4 className='createdh4'>Create Blog</h4>
        <form onSubmit={handleSubmit} className='created'>
            <input type="text" placeholder='Title'  value={blogData.title} onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}/>
            <textarea name="about" placeholder='Blog Content' cols="30" rows="25" value={blogData.post} onChange={(e) => setBlogData({ ...blogData, post: e.target.value })}/>
            <input type="text" placeholder='Tags'value={blogData.tag} onChange={(e) => setBlogData({ ...blogData, tag: e.target.value.toLowerCase()})} />
            <input type="text" placeholder='Author'  value={blogData.author} onChange={(e) => setBlogData({ ...blogData, author: e.target.value })}/>
            <input type="text" placeholder='Author'  value={blogData.upVote} onFocus={(e) => setBlogData({ ...blogData, upVote: e.target.value })}/>
            <input type="text" placeholder='Author'  value={blogData.downVote} onFocus={(e) => setBlogData({ ...blogData, downVote: e.target.value })}/>
            <input type="text" placeholder='Image Link?'  value={blogData.image} onChange={(e) => setBlogData({ ...blogData, image: e.target.value })}/>
            <div className="fileInput">
              <FileBase className= 'file' type= 'file' multiple={false} onDone={({base64}) => setBlogData({...blogData, image: base64})}/>
            </div>
            <button>Submit</button>
            <button onClick={clear}>Clear</button>
        </form>
    </section>
  )
}

export default CreateBlog