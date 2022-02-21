import React from "react";
import s from "../Dialogs.module.css";
import { useLocation } from "react-router";

const Message = (props) => {
  const location = useLocation();
  console.log(location);
  return <div className={s.messagE}>{props.message}</div>;
};

export default Message;
