import React from 'react';
import s from './sidebar.css';

function Sidebar(){
    return (
              <StoreContext.Consumer>
                {
                  (store)=>{
                let store=store.Sidebar.name;
                  }
                }
              </StoreContext.Consumer>
    )
          

    
}
export default Sidebar;