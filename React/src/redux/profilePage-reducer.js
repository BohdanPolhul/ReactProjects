let UP_DATE_NEW= 'UP-DATE-NEW-POST';
let ADD_POST='ADD-POST';


let initialState={
    postData:[
        {id:'1',messages:'Hi, how are you?'},
        {id:'2',messages:'What`s up?'},
        {id:'3',messages:'Why?'}                                
      ],
    newPostText:'Hello'                                                       
}
const profilePageReducer=(state=initialState,action)=>{
    
    switch(action.type)
        {
            case ADD_POST:{
              let newPost={
                  id:5,
                  messages: state.newPostText
                };
              return{
                ...state,
                postData:[...state.postData,newPost],
                newPostText:''
              };
              }
            case UP_DATE_NEW:{
                return{
                  ...state,
                  newPostText:action.newText
                };
            }
            default:
                return state;
        }
    
}
export let addPostActionCreator=()=>{
    return{
      type: ADD_POST
    }
  }
  export let updateNewPostActionCreator=(text)=>{
    return {type:UP_DATE_NEW,newText:text}
  }
export default profilePageReducer;
