import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import './App.css';
import DialogContainer from './components/Dialog/DialogContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import SCR from './components/SCR/SCR';
import UsersContainer from './components/Users/UsersContainer';
import store from './redux/redux-store';


function App(props) {
  return (
   <BrowserRouter>
      <div className='app-wrapper'>
        
          <Header/>
          <Navbar />
          <div className='app-wrapper-content'>
            <Route path='/profile' render={ () => <Profile />} />

            <Route path='/dialog' render={ () => <DialogContainer />}/>

            <Route path='/users' render={ () => <UsersContainer />}/>

            <Route path='/scr' render={ () => <SCR />}/>
            
          </div>
          
      
      </div>
    </BrowserRouter>

  );
}
export default App;
