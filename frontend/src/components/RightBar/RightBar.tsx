import * as React from 'react';
import Header from './Header';
import Texting from './Texting';
import Messages from './Messages';
// import ChatRoom from './chatRoom';

interface IRightBarProps {
}

const RightBar: React.FunctionComponent<IRightBarProps> = (props) => {
  return (
    <div className='rightBar'>
        <Header/>
        {/* <ChatRoom/> */}
        <Messages/>
        <Texting/>
    </div>
  );
};

export default RightBar;
