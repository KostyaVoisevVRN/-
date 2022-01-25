import React from "react";
import g from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={g.item}>
      <img src="https://stickers.wiki/static/stickers/muichirotokito_by_fstikbot/file_252146.webp?ezimgfmt=rs:134x134/rscb1/ng:webp/ngcb1"></img>
      <div>{props.message}</div>
      <div>{props.like}</div>
    </div>
  );
};

export default Post;
