import React from 'react';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';
class Users extends React.Component {
   constructor(props){
       super(props);
        if(this.props.users.length===0){
                axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
                    this.props.setUsers(response.data.items);
                });
                }

   }

   render() {
    return <div>
    {
    this.props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small!=null ? u.photos.small : userPhoto} />
                    </div>
                    <div>
                        
                        {u.followed
                            ?<button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>
                            :<button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)

   }
   </div>
   }
}

    /*{id:1,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsbtw1-RzvNvbf4a83X4u--T4n_LghejYwg&usqp=CAU',followed:false,fullName:'Ivan',status:'I`m a boss',location:{city:'Minsk',country:'Belarus'}},
            {id:2,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsbtw1-RzvNvbf4a83X4u--T4n_LghejYwg&usqp=CAU',followed:true,fullName:'Petya',status:'I`m a boss too',location:{city:'London',country:'English'}},
            {id:3,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsbtw1-RzvNvbf4a83X4u--T4n_LghejYwg&usqp=CAU',followed:false,fullName:'Julia',status:'I`m a boss too',location:{city:'Kiev',country:'Ukranian'}}
    */
   
    

export default Users;