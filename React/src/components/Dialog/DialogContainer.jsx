import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBody } from '../../redux/messagesPage-reducer';
import Dialog from './Dialog';

let mapStateToProps =(state)=>{
  return {
    messagesPage:state.messagesPage
  }
}
let mapDispatchToProps=(dispatch)=>{
  return {
    updateNewMessageBody:(body)=>{
      dispatch(updateNewMessageBody(body));
    },
    sendMessage:()=>{
      dispatch(sendMessageCreator());
    }
  }
}
const DialogContainer=connect(mapStateToProps, mapDispatchToProps)(Dialog);
export default DialogContainer;