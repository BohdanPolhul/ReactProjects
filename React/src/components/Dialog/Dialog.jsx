import React from 'react';

import  './Dialog.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
function Dialog(props){
  let state=props.messagesPage;
  let dialogsElements=state.dialogsData.map(d=><DialogItem name={d.name} id={d.id}/>);
  let messagesElements=state.messagesData.map(m=><MessageItem name={m.name}/>);

  let newMessageBody= state.newMessageBody;
  let alerts=()=>{
    props.sendMessage();
  }
  let onChange=(e)=>{
    let body=e.target.value;
    props.updateNewMessageBody(body);
  }
    return (
      <div>
        <div className="dialogs">
          <div className="dialogs-items">
          {dialogsElements }
          </div>
          <div className="messages">
          {messagesElements}
          <div><textarea value={newMessageBody} onChange={onChange} name="" id="" cols="30" rows="2" placeholder="Enter word:"></textarea></div>
          <div ><button onClick={alerts}>OnClick</button></div>
          </div>
          
        </div>
      </div>
    );
}
export default Dialog;