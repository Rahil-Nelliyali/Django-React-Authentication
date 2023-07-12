import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser} from '../redux/AuthContext'
import './LoginPage.css'
import { useEffect } from 'react'
import login from '../helpers/auth';
import { updateAuthToken,updateUser } from '../redux/AuthContext';
import jwt_decode from "jwt-decode"
import { getLocal } from "../helpers/auth";
import { Toaster } from 'react-hot-toast';

function LoginPage() {
    const history = useNavigate()
    const dispatch = useDispatch()
    
    useEffect(()=>{
        // console.log(response);
        const response = getLocal();
        if (response) {
          history('/')
        }
      })

      const handleSubmit = async(e)=> {
        e.preventDefault()
        const response = await login(e);
        if (response){
          history('/')
        }
        const decoded = jwt_decode(response.access)
        dispatch(updateUser(decoded));
        dispatch(updateAuthToken(response))
      }
    
  return (
    <div className="main">
    <Toaster position='top-center' reverseOrder='false' ></Toaster>

    <form className="form" onSubmit={handleSubmit}>
      <div className="title">
        Welcome,<br />
        <span>Login to continue</span>
      </div>
      <input type="email" placeholder="Email" name="username" className="input" />
      <input type="password" placeholder="Password" name="password" className="input" />
      <input type="submit" value='LOGIN' className="button-confirm" />

     
      <p>Not yet registered..?</p>

      <p><Link className='button-confirm' to='/signup'>SignUp →</Link></p>

    </form>
    </div>
  );
}

export default LoginPage;
