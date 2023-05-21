import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { createHire } from '../../actions/posts';

import './Hire.css';

const Hire = ({close}) => {
    const [hireData, sethireData] = useState({organization: '', note: '', contact: ''});
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(createHire(hireData));
        clear();
    }

    const clear = () =>{
        sethireData({organization: '', note: '', contact: ''});
       close();
    }

  return (
    <div className="Hire">
        <form onSubmit={handleSubmit}>
            <img onClick={close} src="https://cdn2.iconfinder.com/data/icons/funtime-objects-part-2/60/005_055_delete_cross_close_cancel_exit_vote-64.png" alt="cancel" className="icon" />
            <input type="text" placeholder='Name or Name of Organization' value={hireData.organization} onChange={(e) => sethireData({...hireData, organization : e.target.value})}/>
            <input type="text" placeholder='Email or Phone Number' value={hireData.contact} onChange={(e) => sethireData({...hireData, contact : e.target.value})}/>
            <textarea type="text" placeholder='Note to Jubemi' value={hireData.note} onChange={(e) => sethireData({...hireData, note : e.target.value})}/>
            <button type="submit">Submit</button>
            <button onClick={clear}>Clear</button>
        </form>
    </div>
  )
}

export default Hire