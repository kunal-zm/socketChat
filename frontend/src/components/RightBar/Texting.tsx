import * as React from 'react';
import {useState} from 'react'
import './Right.scss'
interface ITextingProps {
}

const Texting: React.FunctionComponent<ITextingProps> = (props) => {
  const [text,setText]=useState("")


  //on the fire of this event the current user able to send the message and it will be shown to the other user also whom with the current user wansts to chat
  return (
    <>
    </>
  );
};

export default Texting;
