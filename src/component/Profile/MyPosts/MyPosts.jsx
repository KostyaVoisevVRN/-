import React from "react";
import g from "./MyPosts.module.css";
import Post from "../MyPosts/Posts/Post.jsx";

const MyPosts = (props) => {
  return (
    <div className={g.postBlock}>
      {props.postData.map((posts) => {
        return (
          <Post message={posts.post} like={posts.like} window={props.window} />
        );
      })}
    </div>
  );
};

export default MyPosts;
