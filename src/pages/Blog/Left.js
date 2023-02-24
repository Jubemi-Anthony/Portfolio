import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Left = ({post, id, setChange, change, upVote, downVote}) => {

  const dispatch = useDispatch();
  const Increase = (id) =>{
    dispatch(upVote(id));
    setChange(!change)
  }
  const Decrease = (id) =>{
    dispatch(downVote(id));
    setChange(!change)
  }
  
  return (
    <div id='bnb' className="left">
        <button onClick={()=> Increase(id)}><img className='icon' src="https://cdn1.iconfinder.com/data/icons/arrows-447/64/1_arrow_arrows_up_direction_arrow_up-11-64.png" alt="up" /> {post.upVote}</button>
        <button onClick={()=> Decrease(id)}><img className='icon-2' src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/42-64.png" alt="down" /> {post.downVote}</button>
    </div>
  )
}

export default Left