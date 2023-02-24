import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';

import Loader from '../../components/loader/Loader';

const Answer = () => {
  const {id} = useParams();
  const questions = useSelector((state) => state.questions);

  let loaded;
  questions.length === 0 ? loaded = false : loaded = true;

  let answer;
  questions.filter((question) => {
    if (question.id === id){
      answer = question.question;
    }
  })

  if(answer === null){
    loaded = false;
  }

  return (
    <section className="Answer">
        {loaded === false ? (<Loader/>) : (
          <div>
            <div className="up">
              <p>Question Source: {answer.source}</p>
              <p>Question Category: {answer.tag}</p>
              <p>Answered By: {answer.answeredBy}</p>
            </div>
            <div className="answer">
                <h4>Question</h4>
                <p>{answer.question}?</p>
            </div>
            <div className="answer">
                <h4>Answer</h4>
                <p>{answer.answer}</p>
            </div>
          </div>
        )}
    </section>
  )
}

export default Answer