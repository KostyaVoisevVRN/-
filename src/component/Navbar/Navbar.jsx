import React from 'react';
import {NavLink} from 'react-router-dom';
import c from './Navbar.module.css';
import Friends from './Friends.jsx';

const Navbar=()=>{
    
    
return ( 
    <nav className={c.nav}>
<div>
    <NavLink to={'profile'} className = { navData => navData.isActive ? c.active : c.item }>Profile</NavLink>
</div>
<div>
    <NavLink to={'dialogs'} className = { navData => navData.isActive ? c.active : c.item }>Message</NavLink>
</div>
<div>
    <NavLink to={'news'} className = { navData => navData.isActive ? c.active : c.item }>News</NavLink>
</div>
<div>
<NavLink to={'music'} className = { navData => navData.isActive ? c.active : c.item }>Music</NavLink>
</div>
<div >
<NavLink to={'settings'} className = { navData => navData.isActive ? c.active : c.item }>Setting</NavLink>
</div>
    <div className={c.friends}> 
        <span className={c.color}>
        Friends 18
        </span>
            <div className={c.friend}> 
            <Friends/>
            </div>
    </div>
 </nav>
)
}

export default Navbar;