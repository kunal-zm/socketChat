import * as React from 'react';
import './Right.scss'
import { useAppSelector } from '../../app/hooks';
import { combineIdselector } from '../../features/combineIdSlice';
import { WebSocketContext } from '../../context/WebSocketContext';
interface IMessagesProps {
}

const Messages: React.FunctionComponent<IMessagesProps> = (props) => {
  //here we had to display all the message
  const socket=React.useContext(WebSocketContext)
  const combineId=useAppSelector(combineIdselector);
  console.log("id",combineId.combineId)
  const [value,setValue]=React.useState('')
  type messagePayload={
    content:string,
    msg:string
  }
 
  const [messages, setMessages] = React.useState<messagePayload[]>([])
  React.useEffect(() => {
    socket.on('connect', () => {
        console.log('connected')
    })
    const res=`${combineId.combineId}SUBSCRIBE`
    console.log('id***',res)
    socket.on(res, (data: messagePayload) => {
        console.log('onMessage event receiveed')
        console.log("from backend",data)
        setMessages((prev) => [...prev, data])
    })
    return () => {
        console.log('Unregistring the events..........')
        socket.off('connect');
        socket.off(res)
    }
}, [combineId.combineId,socket])
console.log(messages);
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    console.log(value)
    socket.emit('newMessage', { combineId, value });
    setValue('');
}
  return (
    <div>
    <div className='messages'>
      <div className='messgeContent'>
        {messages.length === 0 ? <div>No messages</div> : <div>{messages.map((msg) => <p>{msg.content}</p>)}</div>}
      </div>
    </div>
    <div className='texting'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Send a message' value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Send</button> {/* Change the button type to "submit" */}
      </form>
    </div>
  </div>
  );
};

export default Messages;
