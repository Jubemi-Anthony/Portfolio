import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { createQuestion } from '../../actions/posts';


const Question = () => {
  const [questionData, setquestionData] = useState({ question: '', source: '', answer: '', answeredBy: '', tag: ''});
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();

      dispatch(createQuestion(questionData));

      clear();
  }

  const clear = () =>{
    setquestionData({ question: '', source: '', answer: '', answeredBy: '', tag: ''});
  }

  return (
    <section className="createQuestion">
        <h4 className='createdh4'>Create Question</h4>
        <form onSubmit={handleSubmit} className='created'>
            <input type="text" placeholder='Question' value={questionData.question} onChange={(e) => setquestionData({ ...questionData, question: e.target.value})}/>
            <textarea name="about" placeholder='Answer' id="" cols="30" rows="5" value={questionData.answer} onChange={(e) => setquestionData({ ...questionData, answer: e.target.value})}/>
            <input type="text" placeholder='Source' value={questionData.source} onChange={(e) => setquestionData({ ...questionData, source: e.target.value})}/>
            <input type="text" placeholder='Answered By...' value={questionData.answeredBy} onChange={(e) => setquestionData({ ...questionData, answeredBy: e.target.value})}/>
            <input type="text" placeholder='Tag' value={questionData.tag} onChange={(e) => setquestionData({ ...questionData, tag: e.target.value})}/>
            <button>Submit</button>
            <button onClick={clear}>Clear</button>
        </form>
    </section>
  )
}

export default Question