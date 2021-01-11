let UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY';
let SEND_MESSAGE='SEND-MESSAGE';

let initialState={
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

}
const messagesPageReducer=(state=initialState,action)=>{
   
    
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
              return{
                ...state,
                newMessageBody:action.body
            };
            
            
        
        case SEND_MESSAGE:
            
            let body =state.newMessageBody;
            return{
              ...state,
              newMessageBody:'',
              messagesData:[...state.messagesData,{id:5,name:body}]
            };            
            
        
        default:
            return state;
        
    }
    

    
}
export let sendMessageCreator=()=>{
    return{
      type:SEND_MESSAGE
    }
  }
  export let updateNewMessageBody=(body)=>{
    return {type:UPDATE_NEW_MESSAGE_BODY,body:body}
  }
export default messagesPageReducer;