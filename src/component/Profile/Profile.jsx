import React from "react";
import MyPosts from "../Profile/MyPosts/MyPosts.jsx";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo dispatch={props.dispatch} newPostText={props.newPostText} />
      <MyPosts postData={props.postData} window={props.window} />
    </div>
  );
};

export default Profile;
