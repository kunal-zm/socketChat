import * as React from 'react';
import './Login.scss'
import {NavLink, useNavigate} from 'react-router-dom';
import axios from 'axios';
interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = () => {
  const navigate=useNavigate();
  const [email,setEmail]=React.useState<string>("");
  const [password,setPassword]=React.useState<string>("");
  type loginRes={
    email:string,
    password:string,
  }
  const login=async(e:any)=>{
    e.preventDefault()
    try{
      const {data}=await axios.post<loginRes>('http://localhost:4000/user/login',{
        email,
        password
      })
      localStorage.setItem('auth',JSON.stringify(data));
      navigate('/')
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='login'>
        <div className='content'>
          '<p>Login</p>'
            <form>
                <input type="text" placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='Fill your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={(e)=>login(e)}>Login</button>
            </form>
            <span>New Member? <NavLink to='/register'> Register</NavLink></span>
        </div>
    </div>
  );
};

export default Login;
