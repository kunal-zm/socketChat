import * as React from 'react';
import './Home.scss'
import SideBar from '../LeftBar/SideBar';
import RightBar from '../RightBar/RightBar';
interface HomePageProps {
}

const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  return (
    <div className='home'>
      <div className='homeContent'>
        {/* the left side of the chat pannel */}
        <SideBar />
        {/* the right side of the chat pannel */}
        <RightBar />
      </div>
    </div>
  );
};

export default HomePage;
