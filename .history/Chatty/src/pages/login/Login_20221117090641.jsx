import './login.scss'
import {Link, useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { useState } from 'react';

const Login = () => {

  const {login} = useContext(AuthContext);

  const [err, setErr] = useState(null);

  const navigate = useNavigate

  const handleLogin = async (e) => {
    e.preventDefault()
    try{
      await login(inputs);
    } catch(err) {
        setErr(err.response.data);
      }
    }


  const [inputs, setInputs] = useState({
    username:"",
    password:"",});
    
    
    const handleChange = (e) => {

      setInputs(prev=> ({...prev,[e.target.name]: e.target.value}))
    };

  return (
    <div className='login'>
       <div className='card'>
        <div className='left'>
            <h1>
                Let's Chat!
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Ipsam delectus doloremque perspiciatis veritatis aliquid saepe? 
                 Voluptate a, nobis ullam voluptatem, similique molestias rerum eius optio voluptates nam magnam autem officiis.
            </p>
            <span>Don't have an account?</span>
            <Link to='/register'>
            <button>Register</button>
            </Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='Username' name='username' onChange={handleChange}></input>
                <input type="password" placeholder='Password'  name='password' onChange={handleChange}/>
                {err && err}
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
       </div>
        

    </div>
  );
};

export default Login