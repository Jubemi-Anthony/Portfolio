import {useState} from 'react';
import { useDispatch } from 'react-redux';

import './Admin.css';
 
const Login = () => {
  const [login, setlogin] = useState({email: '', password: ''});
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    clear();
  }

  const clear = () =>{
    setlogin({email: '', password: ''});
  }

  return (
    <section className="register">
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter Email" value={login.email} onChange={(e) => setlogin({...login, email : e.target.value})} />
        <input type="password" placeholder="Enter Password" value={login.password} onChange={(e) => setlogin({...login, password : e.target.value})} />
        <button type="submit">Login</button>
      </form>
    </section>
  )
}

export default Login