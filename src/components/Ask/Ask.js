import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { createAsk } from '../../actions/posts';

import './Ask.css';

const Ask = ({close}) => {
  const [askData, setaskData] = useState({question: '', askedBy: ''});
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();

      dispatch(createAsk(askData));
      clear();
  }

  const clear = () =>{
    setaskData({question: '', askedBy: ''});
    close();
  }

  return (
    <div className="Ask">
        <form onSubmit={handleSubmit}>
            <img onClick={close} src="https://cdn2.iconfinder.com/data/icons/funtime-objects-part-2/60/005_055_delete_cross_close_cancel_exit_vote-64.png" alt="cancel" className="icon" />
            <input type="text" placeholder='Question' value={askData.question} onChange={(e) => setaskData({ ...askData, question: e.target.value})}/>
            <input type="text" placeholder='Asked By....'  value={askData.askedBy} onChange={(e) => setaskData({ ...askData, askedBy: e.target.value})}/>
            <button type="submit">Submit</button>
            <button onClick={clear}>Clear</button>
        </form>
    </div>
  )
}

export default Ask