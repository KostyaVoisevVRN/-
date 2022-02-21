import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Dialogs.module.css";

const DialogItem = (props) => {

const [state,setState]=React.useState(props.message)

const handleChange=(event)=>{
  console.log(event.target.value);
  setState(event.target.value)
}

const newMessage=()=>{
  alert(state);
}

const clearMessage=()=>{
  setState('');
  
}


    return (
      <div className={s.flex}>
        <div className={s.max}>
        <NavLink to={props.id} className = { navData => navData.isActive ? s.active : s.item }>{props.name} </NavLink>
        
        <div>
        <img src='https://androidlime.ru/wp-content/uploads/2019/01/phone-fraudster.jpg' className={s.image}></img>
        </div>
      </div>
      <textarea  className={s.marginLeft} value={state} onChange={handleChange}/>
      
      
      <button  className={s.marginLeft}onClick={newMessage}>Message</button>
      {state.length>0&&<button  className={s.marginLeft}onClick={clearMessage}>Delete</button>}
      </div>

    )
  }



  export default DialogItem;