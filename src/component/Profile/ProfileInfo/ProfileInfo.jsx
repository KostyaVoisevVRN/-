import React from "react";
import v from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <div className={v.content}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQBz45eDAWB8mf6j0cUg2zh4zOMa3XLlIIFQ&usqp=CAU"></img>
        </div>
        <div className={v.profileInfo}>
          <div>Ava+Description</div>
          <div>
            <h3>New Post</h3>
          </div>
        </div>
        <div className={v.profileInfo}>
          <div>
            <textarea> Первый НАХ!!!</textarea>
          </div>
          <div>
            <button>Add Post</button>
            <button>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
