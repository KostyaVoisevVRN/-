import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div>
        {props.dialogsData.map((dialog) => {
          return (
            <DialogItem
              name={dialog.name}
              id={dialog.id}
              message={dialog.message}
              key={dialog.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dialogs;
