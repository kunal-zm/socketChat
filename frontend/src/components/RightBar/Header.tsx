import * as React from 'react';
import './Right.scss'
import { useAppSelector } from '../../app/hooks';
import { selectedSelector } from '../../features/selectedSlice';
interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const selectedUser=useAppSelector(selectedSelector);
  return (
    <div className='header'>
        <div className='headerContent'>
        <img src="https://w7.pngwing.com/pngs/782/115/png-transparent-avatar-boy-man-avatar-vol-1-icon-thumbnail.png" alt=""/>
        <p>{selectedUser.username}</p>
        </div>
    </div>
  );
};

export default Header;
