import './register.scss'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Register = () => {


  const [inputs, setInputs] = useState({username:"",
email:"",
password:"",})
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
                <input type="text" placeholder='Username'></input>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input type="text" placeholder='Name' />
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