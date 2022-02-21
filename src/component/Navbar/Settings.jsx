import React from 'react';
import z from './Settings.module.css';
const Settings=()=>{
    return(
        <div className={z.setting}>
<ul>
    <li>Private Setting</li>
    <li>Change the Topic</li>
    <li>Profile Setting</li>
    <li>Edit Profile</li>
    <li>EXIT</li>
</ul>
        </div>
    )
}


export default Settings;
