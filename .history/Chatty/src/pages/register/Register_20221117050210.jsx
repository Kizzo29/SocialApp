import './register.scss'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Register = () => {


  const [inputs, setInputs] = useState({
username:"",
email:"",
password:"",
name:""})

const
  return (
    <div className='register'>
       <div className='card'>
        <div className='left'>
            <h1>
                Chatty Social.
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Ipsam delectus doloremque perspiciatis veritatis aliquid saepe? 
                 Voluptate a, nobis ullam voluptatem, similique molestias rerum eius optio voluptates nam magnam autem officiis.
            </p>
            <span>Already have an account?</span>
            <Link to='/login'>
              <button>Login</button>
              </Link>
        </div>
        <div className="right">
            <h1>Register</h1>
            <form>
                <input type="text" placeholder='Username' name='username' onChange={handleChange}></input>
                <input type="email" placeholder='Email' name='email' onChange={handleChange}/>
                <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
                <input type="text" placeholder='Name' name='name' onChange={handleChange}/>
                <Link to='/login'>
                <button>Register</button>
                </Link>
            </form>
        </div>
       </div>
        

    </div>
  )
}

export default Register