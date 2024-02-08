import { useState } from 'react';
import { useSelector} from 'react-redux';
import { likeProject, downlikeProject } from '../../actions/posts';

import Left from '../Blog/Left';
import Loader from '../../components/loader/Loader';
import './Projects.css'; 

export default function Projects({setChange, change}){
    const projects = useSelector((state) => state.projects);
    const [searchProject, setsearchProject] = useState("");

    projects.map((project)=>{
        console.log(project.project.language, project.project.title);
    })
    let loaded;
    projects.length === 0 ? loaded = false : loaded = true;
 
    return(
        <section className="Projects">
            <div className="search">
                <input 
                    type="text"
                    placeholder='Enter name of Project or associated tags'
                    onChange={(e) =>{
                        setsearchProject(e.target.value);
                    }}
                />
                <img className='icon' src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-64.png" alt="search"/>
            </div>
            <div className="project-grid">
                {loaded === false ? (<Loader/>) :
                    projects.filter((project) =>{
                        if(searchProject === ""){
                            return project
                        }else if(project.project.title.toLowerCase().includes(searchProject.toLowerCase()) || project.project.language.toString().toLowerCase().includes(searchProject.toLowerCase())){
                            return project;
                        }
                    }).map((project) =>(
                        <div key={project.id} className="project-box">
                            <div className="project">
                                <a target='blank' href={project.project.link}>
                                    <img src={project.project.image} alt="Project" />
                                </a>
                                <div className="project-details">
                                    <div>
                                        <p className='title'>{project.project.title}</p>
                                        <p className='about'>{project.project.about}</p>
                                    </div>
                                    <div className="project-tags">
                                        {
                                            project.project?.language.map((language)=> (<p>#{language}</p>))
                                        }
                                    </div>
                                </div>
                                <div className="project-actions">
                                    <Left id={project.id} post={project.project}  setChange={setChange} change={change} upVote={likeProject} downVote={downlikeProject}/>
                                    <p className="author-11" >{project.project.author}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}