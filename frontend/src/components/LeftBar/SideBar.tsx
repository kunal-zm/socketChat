import * as React from 'react';
import Search from './Input';
import NavBar from './Navbar';
import ChatPeople from './ChatPeople';

interface ISideBarProps {
}

const SideBar: React.FunctionComponent<ISideBarProps> = (props) => {
  return (
    <div className='sidebar'>
      
      <NavBar/>
      {/* we will see the search after chat application is completed */}
        <Search/> 
        <ChatPeople/>
    </div>
  );
};

export default SideBar;
