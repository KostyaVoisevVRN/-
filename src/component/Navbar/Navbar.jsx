import React from 'react';
import {NavLink} from 'react-router-dom';
import c from './Navbar.module.css';

const Navbar=()=>{
return ( 
    <nav className={c.nav}>
<div className={c.item}>
    <NavLink to={'profile'} className = { navData => navData.isActive ? c.active : c.item }>Profile</NavLink>
</div>
<div className={c.item}>
    <NavLink to={'dialogs'} className = { navData => navData.isActive ? c.active : c.item }>Message</NavLink>
</div>
<div className={c.item}>
    <a>News</a>
</div>
<div className={c.item}>
    <a>Music</a>
</div>
<div className={c.item}>
    <a>Setting</a>
</div>

    </nav>
)
}

export default Navbar;