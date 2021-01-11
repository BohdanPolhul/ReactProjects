import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profilePage-reducer';
import MyPosts from './MyPosts';

let mapStateToProps =(state)=>{
  return {
    postData:state.profilePage.postData,
    newPostText:state.profilePage.newPostText
  }
}
let mapDispatchToProps=(dispatch)=>{
  return {
    updateNewPostText:(text)=>{
      let action=updateNewPostActionCreator(text);
                
      dispatch(action);
    },
    addPost:()=>{
      dispatch(addPostActionCreator());
    }
  }
}
const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;