import React from "react";
import g from "./MyPosts.module.css";
import Post from "../MyPosts/Posts/Post.jsx";

const MyPosts = () => {
  return (
    <div className={g.postBlock}>
      <Post message="hello,how are you?" like="Like-12" />
      <Post message="i learn javaScript" like="Like-23" />
      <Post message="Whats up?" like="Like-83" />
      <Post message="oooo my dog" like="Like-25" />
      <Post message="what you say BIG SMOCE?" like="Like-97" />
    </div>
    
  );
};

export default MyPosts;
