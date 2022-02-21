import React from "react";
import v from "./ProfileInfo.module.css";
import { addpostActionCreator } from "../../../Redux/State.js";
import { updateNewPostTextactionCreator } from "../../../Redux/State.js";

const ProfileInfo = (props) => {
  console.log(props);
  let newPostElement = React.createRef();
  let addpost = () => {
    let text = newPostElement.current.value;
    props.dispatch(addpostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextactionCreator(text));
  };

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
            <textarea
              onChange={onPostChange}
              ref={newPostElement}
              value={props.newPostText}
            />
          </div>
          <div>
            <button onClick={addpost}>Add Post</button>
            <button>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
