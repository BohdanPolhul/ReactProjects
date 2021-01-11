import React from 'react';
import  './../Dialog.css';

const MessageItem =(props) =>{
  return <div className="message">
    {props.name}
  </div>
}

export default MessageItem;