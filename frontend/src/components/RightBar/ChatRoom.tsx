import * as React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectedSelector } from '../../features/selectedSlice';

interface ChatRoomProps {
}

const ChatRoom: React.FunctionComponent<ChatRoomProps> = (props) => {
    const selectedUser=useAppSelector(selectedSelector);
    return (
        <div>
            <div className='header'>
                <div className='headerContent'>
                    <img src="https://w7.pngwing.com/pngs/782/115/png-transparent-avatar-boy-man-avatar-vol-1-icon-thumbnail.png" alt="" />
                    <p>{selectedUser.username}</p>
                </div>
            </div>
        </div>
    )
};

export default ChatRoom;
