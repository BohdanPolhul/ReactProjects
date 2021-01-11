import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.css';


function Navbar(){
    //let SidebarElements=store.sidebar.map(s=><Sidebar name={s.name}/>);
    return (
    <nav className={s.nav}>
      <div  className={s.item}>
        <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={'${s.item} ${s.active}'}>
        <NavLink to='/dialog' activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <a>News</a>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
      <div className={s.item} className="SettingPadding">
        <a>Settings</a>
      </div>
      <div className="padding">
      <NavLink to='/users' >Friends</NavLink>
      </div>
       
  </nav>
    );
}
export default Navbar;