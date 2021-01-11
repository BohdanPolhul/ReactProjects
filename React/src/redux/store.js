import messagesPageReducer from "./messagesPage-reducer";
import profilePageReducer from "./profilePage-reducer";
import sidebarsReducer from "./sidebars-reducer";

let UP_DATE_NEW= 'UP-DATE-NEW-POST';
let ADD_POST='ADD-POST';
let UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY';
let SEND_MESSAGE='SEND-MESSAGE';
let store ={
  _state:{
    profilePage:{
        postData:[
            {id:'1',messages:'Hi, how are you?'},
            {id:'2',messages:'What`s up?'},
            {id:'3',messages:'Why?'}                                
          ],
        newPostText:'Hello'                                                       
    },
    messagesPage:{
         messagesData:[
        {id:'1',name:'Hi'},
        {id:'2',name:'How are you?'},
        {id:'3',name:'What`s up?'},
        {id:'4',name:'Do you hungry?'}
      ],
      dialogsData:[
          {id:'1',name:'Dimych'},
          {id:'2',name:'Vasya'},
          {id:'3',name:'Petya'},
          {id:'4',name:'Vanya'},
          {id:'5',name:'Tolya'}
        ],
      newMessageBody:'Hello'     
    
    },
    sidebars:{
      sidebar:[
        {name:'Andrew'},
        {name:'Sasha'},
        {name:'Sveta'}
      ]
    }
   
  },
  getState(){
    return this._state;
  },
  _callBack(){
    console.log('hello');
  },
  
  subscribe(observer){
    this._callBack=observer;
   
  },
  dispatch(action){
    this._state.profilePage = profilePageReducer(this._state.profilePage,action);
    this._state.messagesPage=messagesPageReducer(this._state.messagesPage,action);
    this._state.sidebars=sidebarsReducer(this._state.sidebars,action)
    this._callBack(this._state);
  }
}


export default store;

//store - OOP