import React from 'react';
import { NavLink } from 'react-router-dom';
import  './../Dialog.css';
const DialogItem = (props) =>{
  let path="/dialog/"+props.id
  return <div className='dialog'>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
}
export default DialogItem;