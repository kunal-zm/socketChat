import * as React from 'react';
import './Login.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'
interface IRegisterProps {
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
  const [username,setUserName]=React.useState<string>("");
  const [email,setEmail]=React.useState<string>("")
  const [password,setPassword]=React.useState<string>("");
  const navigate=useNavigate()
  type RegisterRes={
    username:string
    email:string
    password:string
  }
  const Register=async(e:any)=>{
    e.preventDefault()
    try{
      const {data}=await axios.post<RegisterRes>('http://localhost:4000/user/add',{
        username,
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
          '<p>Register</p>'
            <form>
                <input type="text" placeholder='Enter your display Name' value={username} onChange={(e)=>setUserName(e.target.value)}/>
                <input type="text" placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='Fill your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={(e)=>Register(e)}>Login</button>
            </form>
            <span>Already A Member? <NavLink to='/login'>Login</NavLink></span>
        </div>
    </div>
  );
};

export default Register;
