import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem =(props)=>{
  return (
    <div className={`${s.dialog} ${s.active}`}>
      
          <NavLink to={props.id}>{props.name}</NavLink>
          </div>
  )
}

const Message=(props)=>{
  return(
<div className={s.messagE}>
  {props.message}
  </div>
  )
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div>
        <DialogItem name='Pashok' id='1'/>
        <DialogItem name='Aendry' id='2'/>
        <DialogItem name='Dimych' id='3'/>
        <DialogItem name='Dyadya Ji' id='4'/>
        <DialogItem name='Chipinkose' id='5'/>
        <DialogItem name='Lebovsky' id='6'/>
        <DialogItem name='Gretta' id='7'/>
      </div>
      <div className={s.messages}>
        <Message message='Vremya pokazhet dobro ili net'/>  
        <Message message='Ay Yo Chipincose nam pora v Maskaov siti bratan'/>
        <Message message='Razberyomsya po prihodu,kak priletim nam nuhzen dohod'/>
      </div>
    </div>
  );
};

export default Dialogs;
