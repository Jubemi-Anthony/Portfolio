import {useState} from 'react'
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createProject } from '../../actions/posts';

const Project = () => {
  const [projectData, setProjectData] = useState({ title: '', about: '', language: '', image: '', link: '', author: '', upVote: 0, downVote: 0});
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();

      dispatch(createProject(projectData));

      clear();
  }

  const clear = () =>{
    setProjectData({ title: '', about: '', language: '', image: '', link: ''});
  }

  return (
    <section className="createProject">
        <h4 className='createdh4'>Create Project</h4>
        <form onSubmit={handleSubmit} className='created'>
            <input type="text" placeholder='Title' value={projectData.title} onChange={(e) => setProjectData({ ...projectData, title: e.target.value })}/>
            <textarea name="about" placeholder='About Project' cols="30" rows="8" value={projectData.about} onChange={(e) => setProjectData({ ...projectData, about: e.target.value })}/>
            <input type="text" placeholder='Languages Used' value={projectData.language} onChange={(e) => setProjectData({ ...projectData, language: e.target.value.split(',')})}/>
            <input type="text" placeholder='Link' value={projectData.link} onChange={(e) => setProjectData({ ...projectData, link: e.target.value })}/>
            <input type="text" placeholder='Author' value={projectData.author} onChange={(e) => setProjectData({ ...projectData, author: e.target.value })}/>
            <input type="text" placeholder='upVote' value={projectData.upVote} onChange={(e) => setProjectData({ ...projectData, upVote: e.target.value })}/>
            <input type="text" placeholder='downVote' value={projectData.downVote} onChange={(e) => setProjectData({ ...projectData, downVote: e.target.value })}/>
            <input type="text" placeholder='Image' value={projectData.image} onChange={(e) => setProjectData({ ...projectData, image: e.target.value })}/>
            <div className="fileInput">
              <FileBase className= 'file' type= 'file' multiple={false} onDone={({base64}) => setProjectData({...projectData, image: base64})}/>
            </div>
            <button>Submit</button>
            <button onClick={clear}>Clear</button>
        </form>
    </section>
  )
}

export default Project