import { Link } from 'react-router-dom';
import {useState} from 'react';
import { useDispatch } from 'react-redux';

import './Admin.css';

const Register = () => {
  const [register, setregister] = useState({name: '', email: '', password: ''});
  const [confirm, setConfirm] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{

    if(confirm !== register.password){
      alert("Passwords don't match");
      return;
    }
    e.preventDefault();
    
    clear();
  }

  const clear = () =>{
    setregister({name: '', email: '', password: ''});
  }

  return (
    <section className="Register">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Name" value={register.name} onChange={(e) => setregister({...register, name : e.target.value})} />
            <input type="email" placeholder="Enter Email" value={register.email} onChange={(e) => setregister({...register, email : e.target.value})} />
            <input type="password" placeholder="Enter Password" value={register.password} onChange={(e) => setregister({...register, password : e.target.value})} />
            <input type="password" placeholder="Confirm Password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
            <button type="submit">Register</button>
            <Link to="/L1O2G3I4N5-venus"><p>Have an Account? Login</p></Link>
        </form>
    </section>
  )
}

export default Register