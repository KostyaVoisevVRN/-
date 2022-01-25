import React from "react";
import MyPosts from "../Profile/MyPosts/MyPosts.jsx";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo.jsx";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
