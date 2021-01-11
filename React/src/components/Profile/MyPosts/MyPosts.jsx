import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profilePage-reducer';
import './MyPosts.css';
import Post from './Post/Post';
function MyPosts(props){
  let messagesElements=props.postData.map(m=><Post message={m.messages}/>);
  let newPostElement=React.createRef();
  let alerts=()=>{
    
    props.addPost();
    
  }
  let onChange=()=>{
    let text =newPostElement.current.value;
    
    props.updateNewPostText(text);

  }
    return <div>
      <div>
        My Posts
      </div>
      <div>
        <textarea onChange={onChange} name="text" id="" cols="30" rows="2" ref={newPostElement} value={props.newPostText}/>
      </div>
      <div>
      <button onClick={alerts}>Add post</button>
      </div>
      <div >
        {messagesElements}
      </div>
      </div>
}
export default MyPosts;