import * as React from 'react';
import { useNavigate } from 'react-router-dom';

interface INavBarProps {
}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  const navigate=useNavigate();
  const data = localStorage.getItem('auth');
  // console.log(data)
  const resData=JSON.parse(data || '{}');
  console.log('i m from navbar',resData.newUser)
  const {newUser}=resData;
  const handleLogout=()=>{
    localStorage.removeItem('auth')
    navigate('/login')
  }
  return(
    <div className='navbar'>
        <div className='navBontent'>
            <img src="https://w7.pngwing.com/pngs/782/115/png-transparent-avatar-boy-man-avatar-vol-1-icon-thumbnail.png" alt=""/>
            {/* name of the curret user who is logged in */}
            <span>{newUser?.username}</span> 
            {/* logout function which clears the localstorage and redirect the user to the login page */}
            <button onClick={handleLogout}>Logout</button>
        </div>
    </div>
  );
};

export default NavBar;
