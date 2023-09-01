import * as React from 'react';
import { useState } from 'react';
import axios from 'axios'
import { useAppDispatch } from '../../app/hooks';
import { SelectedOne } from '../../features/selectedSlice';
import { combinedIddata } from '../../features/combineIdSlice';
interface IChatPeopleProps {
}

const ChatPeople: React.FunctionComponent<IChatPeopleProps> = (props) => {
  const [users, setUsers] = useState([]);
  const disptach = useAppDispatch();
  const data = localStorage.getItem('auth');
  // console.log(data)
  const resData = JSON.parse(data || "{}");
  console.log('i m from navbar', resData.newUser)
  const { newUser } = resData;
  console.log(newUser?._id)
  React.useEffect(() => {
    getAllUser();
  }, [])
  const getAllUser = async () => {
    try {
      const { data } = await axios.get('http://localhost:4000/user/all-users')
      setUsers(data.data)
    } catch (err) {
      console.log(err)
    }
  }
  // console.log(users)
  const handleClick = (user: any) => {
    const { _id, username } = user;
    console.log(_id)
    disptach(SelectedOne({ _id, username }));
    const combineId = newUser?._id > _id ? newUser?._id + _id : _id + newUser?._id;
    disptach(combinedIddata(combineId));
    console.log(combineId);
  }


  return (
    // it will display the list of the user present in the db and the on click the combine id will be formed
    <div className='chatpeople'>
      {users.map((user: any) => {
        return <div className='searchData' key={user?._id} onClick={() => handleClick(user)}>
          <img src="https://w7.pngwing.com/pngs/782/115/png-transparent-avatar-boy-man-avatar-vol-1-icon-thumbnail.png" alt="" />
          <div className='messageSearch'>
            <p>{user.username}</p>
            <span>Last message</span>
          </div>
        </div>
      })}
    </div>
  );
};

export default ChatPeople;
