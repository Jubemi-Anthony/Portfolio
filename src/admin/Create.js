import { useState } from "react";
import Project from "./adminComponents.js/Project";
import Quote from "./adminComponents.js/Quote";
import Question from "./adminComponents.js/Question";
import { Link } from "react-router-dom";

const Create = () => {
    const [category, setCategory] = useState('');


  return (
    <section className="Create">
        <div className="categories">
            <Link to='/C1R2E3A4T5E6B7L8O9G0-mecury'>
                <p>BLOG</p>
            </Link>
            <button onClick={() => setCategory('PROJECT')}>PROJECT</button>
            <button onClick={() => setCategory('QUOTE')}>QUOTE</button>
            <button onClick={() => setCategory('QUESTION')}>QUESTION</button>
        </div>
        <div>
        {
            category === 'QUESTION' ? (
                <Question/>
            ) : category === 'QUOTE' ? (
                <Quote/>
            ) : (<Project/>)
        }
        </div>
    </section>
  )
}

export default Create