import {useState} from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createQuote } from '../../actions/posts';

const Quote = () => {
  const [quoteData, setquoteData] = useState({ quote: '', author: '', image: ''});
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();

      dispatch(createQuote(quoteData));

      clear();
  }

  const clear = () =>{
    setquoteData({ quote: '', image: '', author: ''});
  }
  
  return (
    <section className="createQuote">
        <h4 className='createdh4'>Create Quote</h4>
        <form onSubmit={handleSubmit} className='created'>
            <textarea name="quote" placeholder='Quote' cols="30" rows="8" value={quoteData.quote} onChange={(e) => setquoteData({ ...quoteData, quote: e.target.value })}/>
            <input type="text" placeholder='Author' value={quoteData.author} onChange={(e) => setquoteData({ ...quoteData, author: e.target.value})}/>
            <input type="text" placeholder='Image Link?' value={quoteData.image} onChange={(e) => setquoteData({ ...quoteData, image: e.target.value })}/>
            <div className="fileInput">
              <FileBase className= 'file' type= 'file' multiple={false} onDone={({base64}) => setquoteData({...quoteData, image: base64})}/>
            </div>
            <button>Submit</button>
            <button onClick={clear}>Clear</button>
        </form>
    </section>
  )
}

export default Quote